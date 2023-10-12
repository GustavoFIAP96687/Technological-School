"use server"

import { revalidatePath } from "next/cache"
const url = "http://localhost:8080/categorias"

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

    if (resp.status !== 201) {
        const messages = await resp.json()
        return {
            error: "erro ao cadastra",
            messages
        }
    } 

    revalidatePath("/categorias")

}

export async function destroy(id){
    const options = {
        method: "DELETE"
    }

    const resp = await fetch(url + "/" + id, options)

    if (resp.status !== 204){
        return { error: "Erro ao apagar categoria" }
    }

    revalidatePath("/categorias")

}

export async function get(id){
    const resp = await fetch(url + "/" + id)

    if (resp.status !== 200){
        return { error: "Categoria não encontrada"}
    }

    return await resp.json()
}

export async function update(categoria){
    const options = {
        method: "PUT", 
        body: JSON.stringify(categoria),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url + "/" + categoria.id, options)

    if (resp.status !== 200){
        return {error: "Erro ao alterar categoria"}
    }

    revalidatePath("/categorias")

}