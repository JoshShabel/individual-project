import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const TimeZones = () => {
    return (
        <div>
            <h1>
                Time Zone Database
            </h1>
            <p>
                The Time Zone Database (often called
                <tt>
                    tz
                </tt>
                or
                <tt>
                    zoneinfo
                </tt>
                ) contains code and data that represent the history of local time for many representative locations
                around the globe. It is updated periodically to reflect changes made by political bodies to time zone
                boundaries, UTC offsets, and daylight-saving rules. Its management procedure is documented in BCP 175:
                Procedures for Maintaining the Time Zone Database.
            </p>
            <p>

            </p>
            <h2>
                Latest version
            </h2>
            <div>
                2025b (Released 2025-03-22)
            </div>
            <table>
                <thead>
                <tr>
                    <th>
                        File
                    </th>
                    <th>
                        Description
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        tzdb-2025b.tar.lz (537.0kb)
                    </td>
                    <td>
                        Complete Distribution (Data, Code and Extras)
                    </td>
                </tr>
                <tr>
                    <td>
                        tzdata2025b.tar.gz (453.4kb)
                    </td>
                    <td>
                        Data Only Distribution
                    </td>
                </tr>
                <tr>
                    <td>
                        tzcode2025b.tar.gz (302.2kb)
                    </td>
                    <td>
                        Code Only Distribution
                    </td>
                </tr>
                </tbody>
            </table>
            <h2>
                Mailing Lists
            </h2>
            <ul>
                <li>
                    <strong>
                        Announcements:
                    </strong>
                    A low-volume announcement mailing list used for announcing updates to the Time Zone Database.
                    <br/>
                    Subscribe/Unsubscribe
                    <br/>
                    Archive
                </li>
                <li>
                    <strong>
                        Submissions and Discussion:
                    </strong>
                    A higher volume discussion list used for discussing proposals for updates to the Database.
                    Contributions to this list may be emailed to tz@iana.org.
                    <br/>
                    Subscribe/Unsubscribe
                    <br/>
                    Archive
                </li>
            </ul>
            <h2>
                Distribution
            </h2>
            <p>
                We provide access to the Time Zone Database via three methods:
            </p>
            <ul>
                <li>
                    HTTP: https://www.iana.org/time-zones
                </li>
                <li>
                    FTP: ftp://ftp.iana.org/tz/
                </li>
                <li>
                    Rsync: rsync://rsync.iana.org/tz/
                </li>
            </ul>
            <h2>
                TZ Coordinator
            </h2>
            <p>
                The IESG-designated TZ Coordinators are Paul Eggert (primary) and Tim Parenti (secondary).
            </p>
            <h2>
                Further information
            </h2>
            <p>
                Further information on the Time Zone Database, including implementation details, is described in the
                code repository.
            </p>

        </div>
    );
};

TimeZones.propTypes = {}

export default TimeZones;
