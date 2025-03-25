import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Audits = () => {
    return (
        <div>
            <h1>
                Audit Programs
            </h1>
            <div>
            </div>
            <p>
                We are committed to ensuring the security and stability of the Internet&#39;s unique identifier systems. As
                part of this commitment, we conducts two third-party audits each year on different aspects of the IANA
                functions we provide. These audits evaluate our system and organization controls (SOCs) against the
                “Trust Services Principles and Criteria”.
            </p>
            <h2>
                SOC 3 Certification of Root Zone KSK System
            </h2>
            <p>
                As the DNSSEC Root Zone Key Signing Key (RZ KSK) manager, we engage a third party to ensure we have
                appropriate internal controls in place to meet the availability, processing integrity and security
                objectives for our RZ KSK System. For this system, we use the SOC 3 framework (formerly known as
                SysTrust), with the audit conducted by an independent accounting firm. These audits evaluate the IT
                operational practices and controls around the RZ KSK System and we have been awarded with SOC 3
                certification with an unqualified opinion. We will renew this certification annually.
            </p>
            <h2>
                SOC 2 for our Registry Assignment and Maintenance Systems
            </h2>
            <p>
                As part of our commitment to the Trust Services Principles and Criteria, we engage a third party to
                ensure we have appropriate internal controls in place to meet the availability, processing integrity and
                security objectives for the key systems used to support the IANA function’s transaction processing.
                These systems are referred to as our Registry Assignment and Maintenance Systems (RAMS), and includes
                the Root Zone Management System, and the system used to manage IETF protocol parameter registries and
                number allocation requests. The RAMS are audited using the SOC2 framework.
            </p>
            <p>
                The SOC 2 audit report is provided to the relevant oversight bodies to fulfill a requirement of the
                contract between PTI and ICANN; the Memorandum of Understanding between ICANN and the IETF; and the SLA
                contract between ICANN and the five Regional Internet Registries.
            </p>
            <h2>
                About the Trust Services Principles and Criteria
            </h2>
            <p>
                The Trust Services Principles and Criteria is an international set of principles and criteria developed
                and managed jointly by the American Institute of Certified Public Accountants (AICPA) and the Canadian
                Institute of Chartered Accountants (CICA). The SOC 2 and SOC 3 examination is a rigorous process
                developed by the AICPA and CICA to provide independent assurance that an organization&#39;s systems are
                reliable. Our SOC certification and reports focus on the following Trust Services principles:
            </p>
            <ul>
                <li>
                    Availability — the system was available for operation and use, as committed or agreed
                </li>
                <li>
                    Processing Integrity — the system processing was complete, accurate, timely, and authorized
                </li>
                <li>
                    Security — the system was protected against unauthorized access
                </li>
            </ul>
            <p>
                Each principle is supported by well-defined and detailed criteria that encompass a company&#39;s
                infrastructure, software, data, people, and procedures.
            </p>
            <h2>
                Audit Reports
            </h2>
            <ul>
                <li>
                    SOC 3 Report — 1 December 2022 to 30 November 2023
                </li>
                <li>
                    SOC 3 Report — 1 December 2021 to 30 November 2022
                </li>
                <li>
                    SOC 3 Report — 1 December 2020 to 30 November 2021
                </li>
                <li>
                    SOC 3 Report — 1 December 2019 to 30 November 2020
                </li>
                <li>
                    SOC 3 Report — 1 December 2018 to 30 November 2019
                </li>
                <li>
                    SOC 3 Report — 1 December 2017 to 30 November 2018
                </li>
                <li>
                    SOC 3 Report — 1 October 2016 to 30 November 2017
                </li>
                <li>
                    SOC 3 Report — 1 December 2015 to 30 September 2016
                </li>
                <li>
                    SOC 3 Report — 1 December 2014 to 30 November 2015
                </li>
                <li>
                    SOC 3 Report — 1 December 2013 to 30 November 2014
                </li>
                <li>
                    SysTrust Report — 1 December 2012 to 30 November 2013
                </li>
                <li>
                    SysTrust Report — 1 December 2011 to 30 November 2012
                </li>
                <li>
                    SysTrust Report — 1 December 2010 to 30 November 2011
                </li>
                <li>
                    SysTrust Report — 15 June 2010 to 30 November 2010
                </li>
            </ul>
        </div>
    );
};

Audits.propTypes = {}

export default Audits;

