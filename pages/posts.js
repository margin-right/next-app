import Link from 'next/link'
import Head from 'next/head'

export default function Posts(){
    return(
        <div>
            <Head>
                <title>Пастыы</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"></link>
            </Head>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link href={'/'}><a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    
                    <span className="fs-4">Посты, какие посты блин</span>
                </a></Link>



                <ul className="nav nav-pills">
                    <li className="nav-item"><Link href={'/'}><a className="nav-link" aria-current="page">Детдом</a></Link></li>
                    <li className="nav-item"><Link href={'posts'}><a className="nav-link active">Посты</a></Link></li>
                    <li className="nav-item"><Link href={'/about'}><a className="nav-link">Эбаут</a></Link></li>
                </ul>
                </header>

            </div>
            
        </div>
    )
}