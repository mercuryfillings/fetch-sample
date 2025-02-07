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
        <h1>Dog House</h1>
        <p className='test'>Select a Dog</p>
        <Login />
      </main>
      <Footer />
    </>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage