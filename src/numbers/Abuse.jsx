import PropTypes from "prop-types";

const Abuse = () => {
    return (
        /*TODO: off-iana links?*/
        <div>
            <h1>Does it look like we’re attacking you?</h1>
            <br/>
            <p>Some of the most common things we hear are “My network is under attack by IANA!” and “IANA is spamming
                me!” If you think this is the case, please take a few moments to read this page.</p>
            <br/>
            <p>The Internet Assigned Numbers Authority, or IANA, is responsible for the global coordination of IP
                addresses. Most of the used numbers are allocated via a regional allocation system to your ISP, which
                then automatically assigns one or more to you.</p>
            <br/>
            <p>There are, however, special sets of numbers that are designed not to be assigned to any particular
                person. Instead, they are general allocations that are either used in special ways, or designed for
                people to use internally within local networks.</p>
            <br/>
            <p>These numbers are primarily in the following ranges:</p>
            <br/>
            <ul>
                <li>Begins with <b>10</b>. (i.e. 10.0.0.0 through to 10.255.255.255)</li>
                <li>Begins with <b>127</b>.</li>
                <li>Begins with <b>169.254.</b></li>
                <li>Begins with <b>172.16.</b> through <b>172.31.</b></li>
                <li>Begins with <b>192.168.</b></li>
                <li>Shows up in your logs with a name like <b>blackhole-1.iana.org</b></li>
            </ul>
            <br/>
            <p>There are additional ranges of numbers that are also marked as “IANA Reserved” and similarly are not
                operated by IANA, although these are the most common ones we receive abuse reports concerning.</p>
            <br/>
            <p>If you are seeing unexplained Internet traffic to your computer from these numbers, it is important to
                remember the following things:</p>
            <ul>
                <li>The traffic <strong>does not come from IANA</strong>. As the authority for IP addresses, we have
                    simply reserved these numbers in our databases, but we do not use or operate them, and we are not
                    the source of the traffic.
                </li>
                <li>As use of these numbers is untracked and unrestricted, <strong>we can not tell you who is using these
                    numbers</strong>.
                </li>
                <li>It is <strong>perfectly normal</strong> to see traffic from these numbers if you have a small home or office network.
                    By default, most routers and access points use these numbers to assign to your local computers. <strong>It
                        is most likely these numbers represent computers on your own internal network.</strong>
                </li>
                <li>If you see these numbers in the headers of an unsolicited email, they usually indicate transit
                    between servers within a corporate network or ISP. They are <strong>not useful in identifying the origin of
                        an email</strong>. In such cases you can usually <strong>find the true origin by looking for the earliest “Received”
                        mail header</strong> that is not an IANA Reserved address.
                </li>
            </ul>
            <br/>
            <p>For more information on this topic, please read our more detailed Abuse Questions and Answers.</p>
        </div>
    );
};

Abuse.propTypes = {}

export default Abuse;
