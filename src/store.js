import React, { createContext, useReducer } from "react";
import storage from "store2";

const initialState = {
  isAuthenticated: false,
  authToken: storage.has("auth_token") ? storage.get("auth_token") : "",
  user: undefined,
};

const types = {
  AUTHENTICATE_USER: "AUTHENTICATE_USER",
  SET_USER_DATA: "SET_USER_DATA",
  RESET_AUTH: "RESET_AUTH",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.AUTHENTICATE_USER:
      storage.set("auth_token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.payload,
      };
    case types.SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case types.RESET_AUTH:
      storage.clearAll();
      return {
        ...state,
        isAuthenticated: false,
        authToken: undefined,
        user: undefined,
      };
    default:
      return state;
  }
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatches = {
    authenticateUser(authToken) {
      dispatch({
        type: types.AUTHENTICATE_USER,
        payload: authToken,
      });
    },
    setUserData(data) {
      dispatch({
        type: types.SET_USER_DATA,
        payload: data,
      });
    },
    resetAuth() {
      dispatch({
        type: types.RESET_AUTH,
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
