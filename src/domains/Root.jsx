import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Root = () => {
    return (
        <div>
            <h1>
                Root Zone Management
            </h1>
            <p>
                We are responsible for management of the DNS root zone. This role means assigning the operators of
                top-level domains, such as .uk and .com, and maintaining their technical and administrative details.
            </p>
            <h2>
                Browse
            </h2>
            <p>
                The Root Zone Database contains the authoritative record of the operators of various top-level domains.
            </p>
            <ul>
                <li>
                    Root Zone Database
                </li>
            </ul>
            <h2>
                Maintain
            </h2>
            <p>
                TLD operators can change their delegation details by submitting revised details using our online
                interface, or via the email template.
            </p>
            <ul>
                <li>
                    Root zone change requests
                </li>
            </ul>
            <h2>
                Policy, Procedures and Guides
            </h2>
            <ul>
                <li>
                    Domain Name System Structure and Delegation (RFC 1591, March 1994)
                </li>
                <li>
                    Other procedures and guides...
                </li>
            </ul>
            <h2>
                DNSSEC Key Signing Key Information
            </h2>
            <p>
                Information regarding our role as operator of the Key Signing Key for the DNS Root Zone.
            </p>
            <ul>
                <li>
                    Root Zone DNSSEC Trust Anchors
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
            <h3>
                Projects
            </h3>
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

Root.propTypes = {}

export default Root;

