//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/store/index.ts";

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <HashRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </HashRouter>
    </Provider>
  </>
);
