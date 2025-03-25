import styles from './SubPage.module.css';
import PropTypes from "prop-types";
import {Navigate, useParams} from "react-router-dom"
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Numbers from "../numbers/Numbers.jsx";
import Abuse from "../numbers/Abuse.jsx";
import Allocations from "../numbers/Allocations.jsx";
import Reserved from "../domains/Reserved.jsx";
import Dnssec from "../domains/Dnssec.jsx";
import IdnTables from "../domains/IdnTables.jsx";
import Arpa from "../domains/Arpa.jsx";
import Int from "../domains/Int.jsx";
import Root from "../domains/Root.jsx";
import Domains from "../domains/Domains.jsx";
import About from "../about/About.jsx";
import News from "../about/News.jsx";
import Performance from "../about/Performance.jsx";
import Audits from "../about/Audits.jsx";
import Excellence from "../about/Excellence.jsx";
import Archive from "../about/Archive.jsx";
import Contact from "../about/Contact.jsx";
import Protocols from "../protocols/Protocols.jsx";
import IetfDraftStatus from "../protocols/IetfDraftStatus.jsx";
import IetfStatistics from "../protocols/IetfStatistics.jsx";
import TimeZones from "../protocols/TimeZones.jsx";
function SubPage() {
    const { page, innerPage } = useParams();
    function chooseSubpage() {
        switch(page) {
            case "domains":
                switch(innerPage) {
                    case "root":
                        return <Root></Root>
                    case "int":
                        return <Int></Int>
                    case "arpa":
                        return <Arpa></Arpa>
                    case "idn-tables":
                        return <IdnTables></IdnTables>
                    case "dnssec":
                        return <Dnssec></Dnssec>
                    case "reserved":
                        return <Reserved></Reserved>
                    default:
                        return <Domains></Domains>;
                }
            case "numbers":
                switch(innerPage){
                    case "abuse":
                        return <Abuse></Abuse>
                    case "allocations":
                        return <Allocations></Allocations>
                    default:
                        return <Numbers></Numbers>;
                }
            case "protocols":
                switch(innerPage) {
                    case "time-zones":
                        return <TimeZones></TimeZones>
                    case "ietf-statistics":
                        return <IetfStatistics></IetfStatistics>
                    case "ietf-draft-status":
                        return <IetfDraftStatus></IetfDraftStatus>
                    default:
                        return <Protocols></Protocols>;
                }

            case "about":
                switch(innerPage) {
                    case "news":
                        return <News></News>
                    case "performance":
                        return <Performance></Performance>
                    case "audits":
                        return <Audits></Audits>
                    case "excellence":
                        return <Excellence></Excellence>
                    case "archive":
                        return <Archive></Archive>
                    case "contact":
                        return <Contact></Contact>
                    default:
                        return <About></About>;
                }
            default:
                return <Navigate to="/notFound/"/>;
        }
    }
    return (
        <div >
            <Navbar></Navbar>
            <div className={styles.subPageOverStyle}>
                <Sidebar id={page}></Sidebar>
                <div className={styles.subPageStyle} >
                {chooseSubpage()}
                </div>
            </div>
        </div>
    );
}

SubPage.propTypes = {
    page: PropTypes.string,
    innerPage: PropTypes.string
}

export default SubPage;