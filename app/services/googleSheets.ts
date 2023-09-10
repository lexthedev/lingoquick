import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';
import googleAuthService from './googleService';

const googleSheets = async () => {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const auth = googleAuthService(scopes);

    const sheets = google.sheets({ version: 'v4', auth });

    return sheets;
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

export default googleSheets;