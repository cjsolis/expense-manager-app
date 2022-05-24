import { IExpense } from "../types/Expense.interface";

export const formatMoneyToCRC = (amount: number) => {
  return amount.toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
  });
};

export const formContainsEmptyValues = (expense: IExpense): boolean => {
  return [expense?.name, expense?.category].includes("") || !expense?.amount;
};

export const getDefaultExpense = (): IExpense => {
  return {
    id: "",
    name: "",
    amount: 0,
    category: "",
    date: "",
  };
};

export const generateRandomId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const generateCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
