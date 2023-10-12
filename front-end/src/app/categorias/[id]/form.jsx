"use client"

import { update } from "@/actions/categorias"
import Button from "@/components/button"
import ComboBoxIconeCategoria from "@/components/combobox-icone-categoria"
import InputText from "@/components/input-text"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function FormEdit({categoria}) {
    const { push } = useRouter()
    const [messages, setMessages] = useState([])
    const [ categoriaEdit, setCategoriaEdit] = useState(categoria)

    async function onSubmit() {
        const resp = await update(categoriaEdit)

        if (resp?.error) {
            toast.error(resp.error)
            setMessages(resp.messages)
            return
        }

        push("/categorias")
    }

    function handleFieldChange(field, value){
        setCategoriaEdit({
            ...categoriaEdit,
            [field]: value
        })
    }

    return (
        <main className="container bg-slate-900 mt-10 mx-auto rounded p-10 max-w-xl">
            <h2 className="text-2xl font-bold">Editar Categoria</h2>

            <form action={onSubmit} className="flex flex-col items-start gap-2 mt-2">
                <ComboBoxIconeCategoria icone={categoriaEdit.icone}  />

                <InputText name="nome" label="nome" value={categoriaEdit.nome} onChange={(e) => handleFieldChange("nome", e.target.value)} />
                <span className="text-red-400">{messages.find(m => m.field === "nome")?.message}</span>
                <Button type="button">salvar</Button>

            </form>

        </main>
    )
}