"use server"

import { revalidatePath } from "next/cache"

export async function create(data){
    const url = "http://localhost:8080/categorias"

    const options = {
        method: "POST", 
        body: JSON.stringify(Object.fromEntries(data)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)

    if (resp.status !== 201) return { error : "erro ao cadastrar"}

    revalidatePath("/categorias")

}