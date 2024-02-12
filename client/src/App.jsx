// import React from 'react'
// import Work1 from './components1/Work1'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div>
//       <Work1/>
//       <Navbar/>
//     </div>
//   )
// }

// export default App





import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Home from "./Talwind/Pages/Home/Home";
import About from "./Talwind/Pages/Success/About";
import Signup1 from "./Talwind/Pages/signup/Signup1";
import './shankarapp.css';
// 

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/signup' element={<Signup1/>}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/app" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
            <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
