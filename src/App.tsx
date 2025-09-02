// src/App.tsx
import React, { useEffect, useState } from "react";
import { cursos as todosLosCursos, Curso } from "./data/cursos";
import { electivos } from "./data/electivos";

/* ================= PALETAS ================= */

const LIGHT_BLUEGREEN = {
  appBg: "bg-[#ffffff] text-[#004173]",
  years: "bg-[#0cb7f2] text-white",
  sems: "bg-[#7cdaf9] text-[#004173]",
  progressTrack: "bg-[#7cdaf9]",
  progressBar: "bg-[#0979b0]",
  resetBtn: "bg-[#7cdaf9] hover:bg-[#0cb7f2] text-[#004173] hover:text-white",
  cardApproved: "bg-[#0cb7f2] text-white",
  cardUnlocked:
    "bg-[#b6ffff] text-[#004173] motion-safe:hover:bg-[#7cdaf9] motion-safe:hover:text-white",
  cardBlocked: "bg-[#b6ffff]/60 text-[#0979b0]/40 cursor-not-allowed",
  codeTint: "text-[#0979b0]",
  creditsTint: "text-[#0979b0]",
};

const LIGHT_REDORANGE = {
  appBg: "bg-[#ffe4ea] text-[#5c0010]",
  years: "bg-[#e4717a] text-white",
  sems: "bg-[#f5abb0] text-[#5c0010]",
  progressTrack: "bg-[#f5abb0]",
  progressBar: "bg-[#9e3b42]",
  resetBtn:
    "bg-[#f5abb0] motion-safe:hover:bg-[#e4717a] motion-safe:hover:text-white text-[#5c0010]",
  cardApproved: "bg-[#e4717a] text-white",
  cardUnlocked:
    "bg-[#ffe4ea] text-[#5c0010] motion-safe:hover:bg-[#f5abb0]",
  cardBlocked: "bg-[#ffe4ea]/70 text-[#9e3b42]/40 cursor-not-allowed",
  codeTint: "text-[#9e3b42]",
  creditsTint: "text-[#9e3b42]",
};

const DARK = {
  appBg: "bg-blue-950 text-blue-100",
  years: "bg-blue-800 text-white",
  sems: "bg-blue-700 text-white",
  progressTrack: "bg-blue-900",
  progressBar: "bg-purple-500",
  resetBtn: "bg-purple-700 motion-safe:hover:bg-purple-600 text-white",
  cardApproved: "bg-purple-600 text-white",
  cardUnlocked:
    "bg-purple-700/80 text-white motion-safe:hover:bg-purple-600",
  cardBlocked: "bg-blue-900 text-blue-400 cursor-not-allowed",
  codeTint: "text-purple-200",
  creditsTint: "text-blue-200",
};

/* =============== CONSTANTES =============== */

const romanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const anos = [
  { año: "Año 1", span: 2 },
  { año: "Año 2", span: 2 },
  { año: "Año 3", span: 2 },
  { año: "Año 4", span: 2 },
  { año: "Año 5", span: 2 },
];

/** Detecta placeholders de “Mención electiva …” en cualquier semestre */
const esPlaceholderMencion = (c: Curso) =>
  /\bmenci[oó]n\s+electiva\b/i.test(c.nombre.trim());

/* =================== APP =================== */

