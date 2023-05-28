import CustomLink from '../CustomLink/CustomLink'
import {CustomizedSwitches} from '../SwitchTheme/Switch'
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useContext} from 'react';
import './Header.css'


const Header = () =>{
    const {theme, setTheme} = useContext(ThemeContext)
    console.log("theme: ", theme);

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return(
     <header>
        <nav>
            <ul className='navLink'>
                <li>
                    <CustomLink to='/'>Home</CustomLink>
                </li>
                <li>
                    <CustomLink to='/users'>Users</CustomLink>
                </li>
                <li>
                    <CustomLink to='/user/:id'>User</CustomLink>
                </li>
            </ul>
        </nav>
        <div>
            <CustomizedSwitches changeTheme={changeTheme} />
        </div>
     </header>
    )
} 

export default Header