import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function RamoCard({ curso, completado, desbloqueado, onToggle }) {
    const estado = completado ? "completado" : desbloqueado ? "desbloqueado" : "bloqueado";
    const bgColor = estado === "completado"
        ? "bg-green-300"
        : estado === "desbloqueado"
            ? "bg-white hover:border-blue-400"
            : "bg-gray-200 opacity-40";
    return (_jsxs("div", { className: `p-1 border rounded-md shadow-xs text-sm transition-all cursor-pointer select-none ${bgColor}`, onClick: desbloqueado ? onToggle : undefined, title: curso.requisitos.length
            ? `Requiere: ${curso.requisitos.map((r) => r.toUpperCase()).join(", ")}`
            : "Sin requisitos", children: [_jsx("div", { className: "font-semibold text-center", children: curso.nombre }), _jsx("div", { className: "text-xs text-center text-gray-500 mt-1", children: curso.id.toUpperCase() })] }));
}
