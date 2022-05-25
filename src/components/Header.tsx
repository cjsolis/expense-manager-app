import { FC } from "react";
import { IBudgetProps } from "../types/BudgetProps.interface";
import { IExpense } from "../types/Expense.interface";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

export interface IHeaderProps extends IBudgetProps {
  expenses: IExpense[]
}

const Header: FC<IHeaderProps> = ({
  expenses,
  budget,
  setBudget,
  isBudgetValid,
  setIsBudgetValid,
}) => {
  return (
    <header>
      <h1>Expenses Manager</h1>
      {isBudgetValid ? (
        <BudgetControl budget={budget} expenses={expenses} />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsBudgetValid={setIsBudgetValid}
        />
      )}
    </header>
  );
};

export default Header;
