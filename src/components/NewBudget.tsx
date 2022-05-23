import { ChangeEvent, FC, useState } from "react";
import { IBudgetProps } from "../types/BudgetProps.interface";
import Message from "./Message";

export interface INewBudgetProps extends Omit<IBudgetProps, "isBudgetValid"> {}

const NewBudget: FC<INewBudgetProps> = ({
  budget,
  setBudget,
  setIsBudgetValid,
}) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (budget < 1) {
      setError(true);
      return;
    }

    setError(false);
    setIsBudgetValid(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  return (
    <div className="container-budget container shadow">
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Create budget</label>
          <input
            className="new-budget"
            type="number"
            placeholder="Add a new budget"
            value={budget}
            onChange={handleChange}
          />
        </div>
        {error && (
          <Message type="error" message="Budgets should be greater than 1" />
        )}
        <input type="submit" value="Add budget" />
      </form>
    </div>
  );
};

export default NewBudget;
