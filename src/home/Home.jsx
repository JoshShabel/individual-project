import './Home.module.css';
import PropTypes from "prop-types";
import HomeHeader from "./HomeHeader.jsx";
import HomeInfoBoxes from "./HomeInfoBoxes.jsx";
import HomeFooter from "./HomeFooter.jsx";

const Home = () => {
    return (

        <div>
            <HomeHeader></HomeHeader>
            <HomeInfoBoxes></HomeInfoBoxes>
            <HomeFooter></HomeFooter>
        </div>
    );
};

Home.propTypes = {
}

export default Home;