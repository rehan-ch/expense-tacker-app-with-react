import React from 'react'

const Transaction = (props) => {
  return (
    <div>
    <div className='transaction-container'>
        <div className='transaction px-20 border-around m-10'>
          <h4>{props.obj.desc}</h4>
          <h4>{props.obj.amount}</h4>
        </div>
        <div className='m-10 remove-btn-container'>
          <a href='#' className='remove-btn'>X</a>
        </div>
      </div>
    </div>
  )
}

export default Transaction
