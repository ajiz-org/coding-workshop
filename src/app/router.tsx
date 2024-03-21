import { Route, Routes } from "react-router-dom";
import App from "./app";
import Admin from "./admin";

export default function () {
  return (
    <Routes>
      <Route path="admin" element={<Admin />}></Route>
      <Route path="*" element={<App />}></Route>
    </Routes>
  );
}
