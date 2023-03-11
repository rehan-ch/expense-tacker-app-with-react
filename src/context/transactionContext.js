import React, { Children, createContext, useReducer } from "react"
import TransactionReducer from "../reducer/transReducer";

let initialTransactions = [
    {amount: 500, desc: "Cash"},
    {amount: -40, desc: "Book"},
    {amount: -400, desc: "Camera"}
  ]
export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
  const [state, dispach] = useReducer(TransactionReducer, initialTransactions);
  const addTransaction = (transObj) => {
    dispach({
      type: "ADD_Transaction",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc
      }
    })
  }
  return(
    <TransactionContext.Provider value={
      {
        transactions: state,
        addTransaction
      }
    }>
      {children}
    </TransactionContext.Provider>
  )
}