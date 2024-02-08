export interface PaymentData {
    id: string,
    status: string,
    amount: {
        value: number,
        currency: string
    },
    description: string,
    recipient: {
        account_id: number,
        gateway_id: number
    },
    created_at: Date,
    confirmation: {
        type: string,
        confirmation_token: string
    },
    test: boolean,
    paid: boolean,
    refundable: boolean,
    metadata: any
}

export interface IncomePaymentData {
    paymentData: string;
}