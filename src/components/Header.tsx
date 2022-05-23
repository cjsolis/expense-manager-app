import { FC } from "react";
import { IBudgetProps } from "../types/BudgetProps.interface";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header: FC<IBudgetProps> = ({
  budget,
  setBudget,
  isBudgetValid,
  setIsBudgetValid,
}) => {
  return (
    <header>
      <h1>Expenses Manager</h1>
      {isBudgetValid ? (
        <BudgetControl budget={budget} />
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
