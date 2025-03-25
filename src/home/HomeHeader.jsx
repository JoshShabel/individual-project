import styles from './HomeHeader.module.css';
import PropTypes from "prop-types";
import ianaLogo from '../assets/iana-logo-homepage.svg'

/*TODO: link "learn more" to about*/
const Home = () => {
    return (

        <div className={styles.homeHeaderStyle}>
            <img src={ianaLogo}  alt="iana logo" />
            <p>The global coordination of the DNS Root, IP addressing, and other Internet<br/>
                protocol resources is performed as the Internet Assigned Numbers<br/>
                Authority (IANA) functions. Learn more.</p>
        </div>
    );
};

Home.propTypes = {
}

export default Home;