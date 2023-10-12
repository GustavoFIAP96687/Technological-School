import DropDown from "@/components/dropdown";
import { icons } from "./icones-categorias";

export default function DataRow({ categoria }) {
    return (
        <div id="data-row" className="flex justify-between">
            <div className="flex items-center gap-2">
                { icons.find(icone => icone.name === categoria.icone)?.icon }
                <span>{categoria.nome}</span>
            </div>
            <DropDown id={categoria.id} />
        </div>
    )
}