import Head from 'next/head'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pagina }) => {
  return (
    <>
      <Head>
        <title>GuitarLA - { pagina } </title>
        <meta name="description" content="Carrito de compras, guitarras." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      { children }

      <Footer />
    </>
  )
}

export default Layout