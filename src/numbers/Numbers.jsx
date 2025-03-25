
import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"
const Numbers = () => {
    return (
/*TODO: off-iana links?*/
        <div>
            <h1>Number Resources</h1>
            <br/>
            <p>We are responsible for global coordination of the Internet Protocol addressing systems, as well as the Autonomous System Numbers used for routing Internet traffic.</p>
            <br/>
            <p>Currently there are two types of Internet Protocol (IP) addresses in active use: IP version 4 (IPv4) and IP version 6 (IPv6). IPv4 was initially deployed on 1 January 1983 and is still the most commonly used version. IPv4 addresses are 32-bit numbers often expressed as 4 octets in “dotted decimal” notation (for example, 192.0.2.53). Deployment of the IPv6 protocol began in 1999. IPv6 addresses are 128-bit numbers and are conventionally expressed using hexadecimal strings (for example, 2001:0db8:582:ae33::29).</p>
            <br/>
            <p>Both IPv4 and IPv6 addresses are generally assigned in a hierarchical manner. Users are assigned IP addresses by Internet service providers (ISPs). ISPs obtain allocations of IP addresses from a local Internet registry (LIR) or National Internet Registry (NIR), or from their appropriate Regional Internet Registry (RIR):</p>
            <br/>
{/*TODO: map, registry*/}
            <p>Our primary role for IP addresses is to allocate pools of unallocated addresses to the RIRs according to their needs as described by global policy and to document protocol assignments made by the IETF. When an RIR requires more IP addresses for allocation or assignment within its region, we make an additional allocation to the RIR. We do not make allocations directly to ISPs or end users except in specific circumstances, such as allocations of multicast addresses or other protocol specific needs.</p>
{/*TODO: extra stuff?*/}
        </div>
    );
};

Numbers.propTypes = {
}

export default Numbers;
