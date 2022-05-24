import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNewExpense from "./img/icon_new-expense.svg";
import { IExpense } from "./types/Expense.interface";

function App() {
  const [expenses, setExpenses] = useState<Array<IExpense>>([]);
  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => setAnimateModal(true), 300);
  };

  return (
    <>
      <Header
        budget={budget}
        setBudget={setBudget}
        isBudgetValid={isBudgetValid}
        setIsBudgetValid={setIsBudgetValid}
      />

      {isBudgetValid && (
        <>
          <main>
            <ExpensesList expenses={expenses} />
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
        />
      )}
    </>
  );
}

export default App;
