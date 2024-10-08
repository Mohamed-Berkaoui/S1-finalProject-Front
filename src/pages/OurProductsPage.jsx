import React from 'react'
import Search from '../components/Search'
import '../styles/ourproducts.css'
import Pagination from '../components/Pagination'


function OurProductsPage() {
  return (
    <div className='our-products-page'>
        <Search/>
        <Pagination/>

    </div>
  )
}

export default OurProductsPage