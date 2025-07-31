// script.js

const ramos = [
  // 1º AÑO - Semestre 1
  { nombre: "Introducción al Cálculo", codigo: "INMT11", semestre: 1, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Introducción al Álgebra", codigo: "INMT12", semestre: 1, anio: 1, creditos: 7, prerrequisitos: [] },
  { nombre: "Introducción a la Ingeniería", codigo: "INIE17", semestre: 1, anio: 1, creditos: 5, prerrequisitos: [] },
  { nombre: "Dibujo de Ingeniería", codigo: "INIE14", semestre: 1, anio: 1, creditos: 3, prerrequisitos: [] },
  { nombre: "Química General", codigo: "INQU15", semestre: 1, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Métodos de Estudio", codigo: "IEED18", semestre: 1, anio: 1, creditos: 3, prerrequisitos: [] },
  // Semestre 2
  { nombre: "Cálculo I", codigo: "INMT21", semestre: 2, anio: 1, creditos: 6, prerrequisitos: ["INMT11"] },
  { nombre: "Álgebra I", codigo: "INMT22", semestre: 2, anio: 1, creditos: 6, prerrequisitos: ["INMT12"] },
  { nombre: "Programación", codigo: "INIE13", semestre: 2, anio: 1, creditos: 4, prerrequisitos: [] },
  { nombre: "Economía General", codigo: "INII24", semestre: 2, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Taller de Programación", codigo: "INIE25", semestre: 2, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Introducción a la Electricidad y Robótica", codigo: "INIE27", semestre: 2, anio: 1, creditos: 5, prerrequisitos: ["INIE17"] }
];

let aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosICE")) || []);

function tienePrerrequisitosAprobados(ramo) {
  return ramo.prerrequisitos.every(cod => aprobados.has(cod));
}

function calcularAvance() {
  const total = ramos.length;
  const cantidad = aprobados.size;
  const porcentaje = ((cantidad / total) * 100).toFixed(1);

  const creditosAprobados = ramos.filter(r => aprobados.has(r.codigo)).reduce((sum, r) => sum + r.creditos, 0);

  document.getElementById("avance-texto").textContent = `Avance: ${cantidad}/${total} ramos (${porcentaje}%) | Créditos acumulados: ${creditosAprobados}`;
  document.getElementById("barra-avance").style.width = `${porcentaje}%`;
}

function renderMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  const agrupados = {};
  ramos.forEach(r => {
    if (!agrupados[r.anio]) agrupados[r.anio] = {};
    if (!agrupados[r.anio][r.semestre]) agrupados[r.anio][r.semestre] = [];
    agrupados[r.anio][r.semestre].push(r);
  });

  Object.entries(agrupados).forEach(([anio, semestres]) => {
    const divAnio = document.createElement("div");
    divAnio.className = "bloque-anio";
    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${anio}`;
    divAnio.appendChild(titulo);

    Object.entries(semestres).forEach(([semestre, ramos]) => {
      const columna = document.createElement("div");
      columna.className = "semestre";
      const subtitulo = document.createElement("h3");
      subtitulo.textContent = `Semestre ${semestre}`;
      columna.appendChild(subtitulo);

      ramos.forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.className = "ramo";
        divRamo.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

        const bloqueado = !tienePrerrequisitosAprobados(ramo);
        const aprobado = aprobados.has(ramo.codigo);

        if (bloqueado && !aprobado) divRamo.classList.add("bloqueado");
        if (aprobado) divRamo.classList.add("aprobado");

        divRamo.addEventListener("click", () => {
          if (divRamo.classList.contains("bloqueado")) return;
          if (aprobados.has(ramo.codigo)) {
            aprobados.delete(ramo.codigo);
          } else {
            aprobados.add(ramo.codigo);
          }
          localStorage.setItem("aprobadosICE", JSON.stringify([...aprobados]));
          renderMalla();
        });

        columna.appendChild(divRamo);
      });

      divAnio.appendChild(columna);
    });

    contenedor.appendChild(divAnio);
  });

  calcularAvance();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("resetear").addEventListener("click", () => {
    aprobados.clear();
    localStorage.removeItem("aprobadosICE");
    renderMalla();
  });

  renderMalla();
});
