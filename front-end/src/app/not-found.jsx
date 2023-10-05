import Button from "@/components/button";

export default function NotFound() {
  return (
    <>
      <main className="flex flex-col gap-2 items-start container bg-slate-900 mt-10 mx-auto rounded p-4 max-w-lg">
        <h2>Página não encontrada</h2>
        <Button href="/">voltar para a home</Button>
      </main>
    </>
  )
} 