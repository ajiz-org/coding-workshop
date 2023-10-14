import { Route, Routes } from "react-router-dom";
import { pathname } from "./routes";
import { lazy } from "react";

const App = lazy(() => import("./app"));
const Chat = lazy(() => import("./chat"));

export default function () {
  return (
    <Routes>
      <Route path={pathname} element={<App />}></Route>
      <Route path={"/chat"} element={<Chat />}></Route>
      <Route path="*" element={<App />}></Route>
    </Routes>
  );
}
