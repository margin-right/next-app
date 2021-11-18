import Link from 'next/link'
import Head from 'next/head'

export default function Posts(){
    return(
        <div>
            <Head>
                <title>Пастыы</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            </Head>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    
                    <span class="fs-4">Посты, какие посты блин</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><Link href={'/'}><a class="nav-link" aria-current="page">Детдом</a></Link></li>
                    <li class="nav-item"><Link href={'posts'}><a class="nav-link active">Посты</a></Link></li>
                    <li class="nav-item"><Link href={'/about'}><a class="nav-link">Эбаут</a></Link></li>
                </ul>
                </header>

            </div>
            
        </div>
    )
}