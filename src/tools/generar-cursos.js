// tools/generar-cursos.js
// Genera src/data/cursos.ts a partir de "prerrequisitos borrador.xlsx"
// Lee la hoja "PUBLICAR" (Nombre, Cod 2021, Prerrequisitos) y mapea
// los semestres usando tu malla 2021.

const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// === Config ===
const EXCEL_PATH = path.resolve("prerrequisitos borrador.xlsx");
const SHEET_NAME = "PUBLICAR"; // hoja del Excel

// Malla 2021 por semestres (nombres como aparecen en tu plan)
const PLAN_SEMESTRES = [
  // 1
  ["Introducción al Cálculo","Introducción al Álgebra","Introducción a la Ingeniería","Dibujo de Ingeniería","Química General","Métodos de Estudio"],
  // 2
  ["Calculo I","Algebra I","Programación","Economía General","Taller de programación (Matlab Symulink)","Introducción a la Electricidad y Robótica"],
  // 3
  ["Calculo II","Física I","Ecuaciones Diferenciales","Taller de Proyecto","Redes Eléctricas I","Emprendimiento I"],
  // 4
  ["Física II","Termodinámica","Ingeniería de Proyectos","Normativa legal y especialidad","Ingles I","Redes eléctricas II","Practica profesional I"],
  // 5
  ["Probabilidad y estadística","Tópicos matemáticos","Mecánica de sólidos y fluidos","Redes eléctricas III","Ingles II","Hito de Evaluación I"],
  // 6
  ["Métodos numéricos","Campos electromagnéticos","Electrónica I","Sistemas digitales","Fundamentos de evaluación de proyectos","Administración y dirección de proyectos de mantenimiento"],
  // 7
  ["Análisis de señales y sistemas","Electrónica II","Instrumentación industrial","Operación y mantenimiento industrial","Conversión electromagnética de la energía","Emprendimiento II"],
  // 8
  ["Diseño y gestión de programación de operación y mantenimiento","Control automático","Teoría de comunicaciones","Sistemas de energía eléctrica","Taller de proyectos eléctricos de nuevas energías","Mención electiva I","Práctica profesional II"],
  // 9
  ["Mención electiva II","Mención electiva III","Mención electiva IV","Mención electiva V"],
  // 10
  ["Hito de evaluación III"],
];

// === Utilidades ===
const stripAccents = (s) =>
  (s ?? "").normalize("NFD").replace(/\p{Mn}/gu, "").trim();

const norm = (s) =>
  stripAccents(String(s).toUpperCase()).replace(/\s+/g, " ");

function buildSemesterIndex() {
  const map = new Map();
  PLAN_SEMESTRES.forEach((sem, i) => {
    sem.forEach((nombre) => map.set(norm(nombre), i + 1));
  });
  return map;
}

const SEM_BY_NAME = buildSemesterIndex();

// === Leer Excel ===
if (!fs.existsSync(EXCEL_PATH)) {
  console.error(`No se encontró el Excel en: ${EXCEL_PATH}`);
  process.exit(1);
}

const wb = XLSX.readFile(EXCEL_PATH);
const ws = wb.Sheets[SHEET_NAME];
if (!ws) {
  console.error(`No se encontró la hoja "${SHEET_NAME}" en el Excel.`);
  process.exit(1);
}

// Pasar a JSON "fila por fila"
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

// El Excel que me compartiste tiene columnas: [A] vacía, [B]=Nombre, [D]=Cod 2021, [F]=Prerrequisitos.
// Buscamos filas con esos datos; ignoramos encabezados.
const cursosRaw = [];
for (const row of rows) {
  const nombre = (row[1] ?? "").toString().trim();
  const codigo2021 = (row[3] ?? "").toString().trim(); // col D (índice 3)
  const prereqRaw = (row[5] ?? "").toString().trim();  // col F (índice 5)

  if (!nombre || /^ASIGNATURA/i.test(nombre)) continue; // saltar encabezado
  if (!codigo2021) continue; // sin código 2021 no sirve para App.tsx

  cursosRaw.push({ nombre, codigo2021, prereqRaw });
}

// Mapa nombre->código (para traducir los prereqs por nombre a códigos)
const NAME_TO_CODE = new Map(
  cursosRaw.map((r) => [norm(r.nombre), r.codigo2021])
);

// Parsear prerequisitos (separadores: coma, /, ;, " y ")
function parsePrereq(text) {
  if (!text) return [];
  const parts = text.split(/,|\/|;|\sy\s/gi).map((s) => s.trim()).filter(Boolean);
  const ids = [];
  for (const p of parts) {
    const code =
      NAME_TO_CODE.get(norm(p)) ||
      p; // si no lo encuentro por nombre, lo dejo tal cual (puedes ajustar)
    if (!ids.includes(code)) ids.push(code);
  }
  return ids;
}

// Construir objetos Curso
const cursos = cursosRaw.map((r) => {
  const semestre = SEM_BY_NAME.get(norm(r.nombre)) ?? 0; // 0 si no está en el plan base
  return {
    id: r.codigo2021,
    nombre: r.nombre,
    semestre,
    creditos: 0,               // no vi columna de créditos en la hoja "PUBLICAR"; si la agregas, la leo
    requisitos: parsePrereq(r.prereqRaw),
  };
});

// (Opcional) Filtramos los que no tienen semestre (quedan en 0) para no romper layout
const cursosFiltrados = cursos.filter((c) => c.semestre > 0);

// Ordenar por semestre y nombre
cursosFiltrados.sort((a, b) =>
  a.semestre !== b.semestre
    ? a.semestre - b.semestre
    : a.nombre.localeCompare(b.nombre, "es")
);

// === Emitir TypeScript ===
const header = `// src/data/cursos.ts (generado automáticamente desde '${path.basename(EXCEL_PATH)}')
export type Curso = {
  id: string;
  nombre: string;
  semestre: number;
  creditos: number;
  requisitos: string[];
};

export const cursos: Curso[] = [
`;

const body = cursosFiltrados
  .map(
    (c) =>
      `  { id: ${JSON.stringify(c.id)}, nombre: ${JSON.stringify(
        c.nombre
      )}, semestre: ${c.semestre}, creditos: ${c.creditos}, requisitos: ${JSON.stringify(
        c.requisitos
      )} },`
  )
  .join("\n");

const footer = `
];

export default cursos;
`;

const out = header + body + footer;

// Aseguramos carpeta y escribimos
const OUT_PATH = path.resolve("src/data/cursos.ts");
fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, out, "utf8");

console.log(`✅ Generado ${OUT_PATH} con ${cursosFiltrados.length} cursos.`);
