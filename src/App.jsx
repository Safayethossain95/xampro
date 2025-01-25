
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Createpackage from './pages/Create-package';
import Loginpage from './pages/Loginpage';
import Cartpage from './pages/Cartpage';
import PackagePage from './pages/PackagePage';
function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/package" element={<PackagePage />} />
        <Route path="/create-package" element={<Createpackage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
