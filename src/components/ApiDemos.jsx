import axios from "axios";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-json"; // need this

const docTypes = {
  41906: `ACCESSORY DWELLING CERTIFICATE`,
  8: `AFFIDAVIT`,
  10: `AGREEMENT`,
  41893: `AMENDED NOTICE OF TRUSTEE SALE`,
  41895: `AMENDED NOTICE OF TRUSTEE SALE`,
  17: `AMENDMENT TO DECLARATION OF CONDO`,
  20: `ANIMAL DISABLED`,
  26: `APPOINTMENT`,
  29: `APPOINTMENT OF SUCCESSOR TRUST`,
  4: `ASSIGNMENT`,
  6: `ASSIGNMENT DEED OF TRUST/MORTGAGE`,
  12: `ASSIGNMENT OF LEASE`,
  28: `ASSIGNMENT OF RENTS`,
  27: `ASSUMPTION AGREEMENT`,
  34: `BILL OF SALE`,
  33: `BLANKET ADT AST RT`,
  31: `BOUNDARY LINE ADJUSTMENT`,
  32: `BOUNDARY LINE ADJUSTMENT - MAP`,
  39: `CERTIFICATE`,
  37: `CODE VIOLATION`,
  41896: `COMMERCIAL NOTICE OF TRUSTEE SALE`,
  57: `COMMUNITY PROPERTY AGREEMENT`,
  47: `COMPLIANCE`,
  48: `CONDOMINIUM`,
  50: `CONSENT`,
  55: `COVENANT`,
  60: `DEATH CERTIFICATE`,
  61: `DECLARATION OF CONDO`,
  68: `DECLARATION OF PAYMENT`,
  69: `DECLARATION OF PAYMENT OBJECTION TO`,
  59: `DEED`,
  72: `DEED OF TRUST`,
  73: `DEED OF TRUST REINSTATED`,
  71: `DESIGNATED AGENT`,
  53: `DIGITAL COPY`,
  74: `DISCONTINUANCE OF TRUSTEE SALE`,
  75: `EASEMENT`,
  76: `EMPLOYMENT SECURITY LIEN`,
  77: `EMPLOYMENT SECURITY RELEASE LIEN`,
  80: `EXCISE TAX AFFIDAVITS`,
  78: `EXCISE TAX MISCELLANEOUS`,
  107: `FEDERAL TAX LIEN PARTIAL RELEASE`,
  105: `FEDERAL TAX LIEN-NOTICE OF`,
  221: `FTL RELEASE OF FEDERAL TAX LIEN`,
  108: `FTL REVOCATION OF RELEASE`,
  109: `FTL WITHDRAWAL`,
  104: `FULL RECONVEYANCE`,
  111: `GOING OUT OF BUSINESS`,
  110: `GOVERNMENT LIENS`,
  224: `GOVERNMENT RL $32`,
  115: `HAZARDOUS SUBSTANCE CERTIFICAT`,
  118: `INTERLOCAL AGREEMENTS BETWEEN CITIES`,
  121: `JUDGMENT`,
  127: `KING COUNTY CONTRACTS AND AGREEMENTS`,
  129: `KING COUNTY INTERLOCAL AGREEMENT`,
  131: `KING COUNTY MISCELLANEOUS`,
  41901: `LACK OF PROBATE AFFIDAVIT`,
  136: `LAND CORNER RECORD`,
  137: `LEASE`,
  134: `LIEN`,
  139: `LIS PENDENS`,
  138: `LOT LINE ELIMINATION`,
  335: `LOT LINE ELIMINATION MAP`,
  25: `MANUFACTURED HOME TITLE ELIM`,
  143: `MAP - GENERAL`,
  147: `MARRIAGE APPLICATION`,
  148: `MARRIAGE CERTIFICATE`,
  360: `MARRIAGECERTIFICATE`,
  151: `MEMORANDUM`,
  153: `MEMORIAL`,
  149: `MINING CLAIM`,
  157: `MISCELLANEOUS`,
  150: `MODIFICATION DEED OF TRUST/MOR`,
  141: `MORTGAGE`,
  166: `NO FEE LIEN`,
  163: `NOTICE`,
  169: `NOTICE OF SENSITIVE AREA`,
  172: `NOTICE OF TRUSTEE SALE`,
  174: `OATH OF OFFICE`,
  183: `ON-SITE SEWAGE SYSTEM`,
  180: `OPTION TO PURCHASE`,
  175: `ORDER CHANGING NAME`,
  181: `ORDINANCE`,
  190: `PARTIAL RECONVEYANCE`,
  191: `PARTIAL RELEASE`,
  193: `PARTIAL RELEASE GOV LIEN`,

  41899: `PARTIAL RELEASE OF EASEMENT`,

  194: `PARTIAL RELEASE OF NO FEE LIEN`,

  196: `PARTIAL RELEASE SEWER LIEN`,

  197: `PLANNED UNIT DEVELOPMENT`,

  188: `PLAT`,

  184: `POWER OF ATTORNEY`,

  198: `QUIT CLAIM DEED`,

  203: `REAL ESTATE CONTRACT`,

  199: `RELEASE`,

  201: `RELEASE ASSIGNMENT OF RENT`,

  202: `RELEASE OF EASEMENT`,

  222: `RELEASE OF GOVERNMENT LIEN`,

  244: `RELEASE OF LIS PENDENS`,

  255: `RELEASE OF NO FEE LIEN`,

  41903: `RELEASE OF WAGE LIEN`,

  257: `RELEASE OF WATER AND SEWER LIEN`,

  223: `RELEASE OR SATISFACTION OF LIEN`,

  210: `REQUEST`,

  220: `REQUEST FOR NOTICE`,

  216: `RESCISSION`,

  258: `RESIGNATION OF TRUSTEE`,

  41900: `RESTRICTIVE COVENANT MODIFICATION`,

  218: `REVOCATION`,

  256: `RIGHT OF ENTRY`,

  234: `RL APPLICATION/WITHDRAWAL`,

  233: `RL APPT. SUCC TRUSTEE`,

  226: `RL ASSGN DEED TRUST`,

  229: `RL ASSGN LEASE EXCISE`,

  227: `RL ASSIGNMENT LEASE`,

  231: `RL ASSIGNMENT RENTS`,

  236: `RL CERT WITHDRAWAL`,

  41904: `RL CERTIFICATE OF TITLE`,

  235: `RL COURT ORDER`,

  336: `RL Death Certificate`,

  237: `RL DEED`,

  238: `RL DEED OF TRUST`,

  239: `RL EASEMENT`,

  240: `RL FULL RECONVEYANCE`,

  241: `RL MISCELLANEOUS`,

  243: `RL NOTICE OF TRSTEE SALE`,

  248: `RL PERSONAL REP DEED`,

  246: `RL POWER OF ATTORNEY`,

  249: `RL QUIT CLAIM DEED`,

  250: `RL RELEASE ASSGN RENTS`,

  251: `RL SUBORDINATION`,

  253: `RL TRUSTEES DEED`,

  254: `RL WARRANTY DEED`,

  259: `SATISFACTION`,

  268: `SATISFACTION OF JUDGMENT`,

  270: `SATISFACTION OF MORTGAGE`,

  262: `NEW"> SENIOR PET LICENSE NEW`,

  263: `RENEW"> SENIOR PET LICENSE RENEW`,

  271: `SHORT PLAT`,

  272: `SHORT PLAT - MAP`,

  274: `SUBORDINATION`,

  275: `SUBORDINATION OF LEASE`,

  277: `SURVEY`,

  168: `"> TEMP FOR MAIL ARRIVING AFTER 6-12-2014`,

  281: `TERMINATION`,

  283: `TERMINATION OF LEASE`,

  146: `TERMINATION OF MAP DOCUMENTS`,

  288: `TORRENS`,

  289: `"> TRANSFER FEE`,

  280: `TRANSFER OF DEVELOPMENT RIGHTS`,

  285: `TRANSFER ON DEATH`,

  286: `TRANSFER ON DEATH MODIFICATION`,

  287: `TRANSFER ON DEATH REVOCATION`,

  279: `TRUSTEE DEED`,

  292: `UCC AMENDMENT`,

  291: `UCC ASSIGNMENT`,

  293: `UCC CONTINUATION`,

  290: `UCC FILING`,

  294: `UCC PARTIAL RELEASE`,

  295: `UCC TERMINATION`,

  212: `VETERAN REQUEST FOR COPY`,

  214: `VETERAN REQUEST FOR DISCLOSURE`,

  215: `VETERAN REQUEST FOR EXEMPTION`,

  204: `VETERAN REV AND REDESIGNATION`,

  264: `VETERAN SEPARATION`,

  41902: `WAGE LIEN`,

  303: `WAIVER OF LIEN`,

  305: `WARRANTY DEED`,

  267: `WATER AND SEWER LIEN`,

  306: `WEB REM MISCELLANEOUS`,
};

