import { FC, useEffect, useState } from "react";
import { IExpense } from "../types/Expense.interface";
import { formatMoneyToCRC } from "../utils/helper";

export interface IBudgetControlProps {
  budget: number;
  expenses: IExpense[];
}

const BudgetControl: FC<IBudgetControlProps> = ({ budget, expenses }) => {
  const [availableBudget, setAvailableBudget] = useState<number>(budget);
  const [spentBudget, setSpentBudget] = useState<number>(0);

  useEffect(() => {
    const totalSpent: number = expenses?.reduce(
      (total, expense) => expense.amount + total,
      0
    );

    setSpentBudget(totalSpent);
    setAvailableBudget(budget - totalSpent);
  }, [expenses]);

  return (
    <div className="container-budget container shadow two-columns">
      <div>Graph</div>
      <div className="content-budget">
        <p>
          <span>Budget: </span>
          {formatMoneyToCRC(budget)}
        </p>

        <p>
          <span>Available: </span>
          {formatMoneyToCRC(availableBudget)}
        </p>

        <p>
          <span>Spent: </span>
          {formatMoneyToCRC(spentBudget)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
