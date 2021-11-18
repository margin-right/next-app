import Link from 'next/link'
import Head from 'next/head'

export default function About(){
    return(
        <div>
            <Head>
                <title>Эбаут</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            </Head>
            <div class="container">
                <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    
                    <span class="fs-4">Wrote Эбаут</span>
                </a>

                <ul class="nav nav-pills">
                    <li class="nav-item"><Link href={'/'}><a class="nav-link" aria-current="page">Детдом</a></Link></li>
                    <li class="nav-item"><Link href={'posts'}><a class="nav-link">Посты</a></Link></li>
                    <li class="nav-item"><Link href={'/about'}><a class="nav-link active">Эбаут</a></Link></li>
                </ul>
                </header>
                
            </div>
            <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src="dance.gif"></img>
                <h1 class="display-5 fw-bold">ooo\\||//ooo</h1>
                <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div>
                </div>
            </div>
        </div>
    )
}