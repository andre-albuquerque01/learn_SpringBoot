import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Get } from "./components/Get";
import { Add } from "./components/Add";
import { Up } from "./components/Up";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Up />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
