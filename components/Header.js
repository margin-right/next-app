import Link from "next/dist/client/link"
export default function Header() {
    return (
        <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link href={'/'}><a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <span className="fs-4">А зачем что-то кроме next.js?</span>
          </a></Link>
          <ul className="nav nav-pills">
            <li className="nav-item"><Link href={'/'}><a className="nav-link active" aria-current="page">Детдом</a></Link></li>
            <li className="nav-item"><Link href={'posts'}><a className="nav-link">Посты</a></Link></li>
            <li className="nav-item"><Link href={'/about'}><a className="nav-link">Эбаут</a></Link></li>
          </ul>
        </header>
      </div>
    )
}
