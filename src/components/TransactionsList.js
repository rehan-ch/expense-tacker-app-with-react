import React from 'react'
import Transaction from './Transaction'

const TransactionsList = () => {
  let transactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -400, desc: "Camera"}
  ]
  return (
    <div>
      <h2>History</h2>
      <hr/>
      {transactions.map((transObj, index) => {
        return(
          < Transaction obj= {transObj} ind= {index} />
        )
      })}
    </div>
  )
}

export default TransactionsList
