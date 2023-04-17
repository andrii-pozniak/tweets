import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../src/pages/Layout";
import { Home } from "../src/pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </div>
  );
};
