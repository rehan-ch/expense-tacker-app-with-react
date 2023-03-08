import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h2>Add New Transaction</h2>
      < hr />
      <form>
        <div className='form-group'>
          <label>
            Text
          </label>
          < br />
          < input name="note" type="text" required className='form-input border-around px-20' />
        </div>
        <div>
          <label>
            Amount (negative - expense, positive - income)
          </label>
          < br />
          < input name="amount" type="number" required className='form-input border-around px-20' />
        </div>
        <div className='form-submit text-center'>
          <button className='form-submit-btn border-around'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
