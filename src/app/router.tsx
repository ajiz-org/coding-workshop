import { Route, Routes } from "react-router-dom";
import App from "./app";
import "../index.css";
// import Chat from "./chat";

export default function () {
  return (
    <main>
      <Routes>
        <Route path="/" element={<App />}></Route>
        {/* <Route path="*" element={<Chat />}></Route> */}
      </Routes>
    </main>
  );
}
