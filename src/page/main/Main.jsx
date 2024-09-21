import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/Header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import DetailPage from '../detailPage/DetailPage'

const Main = () => {
  return (
    <div>
    <Header/>
     <ProductCard/>
     <Footer/>
     {/* <DetailPage/> */}
    </div>
  )
}

export default Main
