import Header from "../Header";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../utils/store";
test("Headr should laod ", () => {
  const header = render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  console.log(header);
});
