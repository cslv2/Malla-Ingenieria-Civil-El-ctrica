import React from "react";

export type CursoBasico = {
  codigo: string;
  nombre: string;
  creditos?: number;
};

type Props = {
  titulo?: string;
  cursos: CursoBasico[];
};

/**
 * En móviles: fila horizontal con swipe (flex + overflow-x-auto)
 * En pantallas medianas y grandes: grid responsivo (2→3→5 columnas)
 */
export default function MallaResponsiva({ titulo, cursos }: Props) {
  return (
    <section className="w-full">
      {titulo && (
        <h2 className="px-4 sm:px-6 mb-2 text-base sm:text-lg font-semibold tracking-tight">
          {titulo}
        </h2>
      )}

      <div
        className="
          flex md:grid gap-3 sm:gap-4 px-4 sm:px-6
          overflow-x-auto md:overflow-visible
          md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
          scroll-px-4 snap-x snap-mandatory
          pb-3
        "
      >
        {cursos.map((c) => (
          <article
            key={c.codigo}
            className="
              min-w-[220px] md:min-w-0 snap-start
              bg-cyan-100/70 border border-cyan-200
              rounded-2xl shadow-sm
              p-3 sm:p-4
              text-center
            "
          >
            <h3 className="text-sm sm:text-base font-bold leading-tight">
              {c.nombre}
            </h3>

            <p className="mt-1 text-xs sm:text-sm text-gray-600">{c.codigo}</p>

            {typeof c.creditos === "number" && (
              <p className="mt-2 text-[11px] sm:text-xs text-gray-500">
                Créditos: {c.creditos}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
