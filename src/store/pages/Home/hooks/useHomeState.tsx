import { useContext } from "react";
import Context from "../Context";

function useHomeState() {
  const contextState = useContext(Context);

  return contextState;
}

export default useHomeState;
