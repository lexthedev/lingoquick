'use server';
import { StudentInfo } from "../components";
import { googleSheets } from "./google/googleSheets";

export const addRequest = async (data: StudentInfo): Promise<number> => {

    const { name, age, phone, parent, email, language, target } = data;
    const now = new Date();

    const sheets = await googleSheets();
    const dataRange = 'A:H';
    const result = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.REQUESTS_SHEET_ID,
        range: dataRange,
        valueInputOption: 'USER_ENTERED', // or 'ROW'
        requestBody: {
            values: [
                [name, age, phone, parent, email, language, target, `${now.toLocaleDateString('ru-RU')} ${now.toLocaleTimeString('ru-RU')}`]
            ]
        }
    })

    // const [lastRequestPos] = lastRequestPosReq?.data?.values && lastRequestPosReq?.data?.values[0];
    // console.log(lastRequestPos);

    // console.log(lastRequestPosReq?.data?.values);

    return result.status;
    // result:
    //   {
    //     config: {
    //       url: 'https://sheets.googleapis.com/v4/spreadsheets/1C16KfOwmV4OOxt-YtuGEZGzgpt43ogjEINm7hYsoY0U/values/A%3AF:append?valueInputOption=USER_ENTERED',
    //         method: 'POST',
    //           userAgentDirectives: [[Object]],
    //             paramsSerializer: [Function(anonymous)],
    //               data: { values: [Array] },
    //       headers: {
    //         'x-goog-api-client': 'gdcl/7.0.0 gl-node/19.9.0',
    //           'Accept-Encoding': 'gzip',
    //             'User-Agent': 'google-api-nodejs-client/7.0.0 (gzip)',
    //               Authorization: 'Bearer ya29.c.b0Aaekm1I3ycUYTehrVeGq2RBjYjbQhwXC3abRloT51pYg1splxNl7wUCXL-8Cr1PAhwze607OZ-fyC6ACAmLck4plYGCPwjG2rlO2neagSnaCazpS2aXCBKs2_WSBFadHQdPDW2XDua-MdODOSHwrjtdzTC_rxlAbQi1eOn0OmvZlQGh_0MamBkEZL0h82kYr7CotejlP6hpya_Diz0wDs71NBtyQfZD7G0rKRdmwTSC-XgKwSpOj35hiX91zSFILAGubADXRDe7WqEmTPyXtHj6ezXsD6KagIw6KLY-D-r9kOf3sbzQTo7p6JPCyqJD-MaaQpyj1apDPAQG343KwmWvfB8R6mYgRa6aZlMV53I0nUw_wFQgR8a-Buitcba2c5sV43MZ54xIoOmWbpQdsny1Ujr0sguigzzWrfvgWraMcW0yqW0wfbqrXcnrIM9IXnqoimsSnftnyy7Rq2m351Ig97jJIXoQxRbmXshiZalpvZezRvVdtJS8cX4j7RbeSwbgnos3wZJaI0dcJf0mn_MOJ2XFRdvF3FRXnVkrp50MRUs5l37jhxr_ep_zJmz1h45rk9mturUyhulo_x5pIfx9MiO_X8--fvWB1uc9aoWQJm253Yy9wf5Icrx0aF2J8_qno9nFnMR_u0cx-SioRQIBysQsFaOS1F4n89iWkBvpvf5FIamFtb_tFYnpw1dvs-60Oydmta071s7b8pZF2hehnyggpBmt7ezW0UOWFqo9jJuWo2RzxXWIIQ625jJvqQb8_3z0Ire8YfyVBFxBX0ub4Ji-crvJMXBSYI8Ia5pyeg3lqzwXkRkb7_qfUo_rx1j1V9MY3bkFOjevtR_WbUziOu0YV5py3xvQvz6jSe4bF54FkWW9u735wpf50x4RM23W2mVoJer_afF09JsSqxalOBrfgJBx7qlByt26fsqhj5wV3gwmW3aMI72dXWjkB8bh1S9aczktyuRx8neus8z0BuFfqMstg4VJB7Y1n7Z--steuUF0I2IX',
    //                 'Content-Type': 'application/json'
    //       },
    //       params: { valueInputOption: 'USER_ENTERED' },
    //       validateStatus: [Function(anonymous)],
    //         retry: true,
    //           body: '{"values":[["",0,"","","","","11.09.2023 14:39:56"]]}',
    //             responseType: 'unknown',
    //               errorRedactor: [Function: defaultErrorRedactor]
    //     },
    //     data: {
    //       spreadsheetId: '1C16KfOwmV4OOxt-YtuGEZGzgpt43ogjEINm7hYsoY0U',
    //         tableRange: "'Лист1'!A1:H5",
    //           updates: {
    //         spreadsheetId: '1C16KfOwmV4OOxt-YtuGEZGzgpt43ogjEINm7hYsoY0U',
    //           updatedRange: "'Лист1'!A6:G6",
    //             updatedRows: 1,
    //               updatedColumns: 7,
    //                 updatedCells: 7
    //       }
    //     },
    //     headers: {
    //       'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    //         'cache-control': 'private',
    //           'content-encoding': 'gzip',
    //             'content-type': 'application/json; charset=UTF-8',
    //               date: 'Mon, 11 Sep 2023 11:40:01 GMT',
    //                 server: 'ESF',
    //                   'transfer-encoding': 'chunked',
    //                     vary: 'Origin, X-Origin, Referer',
    //                       'x-content-type-options': 'nosniff',
    //                         'x-frame-options': 'SAMEORIGIN',
    //                           'x-l2-request-path': 'l2-managed-6',
    //                             'x-xss-protection': '0'
    //     },
    //     status: 200,
    //       statusText: 'OK',
    //         request: {
    //       responseURL: 'https://sheets.googleapis.com/v4/spreadsheets/1C16KfOwmV4OOxt-YtuGEZGzgpt43ogjEINm7hYsoY0U/values/A%3AF:append?valueInputOption=USER_ENTERED'
    //     }
    //   }
}
