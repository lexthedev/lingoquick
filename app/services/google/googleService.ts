import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

export const googleAuthService = (scopes: string[]) => {

    const auth = new GoogleAuth({
        credentials: {
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            // project_id: process.env.GOOGLE_PROJECT_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY
        },
        scopes
    });

    return auth
    // const query = { id: 2 };

    // const { id } = query;
    // const range = `A${id}:B${id}`;


    // const responce = await sheets.spreadsheets.values.get({
    //     spreadsheetId: process.env.REQUESTS_SHEET_ID,
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
