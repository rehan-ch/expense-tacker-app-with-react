import React, { useContext } from 'react'
import { TransactionContext } from '../context/transactionContext'
import Transaction from './Transaction'

const TransactionsList = () => {
  let {transactions} = useContext(TransactionContext);
  return (
    <div>
      <h2>History</h2>
      <hr/>
      {transactions.map((transObj, index) => {
        return(
          < Transaction obj = {transObj} key = {index} />
        )
      })}
    </div>
  )
}

export default TransactionsList
