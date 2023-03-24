import requestIp from "request-ip";
import axios from "axios";

export default async function handler(req, res) {
  try {
    const detectedIp = requestIp.getClientIp(req);
    // TODO: make it so that requests only come from my IP address

    console.log("detectedIp", detectedIp);
    // start date is today in MM/DD/YYYY format
    const startDate = new Date();
    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const startYear = startDate.getFullYear();
    const startString = `${startMonth}/${startDay}/${startYear}`;

    // end date is 30 days prior from today in MM/DD/YYYY format
    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 30);
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate();
    const endYear = endDate.getFullYear();
    const endString = `${endMonth}/${endDay}/${endYear}`;

    console.log("req.body.docType", req.body.docType);

    const response = await axios({
      method: "post",
      url: "https://owcjhpn8h9.execute-api.us-west-2.amazonaws.com/default/king-county-search-api",
      data: {
        documentType: req.body.docType,
        startDate: endString,
        endDate: startString,
        searchTerm: req.body.searchTerm,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log("error at /api/kingcountydocs.js: ", error.message);
    res.status(500).json({ error: error.message });
  }
}
