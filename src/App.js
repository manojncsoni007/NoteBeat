import { Routes, Route, useLocation } from 'react-router-dom'
import { Archive, Homepage, Label, LandingPage, Login, Profile, Signup, Trash } from "./pages";
import { Navbar, RequiredAuth } from "./components";
import { ToastContainer } from "react-toastify";

import "./App.css";


function App() {
  const { pathname } = useLocation();
  return (
    <>
    <ToastContainer />
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
        <Route path="/label" element={
          <RequiredAuth>
            <Label />
          </RequiredAuth>
        } />
        <Route path="/archive" element={
          <RequiredAuth>
            <Archive />
          </RequiredAuth>
        } />
        <Route path="/trash" element={
          <RequiredAuth>
            <Trash />
          </RequiredAuth>
        } />
        <Route path="/profile" element={
          <RequiredAuth>
            <Profile />
          </RequiredAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
