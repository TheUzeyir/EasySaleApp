import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/Header/Header'
import ProductCard from '../../components/productCard/ProductCard'

const Main = () => {
  return (
    <div className="main_container">
      <div className='main'>
      <Header/>
      <ProductCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Main
