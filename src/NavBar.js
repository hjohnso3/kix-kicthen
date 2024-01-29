import { Link, useNavigate  } from 'react-router-dom';
//import { getAuth, signOut } from 'firebase/auth';
//import useUser from './hooks/useUser';

const NavBar = () => {
//    const { user } = useUser();
    const navigate = useNavigate();
    return (
        <nav className="nav-flex-row">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
					<Link to="/contact">Contact Us</Link>
				</li>
            </ul>
        </nav>
    );
}

export default NavBar;