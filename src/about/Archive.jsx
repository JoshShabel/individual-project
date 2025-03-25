import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Archive = () => {
    return (
        <div>
            <h1>
                Archive
            </h1>
            <p>
                These are archived documents from prior services, projects or oversight mechanism that are no longer
                active. These documents should not be relied upon for up-to-date information on operations and are
                provided for historical purposes only.
            </p>
            <ul>
                <li>
                    Internet Monthly Reports (1991-1998)
                </li>
                <li>
                    ccTLD News (1997-2003)
                </li>
                <li>
                    NTIA Contract (2000-2016)
                </li>
                <li>
                    Initial Root DNSSEC Design and Launch (2008-2010)
                </li>
                <li>
                    First KSK Rollover Project (2015-2018)
                </li>
            </ul>
        </div>
    );
};

Archive.propTypes = {}

export default Archive;
