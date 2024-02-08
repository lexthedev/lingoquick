import { NextResponse, NextRequest } from "next/server";
import { IncomePaymentData } from "../types";

type ResponseData = {
    message: string
}

const ukassaPaymentUrl = process.env.UKASSA_API_URL || '';
const VAT_CODE = 1;
const CURRENCY = 'RUB';

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     res.status(200).json({ message: 'Hello from Next.js!' })
// }

// export async function GET(request) { }

// export async function GET() {
//     return NextResponse.json({ h: 'healthcare;;o!' })
// }

// http://localhost:3000/api/UKassa/createPayment?value=213&item=%D0%BF%D0%B0%D0%BA%D0%B5%D1%82&email=bafey66320@namewok.com&phone=79994445523

export const GET = async (
    req: NextRequest,
    res: NextResponse<ResponseData>
) => {
    const { searchParams } = req.nextUrl;

    const totalValue = searchParams.get('value');
    const item = searchParams.get('item');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');

    const shopIdentificatior = process.env.UKASSA_SHOP_ID;
    const shopSecretKey = process.env.UKASSA_SHOP_SECRET_KEY;

    const authDataString = `${shopIdentificatior}:${shopSecretKey}`;

    const requestBody = {
        amount: {
            value: totalValue,
            currency: CURRENCY
        },
        confirmation: {
            type: "embedded"
        },
        receipt: {
            customer: {
                email: email,
                phone: phone,
                tax_system_code: 2,
            },
            items: [{
                description: item,
                amount: {
                    value: totalValue,
                    currency: CURRENCY
                },
                vat_code: VAT_CODE,
                quantity: 1,
            }]
        },
        capture: true,
        description: `Пакет ${item} кол-во: ${1}, стоимость ${totalValue}. Email: ${email},  телефон: ${phone}`
    };

    console.log('waiting for fetch payment request with data');
    console.log(JSON.stringify(requestBody, null, 4));

    const paymentReqResponse = await fetch(ukassaPaymentUrl, {
        method: 'POST',
        // mode: 'cors',
        // cache: "no-cache",
        headers: {
            Authorization: `Basic ${btoa(authDataString)}`,
            'Idempotence-Key': new Date().toString(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })

    const paymentData: IncomePaymentData = await paymentReqResponse.json()

    console.log('already fetched paymentData is', JSON.stringify(paymentData, null, 4));

    return NextResponse.json({ paymentData: JSON.stringify(paymentData, null, 4) })
}
