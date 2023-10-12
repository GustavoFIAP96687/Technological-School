import { icons } from "@/app/categorias/icones-categorias";
import { useState } from "react";

export default function ComboBoxIconeCategoria({icone = "academic-cap"}) {
    const [value, setValue] = useState(icone)

    return (
        <>
            <label htmlFor="icon">Ícone</label>
            <input type="hidden" name="icone" value={value}/>
            <div className="flex gap-4">
                {icons.map(({ name, icon }) =>
                    <button
                        key={name}
                        className={`p-4 rounded ${value===name? "bg-slate-600": ""} `}
                        onClick={() => setValue(name)}
                    >
                        {icon}
                    </button>
                )}
            </div>

        </>
    )
}