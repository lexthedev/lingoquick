'use server';
import googleSheets from "./googleSheets";

const getRequest = async () => {

    const sheets = await googleSheets();
    const lastRequestPosRange = 'B10'
    const lastRequestPosReq = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range: lastRequestPosRange
    })

    // const [lastRequestPos] = lastRequestPosReq?.data?.values && lastRequestPosReq?.data?.values[0];
    // console.log(lastRequestPos);

    console.log(lastRequestPosReq?.data?.values);


    // const query = { id: 2 };

    // const { id } = query;
    // const range = `A${id}:B${id}`;


    // const responce = await sheets.spreadsheets.values.get({
    //     spreadsheetId: process.env.SHEET_ID,
    //     range
    // })

    // const [title, content] = responce?.data?.values && responce?.data?.values[0];

    // return {
    //     props: {
    //         title,
    //         content
    //     }
    // }
}

export default getRequest;