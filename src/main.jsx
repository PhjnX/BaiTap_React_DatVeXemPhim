import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.scss";
import App from "./App.jsx";
import rootReducer from "./redux/reducer/rootReducer.js";
import "flowbite/dist/flowbite.min.js";

// Tạo store Redux
const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
