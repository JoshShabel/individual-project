import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Domains = () => {
    return (
        <div>
            <h1>
                Domain Name Services
            </h1>
            <p>
                We operate and maintain a number of key aspects of the DNS, including the root zone, and the .int and
                .arpa domains.
            </p>
            <p>
                The DNS Root Zone
                <br/>
                The root is the upper-most part of the DNS hierarchy, and involves delegating administrative
                responsibility of “top-level domains”, which are the last segment of a domain name, such as .com, .uk
                and .nz. Part of our tasks includes evaluating requests to change the operators of country code domains,
                as well as day-to-day maintenance of the details of the existing operators.
            </p>
            <p>
                .INT
                <br/>
                The .int top-level domain, designed for the sole use of cross-national organisations, such as treaty
                organisations, that do not naturally fit into a specific country’s top-level domain. For example,
                who.int for the World Health Organisation.
            </p>
            <p>
                .ARPA
                <br/>
                The .arpa domain is used internally by Internet protocols, such as for reverse mapping of IP addresses,
                and delivery of ENUM phone number mapping. We administer this domain in close liaison with the Internet
                Architecture Board, which has policy responsibility for .arpa.
            </p>
            <p>
                IDN Practices Repository
                <br/>
                To help foster the deployment of Internationalised Domain Names (IDNs), a repository of “IDN tables”
                which document the permissable characters for different languages and scripts provided for registration
                by different top-level domain registries. The repository is informative, and designed for information
                sharing.
            </p>
            <p>
                Root Key Signing Key (DNSSEC)
                <br/>
                The Root Key Signing Key provides verification of the DNSSEC-signed root zone.
            </p>
            <p>
                Reserved Domains
                <br/>
                A number of special domains are reserved or managed for demonstration purposes, or for future use.
            </p>
        </div>
    );
};

Domains.propTypes = {}

export default Domains;

