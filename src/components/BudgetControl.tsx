import { FC } from "react";
import { formatMoneyToCRC } from "../utils/helper";

export interface IBudgetControlProps {
  budget: number;
}

const BudgetControl: FC<IBudgetControlProps> = ({ budget }) => {
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
          {formatMoneyToCRC(budget)}
        </p>

        <p>
          <span>Spent: </span>
          {formatMoneyToCRC(budget)}
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
