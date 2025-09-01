// src/data/electivos.ts
import type { Curso } from "./cursos";

export type OpcionElectivo = Curso & {
  grupo: string; // Ej: "Electivo 9A", "Electivo 9B"
};

// ⚠️ EJEMPLOS — Reemplaza por tus electivos reales
export const electivos: OpcionElectivo[] = [
  // Semestre 8
  { id: "EAIE85", nombre: "Identificación de Sistemas", semestre: 8, creditos: 5, requisitos: ["IEIE57","IEIE77"], grupo: "Sistema de Control y Automatización" },
  { id: "ECIE85", nombre: "Análisis de Señales y Sistemas II", semestre: 8, creditos: 5, requisitos: ["IEIE77"], grupo: "Sistema de Telecomunicación" },
  { id: "ESIE86", nombre: "Máquinas Eléctricas", semestre: 8, creditos: 5, requisitos: ["IEIE77","IEIE72","IEIE79"], grupo: "Sistema de Energías Eléctricas"},

  // Semestre 9
  { id: "EAIE91", nombre: "Instrumentación Industrial Avanzada", semestre: 9, creditos: 6, requisitos: ["IEIE73"], grupo: "Sistema de Control y Automatización" },
  { id: "EAIE92", nombre: "Control de Procesos", semestre: 9, creditos: 6, requisitos: ["IEIE77"], grupo: "Sistema de Control y Automatización" },
  { id: "EAIE93", nombre: "Control Estabilizante", semestre: 9, creditos: 6, requisitos: ["IEMT52","IEIE92"], grupo: "Sistema de Control y Automatización" },
  { id: "EAIE94", nombre: "Control Avanzado", semestre: 9, creditos: 6, requisitos: ["IEMT52","IEIE92"], grupo: "Sistema de Control y Automatización" },

  // Semestre 9
  { id: "ECIE91", nombre: "Electronica III", semestre: 9, creditos: 6, requisitos: ["IEIE72","IEIE57"], grupo: "Sistema de Telecomunicación" },
  { id: "ECIE92", nombre: "Sistemas de Comunicación", semestre: 9, creditos: 6, requisitos: ["IEIE83"], grupo: "Sistema de Telecomunicación" },
  { id: "ECIE93", nombre: "Procesamiento Digital de Señales", semestre: 9, creditos: 6, requisitos: ["IEIE68","ECIE85"], grupo: "Sistema de Telecomunicación" },
  { id: "ECIE94", nombre: "Enlaces de Radiofrecuencia", semestre: 9, creditos: 6, requisitos: ["IEIE83"], grupo: "Sistema de Telecomunicación" },

    // Semestre 9
  { id: "ESIE91", nombre: "Sistemas Eléctricos de Potencia", semestre: 9, creditos: 6, requisitos: ["INFS41","IEIE47"], grupo: "Sistema de Energías Eléctricas" },
  { id: "ESIE92", nombre: "Operación de Mercado de Energía Eléctrica", semestre: 9, creditos: 6, requisitos: ["IEMT52","ESIE91"], grupo: "Sistema de Energías Eléctricas"},
  { id: "ESIE93", nombre: "Protección de Sistemas Eléctricos", semestre: 9, creditos: 6, requisitos: ["ESIE91"], grupo: "Sistema de Energías Eléctricas" },
  { id: "ESIE94", nombre: "Aplicación Industrial de la Energía Eléctrica", semestre: 9, creditos: 6, requisitos: ["ESIE91"], grupo: "Sistema de Energías Eléctricas" },
];

export default electivos;
