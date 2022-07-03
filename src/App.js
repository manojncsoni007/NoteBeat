import "./App.css";
import { Routes, Route, useLocation } from 'react-router-dom'
import { Archive, Homepage, LandingPage, Login, Signup, Trash } from "./pages";
import { Navbar, RequiredAuth } from "./components";


function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/" &&
        <Navbar />
      }
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={
          <RequiredAuth>
            <Homepage />
          </RequiredAuth>
        } />
        <Route path="/archive" element={
          <RequiredAuth>
            <Archive />
          </RequiredAuth>
        } />
        <Route path="/trash" element={
          <RequiredAuth>
            <Trash/>
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
