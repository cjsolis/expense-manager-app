import React, { FC } from "react";
import { IExpense } from "../types/Expense.interface";
import IconEntertainment from "../img/icon_entertainment.svg";
import IconExpenses from "../img/icon_expenses.svg";
import IconFood from "../img/icon_food.svg";
import IconHealth from "../img/icon_health.svg";
import IconHome from "../img/icon_home.svg";
import IconSavings from "../img/icon_savings.svg";
import IconSubscriptions from "../img/icon_subscriptions.svg";

export interface IExpenseProps {
  expense: IExpense;
}

const iconMap: { [key: string]: string } = {
  savings: IconSavings,
  subscriptions: IconSubscriptions,
  home: IconHome,
  health: IconHealth,
  food: IconFood,
  expenses: IconExpenses,
  entertainment: IconEntertainment,
};

const Expense: FC<IExpenseProps> = ({ expense }) => {
  const { name, amount, category, date } = expense;
  return (
    <div className="expense shadow">
      <div className="expense-item">
        <img src={iconMap[category]} />
        <div className="expense-description">
          <p className="cateogry">{category}</p>
          <p className="expense-name">{name}</p>
          <p className="expense-date">Date added: {date}</p>
        </div>
      </div>
      <p className="expense-amount">₡{amount}</p>
    </div>
  );
};

export default Expense;
