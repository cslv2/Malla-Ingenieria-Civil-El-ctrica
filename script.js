const ramos = [
  { nombre: "INMT11 - Introducción al Cálculo", codigo: "INMT11", semestre: 1, prerrequisitos: [] },
  { nombre: "INMT12 - Introducción al Álgebra", codigo: "INMT12", semestre: 1, prerrequisitos: [] },
  { nombre: "INIE17 - Introducción a la Ingeniería", codigo: "INIE17", semestre: 1, prerrequisitos: [] },
  { nombre: "INIE14 - Dibujo de Ingeniería", codigo: "INIE14", semestre: 1, prerrequisitos: [] },
  { nombre: "INQU15 - Química General", codigo: "INQU15", semestre: 1, prerrequisitos: [] },
  { nombre: "IEED18 - Métodos de Estudio", codigo: "IEED18", semestre: 1, prerrequisitos: [] },

  { nombre: "INMT21 - Cálculo I", codigo: "INMT21", semestre: 2, prerrequisitos: ["INMT11"] },
  { nombre: "INMT22 - Álgebra I", codigo: "INMT22", semestre: 2, prerrequisitos: ["INMT12"] },
  { nombre: "INIE13 - Programación", codigo: "INIE13", semestre: 2, prerrequisitos: [] },
  { nombre: "INII24 - Economía General", codigo: "INII24", semestre: 2, prerrequisitos: [] },
  { nombre: "INIE25 - Taller de Programación", codigo: "INIE25", semestre: 2, prerrequisitos: [] },
  { nombre: "INIE27 - Introducción a la Electricidad y Robótica", codigo: "INIE27", semestre: 2, prerrequisitos: ["INIE17"] },

  { nombre: "INMT31 - Cálculo II", codigo: "INMT31", semestre: 3, prerrequisitos: ["INMT21"] },
  { nombre: "INFS32 - Física I", codigo: "INFS32", semestre: 3, prerrequisitos: ["INMT21", "INMT22"] },
  { nombre: "INMT33 - Ecuaciones Diferenciales", codigo: "INMT33", semestre: 3, prerrequisitos: ["INMT21"] },
  { nombre: "INII34 - Taller de Proyecto", codigo: "INII34", semestre: 3, prerrequisitos: ["INIE25"] },
  { nombre: "IEIE37 - Redes Eléctricas I", codigo: "IEIE37", semestre: 3, prerrequisitos: ["INIE27"] },
  { nombre: "INGL5 - Inglés I", codigo: "INGL5", semestre: 3, prerrequisitos: [] },

  { nombre: "INFS41 - Física II", codigo: "INFS41", semestre: 4, prerrequisitos: ["INFS32"] },
  { nombre: "IEIE42 - Termodinámica", codigo: "IEIE42", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE43 - Ingeniería de Proyectos", codigo: "IEIE43", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE44 - Normativa Legal", codigo: "IEIE44", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE47 - Redes Eléctricas II", codigo: "IEIE47", semestre: 4, prerrequisitos: ["IEIE37"] },
  { nombre: "INGL45 - Inglés II", codigo: "INGL45", semestre: 4, prerrequisitos: ["INGL5"] },

  { nombre: "INMT51 - Probabilidad y Estadística", codigo: "INMT51", semestre: 5, prerrequisitos: [] },
  { nombre: "IEMT52 - Tópicos Matemáticos", codigo: "IEMT52", semestre: 5, prerrequisitos: ["INMT33"] },
  { nombre: "IEME53 - Mecánica de Sólidos y Fluidos", codigo: "IEME53", semestre: 5, prerrequisitos: [] },
  { nombre: "IEIE63 - Electrónica I", codigo: "IEIE63", semestre: 5, prerrequisitos: ["INFS32"] },
  { nombre: "IEIE65 - Campos Electromagnéticos", codigo: "IEIE65", semestre: 5, prerrequisitos: [] },
  { nombre: "IEIE66 - Sistemas Digitales", codigo: "IEIE66", semestre: 5, prerrequisitos: ["INIE25"] },

  { nombre: "INMT61 - Métodos Numéricos", codigo: "INMT61", semestre: 6, prerrequisitos: ["INMT33"] },
  { nombre: "IEIE67 - Instrumentación Industrial", codigo: "IEIE67", semestre: 6, prerrequisitos: ["IEIE63"] },
  { nombre: "IEIE68 - Sistemas de Energía Eléctrica", codigo: "IEIE68", semestre: 6, prerrequisitos: ["IEIE47"] },
  { nombre: "IEIE69 - Fundamentos de Evaluación de Proyectos", codigo: "IEIE69", semestre: 6, prerrequisitos: ["IEIE43"] },
  { nombre: "IEIE70 - Administración y Dirección de Mantenimiento", codigo: "IEIE70", semestre: 6, prerrequisitos: [] },
  { nombre: "INCIS5 - Inglés III", codigo: "INCIS5", semestre: 6, prerrequisitos: ["INGL45"] },

  { nombre: "IEIE77 - Análisis de Señales y Sistemas", codigo: "IEIE77", semestre: 7, prerrequisitos: ["IEIE66", "INMT61"] },
  { nombre: "IEIE73 - Electrónica II", codigo: "IEIE73", semestre: 7, prerrequisitos: ["IEIE63"] },
  { nombre: "IEIE74 - Operación y Mantenimiento Industrial", codigo: "IEIE74", semestre: 7, prerrequisitos: ["IEIE68"] },
  { nombre: "IEIE76 - Electrotecnología de la Energía", codigo: "IEIE76", semestre: 7, prerrequisitos: ["IEIE68"] },
  { nombre: "IEIE71 - Evaluación de Proyectos", codigo: "IEIE71", semestre: 7, prerrequisitos: [] },
  { nombre: "IEIE85 - Mención electiva 1", codigo: "IEIE85", semestre: 7, prerrequisitos: [] },

  { nombre: "IEIE87 - Diseño y Gestión de Programas", codigo: "IEIE87", semestre: 8, prerrequisitos: ["IEIE77"] },
  { nombre: "IEIE82 - Control Automático", codigo: "IEIE82", semestre: 8, prerrequisitos: ["IEIE77", "IEIE67"] },
  { nombre: "IEIE83 - Teoría de las Comunicaciones", codigo: "IEIE83", semestre: 8, prerrequisitos: ["IEIE77"] },
  { nombre: "IEIE89 - Taller de Proyectos Eléctricos", codigo: "IEIE89", semestre: 8, prerrequisitos: ["IEIE76"] },
  { nombre: "INII76 - Emprendimiento II", codigo: "INII76", semestre: 8, prerrequisitos: [] },
  { nombre: "IEIEA2 - Práctica Profesional II", codigo: "IEIEA2", semestre: 8, prerrequisitos: [] },
  { nombre: "IEIE86 - Mención electiva 2", codigo: "IEIE86", semestre: 8, prerrequisitos: [] },

  { nombre: "IEIE97 - Proyecto en Ingeniería Eléctrica", codigo: "IEIE97", semestre: 9, prerrequisitos: [] },
  { nombre: "IEIEA1 - Práctica Profesional I", codigo: "IEIEA1", semestre: 9, prerrequisitos: [] },
  { nombre: "IEIEX1 - Mención electiva 3", codigo: "IEIEX1", semestre: 9, prerrequisitos: [] },
  { nombre: "IEIEX2 - Mención electiva 4", codigo: "IEIEX2", semestre: 9, prerrequisitos: [] },
  { nombre: "IEIEX3 - Mención electiva 5", codigo: "IEIEX3", semestre: 9, prerrequisitos: [] },

  { nombre: "IEIEA3 - Proyecto Final", codigo: "IEIEA3", semestre: 10, prerrequisitos: ["IEIE97", "IEIEA1", "IEIEA2"] },
  { nombre: "IEIE96 - Hito de Evaluación II", codigo: "IEIE96", semestre: 10, prerrequisitos: [] }
];


let aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosICE")) || []);
const semestres = {};
for (let i = 1; i <= 10; i++) semestres[i] = [];
ramos.forEach(ramo => semestres[ramo.semestre].push(ramo));

function tienePrerrequisitosAprobados(ramo) {
  return ramo.prerrequisitos.every(cod => aprobados.has(cod));
}

function calcularAvance() {
  const total = ramos.length;
  const cantidad = aprobados.size;
  const porcentaje = ((cantidad / total) * 100).toFixed(1);
  document.getElementById("avance").textContent = `Avance: ${cantidad}/${total} ramos (${porcentaje}%)`;
}

function renderMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  for (const [semestre, lista] of Object.entries(semestres)) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h3>Semestre ${semestre}</h3>`;

    lista.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

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
        renderMalla(); // Recargar para actualizar bloqueos y avance
      });

      div.appendChild(divRamo);
    });

    contenedor.appendChild(div);
  }

  calcularAvance();
}

// Inicialización
renderMalla();

