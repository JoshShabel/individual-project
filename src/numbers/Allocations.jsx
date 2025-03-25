import PropTypes from "prop-types";

const Allocations = () => {
    return (
        /*TODO: off-iana links?*/
        <div>
            <h1>Number Resource Allocation Data</h1>
            <br/>
            <p>Our primary role in managing Internet number resources is to provide pools of unallocated IP addresses
                and AS numbers to Regional Internet Registries (RIRs) according to their needs as described by
                ICANN&#39;s Global Addressing Policies.</p>
            <br/>
            <p>These policies contain allocation algorithms that are based on the level of resource utilization of prior
                allocations. We track allocation rates here and provide analysis of eligibility for future RIR
                allocations. </p>
            <br/>
            <h1>IP Address Utilization</h1>
            <br/>
            <p>The chart below summarizes the utilization of IPv6 addresses RIRs have made to network operators. IPv4 is
                not represented as IANA&#39;s supply has been exhausted and our allocation method for recovered address
                space does not factor in utilization.</p>
            <br/>
            <p>Detailed information is available for each RIR by clicking the chart. </p>
            {/*TODO: chart*/}
            <h1>Autonomous System Number Utilization</h1>
            <br/>
            <p>The chart below summarizes utilization of AS numbers that RIRs have made to network operators. Detailed
                information is available for each RIR by clicking the chart. </p>
            {/*TODO: chart*/}
        </div>
    );
};

Allocations.propTypes = {}

export default Allocations;
