// src/data/cursos.ts
export type Curso = {
  id: string;            // Código 2021
  nombre: string;        // Nombre del ramo
  semestre: number;      // 1..10
  creditos: number;      // usa 0 si no lo tienes aún
  requisitos: string[];  // Códigos 2021 de los prerequisitos
};

export const cursos: Curso[] = [
  // 1° semestre},
{ id: "INMT11", nombre: "Introducción al Cálculo", semestre: 1, creditos: 6, requisitos: [] },
{ id: "INMT12", nombre: "Introducción al Álgebra", semestre: 1, creditos: 6, requisitos: [] },
{ id: "INIE17", nombre: "Introducción a la Ingeniería", semestre: 1, creditos: 5, requisitos: [] },
{ id: "INIE14", nombre: "Dibujo de Ingeniería", semestre: 1, creditos: 3, requisitos: [] },
{ id: "INQU15", nombre: "Quimica General", semestre: 1, creditos: 6, requisitos: [] },

// 2° semestre
{ id: "INMT21", nombre: "Cálculo I", semestre: 2, creditos: 6, requisitos: ["INMT11"] },
{ id: "INMT22", nombre: "Álgebra I", semestre: 2, creditos: 6, requisitos: ["INMT12"] },
{ id: "INII23", nombre: "Programación", semestre: 2, creditos: 4, requisitos: [] },
{ id: "INII24", nombre: "Economiá General", semestre: 2, creditos: 3, requisitos: [] },
{ id: "IEIE25", nombre: "Taller de Programación", semestre: 2, creditos: 6, requisitos: [] },
{ id: "IEIE27", nombre: "Introducción a la Electricidad y Robotica", semestre: 2, creditos: 5, requisitos: [] },

// 3° semestre 
{ id: "INMT31", nombre: "Cálculo II", semestre: 3, creditos: 6, requisitos: ["INMT21"] },
{ id: "INFS32", nombre: "Física I", semestre: 3, creditos: 6, requisitos: ["INMT11"] },
{ id: "INMT33", nombre: "Ecuaciones Diferenciales", semestre: 3, creditos: 6, requisitos: ["INMT21"] },
{ id: "INII34", nombre: "Taller de Proyecto", semestre: 3, creditos: 3, requisitos: [] },
{ id: "IEIE37", nombre: "Redes Eléctricas I", semestre: 3, creditos: 6, requisitos: ["INMT21","INMT22"] },
{ id: "INII36", nombre: "Emprendimiento I", semestre: 3, creditos: 3, requisitos: [] },

// 4° semestre
{ id: "INFS41", nombre: "Física II", semestre: 4, creditos: 6, requisitos: ["INFS32"] },
{ id: "IEME47", nombre: "Termodinamica", semestre: 4, creditos: 6, requisitos: ["INMT21"] },
{ id: "IEIE43", nombre: "Ingenieria de Proyectos", semestre: 4, creditos: 4, requisitos: ["IEIE27","INII36"] },
{ id: "IEIE44", nombre: "Normativa Legal y Especialidad", semestre: 4, creditos: 4, requisitos: ["IEIE27"] },
{ id: "IECI45", nombre: "Inglés I", semestre: 4, creditos: 4, requisitos: [] },
{ id: "IEIE47", nombre: "Redes Eléctricas II", semestre: 4, creditos: 6, requisitos: ["IEIE37"] },

// 5° semestre
{ id: "INMT51", nombre: "Probabilidad y Estadistica", semestre: 5, creditos: 6, requisitos: ["INMT21", "INMT22"] },
{ id: "IEMT52", nombre: "Tópicos Matematicos", semestre: 5, creditos: 4, requisitos: ["INMT22", "INMT31"] },
{ id: "IEME53", nombre: "Mecaníca de Solidos y Fluidos", semestre: 5, creditos: 4, requisitos: ["INMT21","INFS32"] },
{ id: "IEIE57", nombre: "Redes Eléctricas III", semestre: 5, creditos: 7, requisitos: ["IEIE47","INMT33"] },
{ id: "IECI55", nombre: "Inglés II", semestre: 5, creditos: 4, requisitos: ["IECI45"] },
{ id: "IEIE92", nombre: "Hito de Evaluación I", semestre: 5, creditos: 5, requisitos: [] },

// 6° semestre
{ id: "IEIE62", nombre: "Campos Eléctromagneticos", semestre: 6, creditos: 5, requisitos: ["INFS41"] },
{ id: "INMT61", nombre: "Métodos Numéricos", semestre: 6, creditos: 6, requisitos: ["INMT31"] },
{ id: "IEIE67", nombre: "Electrónica I", semestre: 6, creditos: 4, requisitos: ["IEIE37"] },
{ id: "IEIE68", nombre: "Sistemas Digitales", semestre: 6, creditos: 6, requisitos: ["IEIE37"] },
{ id: "IEIE69", nombre: "Fundamentos de Evaluación de Proyectos", semestre: 6, creditos: 4, requisitos: ["INMT21", "INII24", "INII34"]},
{ id: "IEIE6A", nombre: "Admin.y dirección de proyecto de Mantenimiento", semestre: 6, creditos: 4, requisitos: ["IEIE43","IEIE44","IEIE47"] },

// 7° semestre
{ id: "IEIE77", nombre: "Análisis de Señales y Sistemas I", semestre: 7, creditos: 5, requisitos: ["IEMT52","IEIE57"] },
{ id: "IEIE72", nombre: "Electronica II", semestre: 7, creditos: 5, requisitos: ["INFS41", "IEIE57","IEIE67"] },
{ id: "IEIE73", nombre: "Instrumentación Industrial", semestre: 7, creditos: 5, requisitos: ["IEIE37","IEIE44"] },
{ id: "IEIE78", nombre: "Operación y Mantenimiento Industrial", semestre: 7, creditos: 5, requisitos: ["INFS41", "IEIE47","IEIE6A"] },
{ id: "IEIE79", nombre: "Conversión Electromagnetica de la energía", semestre: 7, creditos: 7, requisitos: ["IEIE37", "INFS32"]},
{ id: "INII76", nombre: "Emprendimiento II", semestre: 7, creditos: 3, requisitos: ["INII36"] },

// 8° semestre
{ id: "IEIE87", nombre: "Diseño y gestión de Programa de O&M", semestre: 8, creditos: 5, requisitos: [] },
{ id: "IEIE82", nombre: "Control Automatico", semestre: 8, creditos: 5, requisitos: ["IEIE77"] },
{ id: "IEIE83", nombre: "Teoria de Comunicaciones", semestre: 8, creditos: 5, requisitos: ["IEIE77"] },
{ id: "IEIE88", nombre: "Sistemas de Energía Eléctrica", semestre: 8, creditos: 5, requisitos: ["INFS41","IEIE47"] },
{ id: "IEIE89", nombre: "Taller de Proyectos de Nuevas Energías", semestre: 8, creditos: 5, requisitos: ["IEIE69"]},
{ id: "XXIE85/86", nombre: "Mención electiva I", semestre: 8, creditos: 5, requisitos: [] },

// 9° 
{ id: "IEIE97", nombre: "Proyectos en Ingeniería Electrica", semestre: 9, creditos: 6, requisitos: ["IEIE69","IEIE88"] },
{ id: "IEIE96", nombre: "Hito de Evaluación II", semestre: 9, creditos: 4, requisitos: [] },
{ id: "XXIE92", nombre: "Mención electiva II", semestre: 9, creditos: 5, requisitos: [] },
{ id: "XXIE93", nombre: "Mención electiva III", semestre: 9, creditos: 5, requisitos: [] },
{ id: "XXIE94", nombre: "Mención electiva IV", semestre: 9, creditos: 5, requisitos: [] },
{ id: "XXIE95", nombre: "Mención electiva V", semestre: 9, creditos: 5, requisitos: [] },

//10°
{ id: "IEIEA3", nombre: "Proyecto Final", semestre: 10, creditos: 18, requisitos: ["IEIE92","IEIE96"] },
];

export default cursos;