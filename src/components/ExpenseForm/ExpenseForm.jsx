import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSubmitForm(expenseData)
        setTitle('')
        setAmount('')
        setDate('')
    }
    const [bool, setBool] = useState(false);
    const showFormHandler = () => {
        setBool(true);
    }
    const hideFormHandler = () => {
        setBool(false);
    }
    return (
        bool ? 
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-31-12" value={date} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense_actions'>
                <button onClick={hideFormHandler} type='reset'>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form> : <div className='new-expense_actions'>
                <button onClick={showFormHandler}>Add Expense</button>
            </div>
    )
}

export default ExpenseForm;