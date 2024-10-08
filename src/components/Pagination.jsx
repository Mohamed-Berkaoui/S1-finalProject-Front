import React, { useState } from 'react'
import ProductBox from './ProductBox';
import PaginationButtons from './PaginationButtons';

function Pagination() {
    const [currentPage,setCurrentPage]=useState(1)
    const products=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    const productsPerPage=12
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  
    const  paginate=(value)=>setCurrentPage(value)
  return (
    <div className='pagination-container' id='pagination-container'>
        <h1>shop now</h1>
       <div className='products'>
       {currentProducts.map(prod=><ProductBox prod={prod}/>)}
       </div>
       <PaginationButtons    productsPerPage={productsPerPage}
          currentPage={currentPage}
          totalPosts={products.length}
          paginate={paginate}/>
    </div>
  )
}

export default Pagination