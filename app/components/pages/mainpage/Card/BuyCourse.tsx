'use client'
import { IncomePaymentData, PaymentData } from '@/app/api/UKassa/types';
import './BuyCourse.css';
import { useState } from "react";

export interface CourseBuyData {
    itemName: string;
    value: string;
};

interface userContactData {
    email: string;
    phone: string;
};

interface PaymentUserData extends userContactData, CourseBuyData { };

declare global {
    interface Window {
        YooMoneyCheckoutWidget: any;
        YooMoneyCheckout: any;
    }
};

const buyCourse = (confirmation_token: string) => {
    const encodedSuccessText = encodeURI('["Спасибо за покупку, Всё прошло успешно", "чек об оплате придёт на ваш email"]');
    const return_url = `${new URL(location.href).origin}?showModal=${encodedSuccessText}`
    const checkout = new window.YooMoneyCheckoutWidget({
        confirmation_token, // Токен, который перед проведением оплаты нужно получить от ЮKassa
        return_url, // Ссылка на страницу завершения оплаты, это может быть любая ваша страница
        // При необходимости можно изменить цвета виджета, подробные настройки см. в документации
        customization: {
            // Настройка цветовой схемы, минимум один параметр, значения цветов в HEX
            colors: {
                // Настройка способа отображения
                modal: true,
                //  Цвет платежной формы и ее элементов
                background: '#ee9e00', //Значение цвета в HEX
                text: '#FFFFFF',
                border: '#6c4800',
                control_secondarText: '#6c4800',
            },
        },
        error_callback: function (error: any) {
            console.error(error)
        }
    });
    //Код, который нужно выполнить после успешной оплаты.
    // checkout.on('success', () => {
    //     //Удаление инициализированного виджета
    //     checkout.destroy();
    //     location.href = `${return_url}?showModal=[Спасибо за покупку, Всё прошло успешно, чек об оплате придёт на указанный email]`;
    // });

    //Отображение платежной формы в контейнере
    checkout.render('modal_payment_form');
}

const initiateTransaction = async (paymentUserData: PaymentUserData) => {
    const { email, itemName, phone, value } = paymentUserData;
    const params = new URLSearchParams(
        {
            item: `пакет "${itemName}"`,
            value,
            email,
            phone,
        }
    )
    const res = await fetch(`/api/UKassa/createPayment?${params}`,
        {
            method: 'GET',
        }
    )
    if (res.status >= 200 && res.status <= 400) {
        const data: IncomePaymentData = await res.json();
        const { confirmation }: PaymentData = JSON.parse(data.paymentData);
        buyCourse(confirmation.confirmation_token);
    }
}

export const BuyCourse = (props: CourseBuyData) => {
    const [info, setInfo] = useState<userContactData>({
        email: '',
        phone: ''
    });
    const [errorFields, setErrorFields] = useState<Set<string>>(new Set);
    const [askUserData, setAskUserData] = useState<boolean>(true);

    const validatePhone = (phone: string) => {
        return String(phone)
            .toLowerCase()
            .match(
                /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            );
    }

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    const validate = () => {
        const errorList = new Set<string>();
        const { email, phone } = info;
        if (!email || !validateEmail(email)) errorList.add('email');
        if (!phone || !validatePhone(phone)) errorList.add('phone');
        setErrorFields(errorList);
        return errorList;
    }

    const handleClick = (callback: Function) => {
        const errorList = validate();
        if (!errorList.size) {
            setAskUserData(false);
            callback();
        }
    }

    const addInfo = (name: string, data: string) => {
        setInfo({ ...info, [name]: data })
    }

    return <div id='modal_payment_form'>
        {askUserData && <div className='buy-course'>
            <input
                className={`request-field ${errorFields.has('email') && 'error-field'}`}
                type="text"
                placeholder="Ваш email*"
                value={info.email}
                onChange={e => addInfo('email', e.target.value)}
            />
            <input
                className={`request-field ${errorFields.has('phone') && 'error-field'}`}
                type="text" placeholder="Ваш телефон*"
                value={info.phone}
                onChange={e => addInfo('phone', e.target.value)}
            />
            <input
                type="button"
                value="Далее →"
                className='next-button'
                onClick={() => handleClick(() => initiateTransaction({
                    ...props,
                    email: info.email,
                    phone: info.phone
                }))}
            />
        </div>}
    </div>
}