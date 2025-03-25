import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Contact = () => {
    return (
        <div>
            <h1>
                Contact Us
            </h1>
            <p>
                If you have questions regarding abuse, please see our Abuse Issues and IP Addresses Page.
            </p>
            <h2>
                General email contact
            </h2>
            <p>
                iana@iana.org
            </p>
            <h2>
                Postal address
            </h2>
            <p>
                Internet Assigned Numbers Authority
                <br/>
                12025 Waterfront Drive, Suite 300
                <br/>
                Los Angeles CA 90094
                <br/>
                USA
            </p>
            <h2>
                Telephone contacts
            </h2>
            <p>
                +1-424-254-5300 (phone)
                <br/>
                +1-424-254-5033 (facsimile)
            </p>

        </div>
    );
};

Contact.propTypes = {}

export default Contact;

