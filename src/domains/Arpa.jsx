import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

/*TODO: style table*/
const Arpa = () => {
    return (
        <div>
            <h1>
                .ARPA Zone Management
            </h1>
            <p>
                The .arpa domain is the “Address and Routing Parameter Area” domain and is designated to be used
                exclusively for Internet-infrastructure purposes. We administer the domain in cooperation with the
                Internet technical community through the guidance of the Internet Architecture Board. For the management
                guidelines and operational requirements of the .arpa domain, see RFC 3172. The .arpa domain currently
                includes the following second-level domains:
            </p>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Domain
                        </th>
                        <th>
                            Usage / Reference
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            6tisch.arpa
                        </td>
                        <td>
                            For IPv6 over the Time-Slotted Channel Hopping mode of IEEE 802.15.4
                            <br/>
                            RFC 9031
                        </td>
                    </tr>
                    <tr>
                        <td>
                            arpa
                        </td>
                        <td>
                            Reserved exclusively to support operationally-critical infrastructural identifier spaces as
                            advised by the Internet Architecture Board
                            <br/>
                            RFC 3172
                        </td>
                    </tr>
                    <tr>
                        <td>
                            as112.arpa
                        </td>
                        <td>
                            For sinking DNS traffic for reverse IP address lookups and other applications
                            <br/>
                            RFC 7535
                        </td>
                    </tr>
                    <tr>
                        <td>
                            e164.arpa
                        </td>
                        <td>
                            For mapping E.164 numbers to Internet URIs
                            <br/>
                            RFC 6116
                        </td>
                    </tr>
                    <tr>
                        <td>
                            eap-noob.arpa
                        </td>
                        <td>
                            For the Nimble Out-Of-Band authentication method of the Extensible Authentication Protocol
                            framework
                            <br/>
                            RFC 9140
                        </td>
                    </tr>
                    <tr>
                        <td>
                            home.arpa
                        </td>
                        <td>
                            For non-unique use in residential home networks
                            <br/>
                            RFC 8375
                        </td>
                    </tr>
                    <tr>
                        <td>
                            in-addr-servers.arpa
                        </td>
                        <td>
                            For hosting authoritative name servers for the in-addr.arpa domain
                            <br/>
                            RFC 5855
                        </td>
                    </tr>
                    <tr>
                        <td>
                            in-addr.arpa
                        </td>
                        <td>
                            For mapping IPv4 addresses to Internet domain names
                            <br/>
                            RFC 1035
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ip6-servers.arpa
                        </td>
                        <td>
                            For hosting authoritative name servers for the ip6.arpa domain
                            <br/>
                            RFC 5855
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ip6.arpa
                        </td>
                        <td>
                            For mapping IPv6 addresses to Internet domain names
                            <br/>
                            RFC 3152
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ipv4only.arpa
                        </td>
                        <td>
                            For detecting the presence of DNS64 and for learning the IPv6 prefix used for protocol
                            translation
                            <br/>
                            RFC 7050
                        </td>
                    </tr>
                    <tr>
                        <td>
                            iris.arpa
                        </td>
                        <td>
                            For locating Internet Registry Information Services
                            <br/>
                            RFC 4698
                        </td>
                    </tr>
                    <tr>
                        <td>
                            ns.arpa
                        </td>
                        <td>
                            For hosting authoritative name servers for the .arpa domain
                            <br/>
                            RFC 9120
                        </td>
                    </tr>
                    <tr>
                        <td>
                            resolver.arpa
                        </td>
                        <td>
                            For discovery of designated DNS resolvers
                            <br/>
                            RFC 9462
                        </td>
                    </tr>
                    <tr>
                        <td>
                            service.arpa
                        </td>
                        <td>
                            For DNS-based service discovery over unicast
                            <br/>
                            draft-ietf-dnssd-srp-25
                        </td>
                    </tr>
                    <tr>
                        <td>
                            uri.arpa
                        </td>
                        <td>
                            For resolving Uniform Resource Identifiers according to the Dynamic Delegation Discovery
                            System
                            <br/>
                            RFC 3405 RFC 8958
                        </td>
                    </tr>
                    <tr>
                        <td>
                            urn.arpa
                        </td>
                        <td>
                            For resolving Uniform Resource Names according to the Dynamic Delegation Discovery System
                            <br/>
                            RFC 3405
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h2>
                Maintain
            </h2>
            <p>
                Changes to the .arpa zone must be coordinated manually with us.
            </p>
        </div>
    );
};

Arpa.propTypes = {}

export default Arpa;
