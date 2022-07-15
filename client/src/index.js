import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import BookSave from "./components/BookSave";
import BaseLayout from "./components/BaseLayout";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/add-book" element={<BookSave />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