export default function ApiDemos() {
  const [docType, setDocType] = useState(`4`);
  const [searchTerm, setSearchTerm] = useState(``);
  const [payload, setPayload] = useState({});
  const [parcelId, setParcelId] = useState(``);
  const [parcelPayload, setParcelPayload] = useState({});
  const [isParcelLoading, setIsParcelLoading] = useState(false);
  const [isKingDocsLoading, setIsKingDocsLoading] = useState(false);

  useEffect(() => {
    const highlight = async () => {
      await Prism.highlightAll(); // <--- prepare Prism
    };
    highlight(); // <--- call the async function
  }, [Object.keys(payload).length, Object.keys(parcelPayload).length]); // <--- run when post updates

  async function getKingCountyDocs(e) {
    e.preventDefault();
    setIsKingDocsLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: "/api/kingcountydocs",
        data: {
          docType,
          searchTerm,
        },
      });
      setPayload(res.data);
    } catch (error) {
      console.log("error at getKingCountyDocs", error.message);
    } finally {
      setIsKingDocsLoading(false);
    }
  }

  function createSelectList() {
    const options = [];
    for (const [key, value] of Object.entries(docTypes)) {
      options.push(
        <option key={key} value={key}>
          {value}
        </option>
      );
    }
    return options;
  }

  async function getLAParcel(e) {
    e.preventDefault();
    setIsParcelLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: "/api/laparcel",
        data: {
          parcelId,
        },
      });
      console.log("res.data", res.data);
      setParcelPayload(res.data);
    } catch (error) {
      console.log("error at getLAParcel", error.message);
    } finally {
      setIsParcelLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl sm:text-8xl font-bold tracking-tight text-zinc-100 mb-8">
        Give it a Try!
      </h2>
      <div className="text-left">
        <h3 className="font-bold text-xl md:text-2xl text-zinc-100">
          Get King County Documents
        </h3>
        <div className="md:flex md:justify-between">
          <form onSubmit={getKingCountyDocs} className="md:mr-8">
            <label
              htmlFor="docType"
              className="block text-sm font-medium leading-6"
            >
              Document Type
            </label>
            <select
              id="docType"
              className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-400 sm:text-sm sm:leading-6"
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
            >
              {createSelectList()}
            </select>
            <input
              type="text"
              className="mt-4 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              placeholder="Search Term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="mt-4 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              {isKingDocsLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                `Submit`
              )}
            </button>
          </form>
          {Object.keys(payload).length > 0 && (
            <pre className="h-96 rounded md:max-w-2xl">
              <code
                className="language-json"
                style={{ whiteSpace: "pre-wrap" }}
                lang="json"
              >
                {JSON.stringify(payload, null, 2)}
              </code>
            </pre>
          )}
        </div>
      </div>
      <div className="text-left mt-8">
        <h3 className="font-bold text-xl md:text-2xl text-zinc-100">
          Get LA County Parcel Data
        </h3>
        <div className="md:flex md:justify-between">
          <form onSubmit={getLAParcel} className="md:mr-8">
            <label
              htmlFor="parcelNumber"
              className="block text-sm font-medium leading-6"
            >
              Parcel Number
            </label>
            <input
              id="parcelNumber"
              type="text"
              className="mt-4 block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
              placeholder="2004014001"
              value={parcelId}
              onChange={(e) => setParcelId(e.target.value)}
            />
            <button
              className="mt-4 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
            >
              {isParcelLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                `Submit`
              )}
            </button>
          </form>
          {Object.keys(parcelPayload).length > 0 && (
            <pre className="h-96 rounded md:max-w-2xl">
              <code
                className="language-json"
                style={{ whiteSpace: "pre-wrap" }}
                lang="json"
              >
                {JSON.stringify(parcelPayload, null, 2)}
              </code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
