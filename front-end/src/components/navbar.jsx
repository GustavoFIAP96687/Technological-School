import Link from "next/link";


export default function NavBar() {
  return (
    <nav className="flex items-center justify-between background-nav p-6">
      <ul className="flex items-end gap-14 text-slate-500">
        <li>
          <Link href="/">
            <h1 className="text-2xl text-slate-100 custom-font">
              TECHNOLOGICALSCHOOL
            </h1>
          </Link>
        </li>
        <li>
          <a>APROFUNDAR</a>
        </li>
        <li>
          <a>
            BOLETIM
          </a>
        </li>
        <li>
          <Link href="/movimentacoes" className="text-slate-300">
            CADASTRO</Link>
        </li>
        </ul>
        <div className="flex items-center">
            <span className="text-white text-sm font-semibold">Login</span>
        <div className="h-10 w-10 rounded-full overflow-hidden ml-2">
        <img
            src="https://github.com/gustavo-guarnieri-de-melo.png"
            alt="avatar do usuário"
        />
        </div>
    </div>
    </nav>
  );
}
