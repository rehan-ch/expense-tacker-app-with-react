import React from 'react'

const TransactionsList = () => {
  return (
    <div>
      <h2>History</h2>
      <hr/>
      <div className='transaction-container'>
        <div className='transaction px-20 border-around m-10'>
          <h4>Books</h4>
          <h4>$50</h4>
        </div>
        <div className='m-10 remove-btn-container'>
          <a href='#' className='remove-btn'>X</a>
        </div>
      </div>
      <div className='transaction-container'>
        <div className='transaction px-20 border-around m-10'>
          <h4>Books</h4>
          <h4>$50</h4>
        </div>
        <div className='m-10 remove-btn-container'>
          <a href='#' className='remove-btn'>X</a>
        </div>
      </div>
    </div>
  )
}

export default TransactionsList
