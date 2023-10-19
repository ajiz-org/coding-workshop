import { Route, Routes } from "react-router-dom";
import { pathname } from "./routes";
import App from "./app";

export default function () {
  return (
    <Routes>
      <Route path={pathname} element={<App />}></Route>
      <Route path="*" element={<App />}></Route>
    </Routes>
  );
}
