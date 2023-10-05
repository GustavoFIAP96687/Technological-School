"use client"

import { create } from "@/actions/categorias";
import Button from "@/components/button";
import InputText from "@/components/input-text";
import NavBar from "@/components/navbar";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CategoriaNew() {
    const { push } = useRouter()

    async function onSubmit(formData){
        const resp = await create(formData)

        if (resp?.error) {
            toast.error(resp.error)
            return
        }

        push("/categorias")
    }

    return (
        <>
            <NavBar />

            <main className="container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-xl">
                <h2>Cadastrar Categoria</h2>

                <form action={onSubmit} className="flex flex-col items-start gap-2 mt-2">
                    <InputText name="icone" label="ícone" />
                    <InputText name="nome" label="nome" />
                    <Button type="button">salvar</Button>

                </form>



            </main>
        </>
    )
}