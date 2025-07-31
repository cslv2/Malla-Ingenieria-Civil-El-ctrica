const ramos = [
  // 1° AÑO
  { nombre: "Introducción al Cálculo", codigo: "INMT11", semestre: 1, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Introducción al Álgebra", codigo: "INMT12", semestre: 1, anio: 1, creditos: 7, prerrequisitos: [] },
  { nombre: "Introducción a la Ingeniería", codigo: "INIE17", semestre: 1, anio: 1, creditos: 5, prerrequisitos: [] },
  { nombre: "Dibujo de Ingeniería", codigo: "INIE14", semestre: 1, anio: 1, creditos: 3, prerrequisitos: [] },
  { nombre: "Química General", codigo: "INQU15", semestre: 1, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Métodos de Estudio", codigo: "IEED18", semestre: 1, anio: 1, creditos: 3, prerrequisitos: [] },

  { nombre: "Cálculo I", codigo: "INMT21", semestre: 2, anio: 1, creditos: 6, prerrequisitos: ["INMT11"] },
  { nombre: "Álgebra I", codigo: "INMT22", semestre: 2, anio: 1, creditos: 6, prerrequisitos: ["INMT12"] },
  { nombre: "Programación", codigo: "INIE13", semestre: 2, anio: 1, creditos: 4, prerrequisitos: [] },
  { nombre: "Economía General", codigo: "INII24", semestre: 2, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Taller de Programación", codigo: "INIE25", semestre: 2, anio: 1, creditos: 6, prerrequisitos: [] },
  { nombre: "Introducción a la Electricidad y Robótica", codigo: "INIE27", semestre: 2, anio: 1, creditos: 5, prerrequisitos: ["INIE17"] },

  // 2° AÑO
  { nombre: "Cálculo II", codigo: "INMT31", semestre: 3, anio: 2, creditos: 6, prerrequisitos: ["INMT21"] },
  { nombre: "Física I", codigo: "INFS32", semestre: 3, anio: 2, creditos: 6, prerrequisitos: ["INMT21", "INMT22"] },
  { nombre: "Ecuaciones Diferenciales", codigo: "INMT33", semestre: 3, anio: 2, creditos: 6, prerrequisitos: ["INMT21"] },
  { nombre: "Taller de Proyecto", codigo: "INII34", semestre: 3, anio: 2, creditos: 3, prerrequisitos: ["INIE25"] },
  { nombre: "Redes Eléctricas I", codigo: "IEIE37", semestre: 3, anio: 2, creditos: 6, prerrequisitos: ["INIE27"] },
  { nombre: "Emprendimiento I", codigo: "INII35", semestre: 3, anio: 2, creditos: 3, prerrequisitos: [] },

  { nombre: "Física II", codigo: "INFS41", semestre: 4, anio: 2, creditos: 6, prerrequisitos: ["INFS32"] },
  { nombre: "Termodinámica", codigo: "IEIE42", semestre: 4, anio: 2, creditos: 6, prerrequisitos: [] },
  { nombre: "Ingeniería de Proyectos", codigo: "IEIE43", semestre: 4, anio: 2, creditos: 4, prerrequisitos: [] },
  { nombre: "Normativa legal y especialidad", codigo: "IEIE44", semestre: 4, anio: 2, creditos: 4, prerrequisitos: [] },
  { nombre: "Inglés I", codigo: "INCI45", semestre: 4, anio: 2, creditos: 4, prerrequisitos: [] },
  { nombre: "Redes Eléctricas II", codigo: "IEIE47", semestre: 4, anio: 2, creditos: 6, prerrequisitos: ["IEIE37"] },
  { nombre: "Práctica Profesional I", codigo: "IEIEA1", semestre: 4, anio: 2, creditos: 6, prerrequisitos: [] },

  // 3° AÑO
  { nombre: "Probabilidad y Estadística", codigo: "INMT51", semestre: 5, anio: 3, creditos: 6, prerrequisitos: [] },
  { nombre: "Tópicos Matemáticos", codigo: "IEMT52", semestre: 5, anio: 3, creditos: 6, prerrequisitos: ["INMT33"] },
  { nombre: "Mecánica de Sólidos y Fluidos", codigo: "IEME53", semestre: 5, anio: 3, creditos: 6, prerrequisitos: [] },
  { nombre: "Redes Eléctricas III", codigo: "IEIE54", semestre: 5, anio: 3, creditos: 6, prerrequisitos: ["IEIE47"] },
  { nombre: "Inglés II", codigo: "INGL45", semestre: 5, anio: 3, creditos: 4, prerrequisitos: ["INCI45"] },
  { nombre: "Hito de Evaluación I", codigo: "IEIE55", semestre: 5, anio: 3, creditos: 2, prerrequisitos: [] },

  { nombre: "Métodos Numéricos", codigo: "INMT61", semestre: 6, anio: 3, creditos: 6, prerrequisitos: ["INMT33"] },
  { nombre: "Campos Electromagnéticos", codigo: "IEIE65", semestre: 6, anio: 3, creditos: 6, prerrequisitos: [] },
  { nombre: "Electrónica I", codigo: "IEIE63", semestre: 6, anio: 3, creditos: 6, prerrequisitos: ["INFS32"] },
  { nombre: "Sistemas Digitales", codigo: "IEIE66", semestre: 6, anio: 3, creditos: 6, prerrequisitos: ["INIE25"] },
  { nombre: "Fundamentos de Evaluación de Proyectos", codigo: "IEIE69", semestre: 6, anio: 3, creditos: 4, prerrequisitos: ["IEIE43"] },
  { nombre: "Administración y Dirección de Mantenimiento", codigo: "IEIE70", semestre: 6, anio: 3, creditos: 4, prerrequisitos: [] },

  // 4° AÑO
  { nombre: "Análisis de Señales y Sistemas", codigo: "IEIE77", semestre: 7, anio: 4, creditos: 6, prerrequisitos: ["IEIE66", "INMT61"] },
  { nombre: "Electrónica II", codigo: "IEIE73", semestre: 7, anio: 4, creditos: 6, prerrequisitos: ["IEIE63"] },
  { nombre: "Instrumentación Industrial", codigo: "IEIE67", semestre: 7, anio: 4, creditos: 6, prerrequisitos: ["IEIE63"] },
  { nombre: "Operación y Mantenimiento Industrial", codigo: "IEIE74", semestre: 7, anio: 4, creditos: 6, prerrequisitos: ["IEIE70"] },
  { nombre: "Conversión Electromecánica de la Energía", codigo: "IEIE76", semestre: 7, anio: 4, creditos: 6, prerrequisitos: ["IEIE54"] },
  { nombre: "Emprendimiento II", codigo: "INII76", semestre: 7, anio: 4, creditos: 3, prerrequisitos: [] },

  { nombre: "Diseño y Gestión de Operación y Mantenimiento", codigo: "IEIE87", semestre: 8, anio: 4, creditos: 4, prerrequisitos: ["IEIE74"] },
  { nombre: "Control Automático", codigo: "IEIE82", semestre: 8, anio: 4, creditos: 6, prerrequisitos: ["IEIE77", "IEIE67"] },
  { nombre: "Teoría de Comunicaciones", codigo: "IEIE83", semestre: 8, anio: 4, creditos: 6, prerrequisitos: ["IEIE77"] },
  { nombre: "Sistemas de Energía Eléctrica", codigo: "IEIE68", semestre: 8, anio: 4, creditos: 6, prerrequisitos: ["IEIE54"] },
  { nombre: "Taller de Proyectos Eléctricos de Nuevas Energías", codigo: "IEIE89", semestre: 8, anio: 4, creditos: 4, prerrequisitos: ["IEIE76"] },
  { nombre: "Mención Electiva I", codigo: "IEIE85", semestre: 8, anio: 4, creditos: 4, prerrequisitos: [] },
  { nombre: "Práctica Profesional II", codigo: "IEIEA2", semestre: 8, anio: 4, creditos: 6, prerrequisitos: [] },

  // 5° AÑO
  { nombre: "Proyecto en Ingeniería Eléctrica", codigo: "IEIE97", semestre: 9, anio: 5, creditos: 10, prerrequisitos: [] },
  { nombre: "Mención Electiva II", codigo: "IEIEX1", semestre: 9, anio: 5, creditos: 4, prerrequisitos: [] },
  { nombre: "Mención Electiva III", codigo: "IEIEX2", semestre: 9, anio: 5, creditos: 4, prerrequisitos: [] },
  { nombre: "Mención Electiva IV", codigo: "IEIEX3", semestre: 9, anio: 5, creditos: 4, prerrequisitos: [] },
  { nombre: "Mención Electiva V", codigo: "IEIEX4", semestre: 9, anio: 5, creditos: 4, prerrequisitos: [] },

  { nombre: "Hito de Evaluación III", codigo: "IEIE98", semestre: 10, anio: 5, creditos: 2, prerrequisitos: [] }
];
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosICE")) || []);

function tienePrerrequisitosAprobados(ramo) {
  return ramo.prerrequisitos.every(c => aprobados.has(c));
}

function calcularProgreso() {
  const total = ramos.length;
  const completados = ramos.filter(r => aprobados.has(r.codigo));
  const porcentaje = ((completados.length / total) * 100).toFixed(1);
  const creditos = completados.reduce((sum, r) => sum + r.creditos, 0);

  document.getElementById("porcentaje").textContent = `${porcentaje}%`;
  document.getElementById("creditos").textContent = creditos;
  document.getElementById("barra-progreso").value = porcentaje;
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const estructura = {};
  ramos.forEach(r => {
    if (!estructura[r.anio]) estructura[r.anio] = {};
    if (!estructura[r.anio][r.semestre]) estructura[r.anio][r.semestre] = [];
    estructura[r.anio][r.semestre].push(r);
  });

  Object.entries(estructura).forEach(([anio, semestres]) => {
    const divAnio = document.createElement("div");
    divAnio.className = "bloque-anio";

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${anio}`;
    divAnio.appendChild(titulo);

    Object.entries(semestres).forEach(([sem, lista]) => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const subtitulo = document.createElement("h3");
      subtitulo.textContent = `Semestre ${sem}`;
      divSem.appendChild(subtitulo);

      lista.forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.className = "ramo";
        divRamo.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;

        const bloqueado = !tienePrerrequisitosAprobados(ramo);
        const aprobado = aprobados.has(ramo.codigo);

        if (bloqueado && !aprobado) divRamo.classList.add("bloqueado");
        if (aprobado) divRamo.classList.add("aprobado");

        divRamo.addEventListener("click", () => {
          if (bloqueado) return;
          if (aprobados.has(ramo.codigo)) {
            aprobados.delete(ramo.codigo);
          } else {
            aprobados.add(ramo.codigo);
          }
          localStorage.setItem("aprobadosICE", JSON.stringify([...aprobados]));
          renderMalla();
        });

        divSem.appendChild(divRamo);
      });

      divAnio.appendChild(divSem);
    });

    contenedor.appendChild(divAnio);
  });

  calcularProgreso();
}

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.removeItem("aprobadosICE");
  aprobados.clear();
  renderMalla();
});

document.addEventListener("DOMContentLoaded", renderMalla);
