import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/Header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import FooterResponsive from '../../layout/footer_responsive/FooterResponsive'
import NewProductAdd from '../newProductAdd/NewProductAdd'

const Main = () => {
  return (
    <div className="main_container">
      {/* <div className='main'>
      <Header/>
      <ProductCard/>
      </div>
      <Footer/>
      <FooterResponsive/> */}
      <NewProductAdd/>
    </div>
  )
}

export default Main
