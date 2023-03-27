import { useReducer, useState } from "react";
import {
  decrementAction,
  incrementAction,
  incrementByValue,
  resetAction
} from "./counterActions";
import reducer from "./counterReducer";

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [value, setValue] = useState(0);
  return (
    <>
      <h1>Counter :{state}</h1>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="increment by"
      />
      <div>
        <button onClick={() => dispatch(incrementAction)}>ADD</button>
        <button onClick={() => dispatch(decrementAction)}>REDUCE</button>
        <button onClick={() => dispatch(resetAction)}>RESET</button>
        <br />
        <button
          onClick={() => {
            const action = incrementByValue(value);
            dispatch(action);
          }}
        >
          ADD BY VALUE
        </button>

        <button
          onClick={() => {
            const action = incrementByValue(-value);
            dispatch(action);
          }}
        >
          REDUCE BY VALUE
        </button>
      </div>
    </>
  );
}
export default Counter;
