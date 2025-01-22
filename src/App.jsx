
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Createpackage from './pages/Create-package';
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cp" element={<Createpackage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
