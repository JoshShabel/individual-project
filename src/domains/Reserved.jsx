import PropTypes from "prop-types";
import styles from "../subpage/SubPage.module.css"

const Reserved = () => {
    return (
        <div>
            <h1>
                IANA-managed Reserved Domains
            </h1>
            <p>
                Certain domains are set aside, and nominally registered to “IANA”, for specific policy or technical
                purposes.
            </p>
            <h2>
                Example domains
            </h2>
            <p>
                As described in RFC 2606 and RFC 6761, a number of domains such as example.com and example.org are
                maintained for documentation purposes. These domains may be used as illustrative examples in documents
                without prior coordination with us. They are not available for registration or transfer.
            </p>
            <h2>
                Test IDN top-level domains
            </h2>
            <p>
                These domains were temporarily delegated by IANA for the IDN Evaluation being conducted by ICANN.
            </p>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            Domain
                        </th>
                        <th>
                            Domain (A-label)
                        </th>
                        <th>
                            Language
                        </th>
                        <th>
                            Script
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            إختبار
                        </td>
                        <td>
                            XN--KGBECHTV
                        </td>
                        <td>
                            Arabic
                        </td>
                        <td>
                            Arabic
                        </td>
                    </tr>
                    <tr>
                        <td>
                            آزمایشی
                        </td>
                        <td>
                            XN--HGBK6AJ7F53BBA
                        </td>
                        <td>
                            Persian
                        </td>
                        <td>
                            Arabic
                        </td>
                    </tr>
                    <tr>
                        <td>
                            测试
                        </td>
                        <td>
                            XN--0ZWM56D
                        </td>
                        <td>
                            Chinese
                        </td>
                        <td>
                            Han (Simplified variant)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            測試
                        </td>
                        <td>
                            XN--G6W251D
                        </td>
                        <td>
                            Chinese
                        </td>
                        <td>
                            Han (Traditional variant)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            испытание
                        </td>
                        <td>
                            XN--80AKHBYKNJ4F
                        </td>
                        <td>
                            Russian
                        </td>
                        <td>
                            Cyrillic
                        </td>
                    </tr>
                    <tr>
                        <td>
                            परीक्षा
                        </td>
                        <td>
                            XN--11B5BS3A9AJ6G
                        </td>
                        <td>
                            Hindi
                        </td>
                        <td>
                            Devanagari (Nagari)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            δοκιμή
                        </td>
                        <td>
                            XN--JXALPDLP
                        </td>
                        <td>
                            Greek, Modern (1453-)
                        </td>
                        <td>
                            Greek
                        </td>
                    </tr>
                    <tr>
                        <td>
                            테스트
                        </td>
                        <td>
                            XN--9T4B11YI5A
                        </td>
                        <td>
                            Korean
                        </td>
                        <td>
                            Hangul (Hangŭl, Hangeul)
                        </td>
                    </tr>
                    <tr>
                        <td>
                            טעסט
                        </td>
                        <td>
                            XN--DEBA0AD
                        </td>
                        <td>
                            Yiddish
                        </td>
                        <td>
                            Hebrew
                        </td>
                    </tr>
                    <tr>
                        <td>
                            テスト
                        </td>
                        <td>
                            XN--ZCKZAH
                        </td>
                        <td>
                            Japanese
                        </td>
                        <td>
                            Katakana
                        </td>
                    </tr>
                    <tr>
                        <td>
                            பரிட்சை
                        </td>
                        <td>
                            XN--HLCJ6AYA9ESC7A
                        </td>
                        <td>
                            Tamil
                        </td>
                        <td>
                            Tamil
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <h2>
                Policy-reserved domains
            </h2>
            <p>
                We act as both the registrant and registrar for a select number of domains which have been reserved
                under policy grounds. These exclusions are typically indicated in either technical standards (RFC
                documents), or contractual limitations.
            </p>
            <p>
                Domains which are described as registered to IANA or ICANN on policy grounds are not available for
                registration or transfer, with the exception of
                <em>
                    country-name
                </em>
                .info domains. These domains are available for release by the ICANN Governmental Advisory Committee
                Secretariat.
            </p>
            <h2>
                Other Special-Use Domains
            </h2>
            <p>
                There is additionally a Special-Use Domain Names registry documenting special-use domains designated by
                technical standards. For further information, see Special-Use Domain Names (RFC 6761).
            </p>

        </div>
    );
};

Reserved.propTypes = {}

export default Reserved;

