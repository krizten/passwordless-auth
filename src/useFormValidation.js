import { useState } from "react";
import { validateEmail } from "./helpers";

export function useFormValidation(initialState) {
  const [state, setState] = useState(initialState);

  return [
    state,
    (e) => {
      switch (e.target.name) {
        case "email":
          if (!e.target.value) {
            setState({
              ...state,
              [e.target.name]: "Email is required",
            });
          }
          if (!validateEmail(e.target.value)) {
            setState({
              ...state,
              [e.target.name]: "Email is not valid",
            });
          } else {
            setState({
              ...state,
              [e.target.name]: "",
            });
          }
          break;
        default:
          break;
      }
    },
  ];
}
