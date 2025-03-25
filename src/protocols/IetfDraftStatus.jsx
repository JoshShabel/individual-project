import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const IetfDraftStatus = () => {
    return (
        <div>
            <h1>
                Status of IETF Internet Drafts
            </h1>
            <p>
                This page contains information on documents that have been approved to become an RFC and have entered
                our queue for processing.
            </p>
            <p>
                The list is sorted by the date the document entered our queue, which usually corresponds to the date the
                IESG approved the Internet Draft or the date the RFC Editor notified us that they intend to publish an
                Independent submission. Actions we perform related to an approved Internet Draft generally involve
                creating a registry, assigning code points or other parameters within a registry, etc. Some documents
                have no actions for us.
            </p>
            <h2>
                Drafts in progress
            </h2>
            <table>
                <tbody>
                <tr>
                    <th>
                        Draft Name
                    </th>
                    <th>
                        Version
                    </th>
                    <th>
                        Created
                    </th>
                    <th>
                        Status
                    </th>
                    <th>
                        Status last changed
                    </th>
                </tr>
                <tr>
                    <td>
                        draft-ietf-opsawg-tsvwg-udp-ipfix
                    </td>
                    <td>
                        14
                    </td>
                    <td>
                        16 Oct 2024
                    </td>
                    <td>
                        On Hold
                    </td>
                    <td>
                        04 Nov 2024
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-mpls-p2mp-bfd
                    </td>
                    <td>
                        11
                    </td>
                    <td>
                        20 Feb 2025
                    </td>
                    <td>
                        Waiting on Authors
                    </td>
                    <td>
                        22 Feb 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-fluhrer-lms-more-parm-sets
                    </td>
                    <td>
                        19
                    </td>
                    <td>
                        21 Feb 2025
                    </td>
                    <td>
                        Waiting on Authors
                    </td>
                    <td>
                        27 Feb 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-suit-manifest
                    </td>
                    <td>
                        33
                    </td>
                    <td>
                        25 Feb 2025
                    </td>
                    <td>
                        On Hold
                    </td>
                    <td>
                        06 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-suit-mud
                    </td>
                    <td>
                        09
                    </td>
                    <td>
                        25 Feb 2025
                    </td>
                    <td>
                        On Hold
                    </td>
                    <td>
                        06 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-pce-pcep-color
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        03 Mar 2025
                    </td>
                    <td>
                        Waiting on Authors
                    </td>
                    <td>
                        10 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-tsvwg-udp-options
                    </td>
                    <td>
                        45
                    </td>
                    <td>
                        17 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        17 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-tcpm-accurate-ecn
                    </td>
                    <td>
                        34
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-asdf-sdf
                    </td>
                    <td>
                        23
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-dmarc-aggregate-reporting
                    </td>
                    <td>
                        32
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        19 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-dmarc-dmarcbis
                    </td>
                    <td>
                        40
                    </td>
                    <td>
                        18 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        19 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-emailcore-rfc5321bis
                    </td>
                    <td>
                        42
                    </td>
                    <td>
                        19 Mar 2025
                    </td>
                    <td>
                        On Hold
                    </td>
                    <td>
                        20 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-emailcore-rfc5322bis
                    </td>
                    <td>
                        12
                    </td>
                    <td>
                        19 Mar 2025
                    </td>
                    <td>
                        On Hold
                    </td>
                    <td>
                        21 Mar 2025
                    </td>
                </tr>
                <tr>
                    <td>
                        draft-ietf-tsvwg-udp-options-dplpmtud
                    </td>
                    <td>
                        15
                    </td>
                    <td>
                        20 Mar 2025
                    </td>
                    <td>
                        In Progress
                    </td>
                    <td>
                        20 Mar 2025
                    </td>
                </tr>
                </tbody>
            </table>
            <p>
                Archived by year: 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018 2019 2020
                2021 2022 2023 2024 2025
            </p>
            <h2>
                Explanation of the fields
            </h2>
            <p>
                The draft name is referred to without the version number, similar to how it is displayed in the IETF
                Draft Tracker. If a version number is displayed, it is the version of the document when we received it
                for processing. Status can be one of several fields:
            </p>
            <ul>
                <li>
                    No value (blank) — We&#39;ve received a new document, but no actions have been taken
                </li>
                <li>
                    In Progress — We are currently processing the actions for this document
                </li>
                <li>
                    Waiting on Authors — We are waiting on the document&#39;s authors to respond
                </li>
                <li>
                    Waiting on ADs — We are waiting on the IETF Area Directors to respond
                </li>
                <li>
                    Waiting on WGC — We are waiting on the IETF Working Group Chairs to respond
                </li>
                <li>
                    Waiting on RFC Editor — We have notified the RFC Editor that the actions have been completed
                </li>
                <li>
                    RFC-Ed-Ack — Request completed. The RFC Editor has acknowledged receipt of our message that the
                    actions have been completed
                </li>
                <li>
                    On Hold — We have suspended work on the document
                </li>
                <li>
                    No IC — Request completed. There were no actions for us in this document
                </li>
            </ul>
            <h2>
                Other useful links
            </h2>
            <ul>
                <li>
                    RFC Editor Queue
                </li>
                <li>
                    Draft Tracker
                </li>
            </ul>

        </div>
    );
};

IetfDraftStatus.propTypes = {}

export default IetfDraftStatus;
