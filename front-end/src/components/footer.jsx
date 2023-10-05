import Link from "next/link";


export default function NavBar() {
  return (
    <div className="footer">
      <ul>
        <li>
          <p>&copy; Todos os direitos reservados - TechnologicalSchool</p>
        </li>
        <li>
          <Link href="https://github.com/gustavo-guarnieri-de-melo"> Gustavo Guarnieri de Melo - rm 97100</Link>
        </li>
        <li>
          <Link href="https://github.com/Gustavo-Nascimento503">
          Gustavo Santos Nascimento - RM96687
          </Link>
        </li>
        
        </ul>
    </div>
  );
}
