// import './App.css';
// import { Routes, Route } from "react-router-dom";
// import logo from "./image/logo.svg";
// import {
//   Section,
//   Logo
//  } from "./App.Style";
//  import {Card} from "../src/components/Card/Card";

// function App() {
//   return (

//     <Section >
//       <Logo src={logo} alt=''/>
//       <Card/>
//     </Section>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../src/pages/Layout";
import { Home } from "../src/pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";

// import logo from "./image/logo.svg";
// import {
//   Section,
//   Logo
//  } from "./App.Style";
//  import {Card} from "../src/components/Card/Card";

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
