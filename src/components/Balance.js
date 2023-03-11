import React, {useContext} from 'react'
import { TransactionContext } from '../context/transactionContext';
const Balance = () => {
  let {totalIncome} = useContext(TransactionContext);

  return (
    <div>
      <h2>Your Balance <br/>$ {totalIncome}</h2>
    </div>
  )
}

export default Balance
