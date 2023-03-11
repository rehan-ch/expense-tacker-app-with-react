import React, { createContext, useReducer } from "react"
import TransactionReducer from "../reducer/transReducer";

let initialTransactions = []
export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
  const [state, dispach] = useReducer(TransactionReducer, initialTransactions);
  const addTransaction = (transObj) => {
      let lastObject = state.at(0);
      let id = lastObject ? lastObject.id + 1 : 1
    dispach({
      type: "ADD_Transaction",
      payload: {
        id: id,
        amount: transObj.amount,
        desc: transObj.desc
      }
    })
  }
  const removeTransaction = (id) => {
    dispach({
      type: "REMOVE_TRANSACTION",
      payload: {
        id: id
      }
    })
  }
  const getIncomeExpense = ()=>{
    let incomeExpense = {income: 0, expense: 0}
    for(let i = 0; i < state.length; i++){
      state[i].amount > 0 ? incomeExpense.income += parseInt(state[i].amount) : incomeExpense.expense += parseInt(state[i].amount)
    }
    return incomeExpense;
  }

  let {income, expense} = getIncomeExpense();
  let totalIncome = income + expense;
  return(
    <TransactionContext.Provider value={
      {
        transactions: state,
        addTransaction,
        removeTransaction,
        income, expense,
        totalIncome
      }
    }>
      {children}
    </TransactionContext.Provider>
  )
}