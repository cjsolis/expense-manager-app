import {
  ChangeEvent,
  createRef,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import IconClose from "../img/icon_close.svg";
import { IExpense } from "../types/Expense.interface";
import {
  formContainsEmptyValues,
  generateCurrentDate,
  generateRandomId,
  getDefaultExpense,
} from "../utils/helper";
import Message from "./Message";

export interface IModalProps {
  animateModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  setAnimateModal: Dispatch<SetStateAction<boolean>>;
  setExpenses: Dispatch<SetStateAction<IExpense[]>>;
}

const Modal: FC<IModalProps> = ({
  animateModal,
  setModal,
  setAnimateModal,
  setExpenses,
}) => {
  const [expense, setExpense] = useState<IExpense>(getDefaultExpense);
  const [errorMessage, setErrorMessage] = useState("");

  const formRef = createRef<HTMLFormElement>();

  const handleClose = () => {
    setAnimateModal(false);
    setTimeout(() => setModal(false), 300);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formContainsEmptyValues(expense) || expense?.amount < 1) {
      setTimeout(
        () =>
          formContainsEmptyValues(expense)
            ? setErrorMessage("All fields are required")
            : setErrorMessage("Amount should be a positive number"),
        150
      );
      return;
    }

    setErrorMessage("");
    expense.id = generateRandomId();
    expense.date = generateCurrentDate()
    setExpenses((prev) => (prev ? [...prev, expense] : [expense]));
    handleClearForm();
    handleClose();
  };

  const handleChange = (e: ChangeEvent<any>) => {
    const key: keyof IExpense = e.target.id;
    const value: string = e.target.value;
    const updatedField = { [key]: value };
    setExpense({ ...expense, ...updatedField });
  };

  const handleClearForm = () => {
    setExpense(getDefaultExpense);
    formRef.current?.reset();
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={IconClose} alt="close icon" onClick={handleClose} />
      </div>

      <form
        className={`form ${animateModal ? "animate" : "close"}`}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <legend>New Expense</legend>

        <div className="field">
          <label htmlFor="name">Expense name</label>
          <input
            id="name"
            type="text"
            placeholder="Expense name"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            placeholder="Amount in colones"
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="cateogry">Cateogry</label>
          <select id="category" onChange={handleChange}>
            <option value="">-- Select option --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="home">Home</option>
            <option value="expenses">Expenses</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        {errorMessage && <Message message={errorMessage} type="error" />}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Modal;
