import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const About = () => {
    return (
        <div>
            <h1>
                About us
            </h1>
            <p>
                We are responsible for coordinating some of the key elements that keep the Internet running smoothly.
                Whilst the Internet is renowned for being a worldwide network free from central coordination, there is a
                technical need for some key parts of the Internet to be globally coordinated, and this coordination role
                is undertaken by us.
            </p>
            <p>
                Specifically, we allocate and maintain unique codes and numbering systems that are used in the technical
                standards (“protocols”) that drive the Internet.
            </p>
            <p>
                Our various activities can be broadly grouped in to three categories:
            </p>
            <ul>
                <li>
                    <p>
                        Domain Names
                        <br/>
                        Management of the DNS Root, the .int and .arpa domains, and an IDN practices resource.
                    </p>
                </li>
                <li>
                    <p>
                        Number Resources
                        <br/>
                        Co-ordination of the global pool of IP and AS numbers, primarily providing them to Regional
                        Internet Registries (RIRs).
                    </p>
                </li>
                <li>
                    <p>
                        Protocol Assignments
                        <br/>
                        Internet protocols’ numbering systems are managed in conjunction with standards bodies.
                    </p>
                </li>
            </ul>
            <p>
                We are one of the Internet&#39;s oldest institutions, with the IANA functions dating back to the 1970s.
                Today the services are provided by Public Technical Identifiers, a purpose-built organization for
                providing the IANA functions to the community. PTI is an affiliate of ICANN, an
                internationally-organised non-profit organisation set up by the Internet community to coordinate our
                areas of responsibilities.
            </p>
            <h2>
                Mission Statement
            </h2>
            <p>
                This statement describes the role of PTI:
            </p>
            <p>
                <em>
                    PTI is responsible for the operational aspects of coordinating the Internet’s unique identifiers and
                    maintaining the trust of the community to provide these services in an unbiased, responsible and
                    effective manner.
                </em>
            </p>
            <h2>
                Our Policy Remit
            </h2>
            <p>
                We do not directly set policy by which we operate, instead we implement agreed policies and principles
                in a neutral and responsible manner. Using the policy-setting forums provided by ICANN, policy
                development for domain name operations and IP addressing is arrived at by many different stakeholders.
                ICANN has a structure of supporting organisations that contribute to deciding how ICANN runs, which in
                turn informs how PTI is operated. The development of Internet protocols, which often dictate how
                protocol assignments should be managed, are arrived at within the Internet Engineering Task Force, the
                Internet Engineering Steering Group, and the Internet Architecture Board.
            </p>
            <p>
                To improve its operations, we are actively involved in outreach too. As well as in ICANN forums, we
                participate in meetings and discussions with TLD operators, Regional Internet Registries, and other
                relevant communities. We provide manned helpdesks at key meetings to allow one-to-one interaction with
                our community of users, such as protocol developers and operators of critical Internet infrastructure.
            </p>
        </div>
    );
};

About.propTypes = {}

export default About;
