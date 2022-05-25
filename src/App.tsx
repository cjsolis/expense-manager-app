import { useEffect, useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNewExpense from "./img/icon_new-expense.svg";
import { IExpense } from "./types/Expense.interface";
import { getDefaultExpense } from "./utils/helper";

function App() {
  const [expenses, setExpenses] = useState<Array<IExpense>>([]);
  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [expenseToEdit, setExpenseToEdit] =
    useState<IExpense>(getDefaultExpense);

  useEffect(() => {
    if (JSON.stringify(expenseToEdit) !== JSON.stringify(getDefaultExpense())) {
      handleNewExpense()
    }
  }, [expenseToEdit]);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => setAnimateModal(true), 300);
  };

  const handleDeleteExpense = (expenseId: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div className={modal ? "fix-in-place" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
        expenses={expenses}
      />

      {isBudgetValid && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              handleDeleteExpense={handleDeleteExpense}
              setExpenseToEdit={setExpenseToEdit}
            />
          </main>
          <div className="new-expense">
            <img
              src={IconNewExpense}
              alt="new expense icon"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          setExpenses={setExpenses}
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  );
}

export default App;
