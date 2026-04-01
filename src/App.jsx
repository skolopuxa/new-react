import { Routes, Route, BrowserRouter } from "react-router-dom";
import { PageViewSet } from "./components/PageViewSet";
import { PageCreateSet } from "./components/PageCreateSet";

import { PageSelectSet } from "./components/PageSelectSet";
import { FormCreateCard } from "./components/FormCreateCard";
import { FormCreateSet } from "./components/FormCreateSet";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet />} />
        <Route path="/set/:id" element={<PageViewSet />} />
        <Route path="/admin" element={<PageCreateSet />} >
        <Route path="createset" element={<FormCreateSet/>} />
        <Route path="createcard" element={<FormCreateCard/>} />
        </Route>
        <Route path="*" element={<PageSelectSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

// import { Header } from "./components/Header"
// import { Set } from "./components/Set"

// function App() {
//   return (
//     <div >
//       <Header />
//       <Set />
//     </div>
//   );
// }

export default App;
