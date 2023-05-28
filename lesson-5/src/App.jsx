import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import User from "./pages/User";
import AboutUs from "./pages/AboutUs";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import { AboutUsContext } from "./context/AboutUs/AboutUs";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [aboutUs, setAboutUs] = useState([
    {
      id: 1,
      name: "Max",
      speciality: "CEO",
      img:'./img/1.jpg',
    },
    {
      id: 2,
      name: "Armando",
      speciality: "COO",
      img:'./img/2.jpg',
    },
    {
      id: 3,
      name: "Carlo",
      speciality: "CTO",
      img:'./img/3.jpg',
      
    },
    {
      id: 4,
      name: "Jesus",
      speciality: "Lead Designer",
      img:'./img/4.jpg',
    },
    {
      id: 5,
      name: "Valerio",
      speciality: "Software Engineer",
      img:'./img/5.jpg',
    },
  ]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AboutUsContext.Provider value={{ aboutUs, setAboutUs }}>
        <div className="full" id={theme}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home title="Главная страница" />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="users" element={<Users />} />
              <Route path="user/:id" element={<User />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </AboutUsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
