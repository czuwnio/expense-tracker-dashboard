'use client';

import React, { useState } from 'react';
import { PlusCircle, ArrowUpRight, ArrowDownRight, DollarSign, Activity } from 'lucide-react';

type Transaction = {
  id: string;
  desc: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', desc: 'Salary', amount: 5000, type: 'income', date: '2026-06-01' },
    { id: '2', desc: 'Rent', amount: 1200, type: 'expense', date: '2026-06-02' },
    { id: '3', desc: 'Groceries', amount: 300, type: 'expense', date: '2026-06-05' },
    { id: '4', desc: 'Freelance', amount: 800, type: 'income', date: '2026-06-10' },
  ]);

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <main className="max-w-5xl mx-auto p-6 lg:p-10 space-y-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back, here's your financial overview.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          <PlusCircle size={20} />
          <span>New Transaction</span>
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 font-medium">Total Balance</h3>
            <DollarSign className="text-blue-500" size={24} />
          </div>
          <p className="text-4xl font-bold mt-4">${balance.toLocaleString()}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 font-medium">Total Income</h3>
            <ArrowUpRight className="text-emerald-500" size={24} />
          </div>
          <p className="text-4xl font-bold mt-4 text-emerald-600 dark:text-emerald-400">+${totalIncome.toLocaleString()}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 font-medium">Total Expenses</h3>
            <ArrowDownRight className="text-rose-500" size={24} />
          </div>
          <p className="text-4xl font-bold mt-4 text-rose-600 dark:text-rose-400">-${totalExpense.toLocaleString()}</p>
        </div>
      </div>

      {/* Transactions List */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Activity size={20} className="text-blue-500"/> Recent Transactions
          </h2>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {transactions.map((tx) => (
            <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div>
                <p className="font-semibold text-lg">{tx.desc}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
              </div>
              <div className={`text-xl font-bold ${tx.type === 'income' ? 'text-emerald-500' : 'text-rose-500'}`}>
                {tx.type === 'income' ? '+' : '-'}${tx.amount.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
