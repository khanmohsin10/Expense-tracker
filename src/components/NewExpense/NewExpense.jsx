import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const submitFormHandler = (newExpenseData) => {
        const newExpense = {
            ...newExpenseData,
            id: Math.floor(Math.random()*999) + 1
        }
        props.onAddNewExpense(newExpense)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitForm={submitFormHandler} />
        </div>
    )
}

export default NewExpense;