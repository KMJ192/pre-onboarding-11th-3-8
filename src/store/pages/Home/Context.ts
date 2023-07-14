import { createContext } from "react";

type ContextState = {
  issueLoading: boolean;
};

type ContextDispatch = [
  ContextState,
  (value: ContextState | ((value: ContextState) => ContextState)) => void
];

const INIT_CONTEXT: ContextDispatch = [
  {
    issueLoading: false,
  },
  () => ({}),
];

const Context = createContext(INIT_CONTEXT);

export type { ContextState, ContextDispatch };
export default Context;