const App = () => {
  /* ----- progreso ----- */
  const [cursosAprobados, setCursosAprobados] = useState<string[]>(() => {
    const guardado = localStorage.getItem("cursosAprobados");
    return guardado ? JSON.parse(guardado) : [];
  });
  useEffect(() => {
    localStorage.setItem("cursosAprobados", JSON.stringify(cursosAprobados));
  }, [cursosAprobados]);

  /* ----- tema ----- */
  const [modoOscuro, setModoOscuro] = useState(() => {
    const guardado = localStorage.getItem("modoOscuro");
    return guardado ? JSON.parse(guardado) : false;
  });
  useEffect(() => {
    localStorage.setItem("modoOscuro", JSON.stringify(modoOscuro));
  }, [modoOscuro]);

  /* paleta del tema claro */
  const [paletaClaro, setPaletaClaro] =
    useState<"azulVerde" | "rojoNaranja">("azulVerde");
  const LIGHT = paletaClaro === "azulVerde" ? LIGHT_BLUEGREEN : LIGHT_REDORANGE;
  const T = modoOscuro ? DARK : LIGHT;

  /* ----- electivos  : conmutador por grupo ----- */
  const gruposElectivo = Array.from(new Set(electivos.map((e) => e.grupo))).sort();
  const [grupoElectivoActivo, setGrupoElectivoActivo] = useState<string | null>(() => {
    const g = localStorage.getItem("grupoElectivo9");
    return g ? (g === "__none__" ? null : g) : null;
  });
  useEffect(() => {
    localStorage.setItem("grupoElectivo9", grupoElectivoActivo ?? "__none__");
  }, [grupoElectivoActivo]);

  /* ----- helpers cursos ----- */
  const estaDesbloqueado = (curso: Curso): boolean =>
    curso.requisitos.every((req) => cursosAprobados.includes(req));

  const toggleCurso = (id: string) => {
    setCursosAprobados((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  /* Base por semestre (sin electivos añadidos aún) */
  const basePorSemestre: { [sem: number]: Curso[] } = {};
  for (const curso of todosLosCursos) {
    if (!basePorSemestre[curso.semestre]) basePorSemestre[curso.semestre] = [];
    basePorSemestre[curso.semestre].push(curso);
  }

  /* Construir visibles:
     - si hay grupo activo, por cada semestre donde ese grupo tenga electivos:
       remuevo placeholders “Mención electiva …” y agrego los electivos del grupo.
  */
  const cursosPorSemestre: { [sem: number]: Curso[] } = { ...basePorSemestre };

  if (grupoElectivoActivo) {
    const semestresDelGrupo = Array.from(
      new Set(
        electivos
          .filter((e) => e.grupo === grupoElectivoActivo)
          .map((e) => e.semestre)
      )
    );

    for (const s of semestresDelGrupo) {
      const base = (cursosPorSemestre[s] || []).filter((c) => !esPlaceholderMencion(c));
      const delGrupo = electivos.filter(
        (e) => e.grupo === grupoElectivoActivo && e.semestre === s
      );
      const ids = new Set(base.map((c) => c.id));
      for (const e of delGrupo) if (!ids.has(e.id)) base.push(e);
      cursosPorSemestre[s] = base;
    }
  }

  /* Métricas SOLO con visibles */
  const visiblesIds = new Set<string>();
  Object.values(cursosPorSemestre).forEach((arr) =>
    arr.forEach((c) => visiblesIds.add(c.id))
  );

  const aprobadosVisibles = cursosAprobados.filter((id) => visiblesIds.has(id));
  const totalVisibles =
    Object.values(cursosPorSemestre).reduce((acc, arr) => acc + arr.length, 0) ||
    1;
  const porcentaje = (aprobadosVisibles.length / totalVisibles) * 100;

  const creditosTotales = aprobadosVisibles
    .map((id) => {
      const c =
        todosLosCursos.find((x) => x.id === id) ||
        electivos.find((x) => x.id === id);
      return c?.creditos || 0;
    })
    .reduce((acc, cur) => acc + cur, 0);

  /* =================== UI =================== */

  return (
    <div
      className={`relative min-h-screen p-3 sm:p-6 overflow-x-hidden transition-colors duration-500 ${T.appBg}`}
    >
      {/* Tema oscuro/claro */}
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className={`absolute top-4 right-6 text-sm px-3 py-1 rounded transition
        ${modoOscuro ? "bg-blue-800 text-white motion-safe:hover:bg-blue-700" : "bg-blue-600 text-white motion-safe:hover:bg-blue-500"}`}
      >
        {modoOscuro ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
      </button>

      {/* Paleta del tema claro */}
      {!modoOscuro && (
        <button
          onClick={() =>
            setPaletaClaro((p) => (p === "azulVerde" ? "rojoNaranja" : "azulVerde"))
          }
          className="absolute top-4 left-6 text-sm px-3 py-1 rounded transition bg-slate-800 text-white motion-safe:hover:bg-slate-700"
          title="Cambiar paleta del tema claro"
        >
          🎨 Paleta: {paletaClaro === "azulVerde" ? "Azul/Verde" : "Rojo/Naranja"}
        </button>
      )}

      {/* Conmutador Electivos */}
      <div className="mt-12 mb-4 flex flex-wrap gap-2 items-center justify-center">
        <span className="text-sm opacity-70">Electivos:</span>

        <button
          onClick={() => setGrupoElectivoActivo(null)}
          className={[
            "px-3 py-1 rounded-md border text-sm shadow-sm transition",
            grupoElectivoActivo === null
              ? (modoOscuro
                  ? "bg-purple-600 text-white border-transparent"
                  : "bg-teal-500 text-white border-transparent")
              : (modoOscuro
                  ? "bg-blue-900 text-blue-100 border-blue-700 motion-safe:hover:bg-blue-800"
                  : "bg-white/80 text-slate-900 border-slate-300 motion-safe:hover:bg-slate-100"),
          ].join(" ")}
        >
          Ninguno
        </button>

        {gruposElectivo.map((g) => {
          const activo = grupoElectivoActivo === g;
          return (
            <button
              key={g}
              onClick={() => setGrupoElectivoActivo(activo ? null : g)}
              className={[
                "px-3 py-1 rounded-md border text-sm shadow-sm transition",
                activo
                  ? (modoOscuro
                      ? "bg-purple-600 text-white border-transparent"
                      : "bg-teal-500 text-white border-transparent")
                  : (modoOscuro
                      ? "bg-blue-900 text-blue-100 border-blue-700 motion-safe:hover:bg-blue-800"
                      : "bg-white/80 text-slate-900 border-slate-300 motion-safe:hover:bg-slate-100"),
              ].join(" ")}
              title={`Mostrar ${g} en la malla`}
            >
              {g}
            </button>
          );
        })}
      </div>

      <h1 className="text-2xl font-bold text-center mb-4">
        Malla Interactiva – Ingenieria Civil Electrica – U. de Antofagasta
      </h1>

      {/* Progreso */}
      <div className="text-center mb-5">
        <div className="flex justify-center items-center gap-4 sm:gap-6 font-semibold mb-2">
          <p className="text-lg">Avance total: {porcentaje.toFixed(1)}%</p>
          <p className="text-ms">
            Créditos acumulados: <span className="font-bold">{creditosTotales}</span>
          </p>
        </div>
        <div
          className={`w-full max-w-md mx-auto rounded-full h-4 mt-2 shadow-inner ${T.progressTrack}`}
        >
          <div
            className={`${T.progressBar} h-4 rounded-full transition-all duration-500`}
            style={{ width: `${porcentaje}%` }}
          />
        </div>
        <button
          className={`mt-4 font-semibold px-4 py-2 rounded shadow transition-colors ${T.resetBtn}`}
          onClick={() => setCursosAprobados([])}
        >
          Reiniciar malla
        </button>
      </div>

      {/* Contenedor ancho con scroll horizontal si hace falta */}
      <div className="mx-auto w-full max-w-[1200px] lg:max-w-[1600px] overflow-x-auto">
        {/* Años */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 mb-2">
          {anos.map(({ año, span }, index) => (
            <div
              key={index}
              style={{ gridColumn: `span ${span} / span ${span}` }}
              className={`text-center font-bold py-2 rounded-md text-sm ${T.years}`}
            >
              {año}
            </div>
          ))}
        </div>

        {/* Semestres */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 mb-6">
          {romanos.map((r, i) => (
            <div
              key={i}
              className={`text-center font-bold py-1 rounded-md shadow text-sm ${T.sems}`}
            >
              {r}
            </div>
          ))}
        </div>

        {/* Cursos visibles */}
        <div className="grid grid-cols-10 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-8">
          {Array.from({ length: 10 }).map((_, semestreIndex) => {
            const semestre = semestreIndex + 1;
            const cursos = cursosPorSemestre[semestre] || [];
            return (
              <div key={semestre} className="flex flex-col gap-4 sm:gap-6 items-center">
                {cursos.map((curso) => {
                  const desbloqueado = estaDesbloqueado(curso);
                  const aprobado = cursosAprobados.includes(curso.id);
                  const btnClass = aprobado
                    ? T.cardApproved
                    : desbloqueado
                    ? T.cardUnlocked
                    : T.cardBlocked;

                  return (
                    <div key={curso.id} className="relative group w-fit">
                      <button
                        className={`w-[9.5rem] h-[6.2rem] sm:w-[8.5rem] sm:h-[5.8rem]
                                    flex flex-col justify-center items-center
                                    rounded-md shadow text-center font-medium
                                    transition-all duration-300 ease-in-out transform
                                    motion-safe:hover:scale-105 select-none touch-manipulation
                                    ${btnClass}`}
                        disabled={!desbloqueado && !aprobado}
                        onClick={() => toggleCurso(curso.id)}
                      >
                        <div
                          className={`absolute top-1 left-2 text-[10px] sm:text-[10px] font-bold opacity-80 ${T.codeTint}`}
                        >
                          {curso.id}
                        </div>

                        <div
                          className="font-semibold leading-snug text-center
                                     text-[clamp(11px,2.9vw,13px)]"
                        >
                          {curso.nombre}
                        </div>

                        <div
                          className={`mt-1 ${T.creditsTint} text-[clamp(10px,2.6vw,11px)]`}
                        >
                          Créditos: {curso.creditos}
                        </div>

                        {aprobado && (
                          <span className="absolute top-1 right-1 text-white text-lg">✨</span>
                        )}
                      </button>

                      {/* Tooltip requisitos en desktop */}
                      {!desbloqueado && !aprobado && curso.requisitos.length > 0 && (
                        <div
                          className={`absolute -top-20 left-1/2 -translate-x-1/2 w-64 rounded-md shadow-lg px-3 py-2 z-50
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                                      hidden sm:block
                                      ${
                                        modoOscuro
                                          ? "bg-blue-900 border border-blue-700 text-blue-100"
                                          : "bg-white border border-teal-300 text-teal-900"
                                      }`}
                        >
                          Debes aprobar:
                          <ul className="list-disc list-inside mt-1">
                            {curso.requisitos.map((reqId) => {
                              const reqCurso =
                                todosLosCursos.find((c) => c.id === reqId) ||
                                electivos.find((c) => c.id === reqId);
                              return <li key={reqId}>{reqCurso?.nombre || reqId}</li>;
                            })}
                          </ul>
                        </div>
                      )}

                      {/* Aviso simple en móviles (sin hover) */}
                      {!desbloqueado && !aprobado && curso.requisitos.length > 0 && (
                        <div className="sm:hidden mt-1 text-[11px] opacity-75">
                          🔒 Requiere: {curso.requisitos.length}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
