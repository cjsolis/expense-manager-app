import { Dispatch, FC, SetStateAction } from "react";
import { IExpense } from "../types/Expense.interface";
import Expense from "./Expense";

export interface IExpensesListProps {
  expenses: IExpense[];
  handleDeleteExpense: (expenseId: string) => void;
  setExpenseToEdit: Dispatch<SetStateAction<IExpense>>;
}

const ExpensesList: FC<IExpensesListProps> = ({
  expenses,
  handleDeleteExpense,
  setExpenseToEdit,
}) => {
  return (
    <div className="expenses-list container">
      <h2>{expenses?.length ? "Expenses" : "There are no expenses"}</h2>
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          handleDeleteExpense={handleDeleteExpense}
          setExpenseToEdit={setExpenseToEdit}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
