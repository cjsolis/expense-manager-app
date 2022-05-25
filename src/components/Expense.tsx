import { Dispatch, FC, ReactNode, SetStateAction } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { IExpense } from "../types/Expense.interface";
import IconEntertainment from "../img/icon_entertainment.svg";
import IconExpenses from "../img/icon_expenses.svg";
import IconFood from "../img/icon_food.svg";
import IconHealth from "../img/icon_health.svg";
import IconHome from "../img/icon_home.svg";
import IconSavings from "../img/icon_savings.svg";
import IconSubscriptions from "../img/icon_subscriptions.svg";
import { formatMoneyToCRC } from "../utils/helper";

export interface IExpenseProps {
  expense: IExpense;
  handleDeleteExpense: (expenseId: string) => void;
  setExpenseToEdit: Dispatch<SetStateAction<IExpense>>;
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

const Expense: FC<IExpenseProps> = ({
  expense,
  handleDeleteExpense,
  setExpenseToEdit,
}) => {
  const leadingActions = (): ReactNode => (
    <LeadingActions>
      <SwipeAction onClick={() => setExpenseToEdit(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = (): ReactNode => (
    <TrailingActions>
      <SwipeAction onClick={() => handleDeleteExpense(expense.id)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );

  const { name, amount, category, date } = expense;
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          <div className="expense-item">
            <img src={iconMap[category]} alt="expense-icon" />
            <div className="expense-description">
              <p className="cateogry">{category}</p>
              <p className="expense-name">{name}</p>
              <p className="expense-date">Date added: {date}</p>
            </div>
          </div>
          <p className="expense-amount">{formatMoneyToCRC(amount)}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
