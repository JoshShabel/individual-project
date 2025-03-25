import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Dnssec = () => {
    return (
        <div>
            <h1>
                DNSSEC Information
            </h1>
            <h2>
                Root Zone Operator Information
            </h2>
            <p>
                Information regarding our role as operator of the Key Signing Key (KSK) for the DNS Root Zone.
            </p>
            <ul>
                <li>
                    Trust Anchors and Rollovers
                </li>
                <li>
                    KSK Ceremony Materials
                </li>
                <li>
                    Policies and Procedures for Root Zone Key Management
                </li>
                <li>
                    Trusted Community Representatives
                </li>
                <li>
                    Third-Party Audit Certification
                </li>
                <li>
                    Public Announcement Mailing List
                </li>
            </ul>
            <h2>
                Projects
            </h2>
            <ul>
                <li>
                    Project Archive
                    <br/>
                    Archived project information relating to the initial launch of DNSSEC in the Root Zone, and the
                    subsequent first KSK rollover.
                </li>
            </ul>
        </div>
    );
};

Dnssec.propTypes = {}

export default Dnssec;

