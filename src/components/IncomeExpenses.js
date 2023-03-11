import React, {useContext} from 'react'
import { TransactionContext } from '../context/transactionContext';
const IncomeExpenses = () => {
  let {income, expense} = useContext(TransactionContext);
  return (
    <div className='income-expense-section text-center border-around p-20 m-10'>
      <h2>INCOME<br/>$ {income}</h2>
      <h2>EXPENSE<br/>$ {expense}</h2>
    </div>
  )
}

export default IncomeExpenses
