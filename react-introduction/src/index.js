import React from "react";
import ReactDOM from "react-dom/client";
import PropsExample from "./components/common/PropsExample/PropsExample";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Products from "./components/products/Products";
import Form from "./components/form/Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <PropsExample name1="Andrei" name2="Mihai" isStudent={false} />
    <Form />
    <Products />
  </React.StrictMode>
);
