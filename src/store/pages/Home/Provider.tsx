import { useState } from "react";
import type { ReactNode } from "react";

import Context from "./Context";
import type { ContextState } from "./Context";

type Props = {
  children: ReactNode;
  value: ContextState;
};

function Provider({ children, value }: Props) {
  const contextState = useState(value);

  return <Context.Provider value={contextState}>{children}</Context.Provider>;
}

export default Provider;
