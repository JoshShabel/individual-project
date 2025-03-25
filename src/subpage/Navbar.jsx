import styles from './Navbar.module.css';
import PropTypes from "prop-types";
import ianaLogo from '../assets/iana-logo-header.svg'
const Navbar = () => {
    return (

        <div className={styles.navBarStyle}>
            <img src={ianaLogo} alt="iana logo" />
            <ul>
                <li><a href="/#/domains">Domains</a></li>
                <li><a href="/#/protocols">Protocols</a></li>
                <li><a href="/#/numbers">Numbers</a></li>
                <li><a href="/#/news">News</a></li>
                <li><a href="/#/about">About</a></li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
}

export default Navbar;