import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import imagemHome from "../app/imagens/imagemHome.png"; 

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="background-image">
        <img src={imagemHome} alt="Descrição da imagem" />
      </main>

      <Footer />
    </>
  );
}