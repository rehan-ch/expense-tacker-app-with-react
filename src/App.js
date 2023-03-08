import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionsList from './components/TransactionsList';

function App() {
  return (
    <div className='App border-around p-20'>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionsList/>
      <AddTransaction/>
    </div>
  );
}

export default App;
