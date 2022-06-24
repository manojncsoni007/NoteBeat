import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Homepage, LandingPage, Login, Signup } from "./pages";
import { RequiredAuth } from "./components";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={
          <RequiredAuth>
            <Homepage />
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
