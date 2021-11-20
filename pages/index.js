import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import React from 'react';
import { useState } from 'react';
import UserBlock from '../components/UserBlock';
import LogForm from '../components/Form';




export default function Home({users}) {

  const [ussers, setUssers] = useState(users) 


  return (
    <div>
      <Head>
        <title>Next.test</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
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
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">{ussers.map(user => {
              return(
                <div  className='userblock' key={user._id}>
                <UserBlock name={user} />
                </div>
              )
            })}</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
            <LogForm />
        </div>
        </div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () =>{
  const res = await fetch('https://next-app-tau-lake.vercel.app/api/users');
  const {data} = await res.json();
  return {users: data}
} 