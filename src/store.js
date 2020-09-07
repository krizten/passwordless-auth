import React, { createContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  user: undefined,
};

const types = {
  SET_USER_DATA: "SET_USER_DATA",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.SET_USER_DATA:
      break;

    default:
      break;
  }
};

const StoreContext = createContext(initialState);
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatches = {
    setUserData(data) {
      dispatch({
        type: types.SET_USER_DATA,
        payload: data,
      });
    },
  };

  return (
    <StoreContext.Provider value={{ ...state, ...dispatches }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
