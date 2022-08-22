import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = []
    const filterChangeHandler = selectedYear => setFilteredYear(selectedYear);
    props.expenses.map(expense => {
      return expense.date.getFullYear() === parseInt(filteredYear) ? filteredExpenses.push(expense)
      : null
    })

    return(
      <div className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {
          filteredExpenses.length ? filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> )
          : <p>No expenses found.</p>
          }
      </div>
    )
}

export default Expenses;