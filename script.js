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
  { nombre: "INMT33 - Ecuaciones Diferenciales", codigo: "INMT33", semestre: 3, prerrequisitos: ["INMT31"] },
  { nombre: "INII34 - Taller de Proyecto", codigo: "INII34", semestre: 3, prerrequisitos: ["INIE25"] },
  { nombre: "IEIE37 - Redes Eléctricas I", codigo: "IEIE37", semestre: 3, prerrequisitos: ["INIE27"] },
  { nombre: "INGL5 - Inglés I", codigo: "INGL5", semestre: 3, prerrequisitos: [] },

  { nombre: "INFS41 - Física II", codigo: "INFS41", semestre: 4, prerrequisitos: ["INFS32"] },
  { nombre: "IEIE42 - Termodinámica", codigo: "IEIE42", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE43 - Ingeniería de Proyectos", codigo: "IEIE43", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE44 - Normativa Legal", codigo: "IEIE44", semestre: 4, prerrequisitos: [] },
  { nombre: "IEIE47 - Redes Eléctricas II", codigo: "IEIE47", semestre: 4, prerrequisitos: ["IEIE37"] },
  { nombre: "INGL45 - Inglés II", codigo: "INGL45", semestre: 4, prerrequisitos: ["INGL5"] }

  // Puedes continuar agregando los demás ramos aquí...
];

// Leer aprobados desde localStorage
let aprobados = new Set(JSON.parse(localStorage.getItem("aprobadosICE")) || []);

const semestres = {};
for (let i = 1; i <= 10; i++) semestres[i] = [];

ramos.forEach(ramo => semestres[ramo.semestre].push(ramo));

function tienePrerrequisitosAprobados(ramo) {
  return ramo.prerrequisitos.every(pr => aprobados.has(pr));
}

function renderMalla() {
  const contenedor = document.getElementById("contenedor-malla");
  contenedor.innerHTML = "";

  for (const [semestre, lista] of Object.entries(semestres)) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h3>Semestre ${semestre}</h3>`;

    lista.forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.textContent = ramo.nombre;

      const codigo = ramo.codigo;

      if (aprobados.has(codigo)) {
        ramoDiv.classList.add("aprobado");
      } else if (!tienePrerrequisitosAprobados(ramo)) {
        ramoDiv.classList.add("bloqueado");
      }

      ramoDiv.addEventListener("click", () => {
        if (ramoDiv.classList.contains("bloqueado")) return;

        if (ramoDiv.classList.contains("aprobado")) {
          ramoDiv.classList.remove("aprobado");
          aprobados.delete(codigo);
        } else {
          ramoDiv.classList.add("aprobado");
          aprobados.add(codigo);
        }

        // Guardar en localStorage y volver a renderizar
        localStorage.setItem("aprobadosICE", JSON.stringify(Array.from(aprobados)));
        renderMalla();
      });

      div.appendChild(ramoDiv);
    });

    contenedor.appendChild(div);
  }
}

// Inicializar
renderMalla();

