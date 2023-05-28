import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import User from "./pages/User";
import { useState } from "react";
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import "./App.css";

function App() {
const[theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="full" id={theme}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home title = 'Главная страница'/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="user/:id" element={<User/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;