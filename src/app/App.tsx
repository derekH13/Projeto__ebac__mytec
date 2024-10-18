import { Provider } from "react-redux";
import { Routes } from "./routes";
import store from "../store/store";

export const App = () => {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

