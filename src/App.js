import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import AddTransaction from './components/AddTransaction';
import TransactionsList from './components/TransactionsList';
import { TransactionProvider } from './context/transactionContext';

function App() {
  return (
    <div className='App border-around p-20'>
      <Header/>
      <TransactionProvider>
        <Balance/>
        <IncomeExpenses/>
        <TransactionsList/>
        <AddTransaction/>
      </TransactionProvider>
    </div>
  );
}

export default App;
