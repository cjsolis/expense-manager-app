import { FC, useEffect, useState } from "react";
import { IExpense } from "../types/Expense.interface";
import { formatMoneyToCRC } from "../utils/helper";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export interface IBudgetControlProps {
  budget: number;
  expenses: IExpense[];
}

const BudgetControl: FC<IBudgetControlProps> = ({ budget, expenses }) => {
  const [availableBudget, setAvailableBudget] = useState<number>(budget);
  const [spentBudget, setSpentBudget] = useState<number>(0);
  const [availableBudgetPercent, setAvailableBudgetPercent] =
    useState<number>(0);

  useEffect(() => {
    const totalSpent: number = expenses?.reduce(
      (total, expense) => expense.amount + total,
      0
    );

    const availablePercent = ((totalSpent / budget) * 100).toFixed(2);
    setTimeout(() => {
      setAvailableBudgetPercent(Number(availablePercent));
    }, 500);

    setSpentBudget(totalSpent);
    setAvailableBudget(budget - totalSpent);
  }, [expenses]);

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: availableBudgetPercent > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: availableBudgetPercent > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={availableBudgetPercent}
          text={`${availableBudgetPercent}% spent`}
        />
      </div>
      <div className="content-budget">
        <p>
          <span>Budget: </span>
          {formatMoneyToCRC(budget)}
        </p>

        <p className={`${availableBudget < 0 ? "negative" : ""}`}>
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
