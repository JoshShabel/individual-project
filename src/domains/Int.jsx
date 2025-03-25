import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Int = () => {
    return (
        <div>
            <h1>
                .INT Zone Management
            </h1>
            <p>
                The .int domain is a specialized domain offering registrations solely to intergovernmental
                organisations. In brief, the .int domain is used for registering organisations established by
                international treaties between or among national governments. Only one registration is allowed for each
                organisation. There is no fee for registering an .int domain name.
            </p>
            <h2>
                Maintain
            </h2>
            <ul>
                <li>
                    Register or Modify a .int domain
                    <br/>
                    <strong>Note: </strong>Be sure you read the eligibility criteria before applying for a .int domain to ensure you meet the
                    rules, and that you have relevant documentation.
                </li>
            </ul>
            <h2>
                Policy &amp; Procedures
            </h2>
            <ul>
                <li>
                    Eligibility Criteria for a .int Domain
                </li>
                <li>
                    Domain Name System Structure and Delegation (RFC 1591, March 1994)
                </li>
            </ul>
        </div>
    );
};

Int.propTypes = {}

export default Int;

