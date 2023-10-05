import { AcademicCapIcon } from "@heroicons/react/24/solid";

export default function DataRow({ categoria }) {
    return (
        <div id="data-row" className="flex justify-between">
            <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6" />
                <span>{categoria.nome}</span>
            </div>
            <span>menu</span>
        </div>
    )
}