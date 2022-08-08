import React, { useReducer } from 'react';
import { useTerminal } from '../context/TerminalContext';
import { reducer } from '../context/terminalReducers';
import { TOGGLE_THEME } from '../context/terminalActions';

export default function Terminal(props){
  const initialState = useTerminal();
  
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`terminal-box `}>
      Terminal Component
      <input 
        name=""
        value={state.darkTheme ? state.darkTheme : "not dark"}
        onChange={() => null}
      />

      <button
        onClick={() => 
          dispatch({ type: TOGGLE_THEME, payload: state.darkTheme})
        }
      >
        Dark
      </button>
    </div>
  );
};