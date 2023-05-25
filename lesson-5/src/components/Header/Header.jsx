import CustomLink from '../CustomLink/CustomLink'
import './Header.css'

const Header = () =>{
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
     </header>
    )
} 

export default Header