import styles from './../../styles/Navbar.module.css';
import logo from './../../assets/logo_edisea.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className={styles.nav} >
            <picture>
                <Link to='/'><img src={logo} alt="logo_edisea" /></Link>
            </picture>
        </nav>
    );
}

export default Navbar;