import React from "react";
import ReactDOM from "react-dom/client";
import App from "app/router";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
