import { Route, Routes } from "react-router-dom";
import App from "./app";
import Chat from "./chat";

export default function () {
  return (
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path="*" element={<Chat />}></Route>
    </Routes>
  );
}
