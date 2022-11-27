import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path=":countryName" element={<CountryDetails />} />
        <Route path="/*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
