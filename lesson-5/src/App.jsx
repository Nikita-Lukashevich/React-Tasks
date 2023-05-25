import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import User from "./pages/User";

import "./App.css";

function App() {


  return (
    <div className="full">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home title = 'Главная страница'/>}/>
          <Route path="users" element={<Users/>}/>
          <Route path="user/:id" element={<User/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;