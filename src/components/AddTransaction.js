import React from 'react'

const AddTransaction = () => {
  return (
    <div>
      <h2>Add new transaction</h2>
      < hr />
      <form>
        <div>
          <label>
            Text
          </label>
          < br />
          < input name="note" type="text" />
        </div>
        <div>
          <label>
            Amount< br />(negative - expense, positive - income)
          </label>
          < br />
          < input name="amount" type="number" />
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
