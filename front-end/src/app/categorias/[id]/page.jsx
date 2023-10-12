import { get } from "@/actions/categorias";
import NavBar from "@/components/navbar";
import FormEdit from "./form";

export default async function CategoriaNew({ params }) {

    const categoria = await get(params.id)

    return (
        <>
            <NavBar />
            <FormEdit categoria={categoria} />
        </>
    )
}