import styles from './HomeInfoBox.module.css';
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function HomeInfoBox({id}) {
    const [arr, setArr] = useState([]);
    const [heading, setHeading] = useState("");
    const [headingLink, setHeadingLink] = useState("");
    const [summary, setSummary] = useState("");

    useEffect(() => { /*set up info boxes*/
        switch (id) {
            case 0: /*domains*/
                setArr([
                    {
                        text: 'Root Zone Management',
                        link: 'root'
                    },
                    {
                        text: '.int Registry',
                        link: 'int'
                    },
                    {
                        text: '.arpa Registry',
                        link: 'arpa'
                    },
                    {
                        text: 'IDN Practices Repository',
                        link: 'idn-tables'
                    },
                    {
                        text: 'Root Key Signing Key (DNSSEC)',
                        link: 'dnssec'
                    },
                    {
                        text: 'Reserved Domains',
                        link: 'reserved'
                    }
                ]);
                setHeading("Domain Names");
                setHeadingLink("domains");
                setSummary("Management of the DNS Root Zone (assignments of ccTLDs and gTLDs) along with other functions such as the .int and .arpa zones.");
                break;
            case 1:
                setArr([ /*numbers*/
                    {
                        text: 'RIR Allocation Data',
                        link: 'allocations'
                    },
                    {
                        text: 'Network abuse information',
                        link: 'abuse'
                    }
                ]);
                setHeading("Number Resources");
                setHeadingLink("numbers");
                setSummary("Coordination of the global IP and AS number spaces, such as allocations made to Regional Internet Registries.");
                break;
            case 2:
                setArr([ /*protocols*/
                    {
                        text: 'Time Zone Database',
                        link: 'time-zones'
                    },
                    {
                        text: 'Performance',
                        link: 'ietf-statistics'
                    },
                    {
                        text: 'IETF Draft Status',
                        link: 'ietf-draft-status'
                    }
                ]);
                setHeading("Protocol Assignments");
                setHeadingLink("protocols");
                setSummary("The central repository for protocol name and number registries used in many Internet protocols.");
                break;
            default:
                return 'error';
        }
    }, []);

    return (

        <div className={styles.boxStyle}>
            <h2><a href={'#/' + headingLink + '/'}>{heading}</a></h2>
            <p>{summary}</p>
            <ul>
                {arr.map(item => (
                    <li key={item}><a key={item} href={'#/' + headingLink + '/' + item.link + '/'}>{item.text}</a>
                    </li>))}
            </ul>
        </div>
    );
}

HomeInfoBox.propTypes = {
    id: PropTypes.number,
}

export default HomeInfoBox;