import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Protocols = () => {
    return (
        <div>
            <h1>
                Protocol Registries
            </h1>
            <p>
                Protocol parameter registries represent the authoritative record of many of the codes and numbers
                contained in a variety of Internet protocols. We maintain these records in compliance with the
                associated technical standards and allocation policies, and we provide this service in coordination with
                the Internet Engineering Task Force (IETF).
            </p>
            <p>
                To view or download individual protocol registries, navigate to the individual registries through the
                index below. Registry data is available for bulk retrieval via Rsync (recommended) or FTP.
            </p>
            <p>
                To obtain a registration in an existing registry, or to modify existing registrations, consult the
                relevant application form. For information on creating new registries, please see RFC 8126 for guidance.
            </p>
            <div>
                <table>
                    <tr>
                        <td>Protocol/Registry</td>
                        <td>Defining Document/Comments</td>
                    </tr>
                    <tr>
                        <td> A</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Access Node Control Protocol (ANCP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ANCP Capability Types</td>
                        <td>RFC 6320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ANCP Command Codes</td>
                        <td>RFC 6320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ANCP Message Types</td>
                        <td>RFC 6320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ANCP Port Management Functions</td>
                        <td>RFC 6320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ANCP Result Codes</td>
                        <td>RFC 6320 0x0-0xFFF: IETF Review. 0x1000-0xFFFFFF: Specification Required. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>ANCP Technology Types</td>
                        <td>RFC 6320 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ANCP TLV Types</td>
                        <td>RFC 6320 0x0000-0x1FFF: IETF Review. 0x2000-0xFFFF: Specification Required. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Joint GSMP / ANCP Version Registry</td>
                        <td>RFC 6320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ACL TLS</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ACL (D)TLS Parameters</td>
                        <td>Internet Draft draft-ietf-opsawg-mud-tls-18 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ACL DTLS Version Codes</td>
                        <td>Internet Draft draft-ietf-opsawg-mud-tls-18 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ACL TLS Version Codes</td>
                        <td>Internet Draft draft-ietf-opsawg-mud-tls-18 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Ad Hoc On Demand Distance Vector (AODV) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AODV Extension Types</td>
                        <td>RFC 3561 Standards Action</td>
                    </tr>
                    <tr>
                        <td>AODV Message Types (for messages sent to port 654)</td>
                        <td>RFC 3561 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Address Family Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address Family Numbers</td>
                        <td>RFC 2453, RFC 2677, RFC 2858 1-16383: Standards Action. 16384-32767: First Come First
                            Served.
                        </td>
                    </tr>
                    <tr>
                        <td>Address Resolution Protocol (ARP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hardware Types</td>
                        <td>RFC 826, RFC 5494 requests for values below 256: Expert Review. requests for more than one
                            value: Expert Review. requests for one value greater than 255: First Come First Served.
                            requests for one value, no value specified: First Come First Served. (Expert: Carlos
                            Pignataro)
                        </td>
                    </tr>
                    <tr>
                        <td>Operation Codes</td>
                        <td>RFC 826, RFC 5494 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Protocol Type</td>
                        <td>RFC 826, RFC 5494, RFC 5342 The Ethertype space is administered as described in [RFC5342].
                        </td>
                    </tr>
                    <tr>
                        <td>APEX Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Applicable Exchange Core (APEX) Endpoint Applications</td>
                        <td>RFC 3340 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Applicable Exchange Core (APEX) Options</td>
                        <td>RFC 3340 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Applicable Exchange Core (APEX) Services</td>
                        <td>RFC 3340 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Application Access Protocol (ACAP) Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ACAP Capabilities</td>
                        <td>RFC 2244 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ACAP Response Codes</td>
                        <td>RFC 2244 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Dataset Classes</td>
                        <td>RFC 2244 Standards Action or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>Vendor Subtrees</td>
                        <td>RFC 2244, RFC 6075 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Application Bridging for Federated Access Beyond Web (ABFAB) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ABFAB URN Parameters</td>
                        <td>RFC 7833 IETF Review or Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Application-Layer Traffic Optimization (ALTO) Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ALTO Address Types</td>
                        <td>RFC 7285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Cost Metrics</td>
                        <td>RFC 7285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Cost Modes</td>
                        <td>RFC 9274 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Cost Source Types</td>
                        <td>RFC 9439 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Endpoint Property Types</td>
                        <td>RFC 7285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Entity Domain Types</td>
                        <td>RFC 9240 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Entity Property Types</td>
                        <td>RFC 9240 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ALTO Error Codes</td>
                        <td>RFC 7285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Authenticated Encryption with Associated Data (AEAD) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AEAD Algorithms</td>
                        <td>RFC 5116 1-32767: Specification Required. 32768-65535: Private Use. (Expert: David McGrew,
                            Bjoern Tackmann, Stanislav Smyshlyaev)
                        </td>
                    </tr>
                    <tr>
                        <td>Authentication and Authorization for Constrained Environments (ACE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ACE Authorization Server Request Creation Hints</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action. 256 to 65535: Specification Required. greater than 65535: Expert Review.
                            (Expert: Göran Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Errors</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. (Expert: Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Key Types</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of
                            length 2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Parameters</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of
                            length 2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Policies</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of
                            length 2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Profiles</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. (Expert: Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Groupcomm Rekeying Schemes</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. (Expert: Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Profiles</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action. 256 to 65535: Specification Required. greater than 65535: Expert Review.
                            (Expert: Göran Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Token Revocation List Errors</td>
                        <td>Internet Draft draft-ietf-ace-revoked-token-notification-09 less than -65536: Private Use.
                            -65536 to -257: Specification Required. -256 to 255: Standards Action With Expert Review.
                            256 to 65535: Specification Required. greater than 65535: Expert Review. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>ACE Token Revocation List Parameters</td>
                        <td>Internet Draft draft-ietf-ace-revoked-token-notification-09 less than -65536: Private Use.
                            -65536 to -257: Specification Required. -256 to 255: Standards Action With Expert Review.
                            256 to 65535: Specification Required. greater than 65535: Expert Review. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Access Token Type CBOR Mappings</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 or greater: Expert Review. (Expert: Göran
                            Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Error Code CBOR Mappings</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 or greater: Expert Review. (Expert: Göran
                            Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Grant Type CBOR Mappings</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 or greater: Expert Review. (Expert: Göran
                            Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Parameters CBOR Mappings</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 or greater: Expert Review. (Expert: Göran
                            Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Token Introspection Response CBOR Mappings</td>
                        <td>RFC 9200 less than -65536: Private Use. -65536 or greater: Expert Review. (Expert: Göran
                            Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>OSCORE Security Context Parameters</td>
                        <td>RFC 9203 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of
                            length 2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Göran Selander, Cigdem Sengul)
                        </td>
                    </tr>
                    <tr>
                        <td>Sequence Number Synchronization Methods</td>
                        <td>RFC 9594 less than -65536: Private Use. -65536 to -257: Specification Required. -256 to 255:
                            Standards Action With Expert Review. 256 to 65535: Specification Required. greater than
                            65535: Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of
                            length 2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Francesca Palombini, Marco Tiloca, Rikard Höglund)
                        </td>
                    </tr>
                    <tr>
                        <td>Authentication and Key Agreement (AKA)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AKA-Version Namespace</td>
                        <td>RFC 3310 Expert Review (Expert: Vesa Torvinen (primary), Jari Arkko (secondary))</td>
                    </tr>
                    <tr>
                        <td>Authentication Method Reference Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Authentication Method Reference Values</td>
                        <td>RFC 8176 Expert Review (Expert: John Bradley, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>Authentication Option Name Spaces</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Algorithm Name Space Values</td>
                        <td>RFC 3118 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Protocol Name Space Values</td>
                        <td>RFC 3118 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RDM Name Space Values</td>
                        <td>RFC 3118 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Authentication, Authorization, and Accounting (AAA) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Application IDs</td>
                        <td>RFC 6733, RFC 6942 0-16777215: Specification Required. 16777216-4294967294: First Come First
                            Served. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>AVP Codes</td>
                        <td>RFC 6733 block allocation (release of more than three AVPs at a time for a given purpose):
                            IETF Review. other allocation: Specification Required. (Expert: Lionel Morand (primary),
                            Jouni Korhonen (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>AVP Flags Value</td>
                        <td>RFC 6733 Standards Action</td>
                    </tr>
                    <tr>
                        <td>AVP Specific Values</td>
                        <td>RFC 6733 IETF Review (unless otherwise specified)</td>
                    </tr>
                    <tr>
                        <td>Command Codes</td>
                        <td>RFC 6733, RFC 5719 0-255: Reserved for RADIUS backward compatibility. 256-8388607: IETF
                            Review. 8388608-16777213: First Come First Served with specification.
                        </td>
                    </tr>
                    <tr>
                        <td>Command Flags</td>
                        <td>RFC 6733 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Mobility Capability Registry</td>
                        <td>RFC 5447 Specification Required (Expert: Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>QoS Profiles</td>
                        <td>RFC 5624 0-511: Standards Action. 512-32767: Specification Required. 32768-429496729:
                            Reserved. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Author Domain Signing Practices (ADSP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ADSP Outbound Signing Practices</td>
                        <td>RFC 5617 Registry closed</td>
                    </tr>
                    <tr>
                        <td>ADSP Specification Tags</td>
                        <td>RFC 5617 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Automated Certificate Management Environment (ACME) Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ACME Account Object Fields</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Authority Token Challenge Types</td>
                        <td>RFC 9447 Specification Required (Expert: Mary Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Authorization Object Fields</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Directory Metadata Auto-Renewal Fields</td>
                        <td>RFC 8739 Specification Required (Expert: Yaron Sheffer, Diego R. Lopez, Thomas Fossati)</td>
                    </tr>
                    <tr>
                        <td>ACME Directory Metadata Fields</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Error Types</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Identifier Types</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Order Auto-Renewal Fields</td>
                        <td>RFC 8739 Specification Required (Expert: Yaron Sheffer, Diego R. Lopez, Thomas Fossati)</td>
                    </tr>
                    <tr>
                        <td>ACME Order Object Fields</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Renewal Info Object Fields</td>
                        <td>Internet Draft draft-ietf-acme-ari-08 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ACME Resource Types</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>ACME Validation Methods</td>
                        <td>RFC 8555 Specification Required (Expert: Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>STAR Delegation CSR Template Extensions</td>
                        <td>RFC 9115 Specification Required (Expert: Yaron Sheffer, Diego R. Lopez, Thomas Fossati)</td>
                    </tr>
                    <tr>
                        <td>Automatic Responses to Electronic Mail Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Auto-Submitted Header Field Keywords</td>
                        <td>RFC 5436 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Auto-Submitted header field optional parameters</td>
                        <td>RFC 3834 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Autonomic Control Plane (ACP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ACP Address Type</td>
                        <td>RFC 8994 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Autonomous System (AS) Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>16-bit Autonomous System Numbers</td>
                        <td>RFC 1930, RFC 5398, RFC 6996, RFC 7249 RIR request to the IANA or IETF Review. Allocated
                            following the Global Policy published at
                            http://www.icann.org/en/resources/policy/global-addressing.
                        </td>
                    </tr>
                    <tr>
                        <td>32-bit Autonomous System Numbers</td>
                        <td>RFC 1930, RFC 5398, RFC 6793, RFC 6996, RFC 7249 RIR request to the IANA or IETF Review.
                            Allocated following the Global Policy published at
                            http://www.icann.org/en/resources/policy/global-addressing.
                        </td>
                    </tr>
                    <tr>
                        <td>Special-Purpose AS Numbers</td>
                        <td>RFC 7249 IETF Review</td>
                    </tr>
                    <tr>
                        <td> B</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Babel Routing Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Babel Address Encodings</td>
                        <td>RFC 8966 0-223: Specification Required. 224-254: Experimental Use. (Expert: Juliusz
                            Chroboczek, Donald Eastlake)
                        </td>
                    </tr>
                    <tr>
                        <td>Babel Hello Flags Values</td>
                        <td>RFC 8966 Specification Required (Expert: Juliusz Chroboczek, Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>Babel Sub-TLV Types</td>
                        <td>RFC 8966 0-111: Specification Required. 112-126: Experimental Use. 128-239: Specification
                            Required. 240-254: Experimental Use. (Expert: Juliusz Chroboczek, Donald Eastlake)
                        </td>
                    </tr>
                    <tr>
                        <td>Babel TLV Types</td>
                        <td>RFC 8966 0-223: Specification Required. 224-254: Experimental Use. (Expert: Juliusz
                            Chroboczek, Donald Eastlake)
                        </td>
                    </tr>
                    <tr>
                        <td>Babel Update Flags Values</td>
                        <td>RFC 8966 Specification Required (Expert: Juliusz Chroboczek, Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>Battery Technologies</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Battery Technologies</td>
                        <td>RFC 7577 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP Monitoring Protocol (BMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BMP Initiation Information TLVs</td>
                        <td>RFC 7854, RFC 9069, RFC 9515, RFC 9736 0-32767: Standards Action. 32768-65530: First Come
                            First Served. 65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Message Types</td>
                        <td>RFC 7854 0-127: Standards Action. 128-250: Specification Required. 251-254: Experimental
                            Use. (Expert: John G. Scudder, Rex Fernando (rex), Paolo Lucente)
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Peer Down Reason Codes</td>
                        <td>RFC 7854 0-127: Standards Action. 128-250: Specification Required. 251-254: Experimental
                            Use. (Expert: John G. Scudder, Rex Fernando (rex), Paolo Lucente)
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Peer Flags for Loc-RIB Instance Peer Type 3</td>
                        <td>RFC 9069 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BMP Peer Flags for Peer Types 0 through 2</td>
                        <td>RFC 7854, RFC 9069 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BMP Peer Types</td>
                        <td>RFC 7854 0-127: Standards Action. 128-250: Specification Required. 251-254: Experimental
                            Use. (Expert: John G. Scudder, Rex Fernando (rex), Paolo Lucente)
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Peer Up Message TLVs</td>
                        <td>RFC 9736 0, 3-32767: Standards Action. 32768-65530: First Come First Served. 65531-65534:
                            Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Route Mirroring Information Codes</td>
                        <td>RFC 7854, RFC 9515 0-32767: Standards Action. 32768-65530: First Come First Served.
                            65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Route Mirroring TLVs</td>
                        <td>RFC 7854, RFC 9515 0-32767: Standards Action. 32768-65530: First Come First Served.
                            65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Statistics Types</td>
                        <td>RFC 7854, RFC 9515 0-32767: Standards Action. 32768-65530: First Come First Served.
                            65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Termination Message Reason Codes</td>
                        <td>RFC 7854, RFC 9515 0-32767: Standards Action. 32768-65530: First Come First Served.
                            65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BMP Termination Message TLVs</td>
                        <td>RFC 7854, RFC 9515 0-32767: Standards Action. 32768-65530: First Come First Served.
                            65531-65534: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP Shortest Path First (BGP SPF)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BGP-LS-SPF Link NLRI Attribute SPF Status TLV Status</td>
                        <td>Internet Draft draft-ietf-lsvr-bgp-spf-51 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BGP-LS-SPF Node NLRI Attribute SPF Status TLV Status</td>
                        <td>Internet Draft draft-ietf-lsvr-bgp-spf-51 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS-SPF Prefix NLRI Attribute SPF Status TLV Status</td>
                        <td>Internet Draft draft-ietf-lsvr-bgp-spf-51 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Bidirectional Forwarding Detection (BFD) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BFD Authentication Types</td>
                        <td>RFC 5880 Expert Review (Expert: Dave Ward (backup experts: Dave Katz, Jeff Haas, Les
                            Ginsberg))
                        </td>
                    </tr>
                    <tr>
                        <td>BFD Diagnostic Codes</td>
                        <td>RFC 5880 Expert Review (Expert: Dave Ward (backup experts: Dave Katz, Jeff Haas, Les
                            Ginsberg))
                        </td>
                    </tr>
                    <tr>
                        <td>Bit Index Explicit Replication (BIER)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BIER Algorithm</td>
                        <td>RFC 8401, RFC 9272 0-127: Standards Action. 128-239: Specification Required. 240-254:
                            Private or Experimental Use. (Expert: Les Ginsberg, Chris Hopps)
                        </td>
                    </tr>
                    <tr>
                        <td>BIER Next Protocol Identifiers</td>
                        <td>RFC 8296 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Blocks Extensible Exchange Protocol (BEEP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BEEP Features</td>
                        <td>RFC 3080 Expert Review (Expert: Marshall T. Rose)</td>
                    </tr>
                    <tr>
                        <td>BEEP Profiles</td>
                        <td>RFC 3080 Expert Review (Expert: Marshall T. Rose)</td>
                    </tr>
                    <tr>
                        <td>Bootstrapping Remote Secure Key Infrastructures (BRSKI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BRSKI Well-Known URIs</td>
                        <td>RFC 8995 Specification Required (Expert: Michael Richardson, Toerless Eckert)</td>
                    </tr>
                    <tr>
                        <td>Pledge BRSKI Status Telemetry Attributes</td>
                        <td>RFC 8995 Specification Required (Expert: Michael Richardson)</td>
                    </tr>
                    <tr>
                        <td>Border Gateway Protocol (BGP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Additional PMSI Tunnel Attribute Flags</td>
                        <td>RFC 7902 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ARP/ND Extended Community Flags</td>
                        <td>RFC 9047 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BFD Discriminator Optional TLV Type</td>
                        <td>RFC 9026 0-175: IETF Review. 176-249: First Come First Served. 250-254: Experimental Use.
                            255: IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>BFD Mode</td>
                        <td>RFC 9026 0-175: IETF Review. 176-249: First Come First Served. 250-254: Experimental Use.
                            255: IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP AIGP Attribute Types</td>
                        <td>RFC 7311 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP BIER TLV and Sub-TLV Types</td>
                        <td>Internet Draft draft-ietf-bier-idr-extensions-19 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>BGP CAR NLRI TLV Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-car-16 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP CAR NLRI Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-car-16 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP Data Collection Standard Communities</td>
                        <td>RFC 4384 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BGP Error (Notification) Codes</td>
                        <td>RFC 4271, RFC 7313 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Error Subcodes</td>
                        <td>RFC 4271 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Graceful Restart Flags</td>
                        <td>RFC 4724, RFC 8538 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Graceful Restart Flags for Address Family</td>
                        <td>RFC 4724, RFC 8538 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Layer 2 Encapsulation Types</td>
                        <td>RFC 6624 0-127: Expert Review. 128-251: First Come First Served. 252-255: Experimental
                            Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP Layer 2 TLV Types</td>
                        <td>RFC 6624 0-127: Expert Review. 128-251: First Come First Served. 252-255: Experimental
                            Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP MCAST-VPN Route Types</td>
                        <td>RFC 7441, RFC 6514 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Message Types</td>
                        <td>RFC 4271 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Non-Transitive Extended Community Types</td>
                        <td>RFC 7153 0x40-0x7f: First Come First Served. 0xc0-0xcf: Reserved for Experimental Use.
                            0xd0-0xff: Standards Action.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP OPEN Optional Parameter Types</td>
                        <td>RFC 5492 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BGP Outbound Route Filtering (ORF) Types</td>
                        <td>RFC 5291 0-63: Standards Action. 64-127: First Come First Served. 128-255:
                            Vendor-Specific.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP Path Attributes</td>
                        <td>RFC 4271 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGP Prefix-SID Label-Index TLV Flags</td>
                        <td>RFC 8669 Expert Review (Expert: Acee Lindem, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP Prefix-SID Originator SRGB TLV Flags</td>
                        <td>RFC 8669 Expert Review (Expert: Acee Lindem, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP Prefix-SID TLV Types</td>
                        <td>RFC 8669 Expert Review (Expert: Acee Lindem, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP Role Value</td>
                        <td>RFC 9234 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BGP Route Refresh Subcodes</td>
                        <td>RFC 7313 0-127: Standards Action. 128-254: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>BGP SRv6 Service SID Flags</td>
                        <td>RFC 9252 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BGP Transitive Extended Community Types</td>
                        <td>RFC 7153, RFC 9184 0x00-0x3f: First Come First Served. 0x80-0x82: First Come First Served.
                            0x83-0x8f: Reserved for Experimental Use. 0x90-0xbf: Standards Action.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP Well-known Communities</td>
                        <td>RFC 1997, RFC 8642 0x00000000-0x0000FFFF: Reserved. 0x00010000-0xFFFEFFFF: Private Use.
                            0xFFFF0000-0xFFFF8000: First Come First Served. 0xFFFF8001-0xFFFFFFFF: Standards Action.
                        </td>
                    </tr>
                    <tr>
                        <td>Capability Codes</td>
                        <td>RFC 5492, RFC 8810 1-63: IETF Review. 64-238: First Come First Served. 239-254: Experimental
                            Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Context-Specific Label Space ID Type</td>
                        <td>RFC 9573 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DF Alg</td>
                        <td>RFC 8584 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DF Election Capabilities</td>
                        <td>RFC 8584 RFC Required</td>
                    </tr>
                    <tr>
                        <td>E-Tree Flags</td>
                        <td>RFC 8317 RFC Required</td>
                    </tr>
                    <tr>
                        <td>EVPN ESI Label Extended Community Flags</td>
                        <td>RFC 9746 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EVPN Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>EVPN Layer 2 Attributes Control Flags</td>
                        <td>RFC 8214 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Generic Transitive Extended Community Part 2 Sub-Types</td>
                        <td>RFC 8955, RFC 9184 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Generic Transitive Extended Community Part 3 Sub-Types</td>
                        <td>RFC 8955, RFC 9184 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Generic Transitive Extended Community Sub-Types</td>
                        <td>RFC 7153, RFC 9184 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Layer2 Info Extended Community Control Flags Bit Vector</td>
                        <td>RFC 8395 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Long-Lived Graceful Restart Flags for Address Family</td>
                        <td>RFC 9494 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Multicast Flags Extended Community</td>
                        <td>RFC 9251 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Multihoming Redundancy Mode</td>
                        <td>RFC 9746 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Non-Transitive Four-Octet AS-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Non-Transitive IPv4-Address-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Non-Transitive IPv6-Address-Specific Extended Community Types</td>
                        <td>RFC 7153 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Non-Transitive Opaque Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Non-Transitive Transport Class Extended Community Sub-Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-ct-39 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF
                            Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Non-Transitive Two-Octet AS-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>P-Multicast Service Interface (PMSI) Tunnel Attribute Flags</td>
                        <td>RFC 7902 Standards Action</td>
                    </tr>
                    <tr>
                        <td>P-Multicast Service Interface Tunnel (PMSI Tunnel) Tunnel Types</td>
                        <td>RFC 7385, RFC 8317 0x00-0x7A: IETF Review. 0x7B-0x7E: Experimental Use. 0x80-0xFA: Composite
                            Tunnel. 0xFB-0xFE: Experimental Use. 0xFF: Standards Action.
                        </td>
                    </tr>
                    <tr>
                        <td>Region Identifiers (&amp;lt;R&amp;gt;)</td>
                        <td>RFC 4384 Not defined</td>
                    </tr>
                    <tr>
                        <td>SFC Extended Community Sub-Types</td>
                        <td>RFC 9015 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>SFC SPI/SI Representation Flags</td>
                        <td>RFC 9015 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SFP Association Type</td>
                        <td>RFC 9015 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>SFP Attribute TLVs</td>
                        <td>RFC 9015 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Split-Horizon Type</td>
                        <td>RFC 9746 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SRv6 Service Data Sub-Sub-TLV Types</td>
                        <td>RFC 9252 0-127: IETF Review. 128-254: First Come First Served. 255: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>SRv6 Service Sub-TLV Types</td>
                        <td>RFC 9252 0-127: IETF Review. 128-254: First Come First Served. 255: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Traffic Action Fields</td>
                        <td>RFC 8955 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Transitive Four-Octet AS-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Transitive IPv4-Address-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Transitive IPv6-Address-Specific Extended Community Types</td>
                        <td>RFC 7153 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Transitive Opaque Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Transitive Transport Class Extended Community Sub-Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-ct-39 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF
                            Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Transitive Two-Octet AS-Specific Extended Community Sub-Types</td>
                        <td>RFC 7153 0x00-0xbf: First Come First Served. 0xc0-0xff: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Border Gateway Protocol (BGP) Tunnel Encapsulation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BGP Tunnel Encapsulation Attribute Sub-TLVs</td>
                        <td>RFC 9012 1-63: Standards Action. 64-125: First Come First Served. 126-127: Experimental Use.
                            128-191: Standards Action. 192-252: First Come First Served. 253-254: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>BGP Tunnel Encapsulation Attribute Tunnel Types</td>
                        <td>RFC 9012 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Color Extended Community Color-Only Types</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Color Extended Community Flags</td>
                        <td>RFC 9012 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Embedded Label Handling Sub-TLVs</td>
                        <td>RFC 9012 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Flags Field of NVGRE Encapsulation Sub-TLVs</td>
                        <td>RFC 9012 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Flags Field of VXLAN Encapsulation Sub-TLVs</td>
                        <td>RFC 9012 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SR Policy Binding SID Flags</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SR Policy Segment Flags</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SR Policy Segment List Sub-TLVs</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SR Policy SRv6 Binding SID Flags</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Border Gateway Protocol - Link State (BGP-LS) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BGP-LS IGP Prefix Flags</td>
                        <td>RFC 9552 Expert Review (Expert: Adrian Farrel, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS MPLS Protocol Mask</td>
                        <td>RFC 9552 Expert Review (Expert: Adrian Farrel, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS NLRI and Attribute TLVs</td>
                        <td>RFC 9552 0-255: Reserved (not to be allocated). 256-64999: Expert Review. 65000-65535:
                            Private Use. (Expert: Hannes Gredler (primary), Adrian Farrel (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>BGP-LS NLRI Types</td>
                        <td>RFC 9552 1-64999: Expert Review. 65000-65535: Private Use. (Expert: Hannes Gredler
                            (primary), Adrian Farrel (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>BGP-LS Node Flags</td>
                        <td>RFC 9552 Expert Review (Expert: Adrian Farrel, Hannes Gredler)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS Protocol-IDs</td>
                        <td>RFC 9552 1-199: Expert Review. 200-255: Private Use. (Expert: Hannes Gredler (primary),
                            Adrian Farrel (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>BGP-LS SR Policy Metric Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-ls-sr-policy-17 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS SR Segment Descriptor Types</td>
                        <td>Internet Draft draft-ietf-idr-bgp-ls-sr-policy-17 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>BGP-LS Well-Known Instance-IDs (OBSOLETE)</td>
                        <td>RFC 9552 Registry closed</td>
                    </tr>
                    <tr>
                        <td>SRv6 BGP EPE SID Flags</td>
                        <td>RFC 9514 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BPF Instructions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BPF Instruction Conformance Groups</td>
                        <td>RFC 9669 Permanent: Standards Action or IESG Approval. Provisional: Specification Required.
                            Historical: Specification Required. (Expert: Alexei Starovoitov, David Vernet)
                        </td>
                    </tr>
                    <tr>
                        <td> BPF Instruction Set</td>
                        <td>RFC 9669 Permanent: Standards Action or IESG Approval. Provisional: Specification Required.
                            Historical: Specification Required. (Expert: Alexei Starovoitov, David Vernet)
                        </td>
                    </tr>
                    <tr>
                        <td>Building Blocks</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Building Blocks</td>
                        <td>RFC 3048 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Block Processing Control Flags</td>
                        <td>RFC 6255, RFC 9171 Specification Required (Expert: Scott Burleigh, Fred Templin)</td>
                    </tr>
                    <tr>
                        <td>BPSec BCB-AES-GCM AAD Scope Flags</td>
                        <td>RFC 9173 Specification Required (Expert: Ken McKeever, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>BPSec BIB-HMAC-SHA2 Integrity Scope Flags</td>
                        <td>RFC 9173 Specification Required (Expert: Ken McKeever, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>BPSec Security Context Identifiers</td>
                        <td>RFC 9172 Specification Required (Expert: Ken McKeever, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>Bundle Administrative Record Types</td>
                        <td>RFC 7116, RFC 9713 Specification Required (Expert: Marc Blanchet, Keith Scott)</td>
                    </tr>
                    <tr>
                        <td>Bundle Block Types</td>
                        <td>RFC 6255, RFC 9171 Specification Required (Expert: Scott Burleigh, Fred Templin)</td>
                    </tr>
                    <tr>
                        <td>Bundle Custody Signal Reason Codes</td>
                        <td>RFC 6255 Specification Required (Expert: Scott Burleigh, Fred Templin)</td>
                    </tr>
                    <tr>
                        <td>Bundle Metadata Type Codes</td>
                        <td>RFC 6258 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Processing Control Flags</td>
                        <td>RFC 6255, RFC 9171 Specification Required (Expert: Scott Burleigh, Fred Templin)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Message Types</td>
                        <td>RFC 7242 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer REFUSE_BUNDLE Reason Codes</td>
                        <td>RFC 7242 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer SHUTDOWN Reason Codes</td>
                        <td>RFC 7242 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 Message Types</td>
                        <td>RFC 9174 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 MSG_REJECT Reason Codes</td>
                        <td>RFC 9174 Specification Required (Expert: Brian Sipos, Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 SESS_TERM Reason Codes</td>
                        <td>RFC 9174 Specification Required (Expert: Brian Sipos, Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 Session Extension Types</td>
                        <td>RFC 9174 Expert Review (Expert: Brian Sipos, Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 Transfer Extension Types</td>
                        <td>RFC 9174 Expert Review (Expert: Brian Sipos, Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version 4 XFER_REFUSE Reason Codes</td>
                        <td>RFC 9174 Specification Required (Expert: Brian Sipos, Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol TCP Convergence-Layer Version Numbers</td>
                        <td>RFC 7242 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Protocol URI Scheme Types</td>
                        <td>RFC 9171 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Bundle Status Report Flags</td>
                        <td>RFC 6255 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Bundle Status Report Reason Codes</td>
                        <td>RFC 6255, RFC 9171 Specification Required (Expert: Scott Burleigh, Fred Templin)</td>
                    </tr>
                    <tr>
                        <td>CBHE Service Numbers</td>
                        <td>RFC 7116 0-63: Specification Required. 1024-65535: Specification Required. (Expert: Marc
                            Blanchet, Keith Scott)
                        </td>
                    </tr>
                    <tr>
                        <td>Ciphersuite Flags</td>
                        <td>RFC 6257 Specification Required (Expert: Stephen Farrell, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>Ciphersuite Numbers</td>
                        <td>RFC 6257 Specification Required (Expert: Stephen Farrell, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>Ciphersuite Parameters and Results Type Registry</td>
                        <td>RFC 6257 Specification Required (Expert: Stephen Farrell, Edward Birrane)</td>
                    </tr>
                    <tr>
                        <td>Primary Bundle Protocol Version</td>
                        <td>RFC 6255 RFC Required</td>
                    </tr>
                    <tr>
                        <td> C</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>C-DNS DNS Capture Format</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>C-DNS Address Event Types</td>
                        <td>RFC 8618 Expert Review (Expert: Jim Hague, Sara Dickinson, John Dickinson)</td>
                    </tr>
                    <tr>
                        <td>C-DNS Response Flags</td>
                        <td>RFC 8618 Expert Review (Expert: Jim Hague, Sara Dickinson, John Dickinson)</td>
                    </tr>
                    <tr>
                        <td>C-DNS Storage Flags</td>
                        <td>RFC 8618 Expert Review (Expert: Jim Hague, Sara Dickinson, John Dickinson)</td>
                    </tr>
                    <tr>
                        <td>C-DNS Transports</td>
                        <td>RFC 8618 Expert Review (Expert: Jim Hague, Sara Dickinson, John Dickinson)</td>
                    </tr>
                    <tr>
                        <td>Caller-ID Numbering Plans</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Caller-ID Numbering Plans Tokens</td>
                        <td>RFC 3939 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Candidate Access Router Discovery (CARD) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AVP Type Registry</td>
                        <td>RFC 4065 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Experimental Mobility Protocol Subtype Registry</td>
                        <td>RFC 4065 Specification Required and IESG Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Layer 2 Access Technology Identifier Registry</td>
                        <td>RFC 4065 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Captive Portals</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Captive Portal API Keys</td>
                        <td>RFC 8908 Specification Required (Expert: Tommy Pauly, Darshak Thakore, Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>CBOR Object Signing and Encryption (COSE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>COSE Algorithms</td>
                        <td>RFC 9053, RFC 9054 Integers less than -65536: Private Use. Integer values from -65536 to
                            -257: Specification Required. Integer values between -256 and 255: Standards Action With
                            Expert Review. Integer values from 256 to 65535: Specification Required. Integer values
                            greater than 65535: Expert Review. Strings of length 1: Standards Action With Expert Review.
                            Strings of length 2: Specification Required. Strings of length greater than 2: Expert
                            Review. (Expert: Göran Selander, Derek Atkins, Sean Turner)
                        </td>
                    </tr>
                    <tr>
                        <td>COSE Elliptic Curves</td>
                        <td>RFC 9053 Integers less than -65536: Private Use. Integer values -65536 to -257:
                            Specification Required. Integer values -256 to 255: Standards Action With Expert Review.
                            Integer values 256 to 65535: Specification Required. Integer values greater than 65535:
                            Expert Review. (Expert: Göran Selander, Derek Atkins, Sean Turner)
                        </td>
                    </tr>
                    <tr>
                        <td>COSE Header Algorithm Parameters</td>
                        <td>RFC 9053 Expert Review (Expert: Göran Selander, Derek Atkins, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>COSE Header Parameters</td>
                        <td>RFC 9052 Integers less than -65536: Private Use. Integer values in the range -1 to -65536:
                            delegated to the COSE Header Algorithm Parameters registry. Integer values between 1 and
                            255: Standards Action With Expert Review. Integer values from 256 to 65535: Specification
                            Required. Integer values greater than 65535: Expert Review. Strings of length 1: Standards
                            Action With Expert Review. Strings of length 2: Specification Required. Strings of length
                            greater than 2: Expert Review. (Expert: Francesca Palombini, Carsten Bormann)
                        </td>
                    </tr>
                    <tr>
                        <td>COSE Key Common Parameters</td>
                        <td>RFC 9052 Integers less than -65536: Private Use. Integer values in the range -65536 to -1:
                            used for key parameters specific to a single algorithmdelegated to the COSE Key Type
                            Parameters registry. Integer values between 0 and 255: Standards Action With Expert Review.
                            Integer values from 256 to 65535: Specification Required. Integer values greater than 65535:
                            Expert Review. Strings of length 1: Standards Action With Expert Review. Strings of length
                            2: Specification Required. Strings of length greater than 2: Expert Review. (Expert:
                            Francesca Palombini, Carsten Bormann)
                        </td>
                    </tr>
                    <tr>
                        <td>COSE Key Type Parameters</td>
                        <td>RFC 9053 Expert Review (Expert: Göran Selander, Derek Atkins, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>COSE Key Types</td>
                        <td>RFC 9053 Expert Review (Expert: Göran Selander, Derek Atkins, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>CBOR Web Token (CWT) Claims</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CBOR Web Token (CWT) Claims</td>
                        <td>RFC 8392 Integer values from -256 to 255: Standards Action. Integer values from -65536 to
                            -257: Specification Required. Integer values from 256 to 65535: Specification Required.
                            Integer values greater than 65535: Expert Review. Strings of length 1: Standards Action.
                            Strings of length 2: Specification Required. Strings of length greater than 2: Expert
                            Review. (Expert: Mike Jones, Hannes Tschofenig, Ludwig Seitz)
                        </td>
                    </tr>
                    <tr>
                        <td>CWT Confirmation Methods</td>
                        <td>RFC 8747 Specification Required (Expert: Ludwig Seitz, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>Centralized Conferencing Manipulation Protocol (CCMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CCMP Message Types</td>
                        <td>RFC 6503 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>CCMP Response Codes</td>
                        <td>RFC 6503 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>CERT RR Certificate Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CERT RR Certificate Types</td>
                        <td>RFC 4398 0x0000-0x00FF: Standards Action. 0xFF00-0xFFFF: Standards Action. 0x0100-0xFEFF:
                            IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Certificate Management Protocol (CMP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CMP Well-Known URI Path Segments</td>
                        <td>Internet Draft draft-ietf-lamps-rfc6712bis-10 Specification Required (Expert: Hendrik
                            Brockhaus, David von Oheimb, John Gray)
                        </td>
                    </tr>
                    <tr>
                        <td>Channel-Binding Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Channel-Binding Types</td>
                        <td>RFC 5056 Expert Review (Expert: Nicolas Williams)</td>
                    </tr>
                    <tr>
                        <td>Character Sets</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Character Set Registrations</td>
                        <td>RFC 2978 Expert Review (Expert: Martin Dürst)</td>
                    </tr>
                    <tr>
                        <td>Character Sets</td>
                        <td>RFC 2978 Expert Review (Expert: Martin Dürst)</td>
                    </tr>
                    <tr>
                        <td>Character Sets Mailing List Information</td>
                        <td>RFC 2978 Expert Review</td>
                    </tr>
                    <tr>
                        <td>Cisco Service Level Assurance Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Address Family Registry</td>
                        <td>RFC 6812 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Authenticator Modes Registry</td>
                        <td>RFC 6812 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol CSLD Command Registry</td>
                        <td>RFC 6812 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Measurement-Type Registry</td>
                        <td>RFC 6812 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Roles Registry</td>
                        <td>RFC 6812 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Status Types Registry</td>
                        <td>RFC 6812 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Cisco SLA Protocol Version Number Registry</td>
                        <td>RFC 6812 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CoAP-EAP Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CoAP-EAP Cipher Suites</td>
                        <td>Internet Draft draft-ietf-ace-wg-coap-eap-14 -65536..-25: Specification Required. -24..-21:
                            Private Use. -20..23: Standards Action with Expert Review. 24..65535: Specification
                            Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>CoAP-EAP Information Elements</td>
                        <td>Internet Draft draft-ietf-ace-wg-coap-eap-14 0-23: Standards Action with Expert Review.
                            24-49: Private Use. 50-65000: Specification Required. 65001-65535: Experimental Use.
                            (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Common Architecture Label IPv6 Security Option (CALIPSO)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CALIPSO Domain of Interpretation (DOI)</td>
                        <td>RFC 5570 1:0:0:0 - 254:255:255:255: Expert Review. 255:0:0:0 - 255:255:255:255: IESG
                            Approval. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Common Name Resolution Protocol (CNRP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Properties</td>
                        <td>RFC 3367 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Property Types</td>
                        <td>RFC 3367 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Status Messages</td>
                        <td>RFC 3367 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Common Open Policy Service (COPS) Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>A-types</td>
                        <td>RFC 3182 0-127: IETF Review. 128-255: Private Use.</td>
                    </tr>
                    <tr>
                        <td>ADMISSION_PRI (P-Type 0x05) Error Codes</td>
                        <td>RFC 6401 0-127: IETF Review. 128-240: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>C-Num and C-Type Values</td>
                        <td>RFC 2748 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Client Types Values</td>
                        <td>RFC 2748</td>
                    </tr>
                    <tr>
                        <td>Client-type = 0 Flags and Error-SubCodes</td>
                        <td>RFC 4261 IETF Review</td>
                    </tr>
                    <tr>
                        <td>COPS-PR Object S-Num, S-Types, and Error-Codes</td>
                        <td>RFC 3084 IETF Review</td>
                    </tr>
                    <tr>
                        <td>M-Types, Reason Sub-Codes, and Error Sub-codes</td>
                        <td>RFC 2748 Values are assigned relative to the respective Client-type</td>
                    </tr>
                    <tr>
                        <td>Merge Strategies</td>
                        <td>RFC 6401 0-127: IETF Review. 128-240: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>P-types</td>
                        <td>RFC 2750 0-49151: IETF Review. 49152-53247: First Come First Served. 53248-65535: Reserved
                            for Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>R-Types, Reason-Codes, Report-Types, Decision Object Command-Codes/Flags, and Error-Codes
                        </td>
                        <td>RFC 2748 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Receiver Proxy Control Policy Element (P-Type 0x07) Control-Value field</td>
                        <td>RFC 5946 0-127: IETF Review. 128-240: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>Common Presence and Instant Messaging (CPIM) Headers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CPIM Headers</td>
                        <td>RFC 3862 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Concise Binary Object Representation (CBOR)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CBOR Simple Values</td>
                        <td>RFC 8949 0-19: Standards Action. 32-255: Specification Required. (Expert: Carsten Bormann)
                        </td>
                    </tr>
                    <tr>
                        <td>CBOR Tags</td>
                        <td>RFC 8949 0-23: Standards Action. 24-32767: Specification Required.
                            32768-18446744073709551615: First Come First Served. (Expert: Christian Amsüss, Thomas
                            Fossati, Francesca Palombini, Carsten Bormann (backup))
                        </td>
                    </tr>
                    <tr>
                        <td>Time Tag Map Keys</td>
                        <td>RFC 9581 Specification Required (Expert: Henk Birkholz, Esko Dijk)</td>
                    </tr>
                    <tr>
                        <td>Timescales</td>
                        <td>RFC 9581 RFC and Expert Review Required (Expert: Henk Birkholz, Esko Dijk)</td>
                    </tr>
                    <tr>
                        <td>Concise Data Definition Language (CDDL)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CDDL Control Operators</td>
                        <td>RFC 8610 name includes internal dot: IETF Review. name does not include internal dot:
                            Specification Required. (Expert: Jeffrey Yasskin, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Concise Software Identifier (CoSWID)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CoSWID Items</td>
                        <td>RFC 9393 0-32767: Standards Action with Expert Review. 32768-4294967295: Specification
                            Required. (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Connectivity Fault Management (CFM) OAM IETF Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CFM OAM IETF OpCodes</td>
                        <td>RFC 7319 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CFM OAM IETF TLV Types</td>
                        <td>RFC 7319 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Constrained RESTful Environments (CoRE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CoAP Codes</td>
                        <td>RFC 7252 Reserved ranges may be allocated in accordance with section 4.3 of RFC 8126.</td>
                    </tr>
                    <tr>
                        <td>CoAP Content-Formats</td>
                        <td>RFC 7252 0-255: Expert Review. 256-9999: IETF Review or IESG Approval. 10000-64999: First
                            Come First Served. 65000-65535: Experimental use (no operational use). (Expert: Esko Dijk
                            (primary), Klaus Hartke (secondary), Carsten Bormann (secondary), Jaime Jimenez (secondary),
                            Alexander Pelov (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>CoAP Option Numbers</td>
                        <td>RFC 7252 0-255: IETF Review or IESG Approval. 256-2047: Specification Required. 2048-64999:
                            Expert Review. 65000-65535: Experimental use (no operational use). (Expert: Bilhanan
                            Silverajan (primary), Klaus Hartke (secondary), Carsten Bormann (secondary), Jaime Jimenez
                            (secondary), Alexander Pelov (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>CoAP Signaling Codes</td>
                        <td>RFC 8323 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>CoAP Signaling Option Numbers</td>
                        <td>RFC 8323 0-255: IETF Review or IESG Approval. 256-2047: Specification Required. 2048-64999:
                            Expert Review. 65000-65535: Experimental use (no operational use). (Expert: Bilhanan
                            Silverajan (primary), Klaus Hartke (secondary), Alexander Pelov (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Custom Problem Detail Keys</td>
                        <td>RFC 9290 Expert Review (Expert: Thomas Fossati, Carsten Bormann)</td>
                    </tr>
                    <tr>
                        <td>Endpoint Type (et=) RD Parameter Values</td>
                        <td>RFC 9176 value starts with &quot;core&quot;: IETF Review. all other values: Specification
                            Required. (Expert: Carsten Bormann, Jaime Jiménez, Christian Amsüss)
                        </td>
                    </tr>
                    <tr>
                        <td>Interface Description (if=) Link Target Attribute Values</td>
                        <td>RFC 6690 value starts with &quot;core&quot;: IETF Review. all other values: Specification
                            Required. (Expert: Carsten Bormann, Jaime Jimenez, Christian Amsüss)
                        </td>
                    </tr>
                    <tr>
                        <td>OSCORE Flag Bits</td>
                        <td>RFC 8613 Expert Review (Expert: Francesca Palombini, Göran Selander, Christian Amsüss)</td>
                    </tr>
                    <tr>
                        <td>RD Parameters</td>
                        <td>RFC 9176 Expert Review (Expert: Carsten Bormann, Jaime Jiménez, Christian Amsüss)</td>
                    </tr>
                    <tr>
                        <td>Resource Type (rt=) Link Target Attribute Values</td>
                        <td>RFC 6690 value starts with &quot;core&quot;: IETF Review. all other values: Specification
                            Required. (Expert: Carsten Bormann, Jaime Jimenez, Christian Amsüss)
                        </td>
                    </tr>
                    <tr>
                        <td>Standard Problem Detail Keys</td>
                        <td>RFC 9290 Specification Required (Expert: Thomas Fossati, Carsten Bormann)</td>
                    </tr>
                    <tr>
                        <td>Target Attributes</td>
                        <td>RFC 9423 Expert Review (Expert: Carsten Bormann, Marco Tiloca)</td>
                    </tr>
                    <tr>
                        <td>Content Delivery Network Interconnection (CDNI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CDNI Capabilities Redirection Modes</td>
                        <td>RFC 8008 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CDNI Capacity Limit Types</td>
                        <td>Internet Draft draft-ietf-cdni-capacity-insights-extensions-12 Specification Required
                            (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>CDNI CI/T Error Codes</td>
                        <td>RFC 8007 Specification Required (Expert: Kevin Ma, Ben Niven-Jenkins)</td>
                    </tr>
                    <tr>
                        <td>CDNI CI/T Trigger Types</td>
                        <td>RFC 8007 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CDNI Logging Directive Names</td>
                        <td>RFC 7937 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Logging Field Names</td>
                        <td>RFC 7937 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Logging File version</td>
                        <td>RFC 7937 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Logging record-types</td>
                        <td>RFC 7937 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Metadata Footprint Types</td>
                        <td>RFC 8006 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Metadata Protocol Types</td>
                        <td>RFC 8006 Specification Required (Expert: Kevin Ma)</td>
                    </tr>
                    <tr>
                        <td>CDNI Payload Types</td>
                        <td>RFC 7736 Specification Required (Expert: Kevin Ma, Ben Niven-Jenkins)</td>
                    </tr>
                    <tr>
                        <td>CDNI RI Error response code</td>
                        <td>RFC 7975 Specification Required (Expert: Kevin Ma, Ben Niven-Jenkins)</td>
                    </tr>
                    <tr>
                        <td>CDNI Telemetry Source Types</td>
                        <td>Internet Draft draft-ietf-cdni-capacity-insights-extensions-12 Specification Required
                            (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>CDNI URI Signing Signed Token Transport</td>
                        <td>RFC 9246 Specification Required (Expert: Phil Sorber)</td>
                    </tr>
                    <tr>
                        <td>CDNI URI Signing Verification Codes</td>
                        <td>RFC 9246 Specification Required (Expert: Phil Sorber)</td>
                    </tr>
                    <tr>
                        <td>Content Disposition Values and Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Content Disposition Parameters</td>
                        <td>RFC 2183 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Content Disposition Values</td>
                        <td>RFC 2183 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>Handling Parameter Values</td>
                        <td>RFC 3204 Not Defined</td>
                    </tr>
                    <tr>
                        <td>Voice Parameter Values</td>
                        <td>RFC 2421 Not Defined</td>
                    </tr>
                    <tr>
                        <td>Content Security Policy Directives</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Content Security Policy Directives</td>
                        <td>RFC 7762 Specification Required (Expert: Mike West)</td>
                    </tr>
                    <tr>
                        <td>Content-Centric Networking (CCNx)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CCNx Echo Reply Codes</td>
                        <td>RFC 9508 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Hash Function Types</td>
                        <td>RFC 8609 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Hop-by-Hop Types</td>
                        <td>RFC 8609 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CCNx Interest Return Code Types</td>
                        <td>RFC 8609 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Message Types</td>
                        <td>RFC 8609 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CCNx Name Segment Types</td>
                        <td>RFC 8609 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Packet Types</td>
                        <td>RFC 8609 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CCNx Payload Types</td>
                        <td>RFC 8609 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Reply Types</td>
                        <td>RFC 9344 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CCNx Top-Level Types</td>
                        <td>RFC 8609 RFC Required</td>
                    </tr>
                    <tr>
                        <td>CCNx Validation Algorithm Types</td>
                        <td>RFC 8609 Specification Required (Expert: Dave Oran, Hitoshi Asaeda)</td>
                    </tr>
                    <tr>
                        <td>CCNx Validation-Dependent Data Types</td>
                        <td>RFC 8609 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Context labels for Internet Messages</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet Message Content Types</td>
                        <td>RFC 3458 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Context Transfer Protocol (CXTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Context Transfer Profile Type Registry</td>
                        <td>RFC 4065 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Context Transfer Protocol Authorization Token Calculation Algorithms</td>
                        <td>RFC 4065 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Control And Provisioning of Wireless Access Points (CAPWAP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AC DTLS Policy</td>
                        <td>RFC 5415 Standards Action</td>
                    </tr>
                    <tr>
                        <td>AC Information Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>AC Security Types</td>
                        <td>RFC 5415 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Alternate Tunnel Sub-elements</td>
                        <td>RFC 8350 Expert Review (Expert: Sri Gundavelli, Li Xue)</td>
                    </tr>
                    <tr>
                        <td>Alternate Tunnel-Types</td>
                        <td>RFC 8350 Specification Required (Expert: Sri Gundavelli, Li Xue)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Control Message Flags</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Header Flags</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP IEEE 802.11 Message Types</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Message Element Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Message Types</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Transport Protocol Types</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>CAPWAP Wireless Binding Identifier</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Data Transfer Mode</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Data Transfer Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Discovery Types</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>ECN Support</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Antenna Combiner</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Antenna Selection</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Auth Type</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Encryption Capabilities</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Key Status</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 QoS</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Session Key Flags</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Split MAC Profile</td>
                        <td>RFC 7494 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 Tagging Policy</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 WTP Radio Fail</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.11 WTP Radio Type</td>
                        <td>RFC 5416 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Radio Admin State</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Radio Failure Causes</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Radio Operational State</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Result Code</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>Returned Message Element Reason</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Board Data Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Descriptor Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Fallback Mode</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Frame Tunnel Mode</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP MAC Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Radio Stats Failure Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>WTP Reboot Stats Failure Type</td>
                        <td>RFC 5415 Expert Review (Expert: Margaret Cullen)</td>
                    </tr>
                    <tr>
                        <td>ControLling mUltiple streams for tElepresence (CLUE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CLUE Message Types</td>
                        <td>RFC 8847 Specification Required (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>CLUE Response Codes</td>
                        <td>RFC 8847 Specification Required (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>CLUE Schema &amp;lt;personType&amp;gt;</td>
                        <td>RFC 8846 Expert Review (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>CLUE Schema &amp;lt;presentation&amp;gt;</td>
                        <td>RFC 8846 Expert Review (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>CLUE Schema &amp;lt;sensitivityPattern&amp;gt;</td>
                        <td>RFC 8846 Expert Review (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>CLUE Schema &amp;lt;view&amp;gt;</td>
                        <td>RFC 8846 Expert Review (Expert: Roni Even, Simon Pietro Romano)</td>
                    </tr>
                    <tr>
                        <td>Cryptographic Suites for IKEv1, IKEv2, and IPsec</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Suites for IKEv1, IKEv2, and IPsec</td>
                        <td>RFC 4308 Expert Review and RFC Required (Expert: Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>Cryptographically Generated Addresses (CGA) Message Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CGA Extension Type Tags</td>
                        <td>RFC 3972, RFC 9374 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>CGA Extension Type Values</td>
                        <td>RFC 4581 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CGA SEC</td>
                        <td>RFC 4982 Standards Action</td>
                    </tr>
                    <tr>
                        <td> D</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Data Channel Establishment Protocol (DCEP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Channel Types</td>
                        <td>RFC 8832 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 8832 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Data Link Switching Client Access Protocol (DCAP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Data Link Switching Protocol Frame Codes</td>
                        <td>RFC 2114 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Data Link Switching Protocol Sender Capability Codes</td>
                        <td>RFC 2114 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Data Structure for the Security Suitability of Cryptographic Algorithms (DSSC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Algorithms</td>
                        <td>RFC 5698 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Parameter Definitions</td>
                        <td>RFC 5698 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Datagram Congestion Control Protocol (DCCP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ack Vector States</td>
                        <td>RFC 4340 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID2-specific Feature Numbers (128-255)</td>
                        <td>RFC 4341 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID2-specific Option Types (128-255)</td>
                        <td>RFC 4341 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID2-specific Reset codes (128-255)</td>
                        <td>RFC 4341 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID3-specific Feature Numbers (128-255)</td>
                        <td>RFC 4342 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID3-specific Option Types (128-255)</td>
                        <td>RFC 4342 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID3-specific Reset codes (128-255)</td>
                        <td>RFC 4342 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID4-specific Feature Numbers (128-255)</td>
                        <td>RFC 5622 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID4-specific Option Types (128-255)</td>
                        <td>RFC 5622 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CCID4-specific Reset codes (128-255)</td>
                        <td>RFC 5622 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Congestion Control Identifiers</td>
                        <td>RFC 4340 0-1: IETF Review (IETF RFC publication). 4-247: IETF Review (IETF RFC publication).
                            248-254: Reserved. 255: IETF Review (IETF RFC publication).
                        </td>
                    </tr>
                    <tr>
                        <td>Drop Codes</td>
                        <td>RFC 4340 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Feature Numbers</td>
                        <td>RFC 4340 10-119: IETF Review (IETF RFC publication). 120-126: Reserved. 127: IETF Review
                            (IETF RFC publication). 128-255: CCID-specific codes.
                        </td>
                    </tr>
                    <tr>
                        <td>Option Types</td>
                        <td>RFC 4340 3-30: IETF Review (IETF RFC publication). 45-119: IETF Review (IETF RFC
                            publication). 120-126: Reserved. 127: IETF Review (IETF RFC publication). 128-255:
                            CCID-specific codes.
                        </td>
                    </tr>
                    <tr>
                        <td>Packet Types</td>
                        <td>RFC 4340 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Reset Codes</td>
                        <td>RFC 4340 12-119: IETF Review (IETF RFC publication). 120-126: Reserved. 127: IETF Review
                            (IETF RFC publication). 128-255: CCID-specific codes.
                        </td>
                    </tr>
                    <tr>
                        <td>Service Codes</td>
                        <td>RFC 4340 Specification Required or First Come First Served (Expert: Eddie Kohler)</td>
                    </tr>
                    <tr>
                        <td>Datagram Transport Layer Security (DTLS) Extension to Establish Keys for Secure Real-time
                            Transport Protocol (SRTP)
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DTLS-SRTP Protection Profiles</td>
                        <td>RFC 5764 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Delivery Status Notification (DSN) Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address Types</td>
                        <td>RFC 3461, RFC 3464 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Diagnostic Types</td>
                        <td>RFC 3461, RFC 3464 RFC Required</td>
                    </tr>
                    <tr>
                        <td>MTA Name Types</td>
                        <td>RFC 3461, RFC 3464 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DetNet Associated Channel Header (d-ACH) Flags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DetNet Associated Channel Header (d-ACH) Flags</td>
                        <td>RFC 9546 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Device Identification</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DEV URN Subtypes</td>
                        <td>RFC 9039 Specification Required or IESG Approval (Expert: Jari Arkko, Jaime Jimenez)</td>
                    </tr>
                    <tr>
                        <td>Differentiated Services Field Codepoints (DSCP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Differentiated Services Field Codepoints (DSCP)</td>
                        <td>RFC 2474, RFC 3260</td>
                    </tr>
                    <tr>
                        <td>ECN Field (Bits 6-7)</td>
                        <td>RFC 3168 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Directory System Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Distinguished Names</td>
                        <td>RFC 1779 Closed see RFC 4520</td>
                    </tr>
                    <tr>
                        <td>Distributed Denial-of-Service Open Threat Signaling (DOTS) Signal Channel</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DOTS Signal Channel Attack Status Codes</td>
                        <td>RFC 9132 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DOTS Signal Channel CBOR Key Values</td>
                        <td>RFC 9132 1-127: IETF Review. 128-255: IETF Review. 256-16383: IETF Review. 16384-32767:
                            Specification Required. 32768-49151: IETF Review. 49152-65535: Private Use. (Expert: Nik
                            Teague, Mohamed Boucadair, Andrew Mortensen, Tirumaleswar Reddy)
                        </td>
                    </tr>
                    <tr>
                        <td>DOTS Signal Channel Conflict Cause Codes</td>
                        <td>RFC 9132 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DOTS Signal Channel Conflict Status Codes</td>
                        <td>RFC 9132 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DOTS Signal Channel Status Codes</td>
                        <td>RFC 9132 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Distributed Node Consensus Protocol (DNCP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DNCP TLV Types</td>
                        <td>RFC 7787 Standards Action</td>
                    </tr>
                    <tr>
                        <td>HNCP TLV Types</td>
                        <td>RFC 7788 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DNS-Based Authentication of Named Entities (DANE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TLSA Certificate Usages</td>
                        <td>RFC 6698, RFC 7218 RFC Required</td>
                    </tr>
                    <tr>
                        <td>TLSA Matching Types</td>
                        <td>RFC 6698, RFC 7218 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TLSA Selectors</td>
                        <td>RFC 6698, RFC 7218 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Domain Name System (DNS) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AFSDB RR Subtype</td>
                        <td>RFC 6895, RFC 1035 Registry closed per RFC 6895</td>
                    </tr>
                    <tr>
                        <td>AMTRELAY Relay Type Field</td>
                        <td>RFC 8777 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Child Synchronization (CSYNC) Flags</td>
                        <td>RFC 7477 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DHCID RR Digest Type Codes</td>
                        <td>RFC 4701 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DHCID RR Identifier Type Codes</td>
                        <td>RFC 4701 Standards Action (Expert: Ólafur Guðmundsson)</td>
                    </tr>
                    <tr>
                        <td>DNS Catalog Zones Properties</td>
                        <td>RFC 9432 property prefix ends in the label &quot;ext&quot;: Private Use. all other property
                            prefixes: Expert Review. (Expert: Peter Thomassen, Ondřej Surý, Willem Toorop)
                        </td>
                    </tr>
                    <tr>
                        <td>DNS CLASSes</td>
                        <td>RFC 6895, RFC 9108 0: Standards Action. 1-127: IETF Review. 128-253: IETF Review. 256-32767:
                            IETF Review. 32768-57343: Specification Required. 57344-65279: Specification Required.
                            65280-65534: Private Use. 65535: Standards Action. (Expert: Petr Špaček, Ladislav Lhotka)
                        </td>
                    </tr>
                    <tr>
                        <td>DNS EDNS0 Option Codes (OPT)</td>
                        <td>RFC 6891 1-65000: Expert Review. 65001-65534: Local/Experimental Use. (Expert: Ólafur
                            Guðmundsson (primary), Frederico AC Neves (secondary), Ray Bellis (secondary), Roy Arends
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>DNS Header Flags</td>
                        <td>RFC 6895, RFC 1035 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DNS KEY RR Protocol Octet Values</td>
                        <td>RFC 4034, RFC 2535 CLOSED per RFC 3445</td>
                    </tr>
                    <tr>
                        <td>DNS Label Types</td>
                        <td>RFC 6891 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DNS OpCodes</td>
                        <td>RFC 6895, RFC 1035 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DNS RCODEs</td>
                        <td>RFC 6895, RFC 1035 0-3840: IETF Review. 3841-4095: Private Use. 4096-65534: IETF Review.
                            65535: Reserved (Standards Action).
                        </td>
                    </tr>
                    <tr>
                        <td>DNS Resolver Information Keys</td>
                        <td>RFC 9606 Specification Required (Expert: Tirumal Reddy, Mohamed Boucadair, Ben Schwartz)
                        </td>
                    </tr>
                    <tr>
                        <td>DNS Server Cookie Methods</td>
                        <td>RFC 9018, RFC 7873 Version 1-239, Size 8-32: Expert Review. Version 240-254, Size 8-32:
                            Private Use. (Expert: Ondřej Surý, Donald Eastlake)
                        </td>
                    </tr>
                    <tr>
                        <td>DNS SVCB Service Parameter Keys (SvcParamKeys)</td>
                        <td>RFC 9460 0-65279: Expert Review. 65280-65534: Private Use. (Expert: Benjamin Schwartz, David
                            Lawrence)
                        </td>
                    </tr>
                    <tr>
                        <td>DNS-over-QUIC Error Codes</td>
                        <td>RFC 9250 provisional (greater than 0x3f): Expert Review. provisional registration Date field
                            update: First Come First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval.
                            permanent, greater than 0x3f: Specification Required. (Expert: Sara Dickinson, Christian
                            Huitema)
                        </td>
                    </tr>
                    <tr>
                        <td>DNSKEY RR Flags</td>
                        <td>RFC 3755, RFC 4034 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DSO Type Codes</td>
                        <td>RFC 8490 0x0004-0x003F: Standards Action. 0x0040-0xF7FF: Expert Review. 0xF800-0xFBFF:
                            Experimental/Local Use. 0xFC00-0xFFFF: Standards Action. (Expert: Ted Lemon, Sara Dickinson,
                            John Dickinson)
                        </td>
                    </tr>
                    <tr>
                        <td>DSYNC: Location of Synchronization Endpoints</td>
                        <td>Internet Draft draft-ietf-dnsop-generalized-notify-09 Expert Review (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>EDNS Header Flags (16 bits)</td>
                        <td>RFC 6891 Standards Action</td>
                    </tr>
                    <tr>
                        <td>EDNS version Number (8 bits)</td>
                        <td>RFC 6891 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Extended DNS Error Codes</td>
                        <td>RFC 8914 0-49151: First Come First Served. 49152-65535: Private Use.</td>
                    </tr>
                    <tr>
                        <td>Resource Record (RR) TYPEs</td>
                        <td>RFC 6895, RFC 1035, RFC 9108 0: RRTYPE zero is used as a special indicator for the SIG RRRFC
                            2931, RFC 4034 and in other circumstances and must neverbe allocated for ordinary use..
                            1-127: Expert Review (see mailing list information in RFC 6895) or Standards Action.
                            128-255: Expert Review (see mailing list information in RFC 6895) or Standards Action.
                            256-61439: Expert Review (see mailing list information in RFC 6895) or Standards Action.
                            61440-65279: Reserved for future use (IETF Review required to define use). 65280-65534:
                            Private Use. 65535: Reserved (Standards Action). (Expert: Roy Arends, Frederico AC Neves,
                            Ólafur Guðmundsson, Ray Bellis)
                        </td>
                    </tr>
                    <tr>
                        <td>SSHFP RR types for fingerprint types</td>
                        <td>RFC 4255 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SSHFP RR Types for public key algorithms</td>
                        <td>RFC 4255 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Underscored and Globally Scoped DNS Node Names</td>
                        <td>RFC 8552 Expert Review (Expert: Frederico A C Neves, Paul Wouters)</td>
                    </tr>
                    <tr>
                        <td>ZONEMD Hash Algorithms</td>
                        <td>RFC 8976 1-239: Specification Required. 240-254: Private Use. (Expert: Warren Kumari, Duane
                            Wessels, Wes Hardaker)
                        </td>
                    </tr>
                    <tr>
                        <td>ZONEMD Schemes</td>
                        <td>RFC 8976 1-239: Specification Required. 240-254: Private Use. (Expert: Warren Kumari, Duane
                            Wessels, Wes Hardaker)
                        </td>
                    </tr>
                    <tr>
                        <td>ZONEVERSION TYPE Values</td>
                        <td>RFC 9660 0-245: Specification Required. 246-254: Private Use. 255: Reserved. (Expert: Hugo
                            Salgado, Mauricio Vergara Ereche, Duane Wessels)
                        </td>
                    </tr>
                    <tr>
                        <td>Domain Name System Security (DNSSEC) Algorithm Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Digest Algorithms</td>
                        <td>RFC 3658, RFC 4034, RFC 4035, RFC 9157 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DNS KEY Record Diffie-Hellman Prime Lengths</td>
                        <td>RFC 2539 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DNS KEY Record Diffie-Hellman Well-Known Prime/Generator Pairs</td>
                        <td>RFC 2539 0x0000-0x07ff: Standards Action. 0x0800-0xbfff: RFC Required.</td>
                    </tr>
                    <tr>
                        <td>DNS Security Algorithm Numbers</td>
                        <td>RFC 4034, RFC 3755, RFC 6014, RFC 6944 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Domain Name System Security (DNSSEC) NextSECure3 (NSEC3) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DNSSEC NSEC3 Flags</td>
                        <td>RFC 5155, RFC 9157 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DNSSEC NSEC3 Hash Algorithms</td>
                        <td>RFC 5155, RFC 9157 RFC Required</td>
                    </tr>
                    <tr>
                        <td>DNSSEC NSEC3PARAM Flags</td>
                        <td>RFC 5155, RFC 9157 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Domain-based Message Authentication, Reporting, and Conformance (DMARC) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DMARC Report Format Registry</td>
                        <td>RFC 7489 Specification Required (Expert: Scott Kitterman)</td>
                    </tr>
                    <tr>
                        <td>DMARC Tag Registry</td>
                        <td>RFC 7489 Specification Required (Expert: Scott Kitterman)</td>
                    </tr>
                    <tr>
                        <td>DomainKeys Identified Mail (DKIM) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>_domainkey DNS TXT Record Tag Specifications</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Authorized Third-Party Signature (ATPS) Tag Registry</td>
                        <td>RFC 6541 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>DKIM Hash Algorithms</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM Key Type</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM Reporting Tag Registry</td>
                        <td>RFC 6651 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>DKIM Selector Flags</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM Service Types</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM Signature Tag Specifications</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM-Signature Canonicalization Body</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM-Signature Canonicalization Header</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DKIM-Signature Query Method</td>
                        <td>RFC 6376 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Drone Remote ID Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DRIP Frame Types</td>
                        <td>RFC 9575 0x01-0x9F: Expert Review. 0xA0-0xEF: First Come First Served. 0xF0-0xFF:
                            Experimental Use. (Expert: Adam Wiethuechter, Mohamed Boucadair)
                        </td>
                    </tr>
                    <tr>
                        <td>DRIP SAM Types</td>
                        <td>RFC 9575 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Hierarchical a HIT (HHIT) Suite IDs</td>
                        <td>RFC 9374 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hierarchical HIT (HHIT) Prefixes</td>
                        <td>RFC 9374 Expert Review (Expert: Adam Wiethuechter, Mohamed Boucadair)</td>
                    </tr>
                    <tr>
                        <td>Dynamic Host Configuration Protocol (DHCP) and Bootstrap Protocol (BOOTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Altitude Type Registry</td>
                        <td>RFC 6225 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Authentication Suboption (value 8) - Algorithm identifier values</td>
                        <td>RFC 4030 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Authentication Suboption (value 8) - Protocol identifier values</td>
                        <td>RFC 3118 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Authentication Suboption (value 8) - Replay Detection Method (RDM) identifier values</td>
                        <td>RFC 4030 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BOOTP Vendor Extensions and DHCP Options</td>
                        <td>RFC 2939 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CableLabs Client Configuration Option Ticket Control Mask Bit Definitions</td>
                        <td>RFC 3594 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Datum Registry</td>
                        <td>RFC 6225 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DHCP Cablelabs Client Configuration Option Type 122 Sub-Option Codes</td>
                        <td>RFC 3495 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DHCP Message Type 53 Values</td>
                        <td>RFC 2939 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DHCP Options Permitted in the RADIUS DHCPv4-Options Attribute</td>
                        <td>RFC 9445 Expert Review (Expert: Alan DeKok, Mohamed Boucadair)</td>
                    </tr>
                    <tr>
                        <td>DHCP Relay Agent Sub-Option Codes</td>
                        <td>RFC 3046 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DHCP State Type 156 Values</td>
                        <td>RFC 6926 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DHCP Status Code Type 151 Values</td>
                        <td>RFC 6926 IETF Review</td>
                    </tr>
                    <tr>
                        <td>GeoLoc Option Version Registry</td>
                        <td>RFC 6225 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.21 Service Type (MoS DHCPv4 Address and FQDN Sub-Options)</td>
                        <td>RFC 5678 Standards Action</td>
                    </tr>
                    <tr>
                        <td>NetWare/IP Option Type 63 Sub-Option Codes</td>
                        <td>RFC 2242 Not defined</td>
                    </tr>
                    <tr>
                        <td>NTP Time Source Suboptions</td>
                        <td>RFC 5908 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RADIUS Attributes Permitted in RADIUS Attributes DHCP Suboption</td>
                        <td>RFC 9445 Expert Review (Expert: Alan DeKok, Mohamed Boucadair)</td>
                    </tr>
                    <tr>
                        <td>VSS Type Options</td>
                        <td>RFC 6607 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Dynamic Host Configuration Protocol for IPv6 (DHCPv6)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DHCPv6 Options Permitted in the RADIUS DHCPv6-Options Attribute</td>
                        <td>RFC 9445 Expert Review (Expert: Alan DeKok, Mohamed Boucadair)</td>
                    </tr>
                    <tr>
                        <td>DUIDs</td>
                        <td>RFC 8415 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IEEE 802.21 Service Type (MoS DHCPv6 Address and FQDN Sub-Options)</td>
                        <td>RFC 5678 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 8415 Standards Action</td>
                    </tr>
                    <tr>
                        <td>NTP Time Source Suboptions</td>
                        <td>RFC 5908 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Option Codes</td>
                        <td>RFC 8415 Expert Review and Standards Action (Expert: Ted Lemon, Bernie Volz, Tomek
                            Mrugalski)
                        </td>
                    </tr>
                    <tr>
                        <td>Option Codes Permitted in the S46 Priority Option</td>
                        <td>RFC 8026 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OPTION_LQ_QUERY option</td>
                        <td>RFC 5007 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Options Permitted in the Relay-Supplied Options Option</td>
                        <td>RFC 6422 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Processor Architecture Types</td>
                        <td>RFC 5970 Expert Review (Expert: Vincent Zimmer, Bernie Volz, Tomek Mrugalski)</td>
                    </tr>
                    <tr>
                        <td>RADIUS Attributes Permitted in DHCPv6 RADIUS Option</td>
                        <td>RFC 7037 Expert Review (Expert: Bernie Volz, Tomek Mrugalski)</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 8415 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Supported Transport</td>
                        <td>RFC 9527 RFC Required</td>
                    </tr>
                    <tr>
                        <td>VSS Type Options</td>
                        <td>RFC 6607 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Dynamic Link Exchange Protocol (DLEP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Data Item Type Values</td>
                        <td>RFC 8175 26-65407: Specification Required. 65408-65534: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>Extension Type Values</td>
                        <td>RFC 8175 2-65519: Specification Required. 65520-65534: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>Hop Control Actions Values</td>
                        <td>RFC 8629 4-65519: Specification Required. 65520-65534: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>IPv4 Address Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>IPv4 Attached Subnet Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>IPv4 Connection Point Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Address Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Attached Subnet Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Connection Point Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Message Type Values</td>
                        <td>RFC 8175 17-65519: Specification Required. 65520-65534: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>Peer Type Flags</td>
                        <td>RFC 8175 Specification Required (Expert: Rick Taylor)</td>
                    </tr>
                    <tr>
                        <td>Queue Parameter Sub-Data Item Type Values</td>
                        <td>RFC 8651 2-65407: Specification Required. 65408-65534: Private Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Signal Type Values</td>
                        <td>RFC 8175 3-65519: Specification Required. 65520-65534: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>Status Code Values</td>
                        <td>RFC 8175 4-111: Specification Required. 112-127: Private Use. 133-239: Specification
                            Required. 240-254: Private Use. (Expert: Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>Dynamic Source Routing (DSR) Protocol Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Dynamic Source Routing (DSR) Protocol Options</td>
                        <td>RFC 4728 Expert Review (Expert: David B. Johnson, David A. Maltz, Yih-Chun Hu)</td>
                    </tr>
                    <tr>
                        <td>Dynamic Source Routing (DSR) Protocol Route Error Types</td>
                        <td>RFC 4728 Expert Review (Expert: David B. Johnson, David A. Maltz, Yih-Chun Hu)</td>
                    </tr>
                    <tr>
                        <td>Dynamic Symmetric Key Provisioning Protocol (DSKPP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DSKPP Version Registry</td>
                        <td>RFC 6063 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Key Container Registry</td>
                        <td>RFC 6063 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRF Algorithm ID Registry</td>
                        <td>RFC 6063 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 6063 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td> E</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-pwd Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Password Preprocessing Methods</td>
                        <td>RFC 5931 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>PRF Registry</td>
                        <td>RFC 5931 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PWD-Exch Messages</td>
                        <td>RFC 5931 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Random Function Registry</td>
                        <td>RFC 5931 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Electronic Commerce Modeling Language (ECML) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>URN Prefix: urn:ietf:params:ecml</td>
                        <td>RFC 4112 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Electronic Commerce Modeling Language Version 2 (ECMLv2) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ecom_Payment_Card_Protocol Registry</td>
                        <td>RFC 4112 Expert Approval (Expert: Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>Ecom_Payment_Card_Type Registry</td>
                        <td>RFC 4112 Expert Approval (Expert: Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>Ecom_Transaction_Type Registry</td>
                        <td>RFC 4112 Expert Approval (Expert: Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>Email Authentication Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Email Authentication Methods</td>
                        <td>RFC 8601 Expert Review (Expert: Murray Kucherawy (primary), Scott Kitterman (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Email Authentication Property Types</td>
                        <td>RFC 8601 Expert Review (Expert: Murray Kucherawy (primary), Scott Kitterman (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Email Authentication Result Names</td>
                        <td>RFC 8601 Expert Review (Expert: Murray Kucherawy (primary), Scott Kitterman (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Emergency Call Additional Data</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Device Classification</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Device ID Type</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Device/Service Data Type</td>
                        <td>RFC 7852 Specification Required (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Data Types</td>
                        <td>RFC 7852 Specification Required (Expert: Brian Rosen (primary), Henning Schulzrinne
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Provider ID Series</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Service Environment</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Service Mobility</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Service Type</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Type of Provider</td>
                        <td>RFC 7852 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Metadata/Control Data</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Emergency Call Action Failure Reasons</td>
                        <td>RFC 8147 Expert Review (Expert: Randall Gellens)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Actions</td>
                        <td>RFC 8147 Expert Review (Expert: Randall Gellens)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Static Messages</td>
                        <td>RFC 8148 Specification Required (Expert: Randall Gellens)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Vehicle Camera IDs</td>
                        <td>RFC 8148 Expert Review (Expert: Randall Gellens)</td>
                    </tr>
                    <tr>
                        <td>Emergency Call Vehicle Lamp IDs</td>
                        <td>RFC 8148 Expert Review (Expert: Randall Gellens)</td>
                    </tr>
                    <tr>
                        <td>Enumservice Registrations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Enumservice Registrations</td>
                        <td>RFC 6117 Specification Required (Expert: Bernie Hoeneisen)</td>
                    </tr>
                    <tr>
                        <td>Ephemeral Diffie-Hellman Over COSE (EDHOC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EDHOC Authentication Credential Types</td>
                        <td>RFC 9668 less than -65536: Private Use. -65536 to -25: Specification Required. -24 to 23:
                            Standards Action with Expert Review. 24 to 65535: Specification Required. greater than
                            65535: Private Use. (Expert: Francesca Palombini, Marco Tiloca, Göran Selander)
                        </td>
                    </tr>
                    <tr>
                        <td>EDHOC Cipher Suites</td>
                        <td>RFC 9528 -65536 to -25: Specification Required. -24 to -21: Private Use. -20 to 23:
                            Standards Action with Expert Review. 24 to 65535: Specification Required. (Expert: John
                            Mattson, Göran Selander, Mališa Vučinić)
                        </td>
                    </tr>
                    <tr>
                        <td>EDHOC Error Codes</td>
                        <td>RFC 9528 -65536 to -25: Expert Review. -24 to 23: Standards Action. 24 to 65535: Expert
                            Review. (Expert: John Mattson, Göran Selander, Mališa Vučinić)
                        </td>
                    </tr>
                    <tr>
                        <td>EDHOC Exporter Labels</td>
                        <td>RFC 9528 0-23: Standards Action. 24-32767: Expert Review. 32768-65535: Private Use. (Expert:
                            John Mattson, Göran Selander, Mališa Vučinić)
                        </td>
                    </tr>
                    <tr>
                        <td>EDHOC External Authorization Data</td>
                        <td>RFC 9528 0-23: Standards Action with Expert Review. 24-65535: Specification Required.
                            (Expert: John Mattson, Göran Selander, Mališa Vučinić)
                        </td>
                    </tr>
                    <tr>
                        <td>EDHOC Method Types</td>
                        <td>RFC 9528 -65536 to -25: Specification Required. -24 to 23: Standards Action with Expert
                            Review. 24 to 65535: Specification Required. (Expert: John Mattson, Göran Selander, Mališa
                            Vučinić)
                        </td>
                    </tr>
                    <tr>
                        <td>ESP AGGFRAG_PAYLOAD</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AGGFRAG_PAYLOAD Sub-Types</td>
                        <td>RFC 9347 Expert Review (Expert: Christian Hopps)</td>
                    </tr>
                    <tr>
                        <td>Ethernet VPN (EVPN)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EVPN Route Types</td>
                        <td>RFC 7432 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Extended Master Session Key (EMSK) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EMSK PRF Numbers</td>
                        <td>RFC 5295 0-220: IETF Review. 221-255: Reserved for Private Use.</td>
                    </tr>
                    <tr>
                        <td>User Specific Root Keys (USRK) Key Labels</td>
                        <td>RFC 5295 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Extensible Authentication Protocol (EAP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ADE Type Namespace</td>
                        <td>RFC 4746 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Attribute Types (Non-Skippable Attributes 0-127)</td>
                        <td>RFC 4187 Specification Required (Expert: Vesa Lehtovirta)</td>
                    </tr>
                    <tr>
                        <td>Attribute Types (Skippable Attributes 128-255)</td>
                        <td>RFC 4187 Specification Required (Expert: Vesa Lehtovirta)</td>
                    </tr>
                    <tr>
                        <td>DH Group ID Namespace</td>
                        <td>RFC 4746 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>EAP Finish/Re-auth Flags</td>
                        <td>RFC 6630 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>EAP Initiate and Finish Attributes</td>
                        <td>RFC 6696 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EAP Initiate/Re-auth Flags</td>
                        <td>RFC 6630 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>EAP Initiate/Re-auth-Start Flags</td>
                        <td>RFC 6630 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>EAP Lower Layers</td>
                        <td>RFC 6677 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-AKA&#39; AT_KDF Key Derivation Function Values</td>
                        <td>RFC 9048 Specification Required (Expert: Vesa Lehtovirta)</td>
                    </tr>
                    <tr>
                        <td>EAP-AKA&#39; AT_KDF_FS Key Derivation Function Values</td>
                        <td>RFC 9678 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST (value 43) Error-TLV (value 5) Error-Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-FAST (value 43) Error-TLV (value 5) Error-Codes</td>
                        <td>RFC 4851 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST (value 43) Request-Action TLV (value 19) Action Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-FAST (value 43) Request-Action TLV (value 19) Action Codes</td>
                        <td>RFC 4851 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST GTC Error Codes</td>
                        <td>RFC 5421 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST PAC Attribute Types</td>
                        <td>RFC 5422 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST PAC Types</td>
                        <td>RFC 5422 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST Server-Trusted-Root Credential Format Types</td>
                        <td>RFC 5422 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-FAST TLV Types (Value 43)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-FAST TLV Types (Value 43)</td>
                        <td>RFC 4851 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-GPSK Ciphersuites</td>
                        <td>RFC 5433 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EAP-GPSK Failure Codes</td>
                        <td>RFC 5433 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EAP-GPSK OP Codes</td>
                        <td>RFC 5433 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EAP-GPSK Protected Data Payloads</td>
                        <td>RFC 5433 IETF Review</td>
                    </tr>
                    <tr>
                        <td>EAP-IKEv2 Payloads</td>
                        <td>RFC 5106 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Cryptosuites</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Cryptosuites</td>
                        <td>RFC 9140 Specification Required (Expert: Tuomas Aura, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Error Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Error Codes</td>
                        <td>RFC 9140 6001-6999: Private and Experimental Use. All other values: Specification Required.
                            (Expert: Tuomas Aura, Mohit Sethi)
                        </td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Message Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB Message Types</td>
                        <td>RFC 9140 Specification Required (Expert: Tuomas Aura, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB PeerInfo Data Fields</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB PeerInfo Data Fields</td>
                        <td>RFC 9140 Specification Required (Expert: Tuomas Aura, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB ServerInfo Data Fields</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-NOOB ServerInfo Data Fields</td>
                        <td>RFC 9140 Specification Required (Expert: Tuomas Aura, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>EAP-SAKE messages</td>
                        <td>RFC 4763 IETF Review with Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>EAP-TTLS AVP Usage</td>
                        <td>RFC 5281 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Encryption Algorithms</td>
                        <td>RFC 4793 0x0003-0x7fff: Specification Required and IESG Approval. 0x8000-0xffff:
                            Vendor-specific proprietary algorithms. (Expert: Joseph Salowey)
                        </td>
                    </tr>
                    <tr>
                        <td>EXT_Type Numbers</td>
                        <td>RFC 4764 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Hash Algorithms</td>
                        <td>RFC 4793 0x0006-0x7fff: Specification Required and IESG Approval. 0x8000-0xffff: Proprietary
                            vendor-specific algorithms. (Expert: Joseph Salowey)
                        </td>
                    </tr>
                    <tr>
                        <td>MAC Algorithms</td>
                        <td>RFC 4793 0x0002-0x7fff: Specification Required and IESG Approval. 0x8000-0xffff:
                            Vendor-specific proprietary algorithms. (Expert: Joseph Salowey)
                        </td>
                    </tr>
                    <tr>
                        <td>MAC ID Namespace</td>
                        <td>RFC 4746 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 6696 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Method Types</td>
                        <td>RFC 3748 1-191: Specification Required. 192-253: Standards Action. 254: Expanded Type. 255:
                            Experimental. 256-4294967295: Specification Required. (Expert: Joseph Salowey)
                        </td>
                    </tr>
                    <tr>
                        <td>non-skippable attributes</td>
                        <td>RFC 4763 IETF Review with Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Packet Codes</td>
                        <td>RFC 3748 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Public Key ID Namespace</td>
                        <td>RFC 4746 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Re-authentication Cryptosuites</td>
                        <td>RFC 6696 IETF Review</td>
                    </tr>
                    <tr>
                        <td>skippable attributes</td>
                        <td>RFC 4763 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Subtypes</td>
                        <td>RFC 4187 Specification Required (Expert: Vesa Lehtovirta)</td>
                    </tr>
                    <tr>
                        <td>TEAP Error TLV (value 5) Error Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP Error TLV (value 5) Error Codes</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Margaret Cullen,
                            Nancy Cam-Winget)
                        </td>
                    </tr>
                    <tr>
                        <td>TEAP Identity-Type TLV (value 2) Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP Identity-Type TLV (value 2) Registry</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TEAP PAC TLV (value 11) PAC Attribute Type Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP PAC TLV (value 11) PAC Attribute Type Codes</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Registry closed</td>
                    </tr>
                    <tr>
                        <td>TEAP PAC TLV (value 11) PAC-Type Type Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP PAC TLV (value 11) PAC-Type Type Codes</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Registry closed</td>
                    </tr>
                    <tr>
                        <td>TEAP Request-Action TLV (value 8) Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP Request-Action TLV (value 8) Registry</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TEAP Status Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP Status Codes</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TEAP TLV Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP TLV Types</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Margaret Cullen,
                            Nancy Cam-Winget)
                        </td>
                    </tr>
                    <tr>
                        <td>TEAP Trusted-Server-Root TLV (value 17) Credential-Format Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TEAP Trusted-Server-Root TLV (value 17) Credential-Format Codes</td>
                        <td>Internet Draft draft-ietf-emu-rfc7170bis-19 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Trusted Non-3GPP Access EAP Parameters</td>
                        <td>RFC 7458 Specification Required (Expert: Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>Extensible Authentication Protocol (EAP) Channel-Binding Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP Channel-Binding Codes</td>
                        <td>RFC 6677 Standards Action</td>
                    </tr>
                    <tr>
                        <td>EAP Channel-Binding Namespaces</td>
                        <td>RFC 6677 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Extensible Authentication Protocol (EAP) Encrypted Key Exchange (EKE) Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Channel-Binding Type Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Diffie-Hellman Group Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Encryption Algorithm Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Exchange Registry</td>
                        <td>RFC 6124 RFC Required</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Failure-Code Registry</td>
                        <td>RFC 6124 RFC Required</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Identity Type Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Keyed Message Digest (MAC) Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>EAP-EKE Pseudo Random Function Registry</td>
                        <td>RFC 6124 Specification Required (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Extensible Binary Meta Language (EBML)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EBML DocTypes</td>
                        <td>RFC 8794 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>EBML Element IDs</td>
                        <td>RFC 8794 0x80-0xFE: RFC Required. 0x407F-0x7FFE: Specification Required. 0x203FFF-0x3FFFFE:
                            First Come First Served. 0x101FFFFF-0x1FFFFFFE: Specification Required or First Come First
                            Served. (Expert: Dave Rice (primary), Steve Lhomme (backup), Moritz Bunkus (backup))
                        </td>
                    </tr>
                    <tr>
                        <td>Extensible Markup Language (XML) Configuration Access Protocol (XCAP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>XCAP Application Unique IDs</td>
                        <td>RFC 4825 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Extensible Provisioning Protocol (EPP) Extensions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Extensions for the Extensible Provisioning Protocol (EPP)</td>
                        <td>RFC 7451 Specification Required (Expert: Scott Hollenbeck (primary), Alexander Mayrhofer
                            (secondary), Ning Kong (secondary), Gavin Brown (secondary), Roger D Carney (secondary), Jim
                            Galvin (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Extensible Provisioning Protocol (EPP) Organization Role Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EPP Organization Role Values</td>
                        <td>RFC 8543 Expert Review (Expert: James Gould)</td>
                    </tr>
                    <tr>
                        <td>Extensible Provisioning Protocol (EPP) Repository Identifiers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EPP Repository Identifiers</td>
                        <td>RFC 5730 First Come First Served</td>
                    </tr>
                    <tr>
                        <td> F</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FCAST Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FCAST Object Metadata Encoding</td>
                        <td>RFC 6968 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>FCAST Object Metadata Format</td>
                        <td>RFC 6968 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>FCAST Object Metadata Types</td>
                        <td>RFC 6968 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Federated File System (FedFS) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FedFS Annotation Keys</td>
                        <td>RFC 7532 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>FedFS Object Identifiers</td>
                        <td>RFC 7532 Registry Closed</td>
                    </tr>
                    <tr>
                        <td>Fibre Channel Port Types Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Fibre Channel Port Types</td>
                        <td>RFC 4044 1-9999: Specification Required. 10000-99999: Private Use. 100000 and higher:
                            Reserved. (Expert: Claudio DeSanti)
                        </td>
                    </tr>
                    <tr>
                        <td>Flow Spec Component Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Flow Spec Component Types</td>
                        <td>RFC 8955, RFC 8956 0: Reserved. 1-127: Specification Required. 128-254: Expert Review. 255:
                            Reserved. (Expert: Susan Hares, Robert Raszuk)
                        </td>
                    </tr>
                    <tr>
                        <td>FLUTE - File Delivery over Unidirectional Transport (FLUTE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FLUTE Content Encoding Algorithms</td>
                        <td>RFC 6726 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>FOOBAR Address Family Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Assigned FOOBAR Address Families</td>
                        <td>RFC 1639 IANA assignment</td>
                    </tr>
                    <tr>
                        <td>Forwarding and Control Element Separation (ForCES)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Association Setup Response</td>
                        <td>RFC 5810 0x00000000-0x000000FF: IETF Review. 0x00000100-0x0000FFFF: Specification Required.
                            (Expert: Jamal Hadi Salim, Joel Halpern)
                        </td>
                    </tr>
                    <tr>
                        <td>Association Teardown Message</td>
                        <td>RFC 5810 0x00000000-0x0000FFFF: IETF Review. 0x00010000-0x7FFFFFFF: Specification Required.
                            (Expert: Jamal Hadi Salim, Joel Halpern)
                        </td>
                    </tr>
                    <tr>
                        <td>Exception ID</td>
                        <td>RFC 6956 Specification Required (Expert: Jamal Hadi Salim, Joel Halpern)</td>
                    </tr>
                    <tr>
                        <td>EXTENDEDRESULT-TLV Result Values</td>
                        <td>RFC 7391 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Header Flags</td>
                        <td>RFC 5810 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Logical Functional Block (LFB) Class Names and Class Identifiers</td>
                        <td>RFC 5812, RFC 7121 0-65535: Standards Action.                            &amp;gt;65535:
                            First Come First Served with any publicly available specification.
                        </td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 5810 0x00-0x1F: IETF Review. 0x20-0x7F: Specification Required. (Expert: Jamal Hadi
                            Salim, Joel Halpern)
                        </td>
                    </tr>
                    <tr>
                        <td>Metadata ID</td>
                        <td>RFC 6956 Specification Required (Expert: Jamal Hadi Salim, Joel Halpern)</td>
                    </tr>
                    <tr>
                        <td>Operation Selection (OPER-TLV) Types</td>
                        <td>RFC 5810 0x0000-0x00FF: IETF Review. 0x0100-0x7FFF: Specification Required. (Expert: Jamal
                            Hadi Salim, Joel Halpern)
                        </td>
                    </tr>
                    <tr>
                        <td>RESULT-TLV Result Values</td>
                        <td>RFC 5810 Expert Review (Expert: Jamal Hadi Salim, Joel Halpern)</td>
                    </tr>
                    <tr>
                        <td>TLV Types</td>
                        <td>RFC 5810 0x0000-0x01FF: IETF Review. 0x0200-0x7FFF: Specification Required. (Expert: Jamal
                            Hadi Salim, Joel Halpern)
                        </td>
                    </tr>
                    <tr>
                        <td>Validate Error ID</td>
                        <td>RFC 6956 Specification Required (Expert: Jamal Hadi Salim, Joel Halpern)</td>
                    </tr>
                    <tr>
                        <td>Free Lossless Audio Codec (FLAC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FLAC Application Metadata Block IDs</td>
                        <td>RFC 9639 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>FTP parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FTP Commands and Extensions</td>
                        <td>RFC 5797 registration marked &quot;mandatory&quot; (&#39;m&#39; in
                            the &quot;conf&quot; column): Standards Action. all other registrations: Specification
                            Required. (Expert: John Klensin)
                        </td>
                    </tr>
                    <tr>
                        <td> G</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>General Internet Signalling Transport (GIST) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Additional Information Types</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Error Code 1 Subcodes</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Error Code 10 Subcodes</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Error Code 12 Subcodes</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Error Code 9 Subcodes</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>GIST Error Codes</td>
                        <td>RFC 5971 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>GIST MA-Protocol-IDs</td>
                        <td>RFC 5971 0-63: IETF Review. 64-119: Expert Review. (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>GIST Message Routing Methods</td>
                        <td>RFC 5971 0-63: IETF Review. 64-119: Specification Required. (Expert: Martin Stiemerling)
                        </td>
                    </tr>
                    <tr>
                        <td>GIST Message Types</td>
                        <td>RFC 5971 0-31: IETF Review. 32-55: Expert Review. (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>GIST Object Types</td>
                        <td>RFC 5971 0-1023: IETF Review. 1024-1999: Specification Required. (Expert: Martin
                            Stiemerling)
                        </td>
                    </tr>
                    <tr>
                        <td>NSIS Signaling Layer Protocol (NSLP) Identifiers</td>
                        <td>RFC 5971 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Generalized Multi-Protocol Label Switching (GMPLS) Signaling Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Actions</td>
                        <td>RFC 3471 IETF Review or Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Administrative Status Information Flags</td>
                        <td>RFC 4783 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Association Type</td>
                        <td>RFC 4872 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CWDM Channel Spacing Subregistry</td>
                        <td>RFC 6205 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DWDM Channel Spacing Subregistry</td>
                        <td>RFC 6205 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Ethernet Bandwidth Profiles</td>
                        <td>RFC 6003 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Ethernet Sender TSpec TLVs/Ethernet Flowspec TLVs</td>
                        <td>RFC 6003 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Ethernet Switching Granularities</td>
                        <td>RFC 6003 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Generalized PIDs (G-PID)</td>
                        <td>RFC 3471, RFC 4328 0-31743: Standards Action. 31744-32767: Assigned Temporarily for
                            Experimental Usage. 32768-65535: Standards Action.
                        </td>
                    </tr>
                    <tr>
                        <td>Generalized SCSI (Switching Capability Specific Information) TLV Types</td>
                        <td>RFC 8258 Specification Required (Expert: Lou Berger, Vishnu Beeram)</td>
                    </tr>
                    <tr>
                        <td>Grid Subregistry</td>
                        <td>RFC 6205 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Hierarchy Actions</td>
                        <td>RFC 6107 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Interface_ID Types</td>
                        <td>RFC 3471 IETF Review or Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>LSP Encoding Types</td>
                        <td>RFC 3471, RFC 4328 0-239: Standards Action. 240-255: Assigned temporarily for Experimental
                            Usage.
                        </td>
                    </tr>
                    <tr>
                        <td>OTN Signal Type</td>
                        <td>RFC 7139, RFC 7892 0-255: Standards Action. 0-255: Specification Required. (Expert: Daniele
                            Ceccarelli, Fatai Zhang)
                        </td>
                    </tr>
                    <tr>
                        <td>Special Purpose Generalized Label Values</td>
                        <td>RFC 8359 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Switching Types</td>
                        <td>RFC 3471, RFC 4328, RFC 7074 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GeneRic Autonomic Signaling Protocol (GRASP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GRASP Messages and Options</td>
                        <td>RFC 8990 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GRASP Objective Names</td>
                        <td>RFC 8990 Specification Required (Expert: Michael Richardson)</td>
                    </tr>
                    <tr>
                        <td>Generic Routing Encapsulation (GRE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GRE Protocol Types</td>
                        <td>RFC 2784 Need to go to IEEE</td>
                    </tr>
                    <tr>
                        <td>GRE Version Numbers</td>
                        <td>RFC 2784 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Generic Security Service Application Program Interface (GSSAPI)/Kerberos/Simple
                            Authentication and Security Layer (SASL) Service Names
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GSSAPI/Kerberos/SASL Service Names</td>
                        <td>RFC 2743 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Generic Security Service Application Program Interface Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GSS-API URN Parameters</td>
                        <td>RFC 7056 IETF Review or Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Geolocation Policy</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Geolocation Policy Location Profile Names</td>
                        <td>RFC 6772 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Geopriv HTTP Enabled Location Delivery (HELD) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HELD Error Codes</td>
                        <td>RFC 5985 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Geopriv Identifiers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Geopriv Identifiers</td>
                        <td>RFC 7035 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Geopriv Location Object Registries</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Method Tokens</td>
                        <td>RFC 4119 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>PIDF-LO Civic Address Considerations Registry</td>
                        <td>RFC 5774 Expert Review</td>
                    </tr>
                    <tr>
                        <td>XML Namespaces for &#39;provided-by&#39; elements for use with PIDF-LO objects</td>
                        <td>RFC 4119 Expert Review (Expert: Primary: Allison Mankin, Secondary: Jon Peterson)</td>
                    </tr>
                    <tr>
                        <td>Geopriv Location Type Registries</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Civic Address Types (CAtypes)</td>
                        <td>RFC 4776, RFC 6848 Type=A: IETF Review. Type=B: Expert Review. (Expert: Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>Location Types</td>
                        <td>RFC 4589 Expert Review (Expert: Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>Relative Location Parameters</td>
                        <td>RFC 7035 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Global Navigation Satellite System (GNSS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Global Navigation Satellite System (GNSS) Types</td>
                        <td>RFC 7105 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Adaptation Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Adaptation Types</td>
                        <td>RFC 3292 0x000-0x2FF: IETF Review. 0x300-0xFFF: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Event Flag Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Event Flags</td>
                        <td>RFC 3292 Expert Review (Expert: Stefaan De Cnodder, Avri Doria)</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Failure Response Message Name Space
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Failure Response Message Names</td>
                        <td>RFC 3292 0-59: IETF Review. 60-79: Reserved for Vendor Private Extensions. 80-127: IETF
                            Review. 128-159: Reserved for Vendor Private Extensions. 160-255: IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Label Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Label Type Names</td>
                        <td>RFC 3292 0x000-0xAFF: IETF Review. 0xB00-0xEFF: RFC Required. 0xF00-0xFFF: Reserved for
                            vendor private use.
                        </td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Message Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 3292 0-99: IETF Review. 100-199: RFC Required. 200-249: Intended for Abstract and
                            Resource Model Extension Messages. 250-255: Reserved for vendor private use.
                        </td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Model Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Model Type Names</td>
                        <td>RFC 3292 0: IETF Review. 1-200: RFC Required. 201-255: Reserved for vendor private use.</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Port Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Port Type Names</td>
                        <td>RFC 3292 0-127: IETF Review. 128-255: RFC Required or Specification Required. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Result Type Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Result Type Names</td>
                        <td>RFC 3292 Expert Review (Expert: Stefaan De Cnodder, Avri Doria)</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Service ID Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Service ID Names</td>
                        <td>RFC 3292 0-1023: IETF Review. 1024-65535: RFC Required.</td>
                    </tr>
                    <tr>
                        <td>Global Switch Management Protocol version 3 (GSMPv3) Traffic Control Name Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Traffic Control Flags</td>
                        <td>RFC 3292 Expert Review (Expert: Stefaan De Cnodder, Avri Doria)</td>
                    </tr>
                    <tr>
                        <td>Global Switched Telephone Network (GSTN) Address Element Extensions in Email Services</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Qual2-Label</td>
                        <td>RFC 2846 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Qualif-Type 1</td>
                        <td>RFC 2846, RFC 3191 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Service Selector</td>
                        <td>RFC 2846, RFC 3191 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GMPLS Routing Parameters for WSON</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Types for Subfields of WSON Resource Block Information Registry</td>
                        <td>RFC 7581 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Grant Negotiation and Authorization Protocol (GNAP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GNAP Access Token Flags</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Assertion Formats</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Authorization Server Discovery Fields</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Client Instance Display Fields</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Client Instance Fields</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Error Codes</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Grant Request Parameters</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Grant Response Parameters</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Interaction Finish Methods</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Interaction Hints</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Interaction Mode Responses</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Interaction Start Modes</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Key Formats</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Key Proofing Methods</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Resource Set Registration Request Parameters</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GNAP Resource Set Registration Response Parameters</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GNAP RS-Facing Discovery Document Fields</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GNAP RS-Facing Error Codes</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>GNAP Subject Information Request Fields</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Subject Information Response Fields</td>
                        <td>RFC 9635 Specification Required (Expert: Justin Richer, Joseph Salowey, Sudesha Shetty)</td>
                    </tr>
                    <tr>
                        <td>GNAP Token Formats</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>GNAP Token Introspection Request</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>GNAP Token Introspection Response</td>
                        <td>Internet Draft draft-ietf-gnap-resource-servers-09 Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Group Domain of Interpretation (GDOI) Payloads</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GAP Payload Policy Attributes</td>
                        <td>RFC 6407 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GDOI DOI Exchange Types</td>
                        <td>RFC 8263 Specification Required (Expert: Brian Weis)</td>
                    </tr>
                    <tr>
                        <td>GDOI ID Payload Type Values</td>
                        <td>RFC 3547 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GDOI SA TEK Attributes</td>
                        <td>RFC 8052 Expert Review (Expert: Brian Weis, Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>ID Types</td>
                        <td>RFC 8052 Expert Review (Expert: Brian Weis, Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>IEC 62351-9 Authentication Values</td>
                        <td>RFC 8052 Expert Review (Expert: Brian Weis, Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>IEC 62351-9 Confidentiality Values</td>
                        <td>RFC 8052 Expert Review (Expert: Brian Weis, Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>Key Download Type Values</td>
                        <td>RFC 3547 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SA KEK Payload Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SA TEK Payload Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Group Secure Association Group Management Protocol (GSAKMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GSAKMP Acknowledgment Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Certificate Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Cryptographic Key Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Exchange Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Group Identification Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Identification Classification</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Identification Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Key Creation Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Key Download Data Item Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Mechanism Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Nonce Hash Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Nonce Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Notification Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Payload Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Policy Token Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Rekey Event Types</td>
                        <td>RFC 4535 Standards Action</td>
                    </tr>
                    <tr>
                        <td>GSAKMP Signature Types</td>
                        <td>RFC 4535 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td> H</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hash Algorithms for HTTP Digest Fields</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hash Algorithms for HTTP Digest Fields</td>
                        <td>RFC 9530 Specification Required (Expert: Roberto Polli (primary), Lucas Pardue
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Hash Function Textual Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hash Function Textual Names</td>
                        <td>RFC 8122 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Hash-Based Signatures</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Leighton-Micali Signatures (LMS)</td>
                        <td>RFC 8554 0x00000005-0xDDDDDDDC: Specification Required. 0xDDDDDDDD-0xFFFFFFFF: Private Use.
                            (Expert: David McGrew, Scott Fluhrer)
                        </td>
                    </tr>
                    <tr>
                        <td>LM-OTS Signatures</td>
                        <td>RFC 8554 0x00000001-0xDDDDDDDC: Specification Required. 0xDDDDDDDD-0xFFFFFFFF: Private Use.
                            (Expert: David McGrew, Scott Fluhrer)
                        </td>
                    </tr>
                    <tr>
                        <td>WOTS+ Signatures</td>
                        <td>RFC 8391 Specification Required (Expert: Andreas Huelsing, Stefan-Lukas Gazdag)</td>
                    </tr>
                    <tr>
                        <td>XMSS Signatures</td>
                        <td>RFC 8391 Specification Required (Expert: Andreas Huelsing, Stefan-Lukas Gazdag)</td>
                    </tr>
                    <tr>
                        <td>XMSS^MT Signatures</td>
                        <td>RFC 8391 Specification Required (Expert: Andreas Huelsing, Stefan-Lukas Gazdag)</td>
                    </tr>
                    <tr>
                        <td>Host Identity Protocol (HIP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DI-Types</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ESP Transform Suite IDs</td>
                        <td>RFC 7402 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Group IDs</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HI Algorithm</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HIP Certificate Types</td>
                        <td>RFC 8002 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HIP Cipher ID</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HIP NAT Traversal Modes</td>
                        <td>RFC 5770 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HIP Transport Modes</td>
                        <td>RFC 6261 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>HIP Version</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HIP Via Flags</td>
                        <td>RFC 6028 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>HIT Suite ID</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Notify Message Types</td>
                        <td>RFC 7401 1-50: IETF Review. 51-8191: Specification Required. 8192-16383: Reserved for
                            Private Use. 16384-40959: Specification Required. 40960-65535: Reserved for Private Use.
                            (Expert: Robert Moskowitz, Jeff Ahrenholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Packet Types</td>
                        <td>RFC 7401 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Parameter Types</td>
                        <td>RFC 7401 0-1023: IETF Review. 1024-32767: Specification Required. 32768-49151: Reserved for
                            Private Use. 49152-61439: Specification Required. 61440-65535: IETF Review. (Expert: Robert
                            Moskowitz, Jeff Ahrenholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Registration Failure Types</td>
                        <td>RFC 8003 0-200: IETF Review. 201-255: Reserved for Private Use.</td>
                    </tr>
                    <tr>
                        <td>Registration Types</td>
                        <td>RFC 8003 0-200: IETF Review. 201-255: Reserved for Private Use.</td>
                    </tr>
                    <tr>
                        <td>Suite IDs</td>
                        <td>RFC 5201 Registry closed per RFC 7401</td>
                    </tr>
                    <tr>
                        <td>HTTP Message Signature</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Signature Algorithms</td>
                        <td>RFC 9421 Specification Required (Expert: Justin Richer, Manu Sporny)</td>
                    </tr>
                    <tr>
                        <td>HTTP Signature Component Parameters</td>
                        <td>RFC 9421 Expert Review (Expert: Justin Richer, Manu Sporny)</td>
                    </tr>
                    <tr>
                        <td>HTTP Signature Derived Component Names</td>
                        <td>RFC 9421 Expert Review (Expert: Justin Richer, Manu Sporny)</td>
                    </tr>
                    <tr>
                        <td>HTTP Signature Metadata Parameters</td>
                        <td>RFC 9421 Expert Review (Expert: Justin Richer, Manu Sporny)</td>
                    </tr>
                    <tr>
                        <td>HTTP Origin-Bound Authentication (HOBA) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HOBA Device Identifier Types</td>
                        <td>RFC 7486 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>HOBA Key Identifier Types</td>
                        <td>RFC 7486 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>HOBA Signature Algorithms</td>
                        <td>RFC 7486 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Hybrid Public Key Encryption (HPKE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HPKE AEAD Identifiers</td>
                        <td>RFC 9180 Specification Required (Expert: Christopher Wood, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>HPKE KDF Identifiers</td>
                        <td>RFC 9180 Specification Required (Expert: Christopher Wood, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>HPKE KEM Identifiers</td>
                        <td>RFC 9180 Specification Required (Expert: Christopher Wood, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Alt-Svc Parameter Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Alt-Svc Parameter Registry</td>
                        <td>RFC 7838 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Authentication Control Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Authentication Control Parameters</td>
                        <td>RFC 8053 Specification Required (Expert: Rifaat Shekh-Yusef, Yutaka Oiwa)</td>
                    </tr>
                    <tr>
                        <td>HTTP Mutual Authentication Host Validation Methods</td>
                        <td>RFC 8120 Expert Review (Expert: Rifaat Shekh-Yusef, Yutaka Oiwa)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Authentication Scheme Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Authentication Schemes</td>
                        <td>RFC 9110 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HTTP Mutual Authentication Algorithms</td>
                        <td>RFC 8120 Expert Review (Expert: Rifaat Shekh-Yusef, Yutaka Oiwa)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Cache Directive Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Cache Directive Registry</td>
                        <td>RFC 9111 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Cache-Status</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Cache-Status</td>
                        <td>RFC 9211 Expert Review (Expert: Mark Nottingham)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Digest Algorithm Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hash Algorithms for HTTP Digest Authentication</td>
                        <td>RFC 7616 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>HTTP Digest Algorithm Values</td>
                        <td>RFC 3230 RFC Required or Specification Required (Expert: James Manger)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Field Name Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Field Name Registry</td>
                        <td>RFC 9110, RFC 9651 Specification Required for Permanent registrations,Expert Review for
                            Provisional registrations. (Expert: Mark Nottingham, Roy Fielding)
                        </td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Method Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Method Registry</td>
                        <td>RFC 9110 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Content Coding Registry</td>
                        <td>RFC 9110 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HTTP Forwarded Parameters</td>
                        <td>RFC 7239 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HTTP Preferences</td>
                        <td>RFC 7240 Specification Required (Expert: Julian Reschke)</td>
                    </tr>
                    <tr>
                        <td>HTTP Range Unit Registry</td>
                        <td>RFC 9110 IETF Review</td>
                    </tr>
                    <tr>
                        <td>HTTP Transfer Coding Registry</td>
                        <td>RFC 9112 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Priority</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Priority</td>
                        <td>RFC 9218 Key length of one: Specification Required. Key length greater than one: Expert
                            Review. (Expert: Lucas Pardue, Kazuho Oku)
                        </td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Problem Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Problem Types</td>
                        <td>RFC 9457 Specification Required (Expert: Mark Nottingham, Sanjay Dalal)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Proxy-Status</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Proxy Error Types</td>
                        <td>RFC 9209 Expert Review (Expert: Mark Nottingham)</td>
                    </tr>
                    <tr>
                        <td>HTTP Proxy-Status Parameters</td>
                        <td>RFC 9209 Expert Review (Expert: Mark Nottingham)</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Status Code Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Status Codes</td>
                        <td>RFC 9110 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Upgrade Token Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Upgrade Tokens</td>
                        <td>RFC 9110 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol (HTTP) Warn Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Warn Codes</td>
                        <td>RFC 7234 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol version 2 (HTTP/2) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP/2 Error Code</td>
                        <td>RFC 9113 Expert Review (Expert: Martin Thomson (primary), Julian Reschke (secondary))</td>
                    </tr>
                    <tr>
                        <td>HTTP/2 Frame Type</td>
                        <td>RFC 9113 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>HTTP/2 Settings</td>
                        <td>RFC 9113 Expert Review (Expert: Martin Thomson (primary), Julian Reschke (secondary))</td>
                    </tr>
                    <tr>
                        <td>Hypertext Transfer Protocol version 3 (HTTP/3)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP/3 Error Codes</td>
                        <td>RFC 9114 provisional: Expert Review. provisional registration date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. values 0x1f * N + 0x21 (for non-negative integer values
                            of N): Reserved. first unassigned codepoint: Standards Action. (Expert: Mike Bishop, Alan
                            Frindell)
                        </td>
                    </tr>
                    <tr>
                        <td>HTTP/3 Frame Types</td>
                        <td>RFC 9114 provisional: Expert Review. provisional registration date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. values 0x1f * N + 0x21 (for non-negative integer values
                            of N): Reserved. first unassigned codepoint: Standards Action. (Expert: Mike Bishop, Alan
                            Frindell)
                        </td>
                    </tr>
                    <tr>
                        <td>HTTP/3 Settings</td>
                        <td>RFC 9114 provisional: Expert Review. provisional registration date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. values 0x1f * N + 0x21 (for non-negative integer values
                            of N): Reserved. first unassigned codepoint: Standards Action. (Expert: Mike Bishop, Alan
                            Frindell)
                        </td>
                    </tr>
                    <tr>
                        <td>HTTP/3 Stream Types</td>
                        <td>RFC 9114 provisional: Expert Review. provisional registration date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. values 0x1f * N + 0x21 (for non-negative integer values
                            of N): Reserved. first unassigned codepoint: Standards Action. (Expert: Mike Bishop, Alan
                            Frindell)
                        </td>
                    </tr>
                    <tr>
                        <td> I</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IANA OUI Ethernet Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IANA Link Layer Discovery Protocol (LLDP) TLV Subtypes</td>
                        <td>RFC 8520, RFC 9542 Expert Review (Expert: Eliot Lear, Dan Romascanu)</td>
                    </tr>
                    <tr>
                        <td>IANA MAC ADDRESS BLOCK</td>
                        <td>RFC 9542 See RFC 9542. (Expert: Donald Eastlake (primary), Juan Carlos Zuniga (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>SNAP Protocol Numbers</td>
                        <td>RFC 9542 Expert Review (Expert: Donald Eastlake (primary), Juan Carlos Zuniga (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>The CFxxxx Series</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IANA-Maintained MIBs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IANA-ADDRESS-FAMILY-NUMBERS-MIB</td>
                        <td>RFC 2677</td>
                    </tr>
                    <tr>
                        <td>IANA-BFD-TC-STD-MIB</td>
                        <td>RFC 7330 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IANA-CHARSET-MIB</td>
                        <td>RFC 3808 See Character Sets</td>
                    </tr>
                    <tr>
                        <td>IANA-ENERGY-RELATION-MIB</td>
                        <td>RFC 7461 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IANA-ENTITY-MIB</td>
                        <td>RFC 6933 Expert Review (Expert: Andy Bierman (primary), Jürgen Schönwälder (secondary))</td>
                    </tr>
                    <tr>
                        <td>IANA-FINISHER-MIB</td>
                        <td>RFC 3806 Expert Review (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>IANA-GMPLS-TC-MIB</td>
                        <td>RFC 4802 See individual GMPLS registry procedures</td>
                    </tr>
                    <tr>
                        <td>IANA-IPPM-METRICS-REGISTRY-MIB</td>
                        <td>RFC 4148, RFC 6248 This module has been designated Obsolete. The registry will no longer be
                            updated, and the current contents will be maintained as-is.
                        </td>
                    </tr>
                    <tr>
                        <td>IANA-ITU-ALARM-TC-MIB</td>
                        <td>RFC 3877 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IANA-LANGUAGE-MIB</td>
                        <td>RFC 3165 Expert Review (Expert: Juergen Schoenwaelder, David Levi)</td>
                    </tr>
                    <tr>
                        <td>IANA-MALLOC-MIB</td>
                        <td>RFC 3559 RFC or designated expert review (Expert: Dave Thaler)</td>
                    </tr>
                    <tr>
                        <td>IANA-MAU-MIB</td>
                        <td>RFC 4836 Expert Review (Expert: Marek Hajduczenia, Operations and Management Area Directors
                            (backup))
                        </td>
                    </tr>
                    <tr>
                        <td>IANA-POWER-STATE-SET-MIB</td>
                        <td>RFC 7460 See https://www.iana.org/assignments/power-state-sets</td>
                    </tr>
                    <tr>
                        <td>IANA-PRINTER-MIB</td>
                        <td>RFC 3805 Expert Review or RFC Required (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>IANA-RTPROTO-MIB</td>
                        <td>RFC 2932 RFC or Expert Review (Expert: Dave Thaler)</td>
                    </tr>
                    <tr>
                        <td>IANA-SMF-MIB</td>
                        <td>RFC 7367 IANAsmfOpModeIdTC: First Come First Served. IANAsmfRssaIdTC: 1-127, Standards
                            Action; 128-239, Reserved for Private or Local Use; 240-255, Experimental RFC.
                        </td>
                    </tr>
                    <tr>
                        <td>IANA-STORAGE-MEDIA-TYPE-MIB</td>
                        <td>RFC 7666 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IANAifType-MIB</td>
                        <td>RFC 2863, RFC 8892 This is one of the available formats of the Interface Types (ifType) and
                            Tunnel Types (tunnelType) registries. (Expert: Dave Thaler (primary), Dan Romascanu
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>IANAolsrv2LinkMetricType-MIB</td>
                        <td>RFC 7184 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IANATn3270eTC-MIB</td>
                        <td>RFC 2561 Working Group Review (see DESCRIPTION clause associated with the MODULE-IDENTITY
                            statement)
                        </td>
                    </tr>
                    <tr>
                        <td>iCalendar Element Registries</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Actions</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Calendar User Types</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Classifications</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Components</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Display Types</td>
                        <td>RFC 7986 Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Feature Types</td>
                        <td>RFC 7986 Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Free/Busy Time Types</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Methods</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Parameters</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Participant Types</td>
                        <td>RFC 9073 Expert Review (Expert: Ken Murchison, Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>Participation Roles</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Participation Statuses</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Properties</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Proximity Values</td>
                        <td>RFC 9074 Expert Review with RFC Required (Expert: Ken Murchison, Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>Relationship Types</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>REQUEST-STATUS Values</td>
                        <td>RFC 5546 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>Resource Types</td>
                        <td>RFC 9073 Expert Review (Expert: Ken Murchison, Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>Schedule Agent Values Registry</td>
                        <td>RFC 6638 Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Schedule Force Send Values Registry</td>
                        <td>RFC 6638 Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Value Data Types</td>
                        <td>RFC 5545 Expert Review with RFC Required (Expert: Bernard Desruisseaux, Ken Murchison, Mike
                            Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>IDNA Rules and Derived Property Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IDNA Contextual Rules</td>
                        <td>RFC 5892, RFC 6452, RFC 8753, RFC 9233 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IDNA Derived Properties</td>
                        <td>RFC 5892, RFC 6452, RFC 8753, RFC 9233 Expert Review (Expert: Patrik Faltstrom (team lead),
                            Takahiro Nemoto, Peter Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>IEEE 802 Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Ethertypes</td>
                        <td>RFC 9542 Not assigned by IANA. Per RFC 9542, updates to this registry are coordinated with
                            the expert. (Expert: Donald Eastlake (primary), Juan Carlos Zuniga (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Logical Link Control (LLC) Numbers</td>
                        <td> Not assigned by IANA. Per RFC 9542, updates to this registry are coordinated with the
                            expert. (Expert: Donald Eastlake (primary), Juan Carlos Zuniga (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Organizationally Unique Identifiers</td>
                        <td> Not assigned by IANA. Per RFC 9542, updates to this registry are coordinated with the
                            expert. (Expert: Donald Eastlake (primary), Juan Carlos Zuniga (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>IEEE Std 802.15.4 IETF IE Subtype IDs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IEEE Std 802.15.4 IETF IE Subtype IDs</td>
                        <td>RFC 8137 Expert Review (Expert: Tero Kivinen, Pat Kinney)</td>
                    </tr>
                    <tr>
                        <td>IETF XML Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ns</td>
                        <td>RFC 3688 Specification Required (Expert: Tim Bray, Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>publicid</td>
                        <td>RFC 3688 Specification Required (Expert: Tim Bray, Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>rdfschema</td>
                        <td> Specification Required (Expert: Tim Bray, Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>schema</td>
                        <td>RFC 3688, RFC 6685 Specification Required (Expert: Tim Bray and Martin Thomson for non-IODEF
                            schemas, Kathleen Moriarty for IODEF schemas)
                        </td>
                    </tr>
                    <tr>
                        <td>In Situ OAM (IOAM)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IOAM DEX Extension-Flags</td>
                        <td>RFC 9326 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM DEX Flags</td>
                        <td>RFC 9326 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM E2E-Type</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM Namespace-ID</td>
                        <td>RFC 9197 0x0000: Expert Review. 0x0001-0x7FFF: Private Use. 0x8000-0xFFFF: Expert Review.
                            (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>IOAM Option-Type</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM POT-Flags</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM POT-Type</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM Trace-Flags</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM Trace-Type</td>
                        <td>RFC 9197 IETF Review</td>
                    </tr>
                    <tr>
                        <td>In Situ OAM (IOAM) Capabilities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IOAM SoP Capability</td>
                        <td>Internet Draft draft-ietf-ippm-ioam-conf-state-10 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IOAM TSF Capability</td>
                        <td>Internet Draft draft-ietf-ippm-ioam-conf-state-10 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Incident Object Description Exchange Format (IODEF)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Structured Cybersecurity Information (SCI) Specifications</td>
                        <td>RFC 7203 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Incident Object Description Exchange Format v2 (IODEF)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address-category</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>BulkObservable-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>BusinessImpact-severity</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>BusinessImpact-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Confidence-rating</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Contact-role</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Contact-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Counter-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Counter-unit</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Discovery-source</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>DomainData-domain-status</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>DomainData-system-status</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Email-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Expectation-action</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>ExtensionType-dtype</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>HashData-scope</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Incident-purpose</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Incident-status</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>IndicatorExpression-operator</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Key-registryaction</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>NodeRole-category</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>PostalAddress-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>RecordPattern-offsetunit</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>RecordPattern-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>RegistryHandle-registry</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Restriction</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>SoftwareReference-dtype</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>SoftwareReference-spec-id</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>System-category</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>System-ownership</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>SystemImpact-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Telephone-type</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>TimeImpact-duration</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>TimeImpact-metric</td>
                        <td>RFC 7970 Expert Review (Expert: Roman Danyliw, Takeshi Takahashi)</td>
                    </tr>
                    <tr>
                        <td>Instance Manipulation Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Instance Manipulation Values</td>
                        <td>RFC 3229 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Instant Message Disposition Notification (IMDN) Headers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IMDN Headers</td>
                        <td>RFC 5438 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Instant Messaging SRV Protocol Label Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Instant Messaging SRV Protocol Label Registry</td>
                        <td>RFC 3861 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Integrated Services Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Compression Hints</td>
                        <td>RFC 3006 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Parameter Names</td>
                        <td>RFC 2216 1-127: Parameters defined in RFC 2215. 128-254: Parameters defined by author of
                            service specificationdocument (Service and Data Element Naming).
                        </td>
                    </tr>
                    <tr>
                        <td>Service Names</td>
                        <td>RFC 2216 2-127: RFC Required. 128-254: Experimental use.</td>
                    </tr>
                    <tr>
                        <td>Inter-Asterisk eXchange (IAX) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IAX Authentication Methods</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Calling Presentation</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Calling Type of Number</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Cause Codes</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Control Frame Subclass</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Control Frames</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Dialplan Status Flags</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Encryption Methods</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Frame Types</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX HTML Command Subclasses</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Information Elements</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Media Formats</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Meta Commands</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>IAX Transit Network Identification Plan</td>
                        <td>RFC 5457 Expert Review</td>
                    </tr>
                    <tr>
                        <td>IAX Type of Network</td>
                        <td>RFC 5457 Expert Review (Expert: Cullen Jennings)</td>
                    </tr>
                    <tr>
                        <td>Interactive Connectivity Establishment (ICE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ICE Options</td>
                        <td>RFC 8839 Specification Required (Expert: Ari Keränen)</td>
                    </tr>
                    <tr>
                        <td>ICE Transport Protocols</td>
                        <td>RFC 6544 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Interface Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Interface Types (ifType)</td>
                        <td>RFC 1213, RFC 2863, RFC 7224, RFC 8892 Expert Review (Expert: Dave Thaler (primary), Dan
                            Romascanu (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Transmission Number Values</td>
                        <td>RFC 1213, RFC 8892 Specification Required (Expert: Dave Thaler (primary), Dan Romascanu
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Tunnel Types (tunnelType)</td>
                        <td>RFC 4087, RFC 8675, RFC 8892 Expert Review (Expert: Dave Thaler (primary), Dan Romascanu
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Interior Gateway Protocol (IGP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IGP Algorithm Type For Computing Flooding Topology</td>
                        <td>Internet Draft draft-ietf-lsr-dynamic-flooding-18 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IGP Algorithm Types</td>
                        <td>RFC 8665 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGP Flexible Algorithm Definition Flags</td>
                        <td>RFC 9350 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGP Metric-Type</td>
                        <td>RFC 9350, Internet Draft draft-ietf-lsr-flex-algo-bw-con-22 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGP MSD-Types</td>
                        <td>RFC 8491, RFC 9702 Expert Review (Expert: Uma Chunduri, Jeff Tantsura)</td>
                    </tr>
                    <tr>
                        <td>Link Attribute Application Identifiers</td>
                        <td>RFC 9479 Expert Review (Expert: Les Ginsberg, Chris Hopps)</td>
                    </tr>
                    <tr>
                        <td>Path Computation Element (PCE) Capability Flags</td>
                        <td>RFC 9353 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCE Discovery (PCED) Sub-TLV Type Indicators</td>
                        <td>RFC 9353 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Internet - Xerox Network System (XNS) Protocol Mappings</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet - Xerox Network System (XNS) Protocol Mappings</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet Control Message Protocol (ICMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Code Fields</td>
                        <td>RFC 2780</td>
                    </tr>
                    <tr>
                        <td>ICMP Extension Object Classes and Class Sub-types</td>
                        <td>RFC 4884 0-246: First Come First Served. 247-255: Private Use.</td>
                    </tr>
                    <tr>
                        <td>ICMP Type Numbers</td>
                        <td>RFC 2780 IESG Approval or Standards Action</td>
                    </tr>
                    <tr>
                        <td>Internet Control Message Protocol version 6 (ICMPv6) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6LoWPAN Capability Bits</td>
                        <td>RFC 7400 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Address Registration Option Flags</td>
                        <td>RFC 8505 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Address Registration Option I-Field</td>
                        <td>RFC 8505 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Address Registration Option Status Values</td>
                        <td>RFC 6775, RFC 9010 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Certificate option (Type 16) Cert Type field</td>
                        <td>RFC 3971 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Crypto-Types</td>
                        <td>RFC 8928 Specification Required or IESG Approval (Expert: Pascal Thubert, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>EDAR Message Flags</td>
                        <td>RFC 9685 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>FMIPv6 Message Types (Value 154)</td>
                        <td>RFC 5568 RFC Required</td>
                    </tr>
                    <tr>
                        <td>ICMPv6 &quot;Code&quot; Fields</td>
                        <td>RFC 4443</td>
                    </tr>
                    <tr>
                        <td>ICMPv6 &quot;type&quot; Numbers</td>
                        <td>RFC 4443 0-127 (Error messages): IETF Review. 128-255 (Informational messages): IETF
                            Review.
                        </td>
                    </tr>
                    <tr>
                        <td>IPv6 ND Router Advertisement Flags</td>
                        <td>RFC 5175 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>IPv6 Neighbor Discovery Option Formats</td>
                        <td>RFC 4861 RFC Required</td>
                    </tr>
                    <tr>
                        <td>IPv6 Neighbor Discovery Prefix Information Option Flags</td>
                        <td>RFC 8425 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Option-Code for Handover Assist Information Option (Type 29)</td>
                        <td>RFC 5271 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Option-Code for Mobile Node Identifier Option (Type 30)</td>
                        <td>RFC 5271 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>P-Field Values</td>
                        <td>RFC 9685 Standards Action</td>
                    </tr>
                    <tr>
                        <td>PvD Option Flags</td>
                        <td>RFC 8801 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Qtypes</td>
                        <td>RFC 4620 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Trust Anchor option (Type 15) Name Type field</td>
                        <td>RFC 3971, RFC 6495 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Internet Date/Time Format</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Timestamp Suffix Tag Keys</td>
                        <td>RFC 9557 Permanent: Specification Required. Provisional: Expert Review. (Expert: Ujjwal
                            Sharma, Bron Gondwana)
                        </td>
                    </tr>
                    <tr>
                        <td>Internet Group Management Protocol (IGMP) Type Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>&quot;Code&quot; Fields</td>
                        <td>Internet Draft draft-ietf-pim-3228bis-07 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGMP Type Numbers</td>
                        <td>Internet Draft draft-ietf-pim-3228bis-07 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGMP/MLD Extension Types</td>
                        <td>RFC 9279 0-65533: IETF Review. 65534-65535: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>IGMP/MLD Query Message Flags</td>
                        <td>Internet Draft draft-ietf-pim-3228bis-07 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IGMP/MLD Report Message Flags</td>
                        <td>Internet Draft draft-ietf-pim-3228bis-07 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Internet Key Exchange (IKE) Attributes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Additional Exchanges Defined-- XCHG values</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Attribute Classes</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Encryption Algorithm Class Values (Value 1)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Exchange Type</td>
                        <td>RFC 2408, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Group Description (Value 4)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Group Type (Value 5)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Hash Algorithm (Value 2)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Authentication Methods (Value 3)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>ISAKMP Domain of Interpretation (DOI)</td>
                        <td>RFC 2408, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Life Type (Value 11)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Next Payload Types</td>
                        <td>RFC 2408, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Notify Message Types</td>
                        <td>RFC 2408, RFC 9395</td>
                    </tr>
                    <tr>
                        <td>Notify Messages - Error Types (1-8191)</td>
                        <td>RFC 2408, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>PRF (Value 13)</td>
                        <td>RFC 2409, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Internet Key Exchange Version 2 (IKEv2) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Group Key Bag Attributes</td>
                        <td>Internet Draft draft-ietf-ipsecme-g-ikev2-21 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Group-wide Policy Attributes</td>
                        <td>Internet Draft draft-ietf-ipsecme-g-ikev2-21 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>GSA Attributes</td>
                        <td>Internet Draft draft-ietf-ipsecme-g-ikev2-21 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Authentication Method</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Certificate Encodings</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Configuration Payload Attribute Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Configuration Payload CFG Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Exchange Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Gateway Identity Types</td>
                        <td>RFC 5685 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Hash Algorithms</td>
                        <td>RFC 7427 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Identification Payload ID Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Notification IPCOMP Transform IDs (Value 16387)</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Notify Message Error Types</td>
                        <td>RFC 7296 0-8191: Expert Review. 8192-16383: Private Use. (Expert: Tero Kivinen, Valery
                            Smyslov)
                        </td>
                    </tr>
                    <tr>
                        <td>IKEv2 Notify Message Status Types</td>
                        <td>RFC 7296 16384-40959: Expert Review. 40960-65535: Private Use. (Expert: Tero Kivinen, Valery
                            Smyslov)
                        </td>
                    </tr>
                    <tr>
                        <td>IKEv2 Payload Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Post-quantum Preshared Key ID Types</td>
                        <td>RFC 8784 1-127: Expert Review. 128-255: Private Use. (Expert: Tero Kivinen, Valery
                            Smyslov)
                        </td>
                    </tr>
                    <tr>
                        <td>IKEv2 Secure Password Methods</td>
                        <td>RFC 6467 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Security Protocol Identifiers</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>IKEv2 Traffic Selector Types</td>
                        <td>RFC 7296 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>Member Key Bag Attributes</td>
                        <td>Internet Draft draft-ietf-ipsecme-g-ikev2-21 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ROHC Attribute Types</td>
                        <td>RFC 5857 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>Transform Type Values</td>
                        <td>RFC 7296, RFC 9370 Expert Review (Expert: Tero Kivinen, Valery Smyslov)</td>
                    </tr>
                    <tr>
                        <td>Internet Message Access Protocol (IMAP) Capabilities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IMAP and JMAP Keywords</td>
                        <td>RFC 5788, RFC 8621 Expert Review (Expert: Arnt Gulbrandsen, Barry Leiba)</td>
                    </tr>
                    <tr>
                        <td>IMAP ANNOTATE Extension Attributes</td>
                        <td>RFC 5257 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>IMAP ANNOTATE Extension Entries</td>
                        <td>RFC 5257 Under vendor namespace: First Come First Served. Not under vendor namespace:
                            Standards Track or IESG-Approved Experimental RFC.
                        </td>
                    </tr>
                    <tr>
                        <td>IMAP Capabilities</td>
                        <td>RFC 3501, RFC 9051 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IMAP Mailbox Name Attributes</td>
                        <td>RFC 3501, RFC 8457, RFC 9051 IETF Review or Expert Review (Expert: Barry Leiba, Bron
                            Gondwana)
                        </td>
                    </tr>
                    <tr>
                        <td>IMAP METADATA Mailbox Entry Registry</td>
                        <td>RFC 5464 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>IMAP METADATA Server Entry Registry</td>
                        <td>RFC 5464 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>IMAP Quota Resource Types</td>
                        <td>RFC 9208 Specification Required (Expert: Alexey Melnikov, Ken Murchison)</td>
                    </tr>
                    <tr>
                        <td>IMAP Response Codes</td>
                        <td>RFC 5530 Expert Review (Expert: Arnt Gulbrandsen, Dave Cridland)</td>
                    </tr>
                    <tr>
                        <td>IMAP Threading Algorithms</td>
                        <td>RFC 5256 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>IMAP URLAUTH Access Identifiers and Prefixes</td>
                        <td>RFC 5593 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IMAP URLAUTH Authorization Mechanism Registry</td>
                        <td>RFC 4467 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>LIST-EXTENDED options</td>
                        <td>RFC 5258 FCFS; IANA approval template in RFC 5258 section 9.3</td>
                    </tr>
                    <tr>
                        <td>LIST-EXTENDED response</td>
                        <td>RFC 5258 IANA approval template in RFC 5258 section 9.3</td>
                    </tr>
                    <tr>
                        <td>Internet Message Store Events</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Event Names</td>
                        <td>RFC 5423 name starts wth &quot;vnd.&quot;; intended for private use: First Come First
                            Served. name doesn&#39;t start with &quot;vnd.&quot;; intended for interoperable use: IETF
                            Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Event Parameters</td>
                        <td>RFC 5423 name starts wth &quot;vnd.&quot;; intended for private use: First Come First
                            Served. name doesn&#39;t start with &quot;vnd.&quot;; intended for interoperable use: IETF
                            Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Internet Open Trading Protocol (IOTP) Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Algorithm/Name</td>
                        <td>RFC 2801 Expert Review (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>Attribute/Content</td>
                        <td>RFC 2801 RFC Required (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>Brand/BrandId</td>
                        <td>RFC 2801 First Come First Served (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>CurrencyAmount/CurrCode</td>
                        <td>RFC 2801 First Come First Served (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>CurrencyAmount/CurrCodeType</td>
                        <td>RFC 2801 Expert Review (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>DeliveryData/DelivMethod</td>
                        <td>RFC 2801 Expert Review (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>PackagedContent/Content</td>
                        <td>RFC 2801 Expert Review (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>RelatedTo/RelationshipType</td>
                        <td>RFC 2801 Expert Review (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>Status/StatusType</td>
                        <td>RFC 2801 RFC Required (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>TradingRole/Trading Role</td>
                        <td>RFC 2801 RFC Required (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>TransId/IotpTransType</td>
                        <td>RFC 2801 RFC Required (Expert: David Burdett)</td>
                    </tr>
                    <tr>
                        <td>Internet Printing Protocol (IPP) Registrations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Attribute Group Tags</td>
                        <td>RFC 8011 Specification Required (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Attribute Syntaxes</td>
                        <td>RFC 8011 Specification Required (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Attributes</td>
                        <td>RFC 8011 Expert Review (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Enum Attribute Values</td>
                        <td>RFC 8011 type1: Specification Required. type2: Expert Review. (Expert: Ira McDonald, Michael
                            Sweet)
                        </td>
                    </tr>
                    <tr>
                        <td>Keyword Attribute Values</td>
                        <td>RFC 8011 type1: Specification Required. type2: Expert Review. (Expert: Ira McDonald, Michael
                            Sweet)
                        </td>
                    </tr>
                    <tr>
                        <td>Objects</td>
                        <td>RFC 8011 Specification Required (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Operations</td>
                        <td>RFC 8011 Expert Review (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Out-of-Band Attribute Value Tags</td>
                        <td>RFC 8011 Specification Required (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 8011 Expert Review (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Internet Protocol version 4 (IPv4) Address Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Allocations made from the Current Recovered IPv4 Pool</td>
                        <td> Global Policy for Post Exhaustion IPv4 Allocation Mechanisms by the IANA (Ratified 6 May
                            2012)
                        </td>
                    </tr>
                    <tr>
                        <td>Current Recovered IPv4 Pool</td>
                        <td> Global Policy for Post Exhaustion IPv4 Allocation Mechanisms by the IANA (Ratified 6 May
                            2012)
                        </td>
                    </tr>
                    <tr>
                        <td>IANA IPv4 Address Space Registry</td>
                        <td>RFC 7249 Allocations to RIRs are made in line with the Global Policy published at
                            http://www.icann.org/en/resources/policy/global-addressing. All other assignments require
                            IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>IANA IPv4 Special-Purpose Address Registry</td>
                        <td>RFC 5736, RFC 6890, RFC 8190 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Internet Protocol Version 4 (IPv4) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IP Option Numbers</td>
                        <td> Not defined</td>
                    </tr>
                    <tr>
                        <td>IP Time to Live Parameter</td>
                        <td> Not defined</td>
                    </tr>
                    <tr>
                        <td>IP TOS Parameters</td>
                        <td> Registrations no longer accepted</td>
                    </tr>
                    <tr>
                        <td>IPv4 Router Alert Option Values</td>
                        <td>RFC 5350 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Type-of-Service Values</td>
                        <td> Registrations no longer accepted</td>
                    </tr>
                    <tr>
                        <td>Internet Protocol Version 6 (IPv6) Anycast Addresses</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPv6 Anycast Addresses</td>
                        <td>RFC 4291, RFC 2526 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>IPv6 Anycast Subnet-Router Anycast Address</td>
                        <td>RFC 4291 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Internet Protocol version 6 (IPv6) Global Unicast Allocations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IANA IPv6 Special-Purpose Address Registry</td>
                        <td>RFC 4773, RFC 6890, RFC 8190 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IPv6 Global Unicast Address Assignments</td>
                        <td>RFC 7249 Allocations to RIRs are made in line with the Global Policy published at
                            http://www.icann.org/en/resources/policy/global-addressing. All other assignments require
                            IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>Internet Protocol Version 6 (IPv6) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Destination Options and Hop-by-Hop Options</td>
                        <td>RFC 8200, RFC 2780, RFC 9673 IESG Approval, IETF Review or Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPv6 Extension Header Types</td>
                        <td>RFC 2780, RFC 5237, RFC 7045 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Next Header Types</td>
                        <td>RFC 8200, RFC 2780, RFC 7045</td>
                    </tr>
                    <tr>
                        <td>Routing Types</td>
                        <td>RFC 8200, RFC 5871 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>RPL-option-TLV</td>
                        <td>RFC 6553 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Segment Routing Header Flags</td>
                        <td>RFC 8754 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Segment Routing Header TLVs</td>
                        <td>RFC 8754 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TaggerId Types</td>
                        <td>RFC 6621 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Internet Protocol Version 6 Address Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet Protocol Version 6 Address Space</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet Small Computer System Interface (iSCSI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>iSCSI Asynchronous Events</td>
                        <td>RFC 7143 Standards Action</td>
                    </tr>
                    <tr>
                        <td>iSCSI authentication methods</td>
                        <td>RFC 7143 IETF Review</td>
                    </tr>
                    <tr>
                        <td>iSCSI digests</td>
                        <td>RFC 7143 IETF Review</td>
                    </tr>
                    <tr>
                        <td>iSCSI Login Response Status Codes</td>
                        <td>RFC 7143 Standards Action</td>
                    </tr>
                    <tr>
                        <td>iSCSI Login/Text Keys</td>
                        <td>RFC 7145, RFC 7143 IETF Review</td>
                    </tr>
                    <tr>
                        <td>iSCSI Opcodes</td>
                        <td>RFC 7143 Standards Action to define the semantics of the opcode;Expert Review to select the
                            specific opcode(s) (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>iSCSI Protocol Level</td>
                        <td>RFC 7144 Expert Review and Standards Action (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>iSCSI Reject Reason Codes</td>
                        <td>RFC 7143 Standards Action</td>
                    </tr>
                    <tr>
                        <td>iSCSI Task Management Function Codes</td>
                        <td>RFC 7143 Standards Action</td>
                    </tr>
                    <tr>
                        <td>iSCSI Task Management Function Response Codes</td>
                        <td>RFC 7144 Standards Action</td>
                    </tr>
                    <tr>
                        <td>iSER Opcodes</td>
                        <td>RFC 7145 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SRP_GROUP key values</td>
                        <td>RFC 3723 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Internet Storage Name Service (iSNS) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Block Storage Protocols</td>
                        <td>RFC 4171 Expert Review (by IPS WG Chairperson or by Designated Expert) (Expert: David
                            Black)
                        </td>
                    </tr>
                    <tr>
                        <td>Standard iSNS Attributes</td>
                        <td>RFC 4171 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Intrusion Detection Exchange Protocol (IDXP) Options</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IDXP Options</td>
                        <td>RFC 4767 Expert Review (Expert: Ben Feinstein)</td>
                    </tr>
                    <tr>
                        <td>Intrusion Detection Message Exchange Format (IDMEF) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Attribute Values</td>
                        <td>RFC 4765 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Class and Attribute Names</td>
                        <td>RFC 4765 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IP Flow Information Export (IPFIX) Entities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPFIX Information Element Data Types</td>
                        <td>RFC 5610 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPFIX Information Element Semantics</td>
                        <td>RFC 5610 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPFIX Information Element Units</td>
                        <td>RFC 5610 Expert Review (Expert: IE Doctors (Andrew Feren, Brian Trammell, Nevil Brownlee,
                            Paul Aitken))
                        </td>
                    </tr>
                    <tr>
                        <td>IPFIX Information Elements</td>
                        <td>RFC 7012, RFC 9710 Expert Review (Expert: IE Doctors (Andrew Feren, Brian Trammell, Nevil
                            Brownlee, Paul Aitken))
                        </td>
                    </tr>
                    <tr>
                        <td>IPFIX ipv6ExtensionHeaders Bits</td>
                        <td>RFC 9740 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IPFIX Set IDs</td>
                        <td>RFC 7011 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPFIX Structured Data Types Semantics</td>
                        <td>RFC 6313 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPFIX Version Numbers</td>
                        <td>RFC 7011 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IP Multicast Traceroute Facility (Mtrace)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mtrace2 Forwarding Codes</td>
                        <td>RFC 8487 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mtrace2 TLV Types</td>
                        <td>RFC 8487 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IP Version Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IP Version Numbers</td>
                        <td>RFC 2780 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPS Protocol# (Protocol Number) Field</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Protocol# (Protocol Number) Field</td>
                        <td>RFC 3643 1-239: Standards Action. 240-255: Private Use.</td>
                    </tr>
                    <tr>
                        <td>IPSECKEY Resource Record Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Algorithm Type Field</td>
                        <td>RFC 4025, RFC 9373 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Gateway Type Field</td>
                        <td>RFC 4025 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IPv4 Multicast Address Space Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AD-HOC Block I (224.0.2.0 - 224.0.255.255)</td>
                        <td>RFC 5771 Expert Review, IESG Approval, or Standards Action (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>AD-HOC Block II (224.3.0.0-224.4.255.255 (224.3/16, 224.4/16))</td>
                        <td>RFC 5771 Expert Review, IESG Approval, or Standards Action (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>AD-HOC Block III (233.252.0.0-233.255.255.255 (233.252/14))</td>
                        <td>RFC 5771 Expert Review, IESG Approval, or Standards Action (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>DIS Transient Groups 224.252.0.0-224.255.255.255 (224.252/14))</td>
                        <td>RFC 2365 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>GLOP Block</td>
                        <td>RFC 3180 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Internetwork Control Block (224.0.1.0 - 224.0.1.255 (224.0.1/24))</td>
                        <td>RFC 5771 Expert Review, IESG Approval, or Standards Action (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Local Network Control Block (224.0.0.0 - 224.0.0.255 (224.0.0/24))</td>
                        <td>RFC 5771 Expert Review, IESG Approval, or Standards Action (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Relative Addresses used with Scoped Multicast Addresses</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>RESERVED (224.1.0.0-224.1.255.255 (224.1/16))</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>RESERVED (224.5.0.0-224.251.255.255 (251 /16s))</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>RESERVED (225.0.0.0-231.255.255.255 (7 /8s))</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Scoped Multicast Ranges</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>SDP/SAP Block (224.2.0.0-224.2.255.255 (224.2/16))</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Source-Specific Multicast Block (232.0.0.0-232.255.255.255 (232/8))</td>
                        <td>RFC 5771 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Unicast-Prefix-based IPv4 Multicast Addresses</td>
                        <td>RFC 6034 (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Low Power Personal Area Network Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Critical 6LoWPAN Routing Header Type</td>
                        <td>RFC 8138 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Dispatch Type Field</td>
                        <td>RFC 4944, RFC 8025 Specification Required (Expert: Carles Gomez, Shwetha Bhandari, Pascal
                            Thubert (secondary expert))
                        </td>
                    </tr>
                    <tr>
                        <td>Elective 6LoWPAN Routing Header Type</td>
                        <td>RFC 8138 RFC Required</td>
                    </tr>
                    <tr>
                        <td>ESC Extension Types</td>
                        <td>RFC 8066 Specification Required (Expert: Shwetha Bhandari)</td>
                    </tr>
                    <tr>
                        <td>LOWPAN_NHC Header Type</td>
                        <td>RFC 6282 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Short Address Fields</td>
                        <td>RFC 4944 Specification Required (Expert: Carles Gomez)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Multicast Address Space Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPv6 Multicast Address Scopes</td>
                        <td>RFC 7346 IETF Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Link-Local Scope Multicast Addresses</td>
                        <td>RFC 3307 Expert Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Node-Local Scope Multicast Addresses</td>
                        <td>RFC 4291, RFC 3307 Expert Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Site-Local Scope Multicast Addresses</td>
                        <td>RFC 3307 Expert Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Unicast-based (Including SSM) Multicast Group IDs</td>
                        <td>RFC 3307 Addresses in FF3X:0::/32 but not listed below are reserved for future SSMaddress
                            use, but are currently invalid.FF3X:0:0:0:0:0:0:0-FF3X:0:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF
                            (FF3X:0::/32)FF3X:0:0:0:0:0:4000:0-FF3X:0:0:0:0:0:7FFF:FFFF - Expert Review; see registry at
                            https://www.iana.org/assignments/perm-mcast-groupidsFF3X:0:0:0:0:0:8000:0-FF3X:0:0:0:0:0:FFFF:FFFF
                            - Dynamically allocated by hosts when needed RFC 4607. (Expert: Stig Venaas)
                        </td>
                    </tr>
                    <tr>
                        <td>Variable Scope Multicast Addresses</td>
                        <td>RFC 3307 Expert Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>IPv6 Over the TSCH Mode of IEEE 802.15.4 (6TiSCH)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6P CellOptions Bitmap</td>
                        <td>RFC 8480 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>6P Command Identifiers</td>
                        <td>RFC 8480 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>6P Message Types</td>
                        <td>RFC 8480 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>6P Return Codes</td>
                        <td>RFC 8480 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>6P Scheduling Function Identifiers</td>
                        <td>RFC 8480 0-127: IETF Review or IESG Approval. 128-255: Expert Review. (Expert: Xavi
                            Vilajosana Guillen, Thomas Watteyne)
                        </td>
                    </tr>
                    <tr>
                        <td>6P Version Numbers</td>
                        <td>RFC 8480 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Constrained Join Protocol (CoJP) Key Usage</td>
                        <td>RFC 9031 Integer values less than -65536: Private Use. Integer values from -65536 to -257:
                            Specification Required. Integer values from -256 to 255: Standards Action. Integer values
                            from 256 to 65535: Specification Required. Integer values greater than 65535: Expert Review.
                            (Expert: Mališa Vučinić, Michael Richardson)
                        </td>
                    </tr>
                    <tr>
                        <td>Constrained Join Protocol (CoJP) Parameters</td>
                        <td>RFC 9031 Integer values less than -65536: Private Use. Integer values from -65536 to -257:
                            Specification Required. Integer values from -256 to 255: Standards Action. Integer values
                            from 256 to 65535: Specification Required. Integer values greater than 65535: Expert Review.
                            (Expert: Mališa Vučinić, Michael Richardson)
                        </td>
                    </tr>
                    <tr>
                        <td>Constrained Join Protocol (CoJP) Unsupported Configuration Codes</td>
                        <td>RFC 9031 Integer values less than -65536: Private Use. Integer values from -65536 to -257:
                            Specification Required. Integer values from -256 to 255: Standards Action. Integer values
                            from 256 to 65535: Specification Required. Integer values greater than 65535: Expert Review.
                            (Expert: Mališa Vučinić, Michael Richardson)
                        </td>
                    </tr>
                    <tr>
                        <td>IPv6 Router Alert Option Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPv6 Router Alert Option Values</td>
                        <td>RFC 2711 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IPv6 Top Level Aggregation Identifier Assignments</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Sub-TLA Identifier Assignments</td>
                        <td>RFC 4147 Registrations no longer accepted</td>
                    </tr>
                    <tr>
                        <td>TLA Identifier Assignments</td>
                        <td>RFC 4147 Registrations no longer accepted</td>
                    </tr>
                    <tr>
                        <td>IS-IS</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IS-IS Application Identifiers for Generic Information TLV</td>
                        <td>RFC 6823 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Authentication Type Codes</td>
                        <td>RFC 5304 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Bit Values for Flooding Parameters Flags Sub-TLV</td>
                        <td>RFC 9681 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Bit Values for Prefix Attribute Flags Sub-TLV</td>
                        <td>RFC 7794 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Group Address Type Codes for GADDR-TLV</td>
                        <td>RFC 7176 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Multi-Topology ID Values</td>
                        <td>RFC 5120 0-3995: Expert Review. 3996-4095: Private Use. (Expert: Chris Hopps, Hannes
                            Gredler, Les Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>IS-IS Neighbor Link-Attribute Bit Values</td>
                        <td>RFC 5029, RFC 9667, RFC 9650 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les
                            Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>IS-IS PDU Registry</td>
                        <td>RFC 7176 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IS-IS SRv6 Adjacency SID Sub-TLVs Flags</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS SRv6 Capabilities Sub-TLV Flags</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS SRv6 End SID Sub-TLV Flags</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS SRv6 Locator TLV Flags</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLV Codepoints for Application-Specific Link Attributes</td>
                        <td>RFC 9479 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLVs for BIER Info Sub-TLV</td>
                        <td>RFC 8401 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLVs for Flexible Algorithm Definition Sub-TLV</td>
                        <td>RFC 9350 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLVs for Flood Reflection Discovery Sub-TLV</td>
                        <td>RFC 9377 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLVs for SRv6 Capabilities Sub-TLV</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-Sub-TLVs for SRv6 SID Sub-TLVs</td>
                        <td>RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for Application-Specific SRLG TLV</td>
                        <td>RFC 9479 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for Flooding Parameters TLV</td>
                        <td>RFC 9681 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for IS-IS Router CAPABILITY TLV</td>
                        <td>RFC 7981 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for MT-Capability TLV</td>
                        <td>RFC 6329 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for MT-Port-Cap-TLV</td>
                        <td>RFC 7176 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for Reverse Metric TLV</td>
                        <td>RFC 8500 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for Segment Identifier/Label Binding TLVs</td>
                        <td>RFC 8667 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for the Area Proxy TLV</td>
                        <td>RFC 9666 Expert Review with RFC Required (Expert: Chris Hopps, Hannes Gredler, Les
                            Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for TLVs Advertising Neighbor Information</td>
                        <td>RFC 5305, RFC 5316, RFC 7370, RFC 8668 Expert Review (Expert: Chris Hopps, Hannes Gredler,
                            Les Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>IS-IS Sub-TLVs for TLVs Advertising Prefix Reachability</td>
                        <td>RFC 5305, RFC 7370, RFC 9352 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les
                            Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>IS-IS Top-Level TLV Codepoints</td>
                        <td>RFC 3563, RFC 6233, RFC 7356, RFC 8918 Expert Review (Expert: Chris Hopps, Hannes Gredler,
                            Les Ginsberg)
                        </td>
                    </tr>
                    <tr>
                        <td>LSP Flooding Scope Identifier Registry</td>
                        <td>RFC 7356 Expert Review (Expert: Chris Hopps, Hannes Gredler, Les Ginsberg)</td>
                    </tr>
                    <tr>
                        <td> J</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Java Message Service (JMS) URI Scheme Variants</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JMS URI Scheme Variants</td>
                        <td>RFC 6167 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>JSCalendar</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JSCalendar Enum Values</td>
                        <td>RFC 8984 Expert Review (Expert: Robert Stepanek, Neil Jenkins, Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>JSCalendar Properties</td>
                        <td>RFC 8984, Internet Draft draft-ietf-jmap-calendars-22 Expert Review (Expert: Robert
                            Stepanek, Neil Jenkins, Michael Douglass)
                        </td>
                    </tr>
                    <tr>
                        <td>JSCalendar Types</td>
                        <td>RFC 8984 Expert Review (Expert: Robert Stepanek, Neil Jenkins, Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>JSContact</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JSContact Enum Values</td>
                        <td>RFC 9553 Major version change required: Standards Action. All other assignments:
                            Specification Required. (Expert: Michael Douglass, Mario Loffredo, Robert Stepanek)
                        </td>
                    </tr>
                    <tr>
                        <td>JSContact Properties</td>
                        <td>RFC 9553 Major version change required: Standards Action. All other assignments:
                            Specification Required. (Expert: Michael Douglass, Mario Loffredo, Robert Stepanek)
                        </td>
                    </tr>
                    <tr>
                        <td>JSContact Types</td>
                        <td>RFC 9553 Major version change required: Standards Action. All other assignments:
                            Specification Required. (Expert: Michael Douglass, Mario Loffredo, Robert Stepanek)
                        </td>
                    </tr>
                    <tr>
                        <td>JSContact Version</td>
                        <td>RFC 9553 Major version change required: Standards Action. All other assignments:
                            Specification Required. (Expert: Michael Douglass, Mario Loffredo, Robert Stepanek)
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Meta Application Protocol (JMAP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JMAP Capabilities</td>
                        <td>RFC 8620 intended use field is “common&quot; or “placeholder”: Specification Required. all
                            other values: Expert Review. (Expert: Neil Jenkins, Chris Newman, Arnt Gulbrandsen, Joris
                            Baum)
                        </td>
                    </tr>
                    <tr>
                        <td>JMAP Data Types</td>
                        <td>RFC 9404 Specification Required (Expert: Ken Murchison, Neil Jenkins, Arnt Gulbrandsen,
                            Joris Baum)
                        </td>
                    </tr>
                    <tr>
                        <td>JMAP Error Codes</td>
                        <td>RFC 8620 Expert Review (Expert: Neil Jenkins, Chris Newman, Arnt Gulbrandsen, Joris Baum)
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Object Signing and Encryption (JOSE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JSON Web Encryption Compression Algorithms</td>
                        <td>RFC 7518 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Elliptic Curve</td>
                        <td>RFC 7518, RFC 7638 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Operations</td>
                        <td>RFC 7517 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Parameters</td>
                        <td>RFC 7517, RFC 7638 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Set Parameters</td>
                        <td>RFC 7517 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Types</td>
                        <td>RFC 7518, RFC 7638 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)
                        </td>
                    </tr>
                    <tr>
                        <td>JSON Web Key Use</td>
                        <td>RFC 7517 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Signature and Encryption Algorithms</td>
                        <td>RFC 7518 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Signature and Encryption Header Parameters</td>
                        <td>RFC 7515 Specification Required (Expert: Sean Turner, Mike Jones, Filip Skokan)</td>
                    </tr>
                    <tr>
                        <td>JSON Web Token (JWT)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>JSON Web Token Claims</td>
                        <td>RFC 7519 Specification Required (Expert: Brian Campbell, Mike Jones, Nat Sakimura, Filip
                            Skokan)
                        </td>
                    </tr>
                    <tr>
                        <td>JWT Confirmation Methods</td>
                        <td>RFC 7800 Specification Required (Expert: John Bradley, Hannes Tschofenig)</td>
                    </tr>
                    <tr>
                        <td>PASSporT RCD Claim Types</td>
                        <td>Internet Draft draft-ietf-stir-passport-rcd-26 Specification Required (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>PASSporT Resource Priority Header (rph) Types</td>
                        <td>RFC 8443 Specification Required (Expert: Martin Dolly, Subir Das)</td>
                    </tr>
                    <tr>
                        <td>Personal Assertion Token (PASSporT) Extensions</td>
                        <td>RFC 8225 Specification Required (Expert: Chris Wendt (primary), Russ Housley (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>JSONPath</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Function Extensions</td>
                        <td>RFC 9535 Expert Review (Expert: Glyn Normington)</td>
                    </tr>
                    <tr>
                        <td> K</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Kerberized Internet Negotiation of Keys (KINK) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>KINK Error Codes</td>
                        <td>RFC 4430 0-8191: Standards Action or non standards-track RFCs with Expert Review.
                            8192-16383: Private Use. 16384-4294967295: Reserved. (Expert: Stewart Bryant, Danny
                            McPherson)
                        </td>
                    </tr>
                    <tr>
                        <td>KINK Message Types</td>
                        <td>RFC 4430 1-127: Standards Action or non standards-track RFCs with Expert Review. 128-255:
                            Private Use. (Expert: Shoichi Sakane, Ken&#39;ichi Kamada)
                        </td>
                    </tr>
                    <tr>
                        <td>KINK Next Payload Types</td>
                        <td>RFC 4430 0-127: Standards Action or non standards-track RFCs with Expert Review. 128-255:
                            Private Use. (Expert: Shoichi Sakane, Ken&#39;ichi Kamada)
                        </td>
                    </tr>
                    <tr>
                        <td>Kerberos Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FAST Armor Types</td>
                        <td>RFC 6113 Standards Action</td>
                    </tr>
                    <tr>
                        <td>FAST Options</td>
                        <td>RFC 6113 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Kerberos Checksum Type Numbers</td>
                        <td>RFC 3961 Standards Action for standards-track RFCs; non-standards-track RFCs must be
                            reviewed by an expert. (Expert: Ken Raeburn)
                        </td>
                    </tr>
                    <tr>
                        <td>Kerberos Encryption Type Numbers</td>
                        <td>RFC 3961 Standards Action for standards-track RFCs; non-standards-track RFCs must be
                            reviewed by an expert. (Expert: Ken Raeburn)
                        </td>
                    </tr>
                    <tr>
                        <td>Kerberos Message Transport Types</td>
                        <td>RFC 6784 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Kerberos Second Factor Types</td>
                        <td>RFC 9588 Specification Required (Expert: Simo Sorce, Greg Hudson)</td>
                    </tr>
                    <tr>
                        <td>Kerberos SPAKE Groups</td>
                        <td>RFC 9588 Specification Required (Expert: Simo Sorce, Greg Hudson)</td>
                    </tr>
                    <tr>
                        <td>Kerberos TCP Extensions</td>
                        <td>RFC 5021 0-29: Standards Action or IESG Approval. 30: Reserved.</td>
                    </tr>
                    <tr>
                        <td>Pre-authentication and Typed Data</td>
                        <td>RFC 6113 Expert Review (Expert: Sam Hartman (primary), Larry Zhu (secondary))</td>
                    </tr>
                    <tr>
                        <td>Well-Known Kerberos Principal Names</td>
                        <td>RFC 6111 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Well-Known Kerberos Realm Names</td>
                        <td>RFC 6111 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Kerberos V GSS-API Mechanism Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Kerberos V GSS-API Mechanism Extension Types</td>
                        <td>RFC 6542 0x00000000 - 0x000003FF: IETF Review. 0x00000400 - 0xFFFFF3FF: Specification
                            Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Kerberos V GSS-API Token Type Identifiers</td>
                        <td>RFC 4121, RFC 7055 Expert Review (Expert: Sam Hartman)</td>
                    </tr>
                    <tr>
                        <td>Keying and Authentication for Routing Protocols (KARP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Protocol ID</td>
                        <td>RFC 7166 Standards Action</td>
                    </tr>
                    <tr>
                        <td>KeyNote Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>KeyNote app_domain Identifiers</td>
                        <td>RFC 2704 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>KeyNote Public Key Format Identifiers</td>
                        <td>RFC 2704 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>KeyNote Signature Algorithm Identifiers</td>
                        <td>RFC 2704 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>KeyTable</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>KeyTable AlgIDs</td>
                        <td>RFC 7210 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>KeyTable KDFs</td>
                        <td>RFC 7210 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>KeyTable Protocols</td>
                        <td>RFC 7210 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td> L</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Label Distribution Protocol (LDP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Experiment ID Name Space</td>
                        <td>RFC 5036 0x00000000-0xefffffff: First Come First Served. 0xf0000000-0xffffffff: Experiment
                            Ids - Reserved for Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Forwarding Equivalence Class (FEC) Type Name Space</td>
                        <td>RFC 5036, RFC 7358 0-127: IETF Review. 128-191: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>LDP MP Opaque Value Element basic type</td>
                        <td>RFC 6388 Standards Action</td>
                    </tr>
                    <tr>
                        <td>LDP MP Opaque Value Element extended type</td>
                        <td>RFC 6388 0-32767: Standards Action. 32768-65535: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>LDP MP Status Value Element type</td>
                        <td>RFC 6388 Standards Action</td>
                    </tr>
                    <tr>
                        <td>LDP Targeted Application Identifier</td>
                        <td>RFC 8223 0x0001-0x1FFF: IETF Review. 0x2000-0xF7FF: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>MAC Flush Flags</td>
                        <td>RFC 7361 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Message Type Name Space</td>
                        <td>RFC 5036 0x0001-0x00FF: IETF Review. 0x0100-0x01FF: IETF Review. 0x0200-0x02FF: IETF Review.
                            0x0300-0x03FF: IETF Review. 0x0400-0x04FF: IETF Review. 0x0500-0x05FF: IETF Review.
                            0x0600-0x3DFF: IETF Review. 0x3E00-0x3EFF: LDP Vendor-Private Extensions. 0x3F00-0x3FFF: LDP
                            Experimental Extensions.
                        </td>
                    </tr>
                    <tr>
                        <td>Status Code Name Space</td>
                        <td>RFC 5036 0x00000000-0x1FFFFFFF: IETF Review. 0x20000000-0x3EFFFFFF: First Come First Served.
                            0x3F000000-0x3FFFFFFF: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>TLV Type Name Space</td>
                        <td>RFC 5036 0x0001-0x07FF: IETF Review. 0x0800-0x08FF (CR-LDP): IETF Review. 0x0900-0x3DFF:
                            IETF Review. 0x3E00-0x3EFF: LDP Vendor-Private Extensions. 0x3F00-0x3FFF: LDP Experimental
                            Extensions.
                        </td>
                    </tr>
                    <tr>
                        <td>Label Generation Ruleset (LGR) Dispositions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Private Dispositions</td>
                        <td>RFC 7940 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Standard Dispositions</td>
                        <td>RFC 7940 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Language Tags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Language Subtag Registration Form Archive</td>
                        <td>RFC 5646 See the Language Subtag Registry.</td>
                    </tr>
                    <tr>
                        <td>Language Subtag Registry</td>
                        <td>RFC 5645, RFC 5646 Expert Review (Expert: Michael Everson (primary), Doug Ewell
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Language Tag Extensions</td>
                        <td>RFC 5646 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td> Language Tag Registration Form Archive (OBSOLETE)</td>
                        <td>RFC 3066, RFC 4646 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Language Tags (OBSOLETE)</td>
                        <td>RFC 3066, RFC 4646 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Layer Two Tunneling Protocol &quot;L2TP&quot;</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ATM Alarm Status AVP (Attribute Type 88) Values</td>
                        <td>RFC 4454 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>ATM-Specific Sublayer bits</td>
                        <td>RFC 4454 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Bearer Field definition</td>
                        <td>RFC 2661 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Circuit Status Bits</td>
                        <td>RFC 3931 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Control Message Attribute Value Pairs</td>
                        <td>RFC 3438 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>Data Sequencing Level</td>
                        <td>RFC 3931 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>Default L2-Specific Sublayer bits</td>
                        <td>RFC 3931</td>
                    </tr>
                    <tr>
                        <td>Framing Field definition</td>
                        <td>RFC 2661 Standards Action</td>
                    </tr>
                    <tr>
                        <td>L2-Specific Sublayer Type</td>
                        <td>RFC 3931 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>L2TPv3 Pseudowire Types</td>
                        <td>RFC 3931 0-32767: Expert Review. 32768-65535: First Come First Served. (Expert: Carlos
                            Pignataro (primary), Ignacio Goyret (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Leading Bits of the L2TP AVP Header</td>
                        <td>RFC 2661, RFC 3931 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Leading Bits of the L2TP Message Header</td>
                        <td>RFC 2661, RFC 3931 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Message Type AVP (Attribute Type 0) Values</td>
                        <td>RFC 3438 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>PPP Disconnect Cause Code (Attribute Type 46) Values</td>
                        <td>RFC 3145</td>
                    </tr>
                    <tr>
                        <td>Proxy Authen Type AVP (Attribute Type 29) Values</td>
                        <td>RFC 2661 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Result Code AVP (Attribute Type 1) Values</td>
                        <td>RFC 3438 Expert Review (Expert: Carlos Pignataro (primary), Ignacio Goyret (secondary))</td>
                    </tr>
                    <tr>
                        <td>Service Category AVP (Attribute Type 42) Flag Field</td>
                        <td>RFC 3301 Specification Required (Expert: Carlos Pignataro (primary), Ignacio Goyret
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>VCCV Capability AVP (Attribute Type 96) Values</td>
                        <td>RFC 5085 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Layered Coding Transport (LCT) Header Extension Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LCT Header Extension Types</td>
                        <td>RFC 5651 0-63: IETF Review. 64-127: Specification Required. 128-191: IETF Review. 192-255:
                            Specification Required. (Expert: Vincent Roca)
                        </td>
                    </tr>
                    <tr>
                        <td>Level of Assurance (LoA) Profiles</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Level of Assurance Profiles</td>
                        <td>RFC 6711 Expert Review (Expert: John Bradley, Joni Brennan, Leif Johansson)</td>
                    </tr>
                    <tr>
                        <td>Licklider Transmission Protocol (LTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LTP Cancel Segment Reason Codes</td>
                        <td>RFC 7116 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>LTP Ciphersuites</td>
                        <td>RFC 5327 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>LTP Client Service Identifiers</td>
                        <td>RFC 7116 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>LTP Engine Numbers</td>
                        <td>RFC 7116 1-16383: Expert Review. 268435456-4398046511103: First Come First Served for
                            requests of up to 16384 values. Larger requests require Expert Review.. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>LTP Extension Tags</td>
                        <td>RFC 5326 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Lightweight Directory Access Protocol (LDAP) - pcimSchema Descriptors</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>pcimSchema LDAP Descriptors</td>
                        <td>RFC 3703 TBD</td>
                    </tr>
                    <tr>
                        <td>Lightweight Directory Access Protocol (LDAP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Attribute Description Options</td>
                        <td>RFC 4520 x- Private Use (can not be registered)e- Reserved for Experiments, First Come First
                            ServedAll others: Standards Action or Expert Review with Specification (Expert: Rolf
                            Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>Bind Authentication Method</td>
                        <td>RFC 4520 0-1023 Standards Action (can not start with e- or x-)1024-4095 Expert Review with
                            Specification Required (can not start with e- or x-)4096-16383 First Come First Served
                            (Shall start with e-)16384 and higher Private Use (Shall start with x-) (Expert: Rolf
                            Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>Internet Directory Numbers (iso.org.dod.internet.directory [1.3.6.1.1.])</td>
                        <td>RFC 4520, RFC 2578 Specification Required (Expert: Rolf Sonneveld, Andrew Findlay)</td>
                    </tr>
                    <tr>
                        <td>LDAP authzid prefixes</td>
                        <td>RFC 4520 x- Private Usee- Reserved for Experiments, First Come First ServedAll others,
                            Standards Action or Expert Review with Specification Required (Expert: Rolf Sonneveld,
                            Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>LDAP Filter Choices</td>
                        <td>RFC 4520 Standards Action</td>
                    </tr>
                    <tr>
                        <td>LDAP ModifyRequest Operations</td>
                        <td>RFC 4520 0-1023 Standards Action (can not start with e- or x-)1024-4095 Expert Review with
                            Specification Required (can not start with e- or x-)4096-16383 First Come First Served
                            (Shall start with e-)16384 and higher Private Use (Shall start with x-) (Expert: Rolf
                            Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>LDAP Search Scopes</td>
                        <td>RFC 4520 0-1023 Standards Action (can not start with e- or x-)1024-4095 Expert Review with
                            Specification Required (can not start with e- or x-)4096-16383 First Come First Served
                            (Shall start with e-)16384 and higher Private Use (Shall start with x-) (Expert: Rolf
                            Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>LDAP Syntaxes</td>
                        <td>RFC 4520 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>LDAPMessage types</td>
                        <td>RFC 4520 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Object Identifier Descriptors</td>
                        <td>RFC 4520 x- Private Use (can not be registered)e- Reserved for Experiments, First Come First
                            ServedAll others: Expert Review (Expert: Rolf Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>Protocol Mechanisms</td>
                        <td>RFC 4520 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>resultCode values</td>
                        <td>RFC 4520 0-1023 Standards Action (can not start with e- or x-)1024-4095 Expert Review with
                            Specification Required (can not start with e- or x-)4096-16383 First Come First Served
                            (Shall start with e-)16384 and higher Private Use (Shall start with x-) (Expert: Rolf
                            Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>Link Management Protocol (LMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LMP Behavior Configuration Flags</td>
                        <td>RFC 6898 Standards Action</td>
                    </tr>
                    <tr>
                        <td>LMP Message Type Name Space</td>
                        <td>RFC 4204 0-127: Standards Action. 128-247: Expert Review. (Expert: Dimitri Papadimitriou)
                        </td>
                    </tr>
                    <tr>
                        <td>LMP Object Class name space and Class type (C-Type)</td>
                        <td>RFC 4204 0-127: Standards Action. 128-247: Expert Review. (Expert: Dimitri Papadimitriou)
                        </td>
                    </tr>
                    <tr>
                        <td>Link Relations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Link Relation Types</td>
                        <td>RFC 8288 Specification Required (Expert: Mark Nottingham, Julian Reschke, Jan Algermissen)
                        </td>
                    </tr>
                    <tr>
                        <td>Link State Routing TE Capabilities</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TE Node Capabilities</td>
                        <td>RFC 5073 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Locally-Served DNS Zones</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPv4 Locally-Served DNS Zone Registry</td>
                        <td>RFC 6303 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IPv6 Locally-Served DNS Zone Registry</td>
                        <td>RFC 6303 IETF Review</td>
                    </tr>
                    <tr>
                        <td>service.arpa Subdomain</td>
                        <td>Internet Draft draft-ietf-dnssd-srp-25 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Transport-Independent Locally-Served DNS Zone Registry</td>
                        <td>RFC 8375 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Location-to-Service Translation (LoST) Location Profiles</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LoST Location Profiles</td>
                        <td>RFC 5222, RFC 9036 Specification Required (Expert: Henning Schulzrinne)</td>
                    </tr>
                    <tr>
                        <td>Locator/ID Separation Protocol (LISP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LISP ACT Values</td>
                        <td>RFC 9301 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>LISP Address Type Codes (CLOSED)</td>
                        <td>RFC 6830, RFC 9301</td>
                    </tr>
                    <tr>
                        <td>LISP Algorithm ID Numbers</td>
                        <td>RFC 9301 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>LISP Canonical Address Format (LCAF) Types</td>
                        <td>RFC 8060 Specification Required (Expert: Luigi Iannone, Albert Cabellos)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: EID-Record</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: Encapsulated Control Message (ECM)</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: Map-Register</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: Map-Reply</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: Map-Request</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: Map-Request-Record</td>
                        <td>RFC 9437 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Control Plane Header Bits: RLOC-Record</td>
                        <td>RFC 9301 Specification Required (Expert: Albert Cabellos, Dino Farinacci)</td>
                    </tr>
                    <tr>
                        <td>LISP Crypto Cipher Suite</td>
                        <td>RFC 8061 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>LISP ECM Authentication Data Types</td>
                        <td>RFC 9303 Specification Required (Expert: Damien Saucez, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td>LISP Map-Reply Authentication Data Types</td>
                        <td>RFC 9303 Specification Required (Expert: Damien Saucez, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td>LISP Packet Types</td>
                        <td>RFC 9304, RFC 9301 Standards Action</td>
                    </tr>
                    <tr>
                        <td>LISP Shared Extension Message Type Sub-types</td>
                        <td>RFC 9304 0-1023: Standards Action. 1024-4095: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>LISP-GPE Next Protocol</td>
                        <td>RFC 9305 Specification Required (Expert: Darrel Lewis, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td>LISP-SEC Authentication Data Key Derivation Function IDs</td>
                        <td>RFC 9303 Specification Required (Expert: Damien Saucez, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td>LISP-SEC Authentication Data Key Wrap IDs</td>
                        <td>RFC 9303 Specification Required (Expert: Damien Saucez, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td>LISP-SEC Preferred Authentication Data HMAC IDs</td>
                        <td>RFC 9303 Specification Required (Expert: Damien Saucez, Luigi Iannone)</td>
                    </tr>
                    <tr>
                        <td> M</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Machine Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Machine Names</td>
                        <td> Not defined</td>
                    </tr>
                    <tr>
                        <td>&quot;Magic Numbers&quot; for ISAKMP Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPSEC AH Transform Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC ESP Transform Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Identification Type</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC IPCOMP Transform Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC ISAKMP Transform Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Labeled Domain Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Notify Message Types</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Security Association Attributes</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Security Protocol Identifiers</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>IPSEC Situation Definition</td>
                        <td>RFC 2407, RFC 9395 Registry closed</td>
                    </tr>
                    <tr>
                        <td>Mail Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address Literal Tags</td>
                        <td>RFC 5321 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Encoding Header Field Keywords</td>
                        <td>RFC 1505 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mail Header Confidentiality Policies</td>
                        <td>Internet Draft draft-ietf-lamps-header-protection-25 Specification Required or IETF Review
                            (see Note) (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Mail Transmission Types</td>
                        <td>RFC 821, RFC 822, RFC 5321 Standards Action or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>Multicast Email SMTP Extensions</td>
                        <td>RFC 8494 Specification Required (Expert: Alexey Melnikov (primary), RFC Independent
                            Submissions Editor (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Registered-states</td>
                        <td>RFC 6729 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>SMTP PRIORITY extension Priority Assignment Policy</td>
                        <td>RFC 6710 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SMTP Server Limits</td>
                        <td>RFC 9422 Specification Required (Expert: John Klensin, Murray Kucherawy (backup))</td>
                    </tr>
                    <tr>
                        <td>SMTP Service Extensions</td>
                        <td>RFC 5321 Standards Action or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>Manufacturer Usage Description (MUD)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MUD Extensions</td>
                        <td>RFC 8520 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MUD Well-Known Uniform Resource Name (URN)</td>
                        <td>RFC 8520 Expert Review (Expert: Eliot Lear, Dan Romascanu)</td>
                    </tr>
                    <tr>
                        <td>Matroska</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Matroska AES Cipher Modes</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Alpha Modes</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Chapter Codec IDs</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Color Ranges</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Compression Algorithms</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Content Encoding Scopes</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Content Encoding Types</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Display Units</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Element IDs</td>
                        <td>RFC 9559 0x80-0xFE: RFC Required. 0x407F-0x7FFE: Specification Required. 0x203FFF-0x3FFFFE:
                            First Come First Served. 0x101FFFFF-0x1FFFFFFE: First Come First Served. (Expert: Dave Rice,
                            Steve Lhomme)
                        </td>
                    </tr>
                    <tr>
                        <td>Matroska Encryption Algorithms</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Horizontal Chroma Sitings</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Projection Types</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Stereo Modes</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Tags Target Types</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Track Plane Types</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Matroska Track Types</td>
                        <td>RFC 9559 Specification Required (Expert: Dave Rice, Steve Lhomme)</td>
                    </tr>
                    <tr>
                        <td>Matroska Vertical Chroma Sitings</td>
                        <td>RFC 9559 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Maximally Redundant Tree (MRT) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MRT Profile Identifier Registry</td>
                        <td>RFC 7812 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Media Control Channel Framework Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Control Packages</td>
                        <td>RFC 6230 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Header Fields</td>
                        <td>RFC 6230 RFC Required</td>
                    </tr>
                    <tr>
                        <td>IVR Prompt Variable Type for Control Packages</td>
                        <td>RFC 6231 RFC Required</td>
                    </tr>
                    <tr>
                        <td>MEDIACTRL Interactive Voice Response Control Package Status Codes</td>
                        <td>RFC 6623 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Method Names</td>
                        <td>RFC 6230 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Mixer Control Package Status Code Registration</td>
                        <td>RFC 6505 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 6230 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Media Feature Tags - iso.org.dod.internet.features (1.3.6.1.8)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>iso.org.dod.internet.features.global-tree (1.3.6.1.8.2)</td>
                        <td>RFC 2506 Expert Review (Expert: Paul Kyzivat)</td>
                    </tr>
                    <tr>
                        <td>iso.org.dod.internet.features.ietf-tree (1.3.6.1.8.1)</td>
                        <td>RFC 2506, RFC 2534 IETF Review</td>
                    </tr>
                    <tr>
                        <td>iso.org.dod.internet.features.sip-tree (1.3.6.1.8.4)</td>
                        <td>RFC 3840 IETF Review</td>
                    </tr>
                    <tr>
                        <td>iso.org.dod.internet.features.uri-tree (1.3.6.1.8.3)</td>
                        <td>RFC 2506 Unregistered (formed from uri)</td>
                    </tr>
                    <tr>
                        <td>Media Gateway Control Protocol (MGCP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>List of Extension Digit Map Letters</td>
                        <td>RFC 3660 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>LocalConnectionOptions Sub-registry</td>
                        <td>RFC 3435 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>MGCP Package Sub-Registry</td>
                        <td>RFC 3435 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Media Independent Handover (MIH)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MIH Table of Mappings From Service Field Values to Transport Protocols</td>
                        <td>RFC 5679 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Media Resource Control Protocol Version 2 (MRCPv2) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Grammar Reference List Parameters</td>
                        <td>RFC 6787 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MRCPv2 Header Fields</td>
                        <td>RFC 6787 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MRCPv2 Methods and Events</td>
                        <td>RFC 6787 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MRCPv2 Resource Types</td>
                        <td>RFC 6787 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MRCPv2 Status Codes</td>
                        <td>RFC 6787 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MRCPv2 Vendor-Specific Parameters</td>
                        <td>RFC 6787 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Megaco/H.248 Packages</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Error Codes</td>
                        <td>RFC 5125, RFC 5615 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Private packages (0x8000 to 0xffff)</td>
                        <td>RFC 5125, RFC 5615 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Profile Names</td>
                        <td>RFC 5125, RFC 5615 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Public Packages (0x0001-0x7fff)</td>
                        <td>RFC 5125 Expert Review or IETF Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>ServiceChange Reasons</td>
                        <td>RFC 5125, RFC 5615 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Message Disposition Notification (MDN) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MDN-Disposition-modifier-names</td>
                        <td>RFC 8098 Specification Required (Expert: Tony Hansen)</td>
                    </tr>
                    <tr>
                        <td>MDN-Disposition-notification-option-names</td>
                        <td>RFC 8098 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MDN-Extension-field-names</td>
                        <td>RFC 8098 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Message Headers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Content-Translation-Type Header Field Values</td>
                        <td>RFC 8255 Specification Required (Expert: Nik Tomkinson)</td>
                    </tr>
                    <tr>
                        <td>Permanent Message Header Field Names</td>
                        <td>RFC 3864 Expert Review (Expert: Graham Klyne)</td>
                    </tr>
                    <tr>
                        <td>Provisional Message Header Field Names</td>
                        <td>RFC 3864 Expert Review (Expert: Graham Klyne)</td>
                    </tr>
                    <tr>
                        <td>Message Session Relay Protocol (MSRP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Header Fields</td>
                        <td>RFC 4975 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Methods</td>
                        <td>RFC 4975 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 4975 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Message Tracking Query Protocol (MTQP) Options Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MTQP Options</td>
                        <td>RFC 3887 Options whose names do not begin with &quot;vnd.&quot;: Standards Action or
                            IESG-approved experimental RFC. Options with &quot;vnd.&quot;: First Come First Served.
                        </td>
                    </tr>
                    <tr>
                        <td>Messaging Abuse Reporting Format (MARF) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Feedback Report Header Fields</td>
                        <td>RFC 5965 Specification Required (Expert: Scott Kitterman, Murray Kucherawy)</td>
                    </tr>
                    <tr>
                        <td>Feedback Report Type Values</td>
                        <td>RFC 5965 Specification Required (Expert: Scott Kitterman, Murray Kucherawy)</td>
                    </tr>
                    <tr>
                        <td>Messaging Layer Security (MLS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MLS Cipher Suites</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Credential Types</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Exporter Labels</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Extension Types</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Proposal Types</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Public Key Encryption Labels</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Signature Labels</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>MLS Wire Formats</td>
                        <td>RFC 9420 Specification Required (Expert: Sean Turner, Raphael Robert, Richard Barnes)</td>
                    </tr>
                    <tr>
                        <td>Milnet Parameters - Registry closed</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Milnet Link Numbers</td>
                        <td> Registry closed</td>
                    </tr>
                    <tr>
                        <td>Milnet Logical Addresses</td>
                        <td> Registry closed</td>
                    </tr>
                    <tr>
                        <td>Milnet X.25 Address Mappings</td>
                        <td> Registry closed</td>
                    </tr>
                    <tr>
                        <td>Mobile Ad hoc NETwork (MANET) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Address Block TLV Types</td>
                        <td>RFC 5444, RFC 7631, RFC 8245 0-127: Expert Review. 128-223: Expert Review. 224-255: Reserved
                            for Experimental Use. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>Cryptographic Functions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Hash Functions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>HELLO Message-Type-specific Address Block TLV Types</td>
                        <td>RFC 6130 0-127: Reserved. 128-223: Expert Review. 224-255: Reserved. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>HELLO Message-Type-specific Message TLV Types</td>
                        <td>RFC 6130 0-127: Reserved. 128-223: Expert Review. 224-255: Reserved. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>ICV Address Block TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>ICV Message TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>ICV Packet TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>LINK_METRIC Address Block TLV Type Extensions</td>
                        <td>RFC 7181 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>LINK_STATUS TLV Values</td>
                        <td>RFC 7188 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>LOCAL_IF TLV Values</td>
                        <td>RFC 7188 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Message TLV Types</td>
                        <td>RFC 5444, RFC 7631, RFC 8245 0-127: Expert Review. 128-223: Expert Review. 224-255: Reserved
                            for Experimental Use. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 5444, RFC 8245 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>MPR TLV BIT Values</td>
                        <td>RFC 7188 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>NBR_ADDR_TYPE Address Block TLV Bit Values</td>
                        <td>RFC 7188 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>OTHER_NEIGHB TLV Values</td>
                        <td>RFC 7188 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Packet TLV Types</td>
                        <td>RFC 5444, RFC 8245 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>SMF Relay Algorithm IDs</td>
                        <td>RFC 6621 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>SMF_NBR_TYPE Address Block TLV Type Extensions</td>
                        <td>RFC 6621 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>SMF_TYPE Message TLV Type Extensions</td>
                        <td>RFC 6621 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>TC Message-Type-specific Address Block TLV Types</td>
                        <td>RFC 7181 0-127: Reserved. 128-223: Expert Review. 224-255: Reserved. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>TC Message-Type-specific Message TLV Types</td>
                        <td>RFC 7181 0-127: Reserved. 128-223: Expert Review. 224-255: Reserved. (Expert: Joe Macker)
                        </td>
                    </tr>
                    <tr>
                        <td>TIMESTAMP Address Block TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>TIMESTAMP Message TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>TIMESTAMP Packet TLV Type Extensions</td>
                        <td>RFC 7182 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 0 Address Block TLV Type Extensions</td>
                        <td>RFC 5497, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 0 Message TLV Type Extensions</td>
                        <td>RFC 5497, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 1 Address Block TLV Type Extensions</td>
                        <td>RFC 5497, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 1 Message TLV Type Extensions</td>
                        <td>RFC 5497, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 10 Address Block TLV Type Extensions</td>
                        <td>RFC 7181, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 2 Address Block TLV Type Extensions</td>
                        <td>RFC 6130, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 3 Address Block TLV Type Extensions</td>
                        <td>RFC 6130, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 4 Address Block TLV Type Extensions</td>
                        <td>RFC 6130, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 7 Message TLV Type Extensions</td>
                        <td>RFC 7181, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 8 Address Block TLV Type Extensions</td>
                        <td>RFC 7181, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 8 Message TLV Type Extensions</td>
                        <td>RFC 7181, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Type 9 Address Block TLV Type Extensions</td>
                        <td>RFC 7181, RFC 7631 Expert Review (Expert: Joe Macker)</td>
                    </tr>
                    <tr>
                        <td>Mobile IPv4 Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Access Technology Types</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Code Values for General Notification Messages</td>
                        <td>RFC 6098 0: Expert Review. 1-63: Expert Review. 64-69: Expert Review. 70-127: Expert Review.
                            128-133: Expert Review. 134-191: Expert Review. 192-197: Expert Review. 198-255: Expert
                            Review. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Code Values for Mobile IP Handoff Reply Messages (Value 17)</td>
                        <td>RFC 4881 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Code Values for Mobile IP Registration Reply Messages</td>
                        <td>RFC 5944, RFC 6521 (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Dual Stack (DSMIPv4) Extension subtypes (Value 152)</td>
                        <td>RFC 5454 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Extension Subtypes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Extensions to Mobile IP Registration Messages</td>
                        <td>RFC 5944, RFC 6098 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Generalized Link Layer Address Registration Extension Subtypes and Generalized Link Layer
                            Address Advertisement Extension Subtypes
                        </td>
                        <td>RFC 4881 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IPv6 Prefix Reply Extension Codes</td>
                        <td>RFC 5454 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Message String Extension (Value 145)</td>
                        <td>RFC 4917 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mobile IP Extensions for ICMP Router Discovery messages</td>
                        <td>RFC 5944 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mobile IP Message Types</td>
                        <td>RFC 5944 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mobile Network Acknowledgement Extension</td>
                        <td>RFC 5177 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Mobile Router Route Optimization Capability Extension (Value 153)</td>
                        <td>RFC 6521 RFC Required</td>
                    </tr>
                    <tr>
                        <td>PMIPv4 Device ID Types</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PMIPv4 Non-skippable Extension (Value 47)</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PMIPv4 Per-Node Authentication Method Types</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PMIPv4 Skippable Extension (Value 147)</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PMIPv4 Subscriber ID Types</td>
                        <td>RFC 5563 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Replay Method Identifier</td>
                        <td>RFC 3957 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Route Optimization Data Extension (Value 50)</td>
                        <td>RFC 6521 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Route Optimization Extension (Value 49)</td>
                        <td>RFC 6521 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Security Parameter Index (SPI) Values for the Mobile IP Reserved SPIs</td>
                        <td>RFC 4721 Must be specified and approved by the MIP4 working group</td>
                    </tr>
                    <tr>
                        <td>Mobile IPv6</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Access Network Information (ANI) Sub-Option Type Values</td>
                        <td>RFC 6757 Expert Review (Expert: Jouni Korhonen, Sri Gundavelli)</td>
                    </tr>
                    <tr>
                        <td>Access Technology Type Option Type Values</td>
                        <td>RFC 5213 Expert Review (Expert: Sri Gundavelli, Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>Binding Acknowledgment Flags</td>
                        <td>RFC 5213 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Binding Revocation Acknowledgement Status Codes</td>
                        <td>RFC 5846 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Binding Revocation Type</td>
                        <td>RFC 5846 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Binding Update Flags</td>
                        <td>RFC 5213 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>DSMIP6-TLS Packet Types Registry</td>
                        <td>RFC 6618 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Dual Stack MIPv6 (DSMIPv6) IPv4 Home Address Option Status Codes</td>
                        <td>RFC 5555 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Enumerating Algorithms</td>
                        <td>RFC 4285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Flow Binding Acknowledgement Status Codes</td>
                        <td>RFC 7109 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Flow Binding Action Values</td>
                        <td>RFC 7109 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Flow Binding Indication Triggers</td>
                        <td>RFC 7109 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Flow Binding Type</td>
                        <td>RFC 7109 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Flow Identification Mobility Option Status Codes</td>
                        <td>RFC 6089 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Flow Identification Sub-Options</td>
                        <td>RFC 6089 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Handoff Indicator Option Type Values</td>
                        <td>RFC 5213 Expert Review (Expert: Sri Gundavelli, Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>Handover Acknowledge Flags</td>
                        <td>RFC 5949 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Handover Acknowledge Status Codes</td>
                        <td>RFC 5949 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Handover Initiate Flags</td>
                        <td>RFC 5949 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Handover Initiate Status Codes</td>
                        <td>RFC 5949 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>IPv4 DHCP Support Mode Flags</td>
                        <td>RFC 5844 Expert Review (Expert: Sri Gundavelli, Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>IPv4 Home Address Reply Status Codes</td>
                        <td>RFC 5844 Expert Review (Expert: Sri Gundavelli, Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>LMA-Controlled MAG Parameters Sub-Option Type Values</td>
                        <td>RFC 8127 Expert Review (Expert: Dhananjay Patki, Lyle Bertz)</td>
                    </tr>
                    <tr>
                        <td>Mobile Node Group Identifier Type Registry</td>
                        <td>RFC 6602 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Mobile Node Identifier Option Subtypes</td>
                        <td>RFC 4283 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Mobility Header Types - for the MH Type field in the Mobility Header</td>
                        <td>RFC 6275 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Mobility Options</td>
                        <td>RFC 6275 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Operator-Identifier Type Registry</td>
                        <td>RFC 6757 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Pseudo Home Address Acknowledgement Status Codes</td>
                        <td>RFC 5726 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Quality-of-Service Attribute Registry</td>
                        <td>RFC 7222 Specification Required (Expert: Jouni Korhonen, Sri Gundavelli)</td>
                    </tr>
                    <tr>
                        <td>Revocation Trigger Values</td>
                        <td>RFC 5846 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Status Codes</td>
                        <td>RFC 6275, RFC 5213 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Status Codes (DNS Update Mobility Option)</td>
                        <td>RFC 5026 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Subtype Field of the MN-HA and MN-AAA Authentication Mobility Options</td>
                        <td>RFC 4285 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Traffic Selector Format</td>
                        <td>RFC 6089 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Update Notification Acknowledgement Status Registry</td>
                        <td>RFC 7077 Specification Required (Expert: Sri Gundavelli, Marco Liebsch)</td>
                    </tr>
                    <tr>
                        <td>Update Notification Reasons Registry</td>
                        <td>RFC 7077 Specification Required (Expert: Sri Gundavelli, Marco Liebsch)</td>
                    </tr>
                    <tr>
                        <td> Multi-threaded Routing Toolkit (MRT)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Subtype Codes</td>
                        <td>RFC 6396 New Subtype Code definitions must reference an existing Type Code to which the
                            Subtype belongs. Subtype assignments follow the assignment rules for the Type Codes to which
                            they belong.
                        </td>
                    </tr>
                    <tr>
                        <td>Type Codes</td>
                        <td>RFC 6396 65-511: IETF Review. 512-2047: Specification Required. 2048-64511: First Come First
                            Served. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Multicast Acquisition</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Multicast Acquisition Method Registry</td>
                        <td>RFC 6332 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Multicast Acquisition Report Block TLV Space Registry</td>
                        <td>RFC 6332 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Multicast Acquisition Status Code Space Registry</td>
                        <td>RFC 6332 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Multicast Address Dynamic Client Allocation Protocol (MADCAP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MADCAP Error Codes</td>
                        <td>RFC 2730 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MADCAP Feature Codes</td>
                        <td>RFC 2730 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MADCAP Lease Identifier Types</td>
                        <td>RFC 2730 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MADCAP Message Types</td>
                        <td>RFC 2730 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MADCAP Options</td>
                        <td>RFC 2730 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Multicast Address-Set Claim (MASC) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MASC Message Types</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MASC NOTIFICATION Message Error Codes and Subcodes</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MASC OPEN Message Optional Parameter Types</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MASC UPDATE Message Attribute Types</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MASC UPDATE Message Optional Parameter Types (128-255)</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Notification Error Subcodes</td>
                        <td>RFC 2909 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Multicast Ping Protocol Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Multicast Ping Protocol Message Types</td>
                        <td>RFC 6450 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Multicast Ping Protocol Option Types</td>
                        <td>RFC 6450 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Multicast Source Discovery Protocol (MSDP) TLV Values Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MSDP TLV Values</td>
                        <td>RFC 3618 1-200: Standards Action or IESG Approval. 201-255: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Multimedia Internet KEYing (MIKEY) Payload Name Spaces</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cert Hash Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Common Header Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>DH Data Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>ECC Curve</td>
                        <td>RFC 6267 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Envelope Data Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Error Payload Name Spaces</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>General Extensions Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>ID Payload and Certificate Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>ID Role</td>
                        <td>RFC 6043 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>ID Scheme</td>
                        <td>RFC 6509 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Key Data Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Key Data Transport Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>MIKEY Security Protocol Parameters</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>RAND Role</td>
                        <td>RFC 6043 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>SAKKE params</td>
                        <td>RFC 6509 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Security Policy Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Signature Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>SK sub-payload</td>
                        <td>RFC 6267 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Ticket Type</td>
                        <td>RFC 6043 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Timestamp Payload Field Names</td>
                        <td>RFC 3830, RFC 6309 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>TS Role</td>
                        <td>RFC 6043 Specification Required (Expert: Daniel Migault)</td>
                    </tr>
                    <tr>
                        <td>Multiplexed Application Substrate over QUIC Encryption (MASQUE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HTTP Capsule Types</td>
                        <td>RFC 9297 provisional: Expert Review. Date field update for provisional registrations: First
                            Come First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent,
                            greater than 0x3f: Specification Required. first unassigned codepoint: Standards Action.
                            values 0x29 * N + 0x17 (for integer values of N): Reserved. (Expert: Lucas Pardue, David
                            Schinazi)
                        </td>
                    </tr>
                    <tr>
                        <td>HTTP Capsule Types</td>
                        <td>RFC 9297</td>
                    </tr>
                    <tr>
                        <td>MASQUE URI Suffixes</td>
                        <td>RFC 9484 Expert Review (Expert: Tommy Pauly, Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>Multiprotocol Label Switching Architecture (MPLS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Adjacency Type in the IGP-Adjacency Segment ID</td>
                        <td>RFC 8287 0-250: Standards Action. 251-254: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Base Special-Purpose MPLS Label Values</td>
                        <td>RFC 3032, RFC 7274, RFC 9017 Standards Action</td>
                    </tr>
                    <tr>
                        <td>CC/CV MEP-ID TLV Registry</td>
                        <td>RFC 6428, RFC 7214 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Downstream Detailed Mapping Address Type Registry</td>
                        <td>RFC 6426, RFC 7555, RFC 8029 Standards Action</td>
                    </tr>
                    <tr>
                        <td>DS Flags</td>
                        <td>RFC 8029 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Extended Special-Purpose MPLS Label Values</td>
                        <td>RFC 7274 Standards Action</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol Application Registry</td>
                        <td>RFC 7212, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol: Ethernet Interface Parameters</td>
                        <td>RFC 7213, RFC 7214 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol: GAP TLV Objects (Application ID 0)</td>
                        <td>RFC 7212, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Global Flags</td>
                        <td>RFC 6425 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Information Field and Protocol Identifier in the Q.2941 Generic Identifier</td>
                        <td>RFC 3033 0x10-0xFD: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Interface and Label Stack and Detailed Interface and Label Stack Address Types</td>
                        <td>RFC 8029, RFC 8611 1-250: Standards Action. 251-254: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Interface Index Flags</td>
                        <td>RFC 8611 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Loss/Delay Measurement Control Code: Query Codes</td>
                        <td>RFC 6374, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Loss/Delay Measurement Control Code: Response Codes</td>
                        <td>RFC 6374, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSR Capability Flags</td>
                        <td>RFC 8611 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Measurement Timestamp Type</td>
                        <td>RFC 6374, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 8029, RFC 9041 0-191: Standards Action. 192-247: RFC Required. 248-251: Experimental
                            Use. 252-255: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>MPLS Fault OAM Flag Registry</td>
                        <td>RFC 6427, RFC 7214 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS Fault OAM Message Type Registry</td>
                        <td>RFC 6427, RFC 7214 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS Fault OAM TLV Registry</td>
                        <td>RFC 6427, RFC 7214 0-191: Standards Action. 192-247: Specification Required. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>MPLS Generalized Associated Channel (G-ACh) Types (including Pseudowire Associated Channel
                            Types)
                        </td>
                        <td>RFC 4385, RFC 5586, RFC 7026, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS Loss/Delay Measurement TLV Object</td>
                        <td>RFC 6374, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS Multi-Topology Identifiers</td>
                        <td>RFC 7307, RFC 8320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS OAM Function Flags</td>
                        <td>RFC 7759 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS PSC Capability Flag Registry</td>
                        <td>RFC 7271 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS PSC Request Registry</td>
                        <td>RFC 6378, RFC 7214 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPLS PSC TLV Registry</td>
                        <td>RFC 6378, RFC 7214 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS RPS Request Code Registry</td>
                        <td>RFC 8227 Specification Required (Expert: Weiqiang Cheng, Jie Dong)</td>
                    </tr>
                    <tr>
                        <td>MPLS RTM TLV Registry</td>
                        <td>RFC 8169 0-127: IETF Review. 128-191: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>MPLS-TP DHC TLVs</td>
                        <td>RFC 8185 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Multipath Types</td>
                        <td>RFC 8029 0-250: Standards Action. 251-254: Experimental Use. Standards Action</td>
                    </tr>
                    <tr>
                        <td>Next Hop Address Type Registry</td>
                        <td>RFC 7555 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Pad Types</td>
                        <td>RFC 8029 1-250: Standards Action. 251-254: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Protocol in Label Stack Sub-TLV of Downstream Detailed Mapping TLV</td>
                        <td>RFC 8287 0-250: Standards Action. 251-254: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Protocol in the Segment ID Sub-TLV</td>
                        <td>RFC 8287 0-250: Standards Action. 251-254: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Proxy Flags</td>
                        <td>RFC 7555 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Q.2957 User-to-user Signaling for the Internet Protocol</td>
                        <td>RFC 3033 0x03-0xFD: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Reply Modes</td>
                        <td>RFC 8029, RFC 9041 0-191: Standards Action. 192-247: RFC Required. 248-251: Experimental
                            Use. 252-255: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Reply Path Return Codes</td>
                        <td>RFC 7110 0x0000-0xFFFB: Standards Action. 0xFFFC-0xFFFF: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>Return Codes</td>
                        <td>RFC 8029, RFC 9041 0-191: Standards Action. 192-247: RFC Required. 248-251: Experimental
                            Use. 252-255: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Return Path Sub-TLV Type</td>
                        <td>Internet Draft draft-ietf-mpls-rfc6374-sr-17 1-175: IETF Review. 176-239: First Come First
                            Served. 240-251: Experimental Use. 252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Segment ID Sub-TLV Flags</td>
                        <td>RFC 9716 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TLVs</td>
                        <td>RFC 8029, RFC 9041 0-16383: Standards Action. 16384-31739: RFC Required. 31740-31743:
                            Experimental Use. 31744-32767: First Come First Served. 32768-49161: Standards Action.
                            49162-64507: RFC Required. 64508-64511: Experimental Use. 64512-65535: First Come First
                            Served.
                        </td>
                    </tr>
                    <tr>
                        <td>Multipurpose Internet Mail Extensions (MIME) and Media Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Access Types</td>
                        <td>RFC 4289 RFC publication required</td>
                    </tr>
                    <tr>
                        <td>CMS Encapsulating Content Types</td>
                        <td>RFC 7193 Expert Review (Expert: Russ Housley, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>CMS Inner Content Types</td>
                        <td>RFC 7193 Expert Review (Expert: Russ Housley, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>Event Code Registry</td>
                        <td>RFC 4733 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Markdown Variants</td>
                        <td>RFC 7763 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Media Types</td>
                        <td>RFC 6838, RFC 4855 Expert Review for Vendor and Personal Trees. For Standards Tree, see RFC
                            6838, Section 3.1. (Expert: Alexey Melnikov, Darrel Miller, Murray Kucherawy (backup))
                        </td>
                    </tr>
                    <tr>
                        <td>MIME to X.400 Table</td>
                        <td>RFC 1494 N/A</td>
                    </tr>
                    <tr>
                        <td>MIME to X.400 Table - Extended Body Part</td>
                        <td>RFC 1494 N/A</td>
                    </tr>
                    <tr>
                        <td>Parameter Values for the smime-type Parameter</td>
                        <td>RFC 7114 Specification Required (Expert: Russ Housley, Sean Turner (secondary))</td>
                    </tr>
                    <tr>
                        <td>Provisional Standard Media Type Registry</td>
                        <td>RFC 6838 FCFS (Organization subject to IESG Approval)</td>
                    </tr>
                    <tr>
                        <td>Report Types</td>
                        <td>RFC 8460 Specification Required (Expert: Murray Kucherawy)</td>
                    </tr>
                    <tr>
                        <td>Standards-related organizations that have registered Media Types in the Standards Tree</td>
                        <td>RFC 6838 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Structured Syntax Suffixes</td>
                        <td>RFC 6838 Expert Review (Expert: Alexey Melnikov, Darrel Miller)</td>
                    </tr>
                    <tr>
                        <td>Sub-Parameter Registry for application/aif+cbor and application/aif+json</td>
                        <td>RFC 9237 Specification Required (Expert: Göran Selander, Cigdem Sengul)</td>
                    </tr>
                    <tr>
                        <td>Sub-parameter Registry for application/mbox</td>
                        <td>RFC 4155 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Sub-Parameter Registry for audio/rtp-midi</td>
                        <td>RFC 6295 See sub-registries below</td>
                    </tr>
                    <tr>
                        <td>Sub-Parameter Registry for mode=rtp-midi of audio/mpeg4-generic</td>
                        <td>RFC 6295 See sub-registries below</td>
                    </tr>
                    <tr>
                        <td>Sub-Parameter Registry for video/raw</td>
                        <td>RFC 4175 See sub-registries below</td>
                    </tr>
                    <tr>
                        <td>Sub-Parameter Registry video/mpeg4-generic, audio/mpeg4-generic and
                            application/mpeg4-generic
                        </td>
                        <td>RFC 3640 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>text/directory Parameters</td>
                        <td>RFC 2425 Two-week comment period, expert review (Expert: Rolf Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>text/directory Profiles</td>
                        <td>RFC 2425 Two-week comment period, expert review (Expert: Rolf Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>text/directory Types</td>
                        <td>RFC 2425 Two-week comment period, expert review (Expert: Rolf Sonneveld, Andrew Findlay)
                        </td>
                    </tr>
                    <tr>
                        <td>Top-Level Media Types</td>
                        <td>RFC 9694 Standards Action</td>
                    </tr>
                    <tr>
                        <td>X.400 to MIME Table - Basic Body Parts</td>
                        <td>RFC 1494 N/A</td>
                    </tr>
                    <tr>
                        <td> N</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Named Information</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Named Information Hash Algorithm Registry</td>
                        <td>RFC 6920 Expert Review (Expert: James Manger)</td>
                    </tr>
                    <tr>
                        <td>Named Information URI Parameter Definitions</td>
                        <td>RFC 6920 Expert Review (Expert: James Manger)</td>
                    </tr>
                    <tr>
                        <td>Namespaces for IP over IEEE 1394</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CSR Protocol Identifiers</td>
                        <td>RFC 2734 IANA allocation</td>
                    </tr>
                    <tr>
                        <td>MCAP (Multicast Channel Allocation Protocol) Parameters</td>
                        <td>RFC 2734, RFC 3146 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Negative-ACKnowledgment (NACK) Oriented Reliable Multicast (NORM) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NORM Header Extension Types</td>
                        <td>RFC 5740 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NORM Stream Control Codes</td>
                        <td>RFC 5740 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NORM_CMD Message Sub-types</td>
                        <td>RFC 5740 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Netnews Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Netnews Cancel-Lock Hash Algorithms</td>
                        <td>RFC 8315 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Network Configuration Protocol (NETCONF) Capability URNs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Capability URNs</td>
                        <td>RFC 6241, RFC 7803 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Network File System version 4 (NFSv4)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NFSv4 ietf.org CPU_ARCH Values</td>
                        <td>RFC 8881 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>NFSv4 ietf.org OS_TYPE Values</td>
                        <td>RFC 8881 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>NFSv4 Device ID Notifications</td>
                        <td>RFC 8881 Standards Action with Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NFSv4 Named Attribute Definitions</td>
                        <td>RFC 8881, RFC 7530 Specification Required for new registrations; updates to fields other
                            than the contact field require Expert Review or IESG Approval (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>NFSv4 Path Variables</td>
                        <td>RFC 8881 ietf.org domain: Standards Action with Expert Review. non-ietf.org. domain: First
                            Come First Served. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>NFSv4 Recallable Object Types</td>
                        <td>RFC 8881 Standards Action with Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>pNFS Layout Types</td>
                        <td>RFC 8881 Standards Action with Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Network Layer Protocol Identifiers (NLPIDs) of Interest</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NLPIDs of Interest</td>
                        <td>RFC 6328 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Network News Transfer Protocol (NNTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NNTP Capability Labels</td>
                        <td>RFC 3977 Labels beginning with X are reserved for private use. All others: Standards Track
                            RFC or an IESG-approved experimental protocol.
                        </td>
                    </tr>
                    <tr>
                        <td>NNTP Compression Algorithms</td>
                        <td>RFC 8054 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Network Service Header (NSH) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Flow ID Context Types</td>
                        <td>RFC 9263 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Forwarding Context Types</td>
                        <td>RFC 9263 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NSH Base Header Bits</td>
                        <td>RFC 8300 Standards Action</td>
                    </tr>
                    <tr>
                        <td>NSH IETF-Assigned Optional Variable-Length Metadata Types</td>
                        <td>RFC 8300 Standards Action</td>
                    </tr>
                    <tr>
                        <td>NSH MD Class</td>
                        <td>RFC 8300 0x0000-0x01FF: IETF Review. 0x0200-0xFFF5: Expert Review. (Expert: Carlos
                            Pignataro, Joel Halpern, Jim Guichard)
                        </td>
                    </tr>
                    <tr>
                        <td>NSH MD Types</td>
                        <td>RFC 8300 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NSH Next Protocol</td>
                        <td>RFC 8300 Expert Review (Expert: Carlos Pignataro, Joel Halpern, Jim Guichard)</td>
                    </tr>
                    <tr>
                        <td>NSH Version</td>
                        <td>RFC 8300 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Network Time Protocol (NTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NTP Extension Field Types</td>
                        <td>RFC 5905, RFC 5906, RFC 9748 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NTP Kiss-o&#39;-Death Codes</td>
                        <td>RFC 5905, RFC 9748 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NTP Reference Identifier Codes</td>
                        <td>RFC 5905, RFC 9748 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Network Time Security (NTS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Network Time Security Error Codes</td>
                        <td>RFC 8915 0-1023: IETF Review. 1024-32767: Specification Required. 32768-65535: Private or
                            Experimental Use. (Expert: Miroslav Lichvar, Daniel Franke)
                        </td>
                    </tr>
                    <tr>
                        <td>Network Time Security Key Establishment Record Types</td>
                        <td>RFC 8915 0-1023: IETF Review. 1024-16383: Specification Required. 16384-32767: Private or
                            Experimental Use. (Expert: Miroslav Lichvar, Daniel Franke)
                        </td>
                    </tr>
                    <tr>
                        <td>Network Time Security Next Protocols</td>
                        <td>RFC 8915 0-1023: IETF Review. 1024-32767: Specification Required. 32768-65535: Private or
                            Experimental Use. (Expert: Miroslav Lichvar, Daniel Franke)
                        </td>
                    </tr>
                    <tr>
                        <td>Network Time Security Warning Codes</td>
                        <td>RFC 8915 0-1023: IETF Review. 1024-32767: Specification Required. 32768-65535: Private or
                            Experimental Use. (Expert: Miroslav Lichvar, Daniel Franke)
                        </td>
                    </tr>
                    <tr>
                        <td>Network Virtualization Overlay (NVO3)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Geneve Option Class</td>
                        <td>RFC 8926 0x0000-0x00FF: IETF Review. 0x0100-0xFEFF: First Come First Served. 0xFF00-0xFFFF:
                            Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Next Hop Resolution Protocol (NHRP) Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NHRP Extension Types</td>
                        <td>RFC 2332 Expert Review (Expert: Jim Luciani)</td>
                    </tr>
                    <tr>
                        <td>NHRP Packet Types</td>
                        <td>RFC 2332 Expert Review (Expert: Jim Luciani)</td>
                    </tr>
                    <tr>
                        <td>Novell Service Advisor Protocol (SAP) Numbers - Novell Object Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Novell Object Type</td>
                        <td> IANA does not assign</td>
                    </tr>
                    <tr>
                        <td>NSIS Signaling Layer Protocol (NSLP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AUTH_ENT_ID (X-Type 1) SubType values</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>DEST_ADDR (X-Type 4) SubType values</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>END_TIME (X-Type 6) SubType values</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Informational Error Codes</td>
                        <td>RFC 5974 0-63: IETF Review. 64-127: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>NATFW NSLP Header Flags</td>
                        <td>RFC 5973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NATFW NSLP Message Types</td>
                        <td>RFC 5973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NATFW Response Codes</td>
                        <td>RFC 5973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NSLP Error Classes</td>
                        <td>RFC 5974, RFC 5973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NSLP Message Objects</td>
                        <td>RFC 5974 1-1023: IETF Review. 1024-1999: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Permanent Failure Codes</td>
                        <td>RFC 5974 0-63: IETF Review. 64-127: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Protocol Error Codes</td>
                        <td>RFC 5974 0-63: IETF Review. 64-127: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QoS Model Error Codes</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QoS NSLP Binding Codes</td>
                        <td>RFC 5974 IETF Review</td>
                    </tr>
                    <tr>
                        <td>QoS NSLP Error Source Identifiers</td>
                        <td>RFC 5974 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QoS NSLP Message Types</td>
                        <td>RFC 5974 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SESSION_AUTH X-Types</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SOURCE_ADDR (X-Type 3) SubType values</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>START_TIME (X-Type 5) SubType values</td>
                        <td>RFC 5981 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Success Error Codes</td>
                        <td>RFC 5974 0-63: IETF Review. 64-127: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Transient Failure Codes</td>
                        <td>RFC 5974 0-63: IETF Review. 64-127: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td> O</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OAuth Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OAuth Access Token Types</td>
                        <td>RFC 6749, RFC 8414 Specification Required (Expert: Hannes Tschofenig, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>OAuth Authorization Endpoint Response Types</td>
                        <td>RFC 6749 Specification Required (Expert: Hannes Tschofenig, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>OAuth Authorization Server Metadata</td>
                        <td>RFC 8414 Specification Required (Expert: Mike Jones, Nat Sakimura, John Bradley, Dick
                            Hardt)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Dynamic Client Registration Metadata</td>
                        <td>RFC 7591 Specification Required (Expert: Justin Richer)</td>
                    </tr>
                    <tr>
                        <td>OAuth Extensions Error Registry</td>
                        <td>RFC 6749 Specification Required (Expert: Hannes Tschofenig, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>OAuth Parameters</td>
                        <td>RFC 6749 Specification Required (Expert: Hannes Tschofenig, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>OAuth Protected Resource Metadata</td>
                        <td>Internet Draft draft-ietf-oauth-resource-metadata-13 Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>OAuth Token Endpoint Authentication Methods</td>
                        <td>RFC 7591, RFC 8414 Specification Required (Expert: Justin Richer)</td>
                    </tr>
                    <tr>
                        <td>OAuth Token Introspection Response</td>
                        <td>RFC 7662 Specification Required (Expert: Justin Richer)</td>
                    </tr>
                    <tr>
                        <td>OAuth Token Type Hints</td>
                        <td>RFC 7009 Specification Required (Expert: Torsten Lodderstedt, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>OAuth URI</td>
                        <td>RFC 6755 Specification Required (Expert: Hannes Tschofenig, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>PKCE Code Challenge Methods</td>
                        <td>RFC 7636 Specification Required (Expert: John Bradley, Mike Jones)</td>
                    </tr>
                    <tr>
                        <td>One Time Password (OTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Algorithm Identifier</td>
                        <td>RFC 2289 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Extension Set Identifiers</td>
                        <td>RFC 2243 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>One-Way Active Measurement Protocol (OWAMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OWAMP-Control Command Numbers</td>
                        <td>RFC 7718 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OWAMP-Modes</td>
                        <td>RFC 7718 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Open Pluggable Edge Services (OPES)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OPES Callout Protocol (OCP) Core</td>
                        <td>RFC 4037 Expert Review for standards-track registration</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bandwidth Constraints Model Identifiers</td>
                        <td>RFC 4124 0-239: Specification Required. 240-255: Reserved for Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Authentication Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Authentication Codes</td>
                        <td>RFC 2328, RFC 6549 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Link Local Signalling (LLS) - Type/Length/Value Identifiers
                            (TLV)
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Link Local Signalling TLV Identifiers (LLS Types)</td>
                        <td>RFC 5613 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LLS Type 1 Extended Options and Flags</td>
                        <td>RFC 5613 Expert Review (Expert: Gunter Van De Velde, Peter Psenak)</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Multi-Topology Routing</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Multi-Topology ID Values</td>
                        <td>RFC 4915 0-2: Reserved. 3-31: IETF Review. 32-127: Reserved. 128-255: Reserved.</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Opaque Link-State Advertisements (LSA) Option Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Opaque Link-State Advertisements (LSA) Option Types</td>
                        <td>RFC 5250 0-127: IETF Review. 128-255: Private Use.</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 TTZ LSA TLVs</td>
                        <td>RFC 8099 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OSPF Dynamic Flooding LSA TLVs</td>
                        <td>Internet Draft draft-ietf-lsr-dynamic-flooding-18 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPF Flex-Algorithm Prefix Metric Bits</td>
                        <td>RFC 9350 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OSPF Flexible Algorithm Definition TLV Sub-TLVs</td>
                        <td>RFC 9350 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPF Link Attributes Sub-TLV Bit Values</td>
                        <td>Internet Draft draft-ietf-lsr-dynamic-flooding-18 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPF Router Functional Capability Bits</td>
                        <td>RFC 7770 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OSPF Router Information (RI) TLVs</td>
                        <td>RFC 7770 1-32767: IETF Review. 32768-32777: Experimentation. 32778-65535: Reserved.</td>
                    </tr>
                    <tr>
                        <td>OSPF Router Informational Capability Bits</td>
                        <td>RFC 7770 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OSPF Tunnel Parameter Sub-TLVs</td>
                        <td>RFC 9013 1-34999: Standards Action. 35000-65499: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Signature Algorithms</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Signature Algorithms</td>
                        <td>RFC 2154 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First (OSPF) Traffic Engineering TLVs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RFC 4973 Experimental TE LSA Types</td>
                        <td>RFC 4973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RFC 4973 Experimental TE TLVs</td>
                        <td>RFC 4973 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Top Level Types in TE LSAs</td>
                        <td>RFC 3630 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of Optical Node Property (Value 6)</td>
                        <td>RFC 7688 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of OTN-TDM SCSI (Switching Capability Specific Information)</td>
                        <td>RFC 7138 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of Router Address TLV (Value 1)</td>
                        <td>RFC 6827 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of TE Link TLV (Value 2)</td>
                        <td>RFC 3630 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of TE Node Attribute TLV (Value 5)</td>
                        <td>RFC 5786 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Types for sub-TLVs of WSON-LSC SCSI (Switching Capability Specific Information)</td>
                        <td>RFC 7688 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First v2 (OSPFv2) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IP Algorithm Prefix Reachability Sub-TLV Flags</td>
                        <td>RFC 9502 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPF Packet Type (both v2 and v3)</td>
                        <td>RFC 2328, RFC 4940 1-127: Standards Action. 128-255: Reserved.</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Inter-Area ASBR Sub-TLVs</td>
                        <td>RFC 9350 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Inter-Area ASBR TLVs</td>
                        <td>RFC 9350 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Link Opaque LSA TLVs</td>
                        <td>RFC 7684 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Link TLV Sub-TLVs</td>
                        <td>RFC 7684, RFC 9356 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Prefix Opaque LSA TLVs</td>
                        <td>RFC 7684 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Prefix TLV Flags</td>
                        <td>RFC 7684 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Extended Prefix TLV Sub-TLVs</td>
                        <td>RFC 7684 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Grace LSA Top Level TLV</td>
                        <td>RFC 4940 1-255: Standards Action. 256-65519: Reserved. 65520-65527: Experimentation.
                            65528-65535: Vendor Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Instance IDs</td>
                        <td>RFC 6549 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Link State (LS) Type</td>
                        <td>RFC 2328, RFC 4940 1-127: Standards Action. 128-255: Reserved.</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Options Registry (8 bits)</td>
                        <td>RFC 4940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Router LSA Link Type (Value 1)</td>
                        <td>RFC 4940 1-127: Standards Action. 128-255: Reserved.</td>
                    </tr>
                    <tr>
                        <td>OSPFv2 Router Properties Registry</td>
                        <td>RFC 4940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First v3 (OSPFv3) Authentication Trailer Options</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Authentication Types</td>
                        <td>RFC 7166 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Open Shortest Path First v3 (OSPFv3) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>LD Options</td>
                        <td>RFC 5820 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Autoconfiguration (AC) LSA TLVs</td>
                        <td>RFC 7503 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Extended-LSA Sub-TLVs</td>
                        <td>RFC 8362, RFC 9356 4-32767: IETF Review or IESG Approval. 33024-45055: First Come First
                            Served.
                        </td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Extended-LSA TLVs</td>
                        <td>RFC 8362 9-32767: IETF Review or IESG Approval. 33024-45055: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Instance ID Address Family Values</td>
                        <td>RFC 5838, RFC 6969 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 LSA Function Codes</td>
                        <td>RFC 7770 0-255: IETF Review. 256-8175: Reserved. 8176-8183: Experimentation. 8184-8190:
                            Vendor Private Use. 8191: Reserved.
                        </td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Options (24 bits)</td>
                        <td>RFC 4940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Prefix Options (8 bits)</td>
                        <td>RFC 4940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Router LSA Link Types</td>
                        <td>RFC 4940 0-127: Standards Action. 128-255: Reserved.</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 Router Properties Registry</td>
                        <td>RFC 5340 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 SRv6 Adjacency SID Sub-TLV Flags</td>
                        <td>RFC 9513 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 SRv6 Capabilities TLV Flags</td>
                        <td>RFC 9513 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 SRv6 End SID Sub-TLV Flags</td>
                        <td>RFC 9513 Standards Action</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 SRv6 Locator LSA Sub-TLVs</td>
                        <td>RFC 9513 0-32767: IETF Review or IESG Approval. 33024-45055: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>OSPFv3 SRv6 Locator LSA TLVs</td>
                        <td>RFC 9513 0-32767: IETF Review or IESG Approval. 33024-45055: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>Open Systems Interconnection (OSI) Network Service Access Point Addresses (NSAPA) Internet
                            Code Point Registry
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OSI NSAPA Internet Code Points for AFI 35</td>
                        <td>RFC 4548 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OpenPGP</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OpenPGP AEAD Algorithms</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Armor Header Keys</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Armor Header Lines</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Compression Algorithms</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP ECC Curve OIDs and Usage</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP ECC Curve-Specific Wire Formats</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP ECDH KDF and KEK Parameters</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Elliptic Curve Point Wire Formats</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Elliptic Curve Scalar Encodings</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Encrypted Message Packet Versions</td>
                        <td>RFC 9580 RFC Required</td>
                    </tr>
                    <tr>
                        <td>OpenPGP Features Flags</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Hash Algorithm Identifiers for RSA Signatures&#39; Use of EMSA-PKCS1-v1_5 Padding
                        </td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Hash Algorithms</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Image Attribute Encoding Format</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Image Attribute Versions</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Key and Signature Versions</td>
                        <td>RFC 9580 RFC Required</td>
                    </tr>
                    <tr>
                        <td>OpenPGP Key Flags</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Key IDs and Fingerprints</td>
                        <td>RFC 9580 RFC Required</td>
                    </tr>
                    <tr>
                        <td>OpenPGP Key Server Preference Flags</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP New Packet Versions (OBSOLETE)</td>
                        <td>RFC 9580 Registry closed</td>
                    </tr>
                    <tr>
                        <td>OpenPGP Packet Types</td>
                        <td>RFC 9580 RFC Required</td>
                    </tr>
                    <tr>
                        <td>OpenPGP Public Key Algorithms</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Reason for Revocation (Revocation Octet)</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Secret Key Encryption (S2K Usage Octet)</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Signature Notation Data Subpacket Notation Flags</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Signature Notation Data Subpacket Types</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Signature Subpacket Types</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Signature Types</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP String-to-Key (S2K) Types</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP Symmetric Key Algorithms</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>OpenPGP User Attribute Subpacket Types</td>
                        <td>RFC 9580 Specification Required (Expert: Daniel Kahn Gillmor, Andrew Gallagher, Heiko
                            Schäfer)
                        </td>
                    </tr>
                    <tr>
                        <td>Operating System Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Operating System Names</td>
                        <td>RFC 952 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>OS Specific Fact Names</td>
                        <td>RFC 3659 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>OS Specific Filetypes</td>
                        <td>RFC 3659 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Optimized Link State Routing (OLSR) Protocol Message Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OLSR Protocol Message Types</td>
                        <td>RFC 3626 1-127: Standards Action. 128-255: Private/Local Use.</td>
                    </tr>
                    <tr>
                        <td>Opus Channel Mapping Families</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Opus Channel Mapping Families</td>
                        <td>RFC 7845, RFC 8486 Specification Required (Expert: Tim Terriberry, Ralph Giles)</td>
                    </tr>
                    <tr>
                        <td>OSPF Database Description (DD) Packet Flags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Database Description (DD) Packet Flags</td>
                        <td>RFC 5838 Standards Action</td>
                    </tr>
                    <tr>
                        <td> P</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Packet Sampling (PSAMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PSAMP selectorAlgorithm Identifiers</td>
                        <td>RFC 5476 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PAL Package Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PAL Package Types</td>
                        <td>RFC 8295 Expert Review (Expert: Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>Path Computation Element Protocol (PCEP) Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ASSOCIATION Flag Field</td>
                        <td>RFC 8697, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ASSOCIATION Type Field</td>
                        <td>RFC 8697, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>AUTO-BANDWIDTH-ATTRIBUTES Sub-TLV Types</td>
                        <td>RFC 8733 0-65503: IETF Review. 65504-65535: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>AUTO-BANDWIDTH-CAPABILITY TLV Flag Field</td>
                        <td>RFC 8733, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Bidirectional LSP Association Group TLV Flag Field</td>
                        <td>RFC 9059, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BPI Object Error Code Field</td>
                        <td>RFC 9757 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BPI Object Flag Field</td>
                        <td>RFC 9757 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BPI Object Status Code Field</td>
                        <td>RFC 9757 IETF Review</td>
                    </tr>
                    <tr>
                        <td>BU Object Type Field</td>
                        <td>RFC 8233, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CCI Object Flag Field for MPLS Label</td>
                        <td>RFC 9050, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CCI Object Flag Field for Native IP</td>
                        <td>RFC 9757 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CLOSE Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>CLOSE Object Reason Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DISJOINTNESS-CONFIGURATION TLV Flag Field</td>
                        <td>RFC 8800, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Domain-ID TLV Domain Type</td>
                        <td>RFC 8685 IETF Review</td>
                    </tr>
                    <tr>
                        <td>FLOWSPEC Object Flag Field</td>
                        <td>RFC 9168, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Generalized Endpoint Types</td>
                        <td>RFC 8779, RFC 9756 0-244: IETF Review. 245-255: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>GMPLS-CAPABILITY TLV Flag Field</td>
                        <td>RFC 8779, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>H-PCE-CAPABILITY TLV Flag Field</td>
                        <td>RFC 8685, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>H-PCE-FLAG TLV Flag Field</td>
                        <td>RFC 8685, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Inter-Layer Object Path Property Bits</td>
                        <td>RFC 8282 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IRO Subobjects</td>
                        <td>RFC 5521 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LOAD-BALANCING Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSP Exclusion Subobject Flag Field</td>
                        <td>RFC 9504, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSP Object Flag Field</td>
                        <td>RFC 8231, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSP-ERROR-CODE TLV Error Code Field</td>
                        <td>RFC 8231, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSP-EXTENDED-FLAG TLV Flag Field</td>
                        <td>RFC 9357, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>LSPA Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>METRIC Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>METRIC Object T Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MONITORING Object Flag Field</td>
                        <td>RFC 5886 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NO-PATH Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NO-PATH Object NI Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NO-PATH-VECTOR TLV Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Notification Object</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Notification Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Objective Function</td>
                        <td>RFC 5541 1-1023: IETF Review. 1024-32767: First Come First Served. 32768-65535: Reserved for
                            Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Open Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OVERLOAD Object Flag field</td>
                        <td>RFC 5886 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Path Protection Association Group TLV Flag Field</td>
                        <td>RFC 8745, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PATH-KEY Subobjects</td>
                        <td>RFC 5520 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PATH-SETUP-TYPE-CAPABILITY Sub-TLV Type Indicators</td>
                        <td>RFC 8664, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCECC-CAPABILITY sub-TLV</td>
                        <td>RFC 9050, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCEP Flow Specification TLV Type Indicators</td>
                        <td>RFC 9168 0-255: Reserved. 256-64506: Specification Required. 64507-65531: First Come First
                            Served. 65532-65535: Experimental Use.
                        </td>
                    </tr>
                    <tr>
                        <td>PCEP Message Common Header Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCEP Messages</td>
                        <td>RFC 5440 0-251: IETF Review. 252-255: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>PCEP Objects</td>
                        <td>RFC 5440 0-247: IETF Review. 248-255: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>PCEP Path Setup Types</td>
                        <td>RFC 8408 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCEP SR-ERO NAI Types</td>
                        <td>RFC 8664 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCEP SRv6-ERO NAI Types</td>
                        <td>RFC 9603 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PCEP TLV Type Indicators</td>
                        <td>RFC 5440 0-65503: IETF Review. 65504-65535: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>PCEP-ERROR Object Error Types and Values</td>
                        <td>RFC 5440, RFC 9756 0-251: IETF Review. 252-255: Experimental Use.</td>
                    </tr>
                    <tr>
                        <td>PCEP-ERROR Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PROC-TIME Object Flag Field</td>
                        <td>RFC 5886 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RP Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>S2LS Object Flag Field</td>
                        <td>RFC 8623, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SCHED-PD-LSP-ATTRIBUTE TLV Opt Field</td>
                        <td>RFC 8934, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Schedule TLVs Flag Field</td>
                        <td>RFC 8934, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SR Capability Flag Field</td>
                        <td>RFC 8664, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SR-ERO Flag Field</td>
                        <td>RFC 8664, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SRP Object Flag Field</td>
                        <td>RFC 8281, RFC 8786, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SRv6 Capability Flag Field</td>
                        <td>RFC 9603, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SRv6-ERO Flag Field</td>
                        <td>RFC 9603, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>STATEFUL-PCE-CAPABILITY TLV Flag Field</td>
                        <td>RFC 8231, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SVEC Object Flag Field</td>
                        <td>RFC 5440 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TE-PATH-BINDING TLV BT Field</td>
                        <td>RFC 9604, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TE-PATH-BINDING TLV Flag Field</td>
                        <td>RFC 9604, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>WA Object Flag Field</td>
                        <td>RFC 8780, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Wavelength Allocation TLV Flag Field</td>
                        <td>RFC 8780, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Wavelength Restriction TLV Action Values</td>
                        <td>RFC 8780, RFC 9756 IETF Review</td>
                    </tr>
                    <tr>
                        <td>XRO Flag Field</td>
                        <td>RFC 5521 IETF Review</td>
                    </tr>
                    <tr>
                        <td>XRO Subobjects</td>
                        <td>RFC 5521 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Peer-to-Peer Streaming Peer Protocol (PPSPP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Chunk Addressing Method Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Content Integrity Protection Method Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Merkle Hash Tree Function Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Message Type Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Option Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSP Peer Protocol Version Number Registry</td>
                        <td>RFC 7574 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Peer-to-Peer Streaming Tracker Protocol (PPSTP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PPSTP Error Code Registry</td>
                        <td>RFC 7846 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSTP Request Type Registry</td>
                        <td>RFC 7846 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPSTP Version Number Registry</td>
                        <td>RFC 7846 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Per Hop Behavior Identification Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Per Hop Behavior Identification Codes</td>
                        <td>RFC 3140 Expert or area director review (Expert: Primary: Brian Carpenter; Secondary: David
                            Black)
                        </td>
                    </tr>
                    <tr>
                        <td>Performance Metrics</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - Method</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - Metric Type</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - Output</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - Spec</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - SubTypeMethod</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metric Name Elements - Units</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Performance Metrics Registry</td>
                        <td>RFC 8911 Specification Required (Expert: Greg Mirsky, Michael Scharf)</td>
                    </tr>
                    <tr>
                        <td>Permanent IPv6 Multicast Group Identifiers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Group Identifier Values</td>
                        <td>RFC 3307 Expert Review (Expert: Stig Venaas)</td>
                    </tr>
                    <tr>
                        <td>Point-to-Point (PPP) Protocol Field Assignments</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IP Header Compression Configuration Option Suboption Types</td>
                        <td>RFC 3544 Standards Action</td>
                    </tr>
                    <tr>
                        <td>IP-Compression-Protocol Types</td>
                        <td>RFC 1332 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IPv6-Compression-Protocol Types</td>
                        <td>RFC 5172 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NetBIOS Frames Control Protocol (NBFCP) Configuration Options</td>
                        <td>RFC 2097 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP (IPXCP) Configuration Options</td>
                        <td>RFC 1552 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP ATCP Configuration Option Types</td>
                        <td>RFC 1378 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP Authentication Algorithms</td>
                        <td>RFC 1994 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP Banyan Vines Configuration Option Types</td>
                        <td>RFC 1763 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP Bridging Configuration Option Types</td>
                        <td>RFC 3518, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP Bridging MAC Types</td>
                        <td>RFC 3518, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP Bridging Spanning Tree</td>
                        <td>RFC 3518, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP CCP Configuration Option Types</td>
                        <td>RFC 1962, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP DLL Protocol Numbers</td>
                        <td>RFC 1661, RFC 3818 0xxx-3xxx: IETF Review. 4xxx-7xxx: IETF Review. 8xxx-bxxx: IETF Review.
                            cxxx-fxxx: IETF Review.
                        </td>
                    </tr>
                    <tr>
                        <td>PPP EAP Request/Response Types</td>
                        <td>RFC 3748 Expert Review</td>
                    </tr>
                    <tr>
                        <td>PPP ECP Configuration Option Types</td>
                        <td>RFC 1968 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP IPCP Configuration Option Types</td>
                        <td>RFC 1332, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP IPv6CP Configuration Options</td>
                        <td>RFC 5072, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP LCP Callback Operation Fields</td>
                        <td>RFC 1570, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP LCP Configuration Option Types</td>
                        <td>RFC 1661, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP LCP FCS-Alternatives</td>
                        <td>RFC 1570, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP Link Control Protocol (LCP) and Internet Protocol Control Protocol (IPCP) Codes</td>
                        <td>RFC 1661, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP Multilink Endpoint Discriminator Class</td>
                        <td>RFC 1990, RFC 3818 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP OSINLCP Configuration Option Types</td>
                        <td>RFC 1377 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP Over Ethernet Versions</td>
                        <td>RFC 2516, RFC 8822 Specification Required (Expert: Donald Eastlake)</td>
                    </tr>
                    <tr>
                        <td>PPP SDCP Configuration Options</td>
                        <td>RFC 1963 Expert Review (Expert: James Carlson)</td>
                    </tr>
                    <tr>
                        <td>PPP TNCP Configuration Option Types</td>
                        <td>RFC 6361 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PPP Vendor Specific OUI Options</td>
                        <td>RFC 5342 Registry closed by RFC 5342</td>
                    </tr>
                    <tr>
                        <td>ROHC Configuration Option Suboption Identifier Values</td>
                        <td>RFC 3241</td>
                    </tr>
                    <tr>
                        <td>Point-to-Point Over Ethernet (PPPoE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PPPoE Active Discovery Code fields (8-bit values)</td>
                        <td>RFC 4937 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>PPPoE TAG Values (16-bit values)</td>
                        <td>RFC 4937 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Port Control Protocol (PCP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PCP Opcodes</td>
                        <td>RFC 6887 0-31, 127: Standards Action. 32-63: Specification Required. (Expert: Dan Wing,
                            Stuart Cheshire)
                        </td>
                    </tr>
                    <tr>
                        <td>PCP Options</td>
                        <td>RFC 6887 0-63, 127-191, 255: Standards Action. 64-95, 192-223: Specification Required.
                            (Expert: Dan Wing, Stuart Cheshire)
                        </td>
                    </tr>
                    <tr>
                        <td>PCP Result Codes</td>
                        <td>RFC 6887 0-127, 255: Standards Action. 128-191: Specification Required. (Expert: Dan Wing,
                            Stuart Cheshire)
                        </td>
                    </tr>
                    <tr>
                        <td>Portable Symmetric Key Container (PSKC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Algorithm URI Registry and Related PSKC Profiles</td>
                        <td>RFC 6030 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Key Usage Registry</td>
                        <td>RFC 6030 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PSKC Version Registry</td>
                        <td>RFC 6030 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Post Office Protocol version 3 (POP3) Extension Mechanism</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>POP3 Capabilities</td>
                        <td>RFC 2449 Standards Track or IESG-approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>POP3 Response Codes</td>
                        <td>RFC 2449 RFC Specification Required</td>
                    </tr>
                    <tr>
                        <td>Post-Stack First Nibble</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Post-Stack First Nibble</td>
                        <td>Internet Draft draft-ietf-mpls-1stnibble-13 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Posture Attribute (PA) Protocol Compatible with Trusted Network Connect (TNC) Parameters
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PA-TNC Attribute Types</td>
                        <td>RFC 5792 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>PA-TNC Error Codes</td>
                        <td>RFC 5792 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>PA-TNC Remediation Parameters Types</td>
                        <td>RFC 5792 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>Software Data Model Types</td>
                        <td>RFC 8412 Specification Required (Expert: David Waltermire, Jessica Fitzgerald-McKay)</td>
                    </tr>
                    <tr>
                        <td>Posture Broker (PB) Protocol Compatible with Trusted Network Connect (TNC) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PA Subtypes</td>
                        <td>RFC 5793 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>PB-TNC Error Codes</td>
                        <td>RFC 5793 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>PB-TNC Message Types</td>
                        <td>RFC 5793 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>PB-TNC Remediation Parameters Types</td>
                        <td>RFC 5793 Specification Required (Expert: Steve Hanna, Jessica Fitzgerald-McKay, Charles
                            Schmidt)
                        </td>
                    </tr>
                    <tr>
                        <td>Power State Sets</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DMTF Power State Set</td>
                        <td>RFC 7326 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>EMAN Power State Set</td>
                        <td>RFC 7326 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>IEEE1621 Power State Set</td>
                        <td>RFC 7326 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRECIS Derived Property Value</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PRECIS Derived Property Value</td>
                        <td>RFC 8264, RFC 5892 Expert Review (Expert: Patrik Fältström)</td>
                    </tr>
                    <tr>
                        <td>Preparation and Comparison of Internationalized Strings (PRECIS) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PRECIS Base Classes</td>
                        <td>RFC 8264 RFC Required</td>
                    </tr>
                    <tr>
                        <td>PRECIS Profiles</td>
                        <td>RFC 8264 Expert Review (Expert: Peter Saint-Andre (primary), Pete Resnick (secondary),
                            Andrew Sullivan (backup))
                        </td>
                    </tr>
                    <tr>
                        <td>Presence SRV Protocol Label Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Presence SRV Protocol Labels</td>
                        <td>RFC 3861 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Printer MIB Interpreters Language Families - OBSOLETE</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Printer MIB Interpreters Language Families - OBSOLETE</td>
                        <td>RFC 3805 Expert Review (Expert: Ira McDonald, Michael Sweet)</td>
                    </tr>
                    <tr>
                        <td>Privacy Enhanced RTP Conferencing (PERC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Datagram Transport Layer Security (DTLS) Tunnel Protocol Message Types for Privacy Enhanced
                            Conferencing
                        </td>
                        <td>RFC 9185 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Privacy Pass</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Privacy Pass Token Types</td>
                        <td>RFC 9577 Specification Required (Expert: Tommy Pauly, Chris Wood)</td>
                    </tr>
                    <tr>
                        <td>Probabilistic Routing Protocol using History of Encounters and Transitivity (PRoPHET)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bundle Offer and Response B Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Bundle Offer and Response TLV Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>DTN Routing Protocol Number</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Error TLV Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Hello TLV Flags 0, 1, 2</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Hello TLV Flags 3-7</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET Codes for Failure</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET Codes for Success</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET Header Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET Protocol Version</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET Result Field</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PRoPHET TLV Type</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RIB Dictionary TLV Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RIB Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RIB TLV Flags</td>
                        <td>RFC 6693 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Profile URIs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Profile URIs</td>
                        <td>RFC 7284 First Come First Served (Specification Suggested)</td>
                    </tr>
                    <tr>
                        <td>Pronet 80 Type Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Pronet 80 Type Numbers</td>
                        <td> IANA does not assign</td>
                    </tr>
                    <tr>
                        <td>Protocol for Carrying Authentication for Network Access (PANA) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AVP Codes</td>
                        <td>RFC 5191, RFC 6786 Expert Review with Specification Required, or Standards Action (Expert:
                            Alper Yegin)
                        </td>
                    </tr>
                    <tr>
                        <td>AVP Flags</td>
                        <td>RFC 5191, RFC 5872 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Message Flags</td>
                        <td>RFC 5191, RFC 5872 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 5191, RFC 5872 1-65519: IETF Review or IESG Approval. 65520-65535: IANA does not
                            assign.
                        </td>
                    </tr>
                    <tr>
                        <td>Protocol Independent Multicast (PIM) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PIM Address Encoding Types</td>
                        <td>RFC 5384, RFC 7761, RFC 7887 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM Address Family</td>
                        <td>RFC 3973, RFC 7761 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>PIM Designated Router Load-Balancing Hash Algorithms</td>
                        <td>RFC 8775 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM Flooding Mechanism Message Types</td>
                        <td>RFC 8364 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM Join Attribute Types</td>
                        <td>RFC 5384 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM Join/Prune Transport Types</td>
                        <td>RFC 8059 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM Message Types</td>
                        <td>RFC 9436 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PIM-Hello Options</td>
                        <td>RFC 7761, RFC 3973 First Come First Served (expire in 1 year); Specification Required for
                            Permanent assignments (Expert: Stig Venaas, Jeffrey (Zhaohui) Zhang)
                        </td>
                    </tr>
                    <tr>
                        <td>PORT Message Types</td>
                        <td>RFC 6559 RFC Required</td>
                    </tr>
                    <tr>
                        <td>PORT Option Types</td>
                        <td>RFC 6559 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Protocol Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Assigned Internet Protocol Numbers</td>
                        <td>RFC 5237, RFC 7045 IESG Approval or Standards Action</td>
                    </tr>
                    <tr>
                        <td>Protocol to Access White-Space (PAWS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PAWS Error Code Registry</td>
                        <td>RFC 7545 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PAWS Parameters Registry</td>
                        <td>RFC 7545 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PAWS Ruleset ID Registry</td>
                        <td>RFC 7545 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Provisioning Domains (PvDs)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Additional Information PvD Keys</td>
                        <td>RFC 8801 Expert Review (Expert: Tommy Pauly, David Schinazi)</td>
                    </tr>
                    <tr>
                        <td>PvD Option Flags</td>
                        <td>RFC 8801 Standards Action</td>
                    </tr>
                    <tr>
                        <td>PvD Split DNS Claims</td>
                        <td>RFC 9704 Expert Review (Expert: Tommy Pauly, Tirumaleswar Reddy.K, Benjamin M. Schwartz)
                        </td>
                    </tr>
                    <tr>
                        <td>Proxy Certificate Policy Languages</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Proxy Certificate Policy Languages</td>
                        <td>RFC 3820 IETF Standards Action</td>
                    </tr>
                    <tr>
                        <td>Pseudowire Name Spaces (PWE3)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Associated Channel Header TLV Registry (DELETED)</td>
                        <td>RFC 5586, RFC 7026</td>
                    </tr>
                    <tr>
                        <td>Attachment Group Identifier (AGI) Type Registry</td>
                        <td>RFC 4446 2-64: Expert Review. 65-127: IETF Review. 128-254: First Come First Served. 255:
                            IETF Review. (Expert: Stewart Bryant, Andrew Malis, Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>Attachment Individual Identifier Type Registry</td>
                        <td>RFC 4446 2-64: Expert Review. 65-127: IETF Review. 128-254: First Come First Served. 255:
                            IETF Review. (Expert: Stewart Bryant, Andrew Malis, Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>CC/CV MEP-ID TLV Registry</td>
                        <td>RFC 6428, RFC 7214</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol Application Registry</td>
                        <td>RFC 7212, RFC 7214</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol TLV Registry</td>
                        <td>RFC 7212, RFC 7214</td>
                    </tr>
                    <tr>
                        <td>G-ACh Advertisement Protocol: Ethernet Interface Parameters</td>
                        <td>RFC 7213, RFC 7214</td>
                    </tr>
                    <tr>
                        <td>Header Compression Over MPLS PW Control Word Packet Type</td>
                        <td>RFC 4901 Expert Review</td>
                    </tr>
                    <tr>
                        <td>ICC RG Parameter Types</td>
                        <td>RFC 7275 0x0000: IETF Review. 0x003B-0x1FFF: Expert Review. 0x2000-0x2FFF: IETF Review.
                            0x3000-0x3FFE: First Come First Served. 0x3FFF: IETF Review. (Expert: Stewart Bryant,
                            Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>L2VPN PE Stack Capabilities</td>
                        <td>RFC 6575 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS Pseudowire Types Registry</td>
                        <td>RFC 4446 31-1024: Expert Review. 1025-4096: IETF Review. 4097-32766: First Come First
                            Served. 32767: IETF Review. (Expert: Stewart Bryant, Andrew Malis, Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>MPLS VCCV Connectivity Verification (CV) Types</td>
                        <td>RFC 5085 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS VCCV Control Channel (CC) Types</td>
                        <td>RFC 5085 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Pseudowire Associated Channel Types</td>
                        <td>RFC 4385, RFC 5586, RFC 7026, RFC 7214</td>
                    </tr>
                    <tr>
                        <td>Pseudowire Interface Parameters Sub-TLV type Registry</td>
                        <td>RFC 4446 2-64: Expert Review. 65-127: IETF Review. 128-254: First Come First Served. 255:
                            IETF Review. (Expert: Stewart Bryant, Andrew Malis, Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>Pseudowire Status Codes Registry</td>
                        <td>RFC 4446 Expert Review (Expert: Stewart Bryant, Andrew Malis, Matthew Bocci)</td>
                    </tr>
                    <tr>
                        <td>Pseudowire Switching Point PE sub-TLV Type</td>
                        <td>RFC 6073 0: IETF Review. 1-64: Expert Review. 65-127: IETF Review. 128-254: First Come First
                            Served. 255: IETF Review. (Expert: Primary: Stewart Bryant; secondary: Matthew Bocci)
                        </td>
                    </tr>
                    <tr>
                        <td>PSN Tunnel Sub-TLV Name Space</td>
                        <td>RFC 7965 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PW Generic Protocol Flags</td>
                        <td>RFC 6478 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PW Status Refresh Reduction Configuration Message Sub-TLVs</td>
                        <td>RFC 8237 0x00: IETF Review. 0x04-0x40: Expert Review. 0x41-0x7F: IETF Review. 0x80-0xFE:
                            Expert Review. 0xFF: IETF Review. (Expert: Stewart Bryant, Andrew Malis)
                        </td>
                    </tr>
                    <tr>
                        <td>PW Status Refresh Reduction Control Messages</td>
                        <td>RFC 8237 0x00: IETF Review. 0x03-0x40: Expert Review. 0x41-0x7F: IETF Review. 0x80-0xFE:
                            Expert Review. 0xFF: IETF Review. (Expert: Stewart Bryant, Andrew Malis)
                        </td>
                    </tr>
                    <tr>
                        <td>PW Status Refresh Reduction Message Flags</td>
                        <td>RFC 8237 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PW Status Refresh Reduction Notification Codes</td>
                        <td>RFC 8237 0x00000000: IETF Review. 0x00000008-0x00010000: Expert Review.
                            0x00010001-0x08000000: IETF Review. 0x08000001-0xFFFFFFFE: Expert Review. 0xFFFFFFFF: IETF
                            Review. (Expert: Stewart Bryant, Andrew Malis)
                        </td>
                    </tr>
                    <tr>
                        <td>VCCV Extended CV Types</td>
                        <td>RFC 7189 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PT-EAP: Posture Transport (PT) Protocol For EAP Tunnel Methods</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PT-EAP Versions</td>
                        <td>RFC 7171 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Public Data Network Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Public Data Network Numbers</td>
                        <td>RFC 1356 Registrations no longer accepted</td>
                    </tr>
                    <tr>
                        <td>Public Key Infrastructure using X.509 (PKIX) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Certification Authority Restriction Flags</td>
                        <td>RFC 8659 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Certification Authority Restriction Properties</td>
                        <td>RFC 8659 Specification Required (Expert: Phillip Hallam-Baker)</td>
                    </tr>
                    <tr>
                        <td>PKIX SRV Protocol Labels</td>
                        <td>RFC 4386 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Public Notary Transparency</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Error Types</td>
                        <td>RFC 9162 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Hash Algorithms</td>
                        <td>RFC 9162 0x00-0xDF: Specification Required. 0xE0-0xEF: Experimental Use. 0xF0-0xFF: Private
                            Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Log Artifact Extensions</td>
                        <td>RFC 9162 0x0000-0xDFFF: Specification Required. 0xE000-0xEFFF: Experimental Use.
                            0xF000-0xFFFF: Private Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Log IDs</td>
                        <td>RFC 9162 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Signature Algorithms</td>
                        <td>RFC 9162 0x0000-0x0807: Specification Required. 0x0808-0xFDFF: Expert Review. 0xFE00-0xFEFF:
                            Experimental Use. 0xFF00-0xFFFF: Private Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>VersionedTransTypes</td>
                        <td>RFC 9162 0x0100-0xDFFF: Specification Required. 0xE000-0xEFFF: Experimental Use.
                            0xF000-0xFFFF: Private Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td> Q</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>QoS NSIS Signal Layering Protocol (NSLP) QSPEC Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Excess Treatment Parameter</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Extent of Restoration Field</td>
                        <td>RFC 5976 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Object Types</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Parameter ID</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QSPEC Procedure</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QSPEC Type</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QSPEC Version</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Restoration Priority Field</td>
                        <td>RFC 5976 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Time to Restore Field</td>
                        <td>RFC 5976 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Y.1541 QoS Class Parameter</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Y.2171 Admission Priority Parameter</td>
                        <td>RFC 5975 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>QUIC</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>QUIC Frame Types</td>
                        <td>RFC 9000 provisional: Expert Review. provisional registration Date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. first unassigned codepoint: Standards Action. (Expert:
                            Jana Iyengar, Ian Swett, Martin Thomson)
                        </td>
                    </tr>
                    <tr>
                        <td>QUIC Transport Error Codes</td>
                        <td>RFC 9000 provisional: Expert Review. provisional registration Date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. first unassigned codepoint: Standards Action. (Expert:
                            Jana Iyengar, Ian Swett, Martin Thomson)
                        </td>
                    </tr>
                    <tr>
                        <td>QUIC Transport Parameters</td>
                        <td>RFC 9000 provisional: Expert Review. provisional registration Date field update: First Come
                            First Served. permanent, 0x00-0x3f: Standards Action or IESG Approval. permanent, greater
                            than 0x3f: Specification Required. first unassigned codepoint: Standards Action. values 31 *
                            N + 27 (for integer values of N): Reserved. (Expert: Jana Iyengar, Ian Swett, Martin
                            Thomson)
                        </td>
                    </tr>
                    <tr>
                        <td>QUIC Versions</td>
                        <td>RFC 9000 provisional: Expert Review. provisional registration Date field update: First Come
                            First Served. permanent: Specification Required. first unassigned codepoint: Standards
                            Action. value 0x?a?a?a?a: Reserved. (Expert: Jana Iyengar, Ian Swett, Martin Thomson)
                        </td>
                    </tr>
                    <tr>
                        <td> R</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Radius Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Code Values for RADIUS Attribute 241.1, Frag-Status</td>
                        <td>RFC 7499 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Data Type</td>
                        <td>RFC 8044 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Entity Types (Attribute 127, Location-Information)</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>Location Profiles (Attribute 127, Location-Information)</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>Location-Capable Attribute (Attribute 131)</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>Operator Namespace Identifier for Attribute 126</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>Option Codes Permitted in the Softwire46-Priority Attribute</td>
                        <td>RFC 8658 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Privacy Flags (Attribute 129, Basic-Location-Policy-Rules)</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>RADIUS Attribute Types</td>
                        <td>RFC 3575, RFC 6929, RFC 8044 1-191: IETF Review. 192-240: Reserved for Private Use. 224-240:
                            Implementation Specific. 241-246 (extended space, Unassigned): IETF Review. 241-246
                            (extended space, Reserved): Standards Action. 247-255: Reserved.
                        </td>
                    </tr>
                    <tr>
                        <td>RADIUS IP Port Configuration and Reporting TLVs</td>
                        <td>RFC 8045 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RADIUS Packet Type Codes</td>
                        <td>RFC 3575 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>RADIUS Softwire46 Configuration and Multicast Attributes</td>
                        <td>RFC 8658 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Requested-Location-Info Attribute (Attribute 132)</td>
                        <td>RFC 5580 Expert Review (Expert: Alan DeKok, Mohit Sethi)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 10, Framed-Routing</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 101, Error-Cause Attribute</td>
                        <td>RFC 3575, RFC 5176, RFC 7930 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 13, Framed-Compression</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 133, Framed-Management-Protocol Attribute</td>
                        <td>RFC 5607 Specification Required</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 134, Management-Transport-Protection Attribute</td>
                        <td>RFC 5607 Specification Required</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 15, Login-Service</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 29, Termination-Action</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 40, Acct-Status-Type</td>
                        <td>RFC 2866, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 45, Acct-Authentic</td>
                        <td>RFC 2866, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 49, Acct-Terminate-Cause</td>
                        <td>RFC 2866, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 6, Service-Type</td>
                        <td>RFC 2865, RFC 3575 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 61, NAS-Port-Type</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 64, Tunnel-Type</td>
                        <td>RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 65, Tunnel-Medium-Type</td>
                        <td>RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 7, Framed-Protocol</td>
                        <td>RFC 2865, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 72, ARAP-Zone-Access</td>
                        <td>RFC 2869, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Values for RADIUS Attribute 76, Prompt</td>
                        <td>RFC 2869, RFC 3575 Expert Review (Expert: Bernard Aboba)</td>
                    </tr>
                    <tr>
                        <td>Real Time Streaming Protocol (RTSP)/1.0 Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RTSP/1.0 Headers</td>
                        <td>RFC 2326 Standards Document, preferably an IETF RFC</td>
                    </tr>
                    <tr>
                        <td>RTSP/1.0 Methods</td>
                        <td>RFC 2326 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RTSP/1.0 Option Tags</td>
                        <td>RFC 2326 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RTSP/1.0 Status Codes</td>
                        <td>RFC 2326 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Real-time Inter-network Defense (RID)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RID Enumeration List</td>
                        <td>RFC 6545 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>XML Schemas Exchanged via RID</td>
                        <td>RFC 6545 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Real-Time Streaming Protocol (RTSP) 2.0 Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Accept-Credentials Hash Algorithms</td>
                        <td>RFC 7826 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Accept-Credentials Policies</td>
                        <td>RFC 7826 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Cache-Control Cache Directive Extensions</td>
                        <td>RFC 7826 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Feature-tags</td>
                        <td>RFC 7826 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Media Properties</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Notify-Reason Values</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Range Header Formats</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>RSTP 2.0 Headers</td>
                        <td>RFC 7826 Expert Review (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>RTP-Info Header Parameters</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>RTSP 2.0 Methods</td>
                        <td>RFC 7826 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RTSP 2.0 Status Codes</td>
                        <td>RFC 7826 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Seek-Style Policies</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Terminate-Reason Header Parameters</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Terminate-Reason Redirect Reasons</td>
                        <td>RFC 7826 Expert Review (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Transport Modes</td>
                        <td>RFC 7826 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Transport Parameters</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Transport Protocol Identifier</td>
                        <td>RFC 7826 Specification Required (Expert: Martin Stiemerling)</td>
                    </tr>
                    <tr>
                        <td>Real-Time Transport Protocol (RTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EKT Ciphers</td>
                        <td>RFC 8870 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>EKT Message Types</td>
                        <td>RFC 8870 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>FMT Values for PSFB Payload Types</td>
                        <td>RFC 4585 Specification Required (Expert: Magnus Westerlund, Roni Even)</td>
                    </tr>
                    <tr>
                        <td>FMT Values for RTPFB Payload Types</td>
                        <td>RFC 4585 Specification Required (Expert: Magnus Westerlund, Roni Even)</td>
                    </tr>
                    <tr>
                        <td>RAMS Response Code Space Registry</td>
                        <td>RFC 6285 1xx: Informational. 2xx: Success. 3xx: Redirection. 4xx: RTP Receiver (RTP_Rx)
                            Error. 5xx: Burst/Retransmission Source (BRS) Error. Specification Required (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RAMS TLV Space Registry</td>
                        <td>RFC 6285 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RTCP Control Packet Types (PT)</td>
                        <td>RFC 5761, RFC 3550 1-191: Specification Required or Expert Review. 194-199: Specification
                            Required or Expert Review. 200-223: Specification Required or Expert Review. 224-254:
                            Specification Required or Expert Review. (Expert: Magnus Westerlund)
                        </td>
                    </tr>
                    <tr>
                        <td>RTP Compact Header Extensions</td>
                        <td>RFC 8285 Expert Review (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>RTP Payload Format Media Types</td>
                        <td>RFC 4855, RFC 9751 Registry closed</td>
                    </tr>
                    <tr>
                        <td>RTP Payload Types (PT) for standard audio and video encodings - Closed</td>
                        <td>RFC 3551 Registry closed; see RFC 3551, Section 3</td>
                    </tr>
                    <tr>
                        <td>RTP Profile Names</td>
                        <td>RFC 3550 Standards Action or Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RTP SDES Compact Header Extensions</td>
                        <td>RFC 7941 Expert Review (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>RTP SDES Item Types</td>
                        <td>RFC 3550 Specification Required or Expert Review (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>SFMT Values for RAMS Messages</td>
                        <td>RFC 6285 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SMT Values for TOKEN Packet Type Registry</td>
                        <td>RFC 6284 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Sub-Report Block Type (SRBT) Values for the RSI Packet</td>
                        <td>RFC 5760 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Realm Specific IP (RSIP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RSIP Address Types</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Error Codes</td>
                        <td>RFC 3103 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RSIP Local Flow Policies</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Message Types</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Methods</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Parameters</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Remote Flow Policies</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Tunnel Types</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RSIP Vendor IDs</td>
                        <td>RFC 3103 0: Reserved. 1-240: Specification Required. 241-255: Private Use. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Realtime Traffic Flow Measurement (RTFM)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Pattern Matching Engine (PME) Opcodes</td>
                        <td>RFC 2722 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RTFM Attributes</td>
                        <td>RFC 2722 0-511: IETF Review. 512-1023: First Come First Served. 1024 and above: Reserved for
                            Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Registrar IDs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Registrar IDs</td>
                        <td> Assigned by ICANN</td>
                    </tr>
                    <tr>
                        <td>Registration Data Access Protocol (RDAP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bootstrap Service Registry for AS Number Space</td>
                        <td>RFC 9224</td>
                    </tr>
                    <tr>
                        <td>Bootstrap Service Registry for Domain Name Space</td>
                        <td>RFC 9224</td>
                    </tr>
                    <tr>
                        <td>Bootstrap Service Registry for IPv4 Address Space</td>
                        <td>RFC 9224</td>
                    </tr>
                    <tr>
                        <td>Bootstrap Service Registry for IPv6 Address Space</td>
                        <td>RFC 9224</td>
                    </tr>
                    <tr>
                        <td>Bootstrap Service Registry for Provider Object Tags</td>
                        <td>RFC 8521</td>
                    </tr>
                    <tr>
                        <td>RDAP Extensions</td>
                        <td>RFC 7480 Specification Required (Expert: Andy Newton, Scott Hollenbeck)</td>
                    </tr>
                    <tr>
                        <td>RDAP JSON Values</td>
                        <td>RFC 9083, RFC 9537 Expert Review (Expert: Andy Newton, Scott Hollenbeck)</td>
                    </tr>
                    <tr>
                        <td>RDAP Provider Object Tags</td>
                        <td>RFC 8521 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>RDAP Reverse Search</td>
                        <td>RFC 9536 Specification Required (Expert: Andy Newton, Scott Hollenbeck)</td>
                    </tr>
                    <tr>
                        <td>RDAP Reverse Search Mapping</td>
                        <td>RFC 9536 Specification Required (Expert: Andy Newton, Scott Hollenbeck)</td>
                    </tr>
                    <tr>
                        <td>Registration Data Access Protocol (RDAP) Query Purpose Values</td>
                        <td>RFC 9560 Specification Required (Expert: Scott Hollenbeck, Andrew Newton, Mario Loffredo,
                            Pawel Kowalik)
                        </td>
                    </tr>
                    <tr>
                        <td>Registry for the Session Initiation Protocol (SIP) NAPTR Resource Record Services Field</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SIP Table of Mappings From Service Field Values to Transport Protocols</td>
                        <td>RFC 3263 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Relay User Equipment (RUE)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RUE Provider List</td>
                        <td>RFC 9248 Expert Review (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>Reliable Multicast Transport (RMT) FEC Encoding IDs and FEC Instance IDs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>FEC Framework (FECFRAME) FEC Encoding IDs</td>
                        <td>RFC 6363 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ietf:rmt:fec:encoding - Fully-Specified FEC schemes (0-127)</td>
                        <td>RFC 5052 IETF Review</td>
                    </tr>
                    <tr>
                        <td>ietf:rmt:fec:encoding - Under-Specified FEC schemes (128-255)</td>
                        <td>RFC 5052 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Reliable Server Pooling (RSerPool) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Aggregate Server Access Protocol (ASAP) Message Types</td>
                        <td>RFC 5352 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Endpoint Handlespace Redundancy Protocol (ENRP) Message Types</td>
                        <td>RFC 5353 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RSerPool Error Causes</td>
                        <td>RFC 5354 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RSerPool Parameter Types</td>
                        <td>RFC 5354 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RSerPool Policy Types</td>
                        <td>RFC 5356 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Update Action Types</td>
                        <td>RFC 5353 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Remote Attestation Procedures (RATS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Entity Attestation Token (EAT) Intended Uses</td>
                        <td>Internet Draft draft-ietf-rats-eat-30 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Remote Direct Data Placement</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RDMA-CM Private Data Identifiers</td>
                        <td>RFC 8797 Specification Required (Expert: Chuck Lever (primary), Tom Talpey (secondary))</td>
                    </tr>
                    <tr>
                        <td>Remote Direct Data Placement (RDDP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>DDP Errors</td>
                        <td>RFC 6580 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPA Errors</td>
                        <td>RFC 6580 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RDMAP DDP Untagged Queue Numbers</td>
                        <td>RFC 7306 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RDMAP Errors</td>
                        <td>RFC 6580 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RDMAP Message Atomic Operation Subcodes</td>
                        <td>RFC 7306 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RDMAP Message Operation Codes</td>
                        <td>RFC 6580 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SCTP Function Codes for DDP Stream Session Control</td>
                        <td>RFC 6580 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Remote Framebuffer (RFB)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Remote Framebuffer Client-to-Server Message Types</td>
                        <td>RFC 6143 Expert Review (Expert: Tristan Richardson)</td>
                    </tr>
                    <tr>
                        <td>Remote Framebuffer Encoding Types</td>
                        <td>RFC 6143 Expert Review (Expert: Tristan Richardson, John Levine)</td>
                    </tr>
                    <tr>
                        <td>Remote Framebuffer Security Types</td>
                        <td>RFC 6143 Expert Review (Expert: Tristan Richardson)</td>
                    </tr>
                    <tr>
                        <td>Remote Framebuffer Server-to-Client Message Types</td>
                        <td>RFC 6143 Expert Review (Expert: Tristan Richardson)</td>
                    </tr>
                    <tr>
                        <td>Remote Procedure Call (RPC)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Network Identifier (r_netid)</td>
                        <td>RFC 7530 Informational RFC</td>
                    </tr>
                    <tr>
                        <td>ONC RPC Netids (First Come First Served)</td>
                        <td>RFC 5665 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>ONC RPC Netids (Standards Action)</td>
                        <td>RFC 5665 Standards Action</td>
                    </tr>
                    <tr>
                        <td>ONC RPC Uaddr Format Registry</td>
                        <td>RFC 5665 First Come First Served or Standards Action</td>
                    </tr>
                    <tr>
                        <td>Protocol family (r_nc_protofmly)</td>
                        <td>RFC 1833 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Protocol name (r_nc_proto)</td>
                        <td>RFC 1833 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RPC Authentication Flavor Numbers</td>
                        <td>RFC 5531 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>RPC Authentication Status Numbers</td>
                        <td>RFC 5531 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>RPCSEC_GSS Structured Privilege Names Registry</td>
                        <td>RFC 7861 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Transport semantics (r_nc_semantics)</td>
                        <td>RFC 1833 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Remote Procedure Call (RPC) Program Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RPC Program Numbers</td>
                        <td>RFC 5531 Up to 100 numbers: First Come First Served. 101-1000 numbers: Specification
                            Required. More than 1000 numbers: IESG Approval. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Reputation Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Reputation Applications</td>
                        <td>RFC 7071 IETF Review or Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Reserved IPv6 Interface Identifiers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Reserved IPv6 Interface Identifiers</td>
                        <td>RFC 5453, RFC 7136 Standards Action</td>
                    </tr>
                    <tr>
                        <td>REsource LOcation And Discovery (RELOAD)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CoAP Usage for RELOAD Access Control Policy</td>
                        <td>RFC 7650 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RELOAD Access Control Policies</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Application-ID</td>
                        <td>RFC 6940 1-32767: Standards Action. 32768-61440: Expert Review. (Expert: Marc Petit-Huguenin
                            (primary), Cullen Jennings (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>RELOAD Data Kind-ID</td>
                        <td>RFC 6940 0x00000001-0x7fffffff: Standards Action. 0x8000000-0xf0000000: Expert Review.
                            (Expert: Marc Petit-Huguenin (primary), Cullen Jennings (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>RELOAD Data Model</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Diagnostic Kind ID</td>
                        <td>RFC 7851 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Diagnostics Flag</td>
                        <td>RFC 7851 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Error Codes</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Extensions Registry</td>
                        <td>RFC 6940 Specification Required (Expert: Marc Petit-Huguenin (primary), Cullen Jennings
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>RELOAD Forwarding Option Registry</td>
                        <td>RFC 6940 01-127: Standards Action. 128-254: Specification Required. (Expert: Marc
                            Petit-Huguenin (primary), Cullen Jennings (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>RELOAD Message Codes</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Overlay Algorithm Types</td>
                        <td>RFC 6940 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RELOAD Overlay Link Protocol Registry</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Overlay Link Registry</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Probe Information Type Registry</td>
                        <td>RFC 6940 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RELOAD Services Registry</td>
                        <td>RFC 7374 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Resource Public Key Infrastructure (RPKI)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BGPsec Algorithm Suites</td>
                        <td>RFC 8608 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGPsec Capability</td>
                        <td>RFC 8205 Standards Action</td>
                    </tr>
                    <tr>
                        <td>BGPsec_Path Flags</td>
                        <td>RFC 8205 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RPKI Repository Name Schemes</td>
                        <td>RFC 6481 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RPKI Signed Objects</td>
                        <td>RFC 6488 Standards Action</td>
                    </tr>
                    <tr>
                        <td>rpki-rtr-afi</td>
                        <td>Internet Draft draft-ietf-sidrops-8210bis-10 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>rpki-rtr-error</td>
                        <td>RFC 6810 Expert Review (Expert: Keyur Patel (Primary), John G. Scudder (Secondary))</td>
                    </tr>
                    <tr>
                        <td>rpki-rtr-pdu</td>
                        <td>RFC 6810 RFC Required (Standards Track or Experimental)</td>
                    </tr>
                    <tr>
                        <td>Resource Reservation Protocol (RSVP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Call Attributes Flags</td>
                        <td>RFC 6001 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Call Attributes TLV</td>
                        <td>RFC 6001 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Capability Object values</td>
                        <td>RFC 5063 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Class Names, Class Numbers, and Class Types</td>
                        <td>RFC 3936 0-119: Standards Action. 120-123: Expert Review. 124-127: Reserved for Private Use.
                            128-183: Standards Action. 184-187: Expert Review. 188-191: Reserved for Private Use.
                            192-247: Standards Action. 248-251: Expert Review. 252-255: Reserved for Private Use.
                            (Expert: Dimitri Papadimitriou)
                        </td>
                    </tr>
                    <tr>
                        <td>CONDITIONS Object Flags</td>
                        <td>Internet Draft draft-ietf-mpls-ri-rsvp-frr-22 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Error Codes and Globally-Defined Error Value Sub-Codes</td>
                        <td>RFC 3936 0-239: Standards Action. 240-251: Expert Review. 252-255: Reserved for Private Use.
                            (Expert: Dimitri Papadimitriou)
                        </td>
                    </tr>
                    <tr>
                        <td>Interface Id Error specification</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Message Types</td>
                        <td>RFC 3936 0-239: Standards Action. 240-255: Expert Review. (Expert: Dimitri Papadimitriou)
                        </td>
                    </tr>
                    <tr>
                        <td>VCAT Elementary Signal Registry</td>
                        <td>RFC 6344 IETF Review</td>
                    </tr>
                    <tr>
                        <td>VCAT VCG Operation Actions</td>
                        <td>RFC 6344 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Virtual Destination Ports</td>
                        <td>RFC 2207 0: Reserved. 1-10: Reserved. 11-8191: Not Defined. 8192-65535: Dynamic.</td>
                    </tr>
                    <tr>
                        <td>Resource Reservation Protocol-Traffic Engineering (RSVP-TE) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Attribute Flags</td>
                        <td>RFC 5420, RFC 7570 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Attributes TLV Space</td>
                        <td>RFC 5420, RFC 7570 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Record Route Object Sub-object Flags</td>
                        <td>RFC 3209 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RTM_SET Object Sub-Object Types</td>
                        <td>RFC 8169 0-127: IETF Review. 128-191: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>Session Attribute Object Flags</td>
                        <td>RFC 4859 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Sub-TLV Types for WSON Processing Hop Attribute TLV</td>
                        <td>RFC 7689 Standards Action or Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Values for Wavelength Assignment Method field in WavelengthSelection Sub-TLV</td>
                        <td>RFC 7689 Standards Action or Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Resource-Oriented Lightweight Information Exchange (ROLIE) URN Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ROLIE Information Types</td>
                        <td>RFC 8322 Specification Required (Expert: David Waltermire, Stephen Banghart)</td>
                    </tr>
                    <tr>
                        <td>ROLIE URN Parameters</td>
                        <td>RFC 8322 Specification Required (Expert: David Waltermire, Stephen Banghart)</td>
                    </tr>
                    <tr>
                        <td>RESTCONF Capability URNs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RESTCONF Capability URNs</td>
                        <td>RFC 8040 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RObust Header Compression (ROHC) Profile Identifiers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Profile Identifiers</td>
                        <td>RFC 5795 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RObust Header Compression (ROHC) Suboption Identifier Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ROHC Configuration Option Suboption Identifier Values</td>
                        <td>RFC 3241 0-127: Standards Action. 128-254: Specification Required. (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Route Distinguisher Type Field</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Route Distinguisher Type Field</td>
                        <td>RFC 4364 0-32767: First Come First Served. 32768-65535: IETF Review.</td>
                    </tr>
                    <tr>
                        <td>Routing in Fat Trees (RIFT)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RIFT Security Algorithms</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>RIFTCommonAddressFamilyType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonHierarchyIndications</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonIEEE8021ASTimeStampType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonIPAddressType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonIPPrefixType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonIPv4PrefixType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonIPv6PrefixType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonKVTypes</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonPrefixSequenceType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonRouteType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonTieDirectionType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTCommonTIETypeType</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingCommunity</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingKeyValueTIEElement</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingKeyValueTIEElementContent</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingLIEPacket</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingLinkCapabilities</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingLinkIDPair</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingNeighbor</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingNodeCapabilities</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingNodeFlags</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingNodeNeighborsTIEElement</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingNodeTIEElement</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingPacketContent</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingPacketHeader</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingPrefixAttributes</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingPrefixTIEElement</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingProtocolPacket</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIDEPacket</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIEElement</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIEHeader</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIEHeaderWithLifeTime</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIEID</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIEPacket</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTEncodingTIREPacket</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>RIFTVersions</td>
                        <td>Internet Draft draft-ietf-rift-rift-24 Minor change (per RFC-ietf-rift-rift-24, Section 7):
                            Expert Review. All other allocations: Specification Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Routing Information Protocol (RIP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RIP Address Family Identifiers</td>
                        <td>RFC 1058 Not defined</td>
                    </tr>
                    <tr>
                        <td>RIP Authentication Type</td>
                        <td>RFC 1388 Not defined</td>
                    </tr>
                    <tr>
                        <td>RIP Commands</td>
                        <td>RFC 1723 Not defined</td>
                    </tr>
                    <tr>
                        <td>RIP Update Headers</td>
                        <td>RFC 1058 Not Defined</td>
                    </tr>
                    <tr>
                        <td>RIPNG Commands</td>
                        <td>RFC 2080 Not defined</td>
                    </tr>
                    <tr>
                        <td>RIPNG Update Headers</td>
                        <td>RFC 2080 Not defined</td>
                    </tr>
                    <tr>
                        <td>Routing Protocol for Low Power and Lossy Networks (RPL)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Consistency Check (CC) Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Destination Advertisement Object (DAO) Acknowledgment Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Destination Advertisement Object (DAO) Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Destination Cleanup Object (DCO) Flags</td>
                        <td>RFC 9009 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Destination Cleanup Object Acknowledgment (DCO) Acknowledgment Flags</td>
                        <td>RFC 9009 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DODAG Configuration Option Flags for MOP 0..6</td>
                        <td>RFC 6550, RFC 9008 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DODAG Information Object (DIO) Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>DODAG Informational Solicitation (DIS) Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Mode of Operation</td>
                        <td>RFC 6550, RFC 9008 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Objective Code Point (OCP)</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PDR-ACK Acceptance Status Values</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>PDR-ACK Flags</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>PDR-ACK Rejection Status Values</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Per-KIM Security Levels</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Projected DAO Request (PDR) Flags</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RPL Control Codes</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RPL Control Message Options</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RPL Non-Rejection Status</td>
                        <td>RFC 9010 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RPL Option Flags</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RPL Rejection Status</td>
                        <td>RFC 9010 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RPL Target Option Flags</td>
                        <td>RFC 6550, RFC 9010 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Security Section Algorithm</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Security Section Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Sibling Information Option (SIO) Flags</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Solicited Information Option Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Transit Information Option Flags</td>
                        <td>RFC 6550 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Via Information Options (VIO) Flags</td>
                        <td>Internet Draft draft-ietf-roll-dao-projection-40 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Routing Protocol for Low Power and Lossy Networks (RPL) Routing Metric/Constraint</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Hop-Count Object Flag field</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Node Type Field</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>NSA Object Flag field</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Routing Metric/Constraint Common Header A field</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Routing Metric/Constraint Common Header Flag field</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Routing Metric/Constraint TLVs</td>
                        <td>RFC 6551 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Routing Metric/Constraint Type</td>
                        <td>RFC 6551 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RSVP-TE OAM Configuration Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>BFD Configuration Sub-TLV Types</td>
                        <td>RFC 7487 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Ethernet Sub-TLVs Sub-Registry</td>
                        <td>RFC 7369 IETF Review</td>
                    </tr>
                    <tr>
                        <td>MPLS OAM Configuration Sub-TLV Types</td>
                        <td>RFC 7487 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OAM Function Flags Sub-Registry</td>
                        <td>RFC 7260 IETF Review</td>
                    </tr>
                    <tr>
                        <td>OAM Sub-TLVs</td>
                        <td>RFC 7260 0-31: IETF Review. 32-65533: IETF Review. 65534-65535: Reserved for Experimental
                            Use.
                        </td>
                    </tr>
                    <tr>
                        <td>OAM Types</td>
                        <td>RFC 7260 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Performance Monitoring Sub-TLV Types</td>
                        <td>RFC 7487 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RTP Control Protocol Extended Reports (RTCP XR) Block Type Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IDMS XR Block SPST Registry</td>
                        <td>RFC 7272 Specification Required (Expert: Roni Even)</td>
                    </tr>
                    <tr>
                        <td>RTCP XR Block Type</td>
                        <td>RFC 3611 Specification Required (Expert: Joerg Ott)</td>
                    </tr>
                    <tr>
                        <td>RTCP XR MOS Metric block - multimedia application Calculation Algorithm</td>
                        <td>RFC 7266 Specification Required (Expert: Roni Even)</td>
                    </tr>
                    <tr>
                        <td>RTCP XR PDV block - PDV type</td>
                        <td>RFC 6798 Specification Required (Expert: Roni Even)</td>
                    </tr>
                    <tr>
                        <td>RTP Control Protocol Extended Reports (RTCP XR) Session Description Protocol (SDP)
                            Parameters Registry
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>RTCP XR SDP Parameters</td>
                        <td>RFC 3611 Specification Required (Expert: Joerg Ott)</td>
                    </tr>
                    <tr>
                        <td> S</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Scalable Adaptive Multicast (SAM) Baseline</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SAM ALM Algorithm IDs</td>
                        <td>RFC 7019 Expert Review (Expert: Marc Petit-Huguenin (primary), Thomas Schmidt, John
                            Buford)
                        </td>
                    </tr>
                    <tr>
                        <td>SAM ALM Error Codes</td>
                        <td>RFC 7019 Expert Review (Expert: Marc Petit-Huguenin (primary), Thomas Schmidt, John
                            Buford)
                        </td>
                    </tr>
                    <tr>
                        <td>SAM ALM Message Codes</td>
                        <td>RFC 7019 Expert Review (Expert: Marc Petit-Huguenin (primary), Thomas Schmidt, John
                            Buford)
                        </td>
                    </tr>
                    <tr>
                        <td>Secret Key Transaction Authentication for DNS (TSIG) Algorithm Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TSIG Algorithm Names</td>
                        <td>RFC 8945 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Secure Shell (SSH) Protocol Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Authentication Method Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Channel Connection Failure Reason Codes and Descriptions</td>
                        <td>RFC 4250, RFC 9519 0x00000001-0xFDFFFFFF: Expert Review. 0xFE000000-0xFFFFFFFF: Reserved for
                            Private Use. (Expert: Peter Yee, Markus Stenberg)
                        </td>
                    </tr>
                    <tr>
                        <td>Compression Algorithm Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Connection Protocol Channel Request Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Connection Protocol Channel Types</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Connection Protocol Global Request Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Connection Protocol Subsystem Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Disconnection Messages Reason Codes and Descriptions</td>
                        <td>RFC 4250, RFC 9519 0x00000001-0xFDFFFFFF: Expert Review. 0xFE000000-0xFFFFFFFF: Reserved for
                            Private Use. (Expert: Peter Yee, Markus Stenberg)
                        </td>
                    </tr>
                    <tr>
                        <td>Encryption Algorithm Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Extended Channel Data Transfer data_type_code and Data</td>
                        <td>RFC 4250, RFC 9519 0x00000001-0xFDFFFFFF: Expert Review. 0xFE000000-0xFFFFFFFF: Reserved for
                            Private Use. (Expert: Peter Yee, Markus Stenberg)
                        </td>
                    </tr>
                    <tr>
                        <td>Extension Names</td>
                        <td>RFC 8308, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Key Exchange Method Names</td>
                        <td>RFC 4250, RFC 9142, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>MAC Algorithm Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Message Numbers</td>
                        <td>RFC 4250 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Pseudo-Terminal Encoded Terminal Modes</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Public Key Algorithm Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Publickey Subsystem Attributes</td>
                        <td>RFC 4819, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Publickey Subsystem Request Names</td>
                        <td>RFC 4819, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Publickey Subsystem Response Names</td>
                        <td>RFC 4819, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Publickey Subsystem Status Codes</td>
                        <td>RFC 4819 0-191: Standards Action. 192-255: Reserved for Private Use.</td>
                    </tr>
                    <tr>
                        <td>Service Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Signal Names</td>
                        <td>RFC 4250, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>SSH Public-Key File Header Tags</td>
                        <td>RFC 4716, RFC 9519 Expert Review (Expert: Peter Yee, Markus Stenberg)</td>
                    </tr>
                    <tr>
                        <td>Security Event Token (SET)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Security Event Token Error Codes</td>
                        <td>RFC 8935 Specification Required (Expert: Mike Jones, John Bradley)</td>
                    </tr>
                    <tr>
                        <td>Subject Identifier Formats</td>
                        <td>RFC 9493 Specification Required (Expert: Prachi Jain)</td>
                    </tr>
                    <tr>
                        <td>Security External Enumeration Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Security External Enumeration Registry</td>
                        <td>RFC 7495 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Security Label Format Selection</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Security Label Format Selection Registry</td>
                        <td>RFC 7569 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Security Parameters Index (SPI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Security Parameters Index (SPI)</td>
                        <td>RFC 1826, RFC 2402, RFC 2406, RFC 4302, RFC 4303 RFC Required</td>
                    </tr>
                    <tr>
                        <td>security.txt Fields</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>security.txt Fields</td>
                        <td>RFC 9116 Expert Review (Expert: Yakov Shafranovich, Edwin Foudil)</td>
                    </tr>
                    <tr>
                        <td>Segment Routing</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Segment Types</td>
                        <td>RFC 9256 Specification Required (Expert: Ketan Talaulikar, Matthew Bocci)</td>
                    </tr>
                    <tr>
                        <td>SR Policy ENLP Values</td>
                        <td>Internet Draft draft-ietf-idr-sr-policy-safi-13 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SR Policy Protocol Origin</td>
                        <td>Internet Draft draft-ietf-idr-bgp-ls-sr-policy-17 1-250: Expert Review. 251-255: Private
                            Use. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>SRv6 Endpoint Behaviors</td>
                        <td>RFC 8986 0: Reserved. 1-32767: First Come First Served. 32768-34815: Private Use.
                            34816-65534: Reserved. 65535: Reserved.
                        </td>
                    </tr>
                    <tr>
                        <td>Selective P-Multicast Service Interface (S-PMSI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>S-PMSI Join Message Type Field</td>
                        <td>RFC 6513 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Sender Policy Framework (SPF) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Modifier Names</td>
                        <td>RFC 6652 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Sensor Measurement Lists (SenML)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Secondary Units</td>
                        <td>RFC 8798 Expert Review (Expert: Ari Keränen)</td>
                    </tr>
                    <tr>
                        <td>SenML Features</td>
                        <td>RFC 9100 Specification Required (Expert: Ari Keränen (primary), Carsten Bormann
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>SenML Labels</td>
                        <td>RFC 8428 Expert Review (Expert: Ari Keränen)</td>
                    </tr>
                    <tr>
                        <td>SenML Units</td>
                        <td>RFC 8428 Expert Review (Expert: Ari Keränen)</td>
                    </tr>
                    <tr>
                        <td>Server Cache Synchronization Protocol (SCSP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Protocol IDs</td>
                        <td>RFC 2334 RFC, product of standards body, or Expert Review</td>
                    </tr>
                    <tr>
                        <td>Service Function Chaining (SFC) Active Operations, Administration, and Maintenance (OAM)
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SF Identifier Types</td>
                        <td>RFC 9516 0-191: IETF Review. 192-251: First Come First Served. 252-254: Private Use.</td>
                    </tr>
                    <tr>
                        <td>SFC Active OAM Message Types</td>
                        <td>RFC 9516 0-31: IETF Review. 32-62: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>SFC Active OAM TLV Types</td>
                        <td>RFC 9516 0-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>SFC Echo Reply Modes</td>
                        <td>RFC 9516 0-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>SFC Echo Request Flags</td>
                        <td>RFC 9516 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SFC Echo Return Codes</td>
                        <td>RFC 9516 0-191: IETF Review. 192-251: First Come First Served. 252-254: Private Use.</td>
                    </tr>
                    <tr>
                        <td>SFC Echo Types</td>
                        <td>RFC 9516 0-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Service Function Chaining Service Function Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Service Function Chaining Service Function Types</td>
                        <td>RFC 9015 1-31: Standards Action. 32-64495: First Come First Served. 64496-65534: Private
                            Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol (SLP) Remote Service Discovery</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SLP Remote Service Discovery</td>
                        <td>RFC 3832 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol Version 2 (SLPv2) Cryptographic BSD Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic BSD Codes</td>
                        <td>RFC 2608 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol Version 2 (SLPv2) Registrations</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol, Version 2 (SLPv2) Templates</td>
                        <td>RFC 2609 Expert Review (Expert: Erik Guttman)</td>
                    </tr>
                    <tr>
                        <td>SLPv2 Extension IDs</td>
                        <td>RFC 2608 Expert Review (Expert: Erik Guttman)</td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol, Version 2 (SLPv2) Error Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Error Numbers</td>
                        <td>RFC 2608 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Service Location Protocol, Version 2 (SLPv2) Function IDs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Function IDs</td>
                        <td>RFC 2608 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Service Names and Transport Protocol Port Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Service Name and Transport Protocol Port Number Registry</td>
                        <td>RFC 6335 (Expert: TCP/UDP: Joe Touch; Eliot Lear, Kumiko Ono, Wes Eddy, Brian Trammell, Jana
                            Iyengar, and Michael ScharfSCTP: Michael TuexenDCCP: Eddie Kohler and Yoshifumi Nishida)
                        </td>
                    </tr>
                    <tr>
                        <td>Session Description Protocol (SDP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>&quot;ack&quot; and &quot;nack&quot; Attribute Values</td>
                        <td>RFC 4585, RFC 8859 First Come First Served with a permanent, stable, and publically
                            accessible document
                        </td>
                    </tr>
                    <tr>
                        <td>addrtype</td>
                        <td>RFC 8866 RFC Required</td>
                    </tr>
                    <tr>
                        <td>association-usage Name Registry</td>
                        <td>RFC 8841 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>attribute-name (formerly &quot;att-field&quot;)</td>
                        <td>RFC 8866, RFC 8864, RFC 8859 Specification Required (Expert: Flemming Andreasen)</td>
                    </tr>
                    <tr>
                        <td>bwtype</td>
                        <td>RFC 8866, RFC 8859 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Candidate Attribute Extensions</td>
                        <td>RFC 8839 Specification Required (Expert: Christer Holmberg)</td>
                    </tr>
                    <tr>
                        <td>Codec Control Messages</td>
                        <td>RFC 5104, RFC 8859 Specification Required (Expert: Stephan Wenger)</td>
                    </tr>
                    <tr>
                        <td>content SDP Parameters</td>
                        <td>RFC 4796, RFC 8859 Specification Required (Expert: Christer Holmberg)</td>
                    </tr>
                    <tr>
                        <td>&quot;cs-correlation&quot; Attribute Values</td>
                        <td>RFC 7195, RFC 8859 Specification Required (Expert: Bo Burman)</td>
                    </tr>
                    <tr>
                        <td>&quot;depend&quot; SDP Attribute Values</td>
                        <td>RFC 5583, RFC 8859 Specification Required (Expert: Stephan Wenger)</td>
                    </tr>
                    <tr>
                        <td>enckey</td>
                        <td>RFC 8866 REGISTRY OBSOLETED - No further registrations accepted</td>
                    </tr>
                    <tr>
                        <td>Key Methods</td>
                        <td>RFC 4568 Standards Action</td>
                    </tr>
                    <tr>
                        <td>media</td>
                        <td>RFC 8866 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Media Clock Source Parameters</td>
                        <td>RFC 7273, RFC 8859 Specification Required (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>Media Stream Transports</td>
                        <td>RFC 4568 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Multiplexing Categories</td>
                        <td>RFC 8859 Standards Action</td>
                    </tr>
                    <tr>
                        <td>nettype</td>
                        <td>RFC 8866 RFC Required</td>
                    </tr>
                    <tr>
                        <td>proto</td>
                        <td>RFC 8866 RFC Required</td>
                    </tr>
                    <tr>
                        <td>QoS Mechanism Tokens</td>
                        <td>RFC 5432, RFC 8859 Specification Required (Expert: Christer Holmberg)</td>
                    </tr>
                    <tr>
                        <td>RID Attribute Parameters</td>
                        <td>RFC 8851 Specification Required (Expert: Adam Roach)</td>
                    </tr>
                    <tr>
                        <td>&quot;rtcp-fb&quot; Attribute Values</td>
                        <td>RFC 4585, RFC 8859 First Come First Served with permanent, stable, and publically accessible
                            document.
                        </td>
                    </tr>
                    <tr>
                        <td>SDP Capability Negotiation Configuration Parameters Registry</td>
                        <td>RFC 5939, RFC 6871 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SDP Capability Negotiation Option Tags</td>
                        <td>RFC 5939, RFC 8859 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SDP/RTSP key management protocol identifiers</td>
                        <td>RFC 4567, RFC 8859 Specification Required (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>Semantics for the &quot;group&quot; SDP Attribute</td>
                        <td>RFC 5888, RFC 8859 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Semantics for the &quot;ssrc-group&quot; SDP Attribute</td>
                        <td>RFC 5576, RFC 8859 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SRTP Crypto Suite Registrations</td>
                        <td>RFC 4568 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SRTP Session Parameters</td>
                        <td>RFC 4568 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Timestamp Reference Clock Source Parameters</td>
                        <td>RFC 7273, RFC 8859 Specification Required (Expert: Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>Session Initiation Protocol (SIP) Common Log Format (CLF) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SIP CLF Transport Flag Values</td>
                        <td>RFC 6873 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SIP CLF Version Values</td>
                        <td>RFC 6873 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Session Initiation Protocol (SIP) Event Types Namespace</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Event packages and Event template-packages</td>
                        <td>RFC 3427, RFC 6665, RFC 5727 event template packages: Standards Action. event packages: RFC
                            Required with Designated Expert. (Expert: Adam Roach)
                        </td>
                    </tr>
                    <tr>
                        <td>Session Initiation Protocol (SIP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Compression Schemes</td>
                        <td>RFC 3486 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Geolocation-Error Codes</td>
                        <td>RFC 6442 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Global Feature-Capability Indicator Registration Tree</td>
                        <td>RFC 6809 Specification Required (Expert: Paul Kyzivat (primary), Christer Holmberg
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Header Field Parameters and Parameter Values</td>
                        <td>RFC 3968 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Header Fields</td>
                        <td>RFC 3261, RFC 3427, RFC 5727 Informational Header: Expert Review. Standard Header: Standards
                            Action. (Expert: Adam Roach)
                        </td>
                    </tr>
                    <tr>
                        <td>Identity Parameters</td>
                        <td>RFC 8224 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Identity-Info Algorithm Parameter Values</td>
                        <td>RFC 8224 Deprecated and closed per RFC8224</td>
                    </tr>
                    <tr>
                        <td>Info Packages Registry</td>
                        <td>RFC 6086 Specification Required (Expert: Adam Roach)</td>
                    </tr>
                    <tr>
                        <td>Methods and Response Codes</td>
                        <td>RFC 3261, RFC 5727 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Option Tags</td>
                        <td>RFC 3261, RFC 5727 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Precondition Types Used with SIP</td>
                        <td>RFC 4032, RFC 3312 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Preemption Namespaces</td>
                        <td>RFC 4411 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Priority Header Field Values</td>
                        <td>RFC 6878 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Proxy-Feature Feature-Capability Indicator Trees</td>
                        <td>RFC 6809 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Push Notification Service (PNS)</td>
                        <td>RFC 8599 Specification Required (Expert: Christer Holmberg)</td>
                    </tr>
                    <tr>
                        <td>Reason Codes</td>
                        <td>RFC 6665 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Reason Protocols</td>
                        <td>RFC 3326 Specification Required (Expert: Christer Holmberg)</td>
                    </tr>
                    <tr>
                        <td>Resource-Priority Namespaces</td>
                        <td>RFC 4412, RFC 7134 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Resource-Priority Priority-values</td>
                        <td>RFC 4412, RFC 7134 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Response Codes</td>
                        <td>RFC 3261 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Security Mechanism Names</td>
                        <td>RFC 3329 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Service-ID/Application-ID Labels</td>
                        <td>RFC 6050 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SIP AlertMsg-Error Codes</td>
                        <td>RFC 8876 Specification Required (Expert: Brian Rosen)</td>
                    </tr>
                    <tr>
                        <td>SIP Configuration Profile Types</td>
                        <td>RFC 6080 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SIP Feature-Capability Indicator Registration Tree</td>
                        <td>RFC 6809 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SIP Forum User Agent Configuration Parameters</td>
                        <td>RFC 6011 begins with &#39;sfua-&#39;: RFC Required. all other names: First Come First
                            Served.
                        </td>
                    </tr>
                    <tr>
                        <td>SIP Privacy Header Field Values</td>
                        <td>RFC 3323 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SIP Transport</td>
                        <td>RFC 7118 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SIP/SIPS URI Parameters</td>
                        <td>RFC 3969, RFC 5727 Standards Action</td>
                    </tr>
                    <tr>
                        <td>URI Purposes</td>
                        <td>RFC 4575 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>UUI Content Parameters</td>
                        <td>RFC 7433 Standards Action</td>
                    </tr>
                    <tr>
                        <td>UUI Encoding Parameters</td>
                        <td>RFC 7433 Standards Action</td>
                    </tr>
                    <tr>
                        <td>UUI Packages</td>
                        <td>RFC 7433 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Warning Codes (warn-codes)</td>
                        <td>RFC 3261 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Session Initiation Protocol (SIP) Privacy Header Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SIP Privacy Header Values</td>
                        <td>RFC 3323 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Session Peering Provisioning Framework (SPPF) Organization Identifier Type Namespaces</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SPPF OrgIdType Namespaces</td>
                        <td>RFC 7877 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Session Traversal Utilities for NAT (STUN) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>STUN Attributes</td>
                        <td>RFC 8489 0x0000-0x3FFF: IETF Review. 0x4000-0x7FFF: Expert Review. 0x8000-0xBFFF: IETF
                            Review. 0xC000-0xFFFF: Expert Review. (Expert: Dan Wing)
                        </td>
                    </tr>
                    <tr>
                        <td>STUN Error Codes</td>
                        <td>RFC 8489 IETF Review</td>
                    </tr>
                    <tr>
                        <td>STUN Methods</td>
                        <td>RFC 8489, RFC 7983 0x000-0x07F: IETF Review. 0x080-0x0FF: Expert Review. (Expert: Dan
                            Wing)
                        </td>
                    </tr>
                    <tr>
                        <td>STUN Password Algorithms</td>
                        <td>RFC 8489 0x0000-0x7FFF: IETF Review. 0x8000-0xFFFF: Expert Review. (Expert: Dan Wing)</td>
                    </tr>
                    <tr>
                        <td>STUN Security Features</td>
                        <td>RFC 8489 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Traversal Using Relays around NAT (TURN) Channel Numbers</td>
                        <td>RFC 7983, RFC 8656 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SFrame</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SFrame Cipher Suites</td>
                        <td>RFC 9605 0-0xEFFF: Specification Required. 0-0xEFFF: Standards Action. 0xF000-0xFFFF:
                            Private Use. (Expert: Richard Barnes (primary), Emad Omara (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Shim6 Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Shim6 Error Codes</td>
                        <td>RFC 5533 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Shim6 Options</td>
                        <td>RFC 5533 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Shim6 Types</td>
                        <td>RFC 5533 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Shim6 Verification Methods</td>
                        <td>RFC 5533 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Sieve Extensions</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ManageSieve Capabilities</td>
                        <td>RFC 5804 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>ManageSieve Response Codes</td>
                        <td>RFC 5804 Standards Track or IESG-Approved Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>Notification-Capability Parameters</td>
                        <td>RFC 5435 Vendor-controlled: First Come First Served. IETF-controlled: Specification
                            Required. (Expert: Barry Leiba, Alexey Melnikov)
                        </td>
                    </tr>
                    <tr>
                        <td>Sieve Actions</td>
                        <td>RFC 9122 Expert Review (Expert: Alexey Melnikov, Ken Murchison)</td>
                    </tr>
                    <tr>
                        <td>Sieve Environment Items</td>
                        <td>RFC 5183 name begins with &quot;vnd.&quot;: First Come First Served. standardized
                            (no &quot;vnd.&quot; prefix): Standards track or experimental RFC.
                        </td>
                    </tr>
                    <tr>
                        <td>Sieve Extensions</td>
                        <td>RFC 5228 vendor-controlled (name begins with &quot;vnd.&quot;): First Come First Served.
                            IETF-controlled (no &quot;vnd.&quot; prefix): Standards track or IESG-approved experimental
                            RFC.
                        </td>
                    </tr>
                    <tr>
                        <td>Sieve Notification Mechanisms</td>
                        <td>RFC 5435 Vendor-controlled: First Come First Served. IETF-controlled: Specification
                            Required. (Expert: Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>Sieve URN Parameters</td>
                        <td>RFC 6134 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SIG (0) Algorithm Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SIG (0) Algorithm Numbers</td>
                        <td>RFC 3755 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Signaling Compression (SigComp) Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SigComp_version Namespace</td>
                        <td>RFC 3320 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Signaling User Adaptation Layer Assignments</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Message Classes</td>
                        <td>RFC 3057, RFC 4233 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Parameters</td>
                        <td>RFC 3331, RFC 4233, RFC 4666 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - ASP State Maintenance (ASPSM) Messages (Value 3)</td>
                        <td>RFC 4233, RFC 3331, RFC 4666, RFC 3868, RFC 4129, RFC 3057 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - ASP Traffic Maintenance (ASPTM) Messages (Value 4)</td>
                        <td>RFC 4233, RFC 3331, RFC 4666, RFC 3868, RFC 4129, RFC 3057 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Connection-Oriented Messages (Value 8)</td>
                        <td>RFC 3868 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Connectionless Messages (Value 7)</td>
                        <td>RFC 3868 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - DPNSS/DASS2 Boundary Primitives Transport Messages (Value 13)</td>
                        <td>RFC 4129 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Interface Identifier Management (IIM) Messages (Value 10)</td>
                        <td>RFC 3331 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - M2PA Messages (Value 11)</td>
                        <td>RFC 4165 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Management (MGMT) Message (Value 0)</td>
                        <td>RFC 4233, RFC 3331, RFC 4666, RFC 3868, RFC 4129, RFC 3057 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - MTP2 User Adaptation (MAUP) Messages (Value 6)</td>
                        <td>RFC 3331 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Q.921/Q.931 Boundary Primitives Transport (QPTM) Messages (Value 5)</td>
                        <td>RFC 4233 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Routing Key Management (RKM) Messages (Value 9)</td>
                        <td>RFC 4666 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Security Messages (Value 12)</td>
                        <td>RFC 3788 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - SS7 Signalling Network Management (SSNM) Messages (Value 2)</td>
                        <td>RFC 4666, RFC 3868 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - Transfer Messages (Value 1)</td>
                        <td>RFC 4666 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Message Types - V5 Boundary Primitives Transport (V5PTM) Messages (Value 14)</td>
                        <td>RFC 3807 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Simple Authentication and Security Layer (SASL) Mechanisms</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SASL Mechanisms</td>
                        <td>RFC 4422 First Come First Served for mechanisms.Expert Review with mailing list for family
                            name registrations.For names beginning with &quot;GS2-&quot;, see RFC 5801. For names
                            beginning with &quot;SCRAM-&quot;, see RFC7677. (Expert: Simon Josefsson)
                        </td>
                    </tr>
                    <tr>
                        <td>SASL SCRAM Family Mechanisms</td>
                        <td>RFC 7677 IETF Review with mailing list</td>
                    </tr>
                    <tr>
                        <td>Simple Certificate Enrollment Protocol (SCEP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SCEP CA Capabilities</td>
                        <td>RFC 8894 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SCEP Message Types</td>
                        <td>RFC 8894 Specification Required (Expert: Peter Gutmann)</td>
                    </tr>
                    <tr>
                        <td>Simple Gateway Monitoring Protocol (SGMP) Vendor Specific Codes (Obsolete)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SGMP Vendor Specific Codes (Obsolete)</td>
                        <td>RFC 1028 No further registrations</td>
                    </tr>
                    <tr>
                        <td>Simple Mail Transfer Protocol (SMTP) Enhanced Status Codes Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Class Sub-Codes</td>
                        <td>RFC 5248 Specification Required (Expert: Chris Newman)</td>
                    </tr>
                    <tr>
                        <td>Enumerated Status Codes</td>
                        <td>RFC 5248 Specification Required (Expert: Chris Newman)</td>
                    </tr>
                    <tr>
                        <td>Subject Sub-Codes</td>
                        <td>RFC 5248 Specification Required (Expert: Chris Newman)</td>
                    </tr>
                    <tr>
                        <td>Simple Network Management Protocol (SNMP) Number Spaces</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Message Processing Models</td>
                        <td>RFC 3411 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Security Models</td>
                        <td>RFC 3411 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SNMP Transport Domains</td>
                        <td>RFC 2578, RFC 3417, RFC 5590 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SnmpAuthProtocols</td>
                        <td>RFC 3411 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SnmpEngineID Formats</td>
                        <td>RFC 3411, RFC 5343 1-127: Specification Required. 128-255: Enterprise-specific. (Expert:
                            Unassigned)
                        </td>
                    </tr>
                    <tr>
                        <td>SnmpPrivProtocols</td>
                        <td>RFC 3411 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Simple Two-way Active Measurement Protocol (STAMP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Return Path Control Code Flags</td>
                        <td>RFC 9503 31-12: IETF Review. 11-8: First Come First Served. 7-4: Experimental Use. 3-0:
                            Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>Return Path Sub-TLV Types</td>
                        <td>RFC 9503 1-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>STAMP Return Codes</td>
                        <td>RFC 8972 1-127: IETF Review. 128-239: First Come First Served. 240-249: Experimental Use.
                            250-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>STAMP Sub-TLV Types</td>
                        <td>RFC 8972 1-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>STAMP Synchronization Sources</td>
                        <td>RFC 8972 1-127: IETF Review. 128-239: First Come First Served. 240-249: Experimental Use.
                            250-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>STAMP Timestamping Methods</td>
                        <td>RFC 8972 1-127: IETF Review. 128-239: First Come First Served. 240-249: Experimental Use.
                            250-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>STAMP TLV Flags</td>
                        <td>RFC 8972 IETF Review</td>
                    </tr>
                    <tr>
                        <td>STAMP TLV Types</td>
                        <td>RFC 8972 1-175: IETF Review. 176-239: First Come First Served. 240-251: Experimental Use.
                            252-254: Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>SMTP MTA Strict Transport Security (MTA-STS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>MTA-STS Policy Fields</td>
                        <td>RFC 8461 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MTA-STS TXT Record Fields</td>
                        <td>RFC 8461 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Snoop Datalink Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Datalink Types</td>
                        <td>RFC 3827 0-26: Reserved. 27-4294967295: First Come First Served.</td>
                    </tr>
                    <tr>
                        <td>SOCKS Methods</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SOCKS Method Values</td>
                        <td>RFC 1928 IESG Approval</td>
                    </tr>
                    <tr>
                        <td>Software ID Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Software ID Entity Role Values</td>
                        <td>RFC 9393 0-127: Standards Action with Expert Review. 128-255: Specification Required.
                            (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Software ID Link Ownership Values</td>
                        <td>RFC 9393 0-127: Standards Action with Expert Review. 128-255: Specification Required.
                            (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Software ID Link Relationship Values</td>
                        <td>RFC 9393 0-32767: Standards Action with Expert Review. 32768-65535: Specification Required.
                            (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Software ID Link Use Values</td>
                        <td>RFC 9393 0-127: Standards Action with Expert Review. 128-255: Specification Required.
                            (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Software ID Version Scheme Values</td>
                        <td>RFC 9393 0-16383: Standards Action with Expert Review. 16384-65535: Specification Required.
                            (Expert: Charles Schmidt, Jessica Fitzgerald-McKay, Henk Birkholz)
                        </td>
                    </tr>
                    <tr>
                        <td>Special People Numbers Registry (SPNR)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Special People Numbers Registry</td>
                        <td> Not an IETF Registry. Contact IANA</td>
                    </tr>
                    <tr>
                        <td>Special-Purpose Autonomous System (AS) Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Special-Purpose AS Numbers</td>
                        <td>RFC 7249 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Special-Use Domain Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Special-Use Domain Names</td>
                        <td>RFC 6761 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>STARTTLS Validation Result Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>STARTTLS Validation Result Types</td>
                        <td>RFC 8460 Expert Review (Expert: Alexander Brotman, Daniel Margolis, Viktor Dukhovni)</td>
                    </tr>
                    <tr>
                        <td>Straightforward-NAPTR (S-NAPTR) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>S-NAPTR Application Protocol Tags</td>
                        <td>RFC 3958, RFC 4848 Specification Required in form of an RFC (Expert: Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>S-NAPTR Application Service Tags</td>
                        <td>RFC 3958, RFC 4848 Specification Required in form of an RFC (Expert: Jouni Korhonen)</td>
                    </tr>
                    <tr>
                        <td>Stream Control Transmission Protocol (SCTP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Adaptation Code Points</td>
                        <td>RFC 5061 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Chunk Flags</td>
                        <td>RFC 9260 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Chunk Parameter Types</td>
                        <td>RFC 9260 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Chunk Types</td>
                        <td>RFC 9260 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Error Cause Codes</td>
                        <td>RFC 9260 Specification Required (Expert: Michael Tuexen, Randall Stewart)</td>
                    </tr>
                    <tr>
                        <td>Error Detection Methods</td>
                        <td>RFC 9653 Specification Required (Expert: Michael Tuexen, Magnus Westerlund)</td>
                    </tr>
                    <tr>
                        <td>Hashed Message Authentication Code (HMAC) Identifiers</td>
                        <td>RFC 4895 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SCTP Payload Protocol Identifiers</td>
                        <td>RFC 9260 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Stringprep Profiles</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Stringprep Profiles</td>
                        <td>RFC 3454 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Structure of Management Information (SMI) Numbers (MIB Module Registrations)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Interface Types (ifType)</td>
                        <td>RFC 1213, RFC 2863, RFC 7224, RFC 8892 Expert Review (Expert: Dave Thaler (primary), Dan
                            Romascanu (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Internet-standard MIB - Mail Monitoring</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Internet-standard MIB - Network Services Monitoring</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IPFIX-SELECTOR-MIB Functions</td>
                        <td>RFC 6615 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MIB - Remote Network Monitoring</td>
                        <td>RFC 2819, RFC 3737 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SMI Experimental Codes</td>
                        <td>RFC 4181, RFC 2578, RFC 1155 Experimental RFC</td>
                    </tr>
                    <tr>
                        <td>SMI Features</td>
                        <td>RFC 2506 Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI mail Codes</td>
                        <td> Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI mib-2 snanauMIB Codes</td>
                        <td>RFC 1666 Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI Network Management Directory Codes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SMI Network Management MGMT Codes</td>
                        <td>RFC 2578 Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI pib PIB Codes</td>
                        <td>RFC 3159 Standards Action</td>
                    </tr>
                    <tr>
                        <td>SMI Private Codes</td>
                        <td>RFC 2578 For Private Enterprise Number (PEN) registration (prefix 1.3.6.1.4.1), see .</td>
                    </tr>
                    <tr>
                        <td>SMI Security Codes (including S/MIME, PKIX and LTANS)</td>
                        <td> Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI Security for Cryptographic Algorithms</td>
                        <td>RFC 8411 Specification Required (Expert: Russ Housley (primary), Sean Turner (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>SMI Security for Name System Designators Codes (nametypes)</td>
                        <td> Not Defined ?</td>
                    </tr>
                    <tr>
                        <td>SMI Security Services Codes</td>
                        <td> IETF Review</td>
                    </tr>
                    <tr>
                        <td>SMI SNMPv2 Codes</td>
                        <td>RFC 2578, RFC 1902 IETF Review</td>
                    </tr>
                    <tr>
                        <td>SNMP Management Architecture - Message Processing Subsystem (SnmpMessageProcessingModel)
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SNMP Management Architecture - Security Subsystem (SnmpSecurityModel)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SNMP-TLSTM HashAlgorithms</td>
                        <td>RFC 9456 Expert Review (Expert: Russ Housley, Sean Turner)</td>
                    </tr>
                    <tr>
                        <td>spdActions</td>
                        <td>RFC 4807 Specification Required (Expert: Wes Hardaker)</td>
                    </tr>
                    <tr>
                        <td>Transmission Number Values</td>
                        <td>RFC 1213, RFC 8892 Specification Required (Expert: Dave Thaler (primary), Dan Romascanu
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Tunnel Types (tunnelType)</td>
                        <td>RFC 4087, RFC 8675, RFC 8892 Expert Review (Expert: Dave Thaler (primary), Dan Romascanu
                            (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Structured Data Exchange Format (SDXF)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Compression Methods for SDXF</td>
                        <td>RFC 3072 RFC or equivalent</td>
                    </tr>
                    <tr>
                        <td>Encryption Methods for SDXF</td>
                        <td>RFC 3072 RFC or equivalent</td>
                    </tr>
                    <tr>
                        <td>Subsequent Address Family Identifiers (SAFI) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SAFI Values</td>
                        <td>RFC 4760 1-63: Standards Action. 64-127: First Come First Served. 128-240: Some recognized
                            assignments below, others Reserved. 241-254: Reserved for Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>SUN Remote Procedure Call (RPC) Numbers - Obsolete</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SUN RPC Numbers</td>
                        <td>RFC 1831</td>
                    </tr>
                    <tr>
                        <td>syslog Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>syslog Message Facilities</td>
                        <td>RFC 5424 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog Message Severities</td>
                        <td>RFC 5424 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog Structured Data ID Values</td>
                        <td>RFC 5424 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog Version Values</td>
                        <td>RFC 5424 Standards Action</td>
                    </tr>
                    <tr>
                        <td>syslog-sign Hash Algorithm Values</td>
                        <td>RFC 5848 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog-sign Key Blob Type Values</td>
                        <td>RFC 5848 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog-sign Protocol Version Values</td>
                        <td>RFC 5848 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog-sign SG Field Values</td>
                        <td>RFC 5848 IETF Review</td>
                    </tr>
                    <tr>
                        <td>syslog-sign Signature Scheme Values</td>
                        <td>RFC 5848 IETF Review</td>
                    </tr>
                    <tr>
                        <td>System for Cross-domain Identity Management (SCIM) Schema URIs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SCIM Schema URIs for Data Resources</td>
                        <td>RFC 7643 Expert Review (Expert: Phil Hunt, Morteza Ansari)</td>
                    </tr>
                    <tr>
                        <td>SCIM Server-Related Schema URIs</td>
                        <td>RFC 7643 Expert Review (Expert: Phil Hunt, Morteza Ansari)</td>
                    </tr>
                    <tr>
                        <td> T</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TCP Convert Protocol (Convert) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Convert Errors</td>
                        <td>RFC 8803 1-127: IETF Review. 128-191: Specification Required. 192-255: Private Use. (Expert:
                            Mohamed Boucadair (primary), Olivier Bonaventure (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Convert TLVs</td>
                        <td>RFC 8803 1-127: IETF Review. 128-191: Specification Required. 192-255: Private Use. (Expert:
                            Mohamed Boucadair (primary), Olivier Bonaventure (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>Convert Versions</td>
                        <td>RFC 8803 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Telephony Routing over IP (TRIP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TRIP Address Families</td>
                        <td>RFC 3219 Expert Review (Expert: Jonathan Rosenberg)</td>
                    </tr>
                    <tr>
                        <td>TRIP Application Protocols</td>
                        <td>RFC 3219 Expert Review (Expert: Jonathan Rosenberg)</td>
                    </tr>
                    <tr>
                        <td>TRIP Attributes</td>
                        <td>RFC 3219 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TRIP Capabilities</td>
                        <td>RFC 3219 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TRIP IP Telephony Administrative Domain (ITAD) Numbers</td>
                        <td>RFC 3219, RFC 8602 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Telnet Options</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CAST5_40_CFB64 (Type 8) and CAST128_CFB64 (Type 10) Telnet Encryption Types</td>
                        <td>RFC 2950 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>CAST5_40_OFB64 (Type 9) and CAST128_OFB64 (Type 11) Telnet Encryption Types</td>
                        <td>RFC 2949 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DES3_CFB64 Telnet Encryption Type (Type 3)</td>
                        <td>RFC 2947 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DES3_OFB64 Telnet Encryption Type (Type 4)</td>
                        <td>RFC 2948 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DES_CFB64 Telnet Encryption Type (Type 1)</td>
                        <td>RFC 2952 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DES_OFB64 Telnet Encryption Type (Type 2)</td>
                        <td>RFC 2953 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>DSS Authentication Type (Type 14)</td>
                        <td>RFC 2943 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>KEA_SJ (Type 12) and KEA_SJ_INTEG (Type 13) Authentication Types</td>
                        <td>RFC 2951 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>KERBEROS_V4 Telnet Authentication Type (Type 1)</td>
                        <td>RFC 1411 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>KERBEROS_V5 Telnet Authentication Type (Type 2)</td>
                        <td>RFC 2942 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>SRP Telnet Authentication Type (Type 5)</td>
                        <td>RFC 2944 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Telnet Authentication Types (Option 37)</td>
                        <td>RFC 2941 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Telnet Encryption Types (Option 38)</td>
                        <td>RFC 2946 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Telnet Options</td>
                        <td>RFC 855 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Terminal Type Names</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Terminal Type Names</td>
                        <td>RFC 1091 Not defined?</td>
                    </tr>
                    <tr>
                        <td>The Binary Floor Control Protocol (BFCP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Attributes</td>
                        <td>RFC 8855 Specification Required (Expert: Brian Rosen, Tom Kristensen)</td>
                    </tr>
                    <tr>
                        <td>Error Codes</td>
                        <td>RFC 8855 Specification Required (Expert: Brian Rosen, Tom Kristensen)</td>
                    </tr>
                    <tr>
                        <td>Primitives</td>
                        <td>RFC 8855 Specification Required (Expert: Brian Rosen, Tom Kristensen)</td>
                    </tr>
                    <tr>
                        <td>Request Statuses</td>
                        <td>RFC 8855 Specification Required (Expert: Brian Rosen, Tom Kristensen)</td>
                    </tr>
                    <tr>
                        <td>The Extensible Authentication Protocol Mechanism for the Generic Security Service
                            Application Programming Interface (GSS-EAP) Parameters
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GSS-EAP Context Flags</td>
                        <td>RFC 7055 IETF Review or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>GSS-EAP Error Codes</td>
                        <td>RFC 7055 0-127: Standards Action. 128-255: Specification Required. (Expert: Joseph
                            Salowey)
                        </td>
                    </tr>
                    <tr>
                        <td>GSS-EAP Subtoken Types</td>
                        <td>RFC 7055 Expert Review (Expert: Joseph Salowey)</td>
                    </tr>
                    <tr>
                        <td>Time Zone Data Distribution Service (TZDIST) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TZDIST Identifiers</td>
                        <td>RFC 7808 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TZDIST Service Actions</td>
                        <td>RFC 7808 Specification Required (Expert: Michael Douglass)</td>
                    </tr>
                    <tr>
                        <td>Timed Efficient Stream Loss-tolerant Authentication (TESLA) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Message Authentication Code (MAC) Function, TESLA-MAC Values</td>
                        <td>RFC 4442 Expert Review (Expert: MSEC working group or its designated successor)</td>
                    </tr>
                    <tr>
                        <td>Cryptographic Pseudo-Random Function, TESLA-PRF Values</td>
                        <td>RFC 4442 Expert Review (Expert: MSEC working group or its designated successor)</td>
                    </tr>
                    <tr>
                        <td>Signature Cryptographic Function, TESLA-SIG-CRYPTO-FUNC Values</td>
                        <td>RFC 5776 Expert Review (Expert: MSEC working group or its designated successor)</td>
                    </tr>
                    <tr>
                        <td>Signature Encoding Algorithm, TESLA-SIG-ALGO Values</td>
                        <td>RFC 5776 Expert Review (Expert: MSEC working group or its designated successor)</td>
                    </tr>
                    <tr>
                        <td>TLS-based Posture Transport Protocol (PT-TLS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PT-TLS Error Codes</td>
                        <td>RFC 6876 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>PT-TLS Message Types</td>
                        <td>RFC 6876 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Token Binding Protocol</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Token Binding Extensions</td>
                        <td>RFC 8471 Specification Required (Expert: Andrei Popov, Dirk Balfanz)</td>
                    </tr>
                    <tr>
                        <td>Token Binding Key Parameters</td>
                        <td>RFC 8471 Specification Required (Expert: Andrei Popov, Dirk Balfanz)</td>
                    </tr>
                    <tr>
                        <td>Token Binding Types</td>
                        <td>RFC 8471 Specification Required (Expert: Andrei Popov, Dirk Balfanz)</td>
                    </tr>
                    <tr>
                        <td>Trailer Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Trailer Types</td>
                        <td>RFC 6081 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Transfer Encodings</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Transfer Encodings</td>
                        <td>RFC 4289 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Transmission Control Protocol (TCP) Header Flags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TCP Header Flags</td>
                        <td>RFC 9293 Standards Action</td>
                    </tr>
                    <tr>
                        <td>Transmission Control Protocol (TCP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Algorithms for TCP-AO Registration</td>
                        <td>RFC 5926 RFC Publication After Expert Review</td>
                    </tr>
                    <tr>
                        <td>MPTCP Handshake Algorithms</td>
                        <td>RFC 8684 Standards Action</td>
                    </tr>
                    <tr>
                        <td>MPTCP MP_TCPRST Reason Codes</td>
                        <td>RFC 8684 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>MPTCP Option Subtypes</td>
                        <td>RFC 8684 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TCP Alternate Checksum Numbers</td>
                        <td>RFC 1146 Not defined</td>
                    </tr>
                    <tr>
                        <td>TCP Encryption Protocol Identifiers</td>
                        <td>RFC 8547 IETF Review or Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>TCP Experimental Option Experiment Identifiers (TCP ExIDs)</td>
                        <td>RFC 6994 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>TCP Header Flags</td>
                        <td>RFC 9293 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TCP Option Kind Numbers</td>
                        <td>RFC 2780 Standards Action or IESG Approval</td>
                    </tr>
                    <tr>
                        <td>tcpcrypt AEAD Algorithms</td>
                        <td>RFC 8548 IETF Review or Expert Review with RFC Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>Transparent Interconnection of Lots of Links (TRILL) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Extended RBridge Channel Payload Types</td>
                        <td>RFC 7978 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Extended RBridge Channel Security Types</td>
                        <td>RFC 7978 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Interested Labels Flag Bits</td>
                        <td>RFC 7176, RFC 7357 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Interested VLANs Flag Bits</td>
                        <td>RFC 7176, RFC 7357 IETF Review</td>
                    </tr>
                    <tr>
                        <td>PORT-TRILL-VER Sub-TLV Capability Flags</td>
                        <td>RFC 7176 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RBridge Channel Error Codes</td>
                        <td>RFC 7178 Standards Action</td>
                    </tr>
                    <tr>
                        <td>RBridge Channel Header Flags</td>
                        <td>RFC 7178 IETF Review</td>
                    </tr>
                    <tr>
                        <td>RBridge Channel Protocols</td>
                        <td>RFC 7178 0x002-0x0FF: Standards Action. 0x100-0xFF7: RFC Required. 0x100-0xFF7: IESG
                            Approval.
                        </td>
                    </tr>
                    <tr>
                        <td>TRILL APPsub-TLV Types under IS-IS TLV 251 Application Identifier 1</td>
                        <td>RFC 7357 IETF Review with additional requirements on the documentation of the use being
                            registered as specified in Section 7.2 of RFC 7357.
                        </td>
                    </tr>
                    <tr>
                        <td>TRILL Ethertypes</td>
                        <td>RFC 8377 Ethertypes are assigned by the IEEE Registration Authority. Updates to this
                            registry are coordinated with the designated expert. (Expert: Donald Eastlake (primary), Sue
                            Hares (secondary))
                        </td>
                    </tr>
                    <tr>
                        <td>TRILL Extended Header Flags</td>
                        <td>RFC 7179 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TRILL Multicast Addresses</td>
                        <td>RFC 6325 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TRILL Neighbor TLV NEIGHBOR RECORD Flags</td>
                        <td>RFC 7176 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TRILL Nicknames</td>
                        <td>RFC 6325 RFC Required (single value) or IETF Review (single or multiple values)</td>
                    </tr>
                    <tr>
                        <td>TRILL OAM Return Codes</td>
                        <td>RFC 7455 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TRILL Pull Directory Errors</td>
                        <td>RFC 8171 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TRILL Pull Directory Query Types (QTYPEs)</td>
                        <td>RFC 8171 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TRILL-VER Sub-TLV Capability Flags</td>
                        <td>RFC 7176 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Transport Layer Security (TLS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TLS Alerts</td>
                        <td>RFC 8446 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TLS Application-Layer Protocol Negotiation (ALPN) Protocol IDs</td>
                        <td>RFC 7301, RFC 8447 Expert Review (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS Authorization Data Formats</td>
                        <td>RFC 5878, RFC 8447 0-63: IETF Review. 64-223: Specification Required. 224-255: Reserved for
                            Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS CachedInformationType Values</td>
                        <td>RFC 7924 0-63: Standards Action. 64-223: Specification Required. (Expert: Yoav Nir, Rich
                            Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Certificate Compression Algorithm IDs</td>
                        <td>RFC 8879 1-255: IETF Review. 256-16383: Specification Required. 16384-65535: Experimental
                            Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Certificate Status Types</td>
                        <td>RFC 6961, RFC 8446 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TLS Certificate Types</td>
                        <td>RFC 6091, RFC 8446, RFC 8447 Specification Required (Expert: Yoav Nir, Rich Salz, Nick
                            Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Cipher Suites</td>
                        <td>RFC 8446, RFC 8447, RFC 9147 Specification Required (Expert: Yoav Nir, Rich Salz, Nick
                            Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS ClientCertificateType Identifiers</td>
                        <td>RFC 5246, RFC 8447 0-63: Standards Action. 64-223: Specification Required. 224-255: Reserved
                            for Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Compression Method Identifiers</td>
                        <td>RFC 3749, RFC 8447 0-63: Standards Action. 64-223: Specification Required. 224-255: Reserved
                            for Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS ContentType</td>
                        <td>RFC 8446, RFC 9443 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TLS EC Curve Types</td>
                        <td>RFC 8422 Specification Required (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS EC Point Formats</td>
                        <td>RFC 8422 Specification Required (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS Exporter Labels</td>
                        <td>RFC 5705, RFC 8447 Specification Required (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS ExtensionType Values</td>
                        <td>RFC 8446, RFC 8447, RFC 9146 Specification Required (Expert: Yoav Nir, Rich Salz, Nick
                            Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS HandshakeType</td>
                        <td>RFC 8446 Standards Action</td>
                    </tr>
                    <tr>
                        <td>TLS HashAlgorithm</td>
                        <td>RFC 5246, RFC 8447, RFC 9155 0-63: Standards Action. 64-223: Specification Required.
                            224-255: Reserved for Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Heartbeat Message Types</td>
                        <td>RFC 6520, RFC 8447 Expert Review (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS Heartbeat Modes</td>
                        <td>RFC 6520, RFC 8447 Expert Review (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS KDF Identifiers</td>
                        <td>RFC 9258 0x0000-0xfeff: Specification Required. 0xff00-0xffff: Private Use. (Expert: Rich
                            Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS PskKeyExchangeMode</td>
                        <td>RFC 8446 Specification Required (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS SignatureAlgorithm</td>
                        <td>RFC 5246, RFC 8447, RFC 9155 0-63: Standards Action. 64-223: Specification Required.
                            224-255: Reserved for Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS SignatureScheme</td>
                        <td>RFC 8446 Specification Required (Expert: Yoav Nir, Rich Salz, Nick Sullivan)</td>
                    </tr>
                    <tr>
                        <td>TLS Supplemental Data Formats (SupplementalDataType)</td>
                        <td>RFC 4680, RFC 8447 0-16385: Standards Action. 16386-65279: IETF Review. 65280-65535:
                            Reserved for Private Use.
                        </td>
                    </tr>
                    <tr>
                        <td>TLS Supported Groups</td>
                        <td>RFC 8422, RFC 7919, RFC 8446, RFC 8447 0-255, 512-65535: Specification Required. 256-511:
                            Specification Required. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>TLS UserMappingType Values</td>
                        <td>RFC 4681 0-63: Standards Action. 64-223: Specification Required. 224-255: Reserved for
                            Private Use. (Expert: Yoav Nir, Rich Salz, Nick Sullivan)
                        </td>
                    </tr>
                    <tr>
                        <td>Tunnel Setup Protocol (TSP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tunnel Types</td>
                        <td>RFC 5572 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Two-way Active Measurement Protocol (TWAMP) Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>TWAMP-Control Command Numbers</td>
                        <td>RFC 5357, RFC 5938 IETF Review</td>
                    </tr>
                    <tr>
                        <td>TWAMP-Modes</td>
                        <td>RFC 5618, RFC 5938, RFC 7717 IETF Review</td>
                    </tr>
                    <tr>
                        <td> U</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Unidirectional Lightweight Encapsulation (ULE) Next-Header Registry</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Mandatory Extension Headers (or link-dependent type fields) for ULE (Range 0-255 decimal)
                        </td>
                        <td>RFC 4326, RFC 7280 Specification Required (Expert: Gorry Fairhurst)</td>
                    </tr>
                    <tr>
                        <td>Optional Extension Headers for ULE (Range 256-511 decimal)</td>
                        <td>RFC 4326, RFC 7280 Specification Required (Expert: Gorry Fairhurst)</td>
                    </tr>
                    <tr>
                        <td>Uniform Resource Identifier (URI) Schemes</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>&quot;about&quot; URI Tokens</td>
                        <td>RFC 6694 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>&#39;geo&#39; URI &#39;crs&#39; Parameter Values</td>
                        <td>RFC 5870 IESG Approval with Specification Required</td>
                    </tr>
                    <tr>
                        <td>&#39;geo&#39; URI Parameters</td>
                        <td>RFC 5870 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>&#39;ipn&#39; Scheme URI Allocator Identifiers</td>
                        <td>Internet Draft draft-ietf-dtn-ipn-update-14 0-0xFFFF: Expert Review. 0x10000-0x3FFFFFFF:
                            Expert Review. 0x40000000-0x7FFFFFFF: Experimental Use. 0x80000000-0xFFFFFFFF:
                            Reserved.                            &amp;gt;=0x100000000: Reserved. (Expert: Edward
                            Birrane, Rick Taylor)
                        </td>
                    </tr>
                    <tr>
                        <td>&#39;ipn&#39; Scheme URI Default Allocator Node Numbers</td>
                        <td>RFC 7116, Internet Draft draft-ietf-dtn-ipn-update-14 1-0x3FFF: Private Use.
                            0x4000-0xFFFFFFFE: Expert Review.                            &amp;gt;=0x100000000: Invalid.
                            (Expert: Marc Blanchet, Keith Scott)
                        </td>
                    </tr>
                    <tr>
                        <td>&#39;ipn&#39; Scheme URI Well-known Service Numbers for BPv7</td>
                        <td>Internet Draft draft-ietf-dtn-ipn-update-14 1-127: Private Use. 128-255: Standards Action.
                            0x0100-0x7FFF: Private Use. 0x8000-0xFFFF: Specification Required. 0x10000-0xFFFFFFFF:
                            Private Use. greater than 0x100000000: Reserved for future expansion. (Expert: Edward
                            Birrane, Rick Taylor, Brian Sipos)
                        </td>
                    </tr>
                    <tr>
                        <td>POSH Service Names</td>
                        <td>RFC 7711 Expert Review or IETF Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>tel URI Parameters</td>
                        <td>RFC 5341 Specification Required (Expert: Vijay Gurbani)</td>
                    </tr>
                    <tr>
                        <td>Uniform Resource Identifier (URI) Schemes</td>
                        <td>RFC 7595, RFC 8615 Permanent: Expert Review. Provisional: First Come First Served.
                            Historical: Expert Review. (Expert: Graham Klyne)
                        </td>
                    </tr>
                    <tr>
                        <td>Well-Known URIs</td>
                        <td>RFC 8615 Specification Required (Expert: Mark Nottingham)</td>
                    </tr>
                    <tr>
                        <td>Uniform Resource Name (URN) Namespace for IETF Use</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IETF URN Sub-namespace for Registered Protocol Parameter Identifiers</td>
                        <td>RFC 3553 IETF Review</td>
                    </tr>
                    <tr>
                        <td>IETF URN Sub-namespaces</td>
                        <td>RFC 6924 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Uniform Resource Names (URN)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Alert URN Identifiers</td>
                        <td>RFC 7462 Specification Required (Expert: Dale Worley)</td>
                    </tr>
                    <tr>
                        <td>Alert URN Providers</td>
                        <td>RFC 7462 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>Formal URN Namespaces</td>
                        <td>RFC 8141 Expert Review, per Section 6 of RFC 8141. Fast-track procedure for standards
                            organizations described in Section 6.3. (Expert: Peter Saint-Andre (team leader), Dale
                            Worley, Juha Hakala, Stephanie Palek, Lars Svensson, Jyrki Ilva)
                        </td>
                    </tr>
                    <tr>
                        <td>Informal URN Namespaces</td>
                        <td>RFC 8141 Expert Review, per Section 6 of RFC 8141. (Expert: Peter Saint-Andre (team leader),
                            Dale Worley, Juha Hakala, Stephanie Palek)
                        </td>
                    </tr>
                    <tr>
                        <td>URN Service Labels</td>
                        <td>RFC 5031 Standards Action</td>
                    </tr>
                    <tr>
                        <td>UUID</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>UUID Namespace IDs</td>
                        <td>RFC 9562 Specification Required (Expert: Kyzer Davis, Brad Peabody)</td>
                    </tr>
                    <tr>
                        <td>UUID Subtypes</td>
                        <td>RFC 9562 Standards Action With Expert Review (Expert: Kyzer Davis, Brad Peabody)</td>
                    </tr>
                    <tr>
                        <td> V</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>vCard Elements</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>vCard Parameter Values</td>
                        <td>RFC 6350 Expert Review and RFC Required (Expert: Primary: Simon Perreault; Backup: Peter
                            Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>vCard Parameters</td>
                        <td>RFC 6350 No namespace specified: Expert Review and RFC Required. Vendor namespace specified:
                            First Come First Served. (Expert: Primary: Simon Perreault; Backup: Peter Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>vCard Properties</td>
                        <td>RFC 6350 No namespace specified: Expert Review and RFC Required. Vendor namespace specified:
                            First Come First Served. (Expert: Primary: Simon Perreault; Backup: Peter Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>vCard Property Values</td>
                        <td>RFC 6350 Expert Review and RFC Required (Expert: Primary: Simon Perreault; Backup: Peter
                            Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>vCard Value Data Types</td>
                        <td>RFC 6350 Expert Review and RFC Required (Expert: Primary: Simon Perreault; Backup: Peter
                            Saint-Andre)
                        </td>
                    </tr>
                    <tr>
                        <td>VCDIFF Secondary Compressor ID Values</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>VCDIFF Secondary Compressor ID Values</td>
                        <td>RFC 3284 RFC or peer-reviewed permanent and readily available reference.Subject to the
                            above, name assignments are First Come First Served.
                        </td>
                    </tr>
                    <tr>
                        <td>Vectors of Trust (VoT)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Vectors of Trust Components</td>
                        <td>RFC 8485 Specification Required (Expert: Justin Richer, Leif Johansson)</td>
                    </tr>
                    <tr>
                        <td>&#39;version&#39; symbols used within the ISUP and QSIG</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>application/ISUP symbols</td>
                        <td>RFC 3204 Expert Review (Expert: Jon Peterson)</td>
                    </tr>
                    <tr>
                        <td>application/QSIG symbols</td>
                        <td>RFC 3204 Expert Review (Expert: Jon Peterson)</td>
                    </tr>
                    <tr>
                        <td>Virtual Network Computing (VNC) Uniform Resource Identifier (URI)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>VNC URI Connection Channel Types</td>
                        <td>RFC 7869 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>VNC URI ID Hash Algorithms</td>
                        <td>RFC 7869 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>VNC URI Parameters</td>
                        <td>RFC 7869 First Come First Served</td>
                    </tr>
                    <tr>
                        <td> W</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WAVE and AVI Codec Registries (Historic Registry)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WAVE and AVI Codec Registries</td>
                        <td>RFC 2361 IANA does not assign. Republication of values.</td>
                    </tr>
                    <tr>
                        <td>Web Authentication (WebAuthn)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WebAuthn Attestation Statement Format Identifiers</td>
                        <td>RFC 8809 Specification Required (Expert: Mike Jones, Giridhar Mandyam)</td>
                    </tr>
                    <tr>
                        <td>WebAuthn Extension Identifiers</td>
                        <td>RFC 8809 Specification Required (Expert: Mike Jones, Giridhar Mandyam)</td>
                    </tr>
                    <tr>
                        <td>Web Push Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>VAPID Authentication Scheme Parameters</td>
                        <td>RFC 8292 Specification Required (Expert: Martin Thomson)</td>
                    </tr>
                    <tr>
                        <td>Web Push Identifiers</td>
                        <td>RFC 8030 IETF Review</td>
                    </tr>
                    <tr>
                        <td>Webfinger Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Webfinger Properties</td>
                        <td>RFC 7033 Expert Review (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>WebRTC-HTTP Ingestion Protocol (WHIP)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WebRTC-HTTP Ingestion Protocol (WHIP) Extension URNs</td>
                        <td>Internet Draft draft-ietf-wish-whip-16 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>WebRTC-HTTP Ingestion Protocol (WHIP) URNs</td>
                        <td>Internet Draft draft-ietf-wish-whip-16 Specification Required (Expert: Unassigned)</td>
                    </tr>
                    <tr>
                        <td>WebSocket Protocol Registries</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WebSocket Close Code Number Registry</td>
                        <td>RFC 6455 1000-2999: Standards Action, Specification Required or IESG Review. 3000-3999:
                            First Come First Served. (Expert: Alexey Melnikov)
                        </td>
                    </tr>
                    <tr>
                        <td>WebSocket Extension Name Registry</td>
                        <td>RFC 6455 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>WebSocket Framing Header Bits Registry</td>
                        <td>RFC 6455 Standards Action</td>
                    </tr>
                    <tr>
                        <td>WebSocket Opcode Registry</td>
                        <td>RFC 6455 Standards Action</td>
                    </tr>
                    <tr>
                        <td>WebSocket Subprotocol Name Registry</td>
                        <td>RFC 6455, RFC 7936, RFC 8864 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>WebSocket Version Number Registry</td>
                        <td>RFC 6455 Standard Version Numbers: IETF Review. Interim Version Numbers: Expert Review.
                            (Expert: HYBI WG Chairs)
                        </td>
                    </tr>
                    <tr>
                        <td>Wrapped Encapsulating Security Payload (WESP) Flags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>WESP Flags</td>
                        <td>RFC 5840 IETF Review</td>
                    </tr>
                    <tr>
                        <td>WESP Version Numbers</td>
                        <td>RFC 5840 Standards Action</td>
                    </tr>
                    <tr>
                        <td> X</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>X.25 Type Numbers</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>X.25 Type Numbers</td>
                        <td> Not assigned by IANA</td>
                    </tr>
                    <tr>
                        <td>Xerox Network System (XNS) Protocol Types</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Assigned internet packet types</td>
                        <td> Not assigned by IANA</td>
                    </tr>
                    <tr>
                        <td>Assigned well-known socket numbers</td>
                        <td> Not assigned by IANA</td>
                    </tr>
                    <tr>
                        <td>XML Evidence Record Syntax (XMLERS)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cryptographic Information Type</td>
                        <td>RFC 6283 RFC Required</td>
                    </tr>
                    <tr>
                        <td>Time-Stamp Token Type</td>
                        <td>RFC 6283 RFC Required</td>
                    </tr>
                    <tr>
                        <td>XML Security URIs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>XML Security URIs</td>
                        <td>RFC 9231 Specification Required (Expert: Donald Eastlake, Alexey Melnikov)</td>
                    </tr>
                    <tr>
                        <td> Y</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>YANG Geographic Location Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Geodetic System Values</td>
                        <td>RFC 9179 First Come First Served</td>
                    </tr>
                    <tr>
                        <td>YANG Module Tags</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IETF YANG Module Tags</td>
                        <td>RFC 8819 IETF Review</td>
                    </tr>
                    <tr>
                        <td>YANG Module Tag Prefixes</td>
                        <td>RFC 8819 Specification Required (Expert: Christian Hopps, Lou Berger, Dean Bogdanovic)</td>
                    </tr>
                    <tr>
                        <td>YANG Modules</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>iana-bfd-types YANG Module</td>
                        <td>RFC 9127, RFC 5880 See BFD Diagnostic Codes and BFD Authentication Types registries.</td>
                    </tr>
                    <tr>
                        <td>iana-bgp-l2-encaps YANG Module</td>
                        <td>RFC 9291, RFC 6624 See BGP Layer 2 Encapsulation Types registry.</td>
                    </tr>
                    <tr>
                        <td>iana-crypt-hash YANG Module</td>
                        <td>RFC 7317 Expert Review (Expert: Kent Watsen)</td>
                    </tr>
                    <tr>
                        <td>iana-dns-class-rr-type YANG Module</td>
                        <td>RFC 9108 See DNS CLASSes and Resource Record (RR) TYPEs registries.</td>
                    </tr>
                    <tr>
                        <td>iana-dots-signal-channel YANG Module</td>
                        <td>RFC 9132 See the DOTS Status Codes, DOTS Conflict Status Codes, DOTS Conflict Cause Codes,
                            and DOTS Attack Status Codes registries.
                        </td>
                    </tr>
                    <tr>
                        <td>iana-hardware YANG Module</td>
                        <td>RFC 8348 See IANA-ENTITY-MIB MIB module.</td>
                    </tr>
                    <tr>
                        <td>iana-if-type YANG Module</td>
                        <td>RFC 1213, RFC 2863, RFC 7224, RFC 8892 This is one of the available formats of the Interface
                            Types (ifType) registry.
                        </td>
                    </tr>
                    <tr>
                        <td>iana-msd-types YANG Module</td>
                        <td>RFC 9702 See the IGP MSD-Types registry.</td>
                    </tr>
                    <tr>
                        <td>iana-pseudowire-types YANG Module</td>
                        <td>RFC 9291, RFC 4446 See MPLS Pseudowire Types registry.</td>
                    </tr>
                    <tr>
                        <td>iana-routing-types YANG Module</td>
                        <td>RFC 8294, RFC 2453, RFC 2677, RFC 2858, RFC 4760 See Address Family Numbers and Subsequent
                            Address Family Identifiers (SAFI) Values registries.
                        </td>
                    </tr>
                    <tr>
                        <td>iana-ssh-encryption-algs YANG Module</td>
                        <td>RFC 9644 See the Encryption Algorithm Names registry.</td>
                    </tr>
                    <tr>
                        <td>iana-ssh-key-exchange-algs YANG Module</td>
                        <td>RFC 9644 See the Key Exchange Method Names registry.</td>
                    </tr>
                    <tr>
                        <td>iana-ssh-mac-algs YANG Module</td>
                        <td>RFC 9644 See the MAC Algorithm Names registry.</td>
                    </tr>
                    <tr>
                        <td>iana-ssh-public-key-algs YANG Module</td>
                        <td>RFC 9644 See the Public Key Algorithm Names registry.</td>
                    </tr>
                    <tr>
                        <td>iana-tls-cipher-suite-algs YANG Module</td>
                        <td>RFC 9645 See the TLS Cipher Suites registry.</td>
                    </tr>
                    <tr>
                        <td>iana-tunnel-type YANG Module</td>
                        <td>RFC 4087, RFC 8675, RFC 8892 This is one of the available formats of the Tunnel Types
                            (tunnelType) registry.
                        </td>
                    </tr>
                    <tr>
                        <td>YANG Parameters</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>YANG Module Names</td>
                        <td>RFC 6020, RFC 8407 RFC Required</td>
                    </tr>
                    <tr>
                        <td>YANG SIDs</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>IETF YANG-SID Modules</td>
                        <td>RFC 9595 Expert Review (Expert: Michel Veillette, Alexander Pelov, Laurent Toutain)</td>
                    </tr>
                    <tr>
                        <td>IETF YANG-SID Ranges</td>
                        <td>RFC 9595 0: IESG Approval. 1000: RFC and Expert Review Required. 60000: Reserved for
                            Experimental Use. 100000: RFC and Expert Review Required. 300000: Reserved. (Expert: Michel
                            Veillette, Alexander Pelov, Laurent Toutain)
                        </td>
                    </tr>
                    <tr>
                        <td>YANG-SID Mega-Ranges</td>
                        <td>RFC 9595 Expert Review (Expert: Michel Veillette, Alexander Pelov, Laurent Toutain)</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

Protocols.propTypes = {}

export default Protocols;
