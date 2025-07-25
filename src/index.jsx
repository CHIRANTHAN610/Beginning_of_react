import {createRoot}  from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Fragment } from "react/jsx-runtime";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
    <App />
 
    </>
);
