import Head from 'next/head'

export default function About(){
    return(
        <div>
            <Head>
                <title>Эбаут</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src="dance.gif"></img>
                <h1 className="display-5 fw-bold">ooo\\||//ooo</h1>
                <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                </div>
                </div>
            </div>
        </div>
    )
}