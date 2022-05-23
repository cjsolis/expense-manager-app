import { Dispatch, SetStateAction } from "react";

export interface IBudgetProps {
  budget: number;
  setBudget: Dispatch<SetStateAction<number>>;
  isBudgetValid: boolean;
  setIsBudgetValid: Dispatch<SetStateAction<boolean>>;
}
