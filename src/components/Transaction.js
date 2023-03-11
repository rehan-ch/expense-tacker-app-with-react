import React, {useContext} from 'react'
import { TransactionContext } from '../context/transactionContext'
const Transaction = ({obj}) => {
  const {removeTransaction} = useContext(TransactionContext);

  return (
    <div>
    <div className='transaction-container'>
        <div className='transaction px-20 border-around m-10'>
          <h4>{obj.desc}</h4>
          <h4>$ {obj.amount}</h4>
        </div>
        <div className='m-10 remove-btn-container'>
          <a href='#' className='remove-btn' onClick={(e) => {
            e.preventDefault();
            removeTransaction(obj.id)}
            }>X</a>
        </div>
      </div>
    </div>
  )
}

export default Transaction
