import { FC } from "react";
import { IExpense } from "../types/Expense.interface";
import Expense from "./Expense";

export interface IExpensesListProps {
  expenses: IExpense[];
}

const ExpensesList: FC<IExpensesListProps> = ({ expenses }) => {
  return (
    <div className="expenses-list container">
      <h2>{expenses?.length ? "Expenses" : "There are no expenses"}</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpensesList;
