import './HomeInfoBoxes.module.css';
import PropTypes from "prop-types";
import HomeInfoBox from "./HomeInfoBox.jsx";
import styles from "./HomeInfoBoxes.module.css";

const HomeInfoBoxes = () => {
    return (

        <div className={styles.boxesStyle}>
            <HomeInfoBox id={0}></HomeInfoBox>
            <HomeInfoBox id={1}></HomeInfoBox>
            <HomeInfoBox id={2}></HomeInfoBox>
        </div>
    );
};

HomeInfoBoxes.propTypes = {
}

export default HomeInfoBoxes;