import Provider from "store/pages/Home/Provider";
import Home from "./Home";

function Page() {
  return (
    <Provider
      value={{
        issueLoading: false,
      }}
    >
      <Home />
    </Provider>
  );
}

export default Page;
