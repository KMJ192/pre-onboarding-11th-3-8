import useHomeState from "./useHomeState";

function useSetHomeState() {
  return useHomeState()[1];
}

export default useSetHomeState;
