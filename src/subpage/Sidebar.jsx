import styles from './Sidebar.module.css';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import numbersData from '../numbers/numbersSidebar.json';
import protocolsData from '../protocols/protocolsSidebar.json';
import domainsData from '../domains/domainsSidebar.json';
import aboutData from '../about/aboutSidebar.json';
import Numbers from "../numbers/Numbers.jsx";


function Sidebar({id, innerId}) {
    const [arr, setArr] = useState([]);

    useEffect(() => { /*set up info boxes*/
        switch (id) {
            case "domains": /*domains*/
                setArr(domainsData.list);
                break;
            case "numbers": /*numbers*/
                setArr(numbersData.list);
                break;
            case "protocols":  /*protocols*/
                setArr(protocolsData.list);
                break;
            case "about":  /*about*/
                setArr(aboutData.list);
                break;
            default:
                return 'error';
        }
    }, []);

    return (

        <div className={styles.sidebarStyle}>
            <ul>
                {arr.map(item => (
                    <li key={item}><a key={item} href={'#/' + id + '/' + item.link}>{item.text}</a>
                    </li>))}
            </ul>
        </div>
    );
}

Sidebar.propTypes = {
    id: PropTypes.string,
    innerId: PropTypes.string
}

export default Sidebar;