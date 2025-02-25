import * as React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SelectMenu from '../Components/SelectMenu'
import Login from '../Components/Login'
import '../Styles/styles.css' 

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to Snoot</h1>
        <h2>Please Log In Below</h2>
        <Login />
      </main>
      <Footer />
    </>
  )
}

export const Head = () => <title>Snoot</title>

export default IndexPage