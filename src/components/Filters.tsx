import { Dispatch, FC, SetStateAction } from "react";

export interface IFiltersProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const Filters: FC<IFiltersProps> = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form>
        <div className="field">
          <label>Filter expenses</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
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
      </form>
    </div>
  );
};

export default Filters;
