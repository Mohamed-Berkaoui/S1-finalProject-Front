import React from 'react'
import OrderInformations from '../components/OrderInformations'
import OrderConfirmation from '../components/OrderConfirmation'
import "../styles/orderpage.css"

function OrderPage() {
  return (
    <div className='order-container'>
        <OrderInformations/>
        <OrderConfirmation/>
    </div>
  )
}

export default OrderPage