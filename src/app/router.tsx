import { Route, Routes } from "react-router-dom";
import { pathname } from "./routes";
import App from "./app";
import Chat from "./chat";

export default function () {
  return (
    <Routes>
      <Route path={pathname} element={<App />}></Route>
      <Route path="chat" element={<Chat />}></Route>
      <Route path="*" element={<App />}></Route>
    </Routes>
  );
}
