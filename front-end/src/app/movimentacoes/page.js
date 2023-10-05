import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import imagemHome from "../imagens/imagemHome.png";



export default function Home() {
  return (
    <>
      <NavBar />

      <main className="background-image">
        <img src={imagemHome} alt="Descrição da imagem" />
      </main>

      <main className="container bg-slate-900 mt-10 mx-auto p-4 rounded-3xl">
        <h2 className="text-center">
          <span className="bg-green-500 text-white px-4 py-2 inline-block rounded-3xl">Cadastro de Alunos</span>
        </h2>

        <form className="flex flex-wrap justify-evenly gap-4 ">
        <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
            <label htmlFor="nomeResponsavel" className="block mb-2 ">Nome do aluno:</label>
            <input type="text" id="nome" name="nome" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 mb-5 ">
            <label htmlFor="cpfAluno" className="block mb-2">CPF do Aluno:</label>
            <input type="text" id="cpfAluno" name="cpfAluno" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w- md:w-1/2 lg:w-1/3">
            <label htmlFor="dataAluno" className="block mb-2">Data de Nascimento Aluno:</label>
            <input type="date" id="dataAluno" name="dataAluno" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <label htmlFor="cep" className="block mb-2">CEP:</label>
            <input type="number" id="cep" name="cep" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
            <label htmlFor="rua" className="block mb-2">Nome de Rua:</label>
            <input type="text" id="rua" name="rua" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <label htmlFor="numrua" className="block mb-2">Número da Rua:</label>
            <input type="text" id="numrua" name="numrua" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
            <label htmlFor="nomeResponsavel" className="block mb-2">Nome do Responsável:</label>
            <input type="text" id="nomeResponsavel" name="nomeResponsavel" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <label htmlFor="dataResponsavel" className="block mb-2">Data de Nascimento do Responsável:</label>
            <input type="date" id="dataResponsavel" name="dataResponsavel" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <label htmlFor="cpfresponsavel" className="block mb-2">CPF do Responsável:</label>
            <input type="text" id="cpfresponsavel" name="cpfresponsavel" className="w-full px-4 py-2 border rounded-3xl text-black" />
          </div>
          </form>

          <form className="flex justify-center">
            
            <div className="w-full flex justify-center">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
              </button>

              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
              </button>

              <button type="button" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
              </button>

              <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
              </button>
            </div>
          </form>
          
        
        </main>
        
      <Footer />
    </>
  )
}
