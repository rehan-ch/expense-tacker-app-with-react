import React, {useContext, useState} from 'react'
import {  TransactionContext} from "../context/transactionContext";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(TransactionContext);

  const handleTransaction = (event)=>{
    event.preventDefault();
    if (amount === 0){
      alert("Please Enter Some Amount!!");
      return
    }
    addTransaction({desc: description, amount: amount})
    setAmount(0);
    setDescription("");
  }
  return (
    <div>
      <h2>Add New Transaction</h2>
      < hr />
      <form onSubmit={handleTransaction}>
        <div className='form-group'>
          <label>
            Text
          </label>
          < br />
          < input name="note" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} required className='form-input border-around px-20' />
        </div>
        <div>
          <label>
            Amount (negative - expense, positive - income)
          </label>
          < br />
          < input name="amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} required className='form-input border-around px-20' />
        </div>
        <div className='form-submit text-center'>
          <button className='form-submit-btn border-around'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
