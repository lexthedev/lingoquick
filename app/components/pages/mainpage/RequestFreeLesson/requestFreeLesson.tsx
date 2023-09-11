"use client";
import { useState } from "react";
import './requestFreeLesson.css';
import { sheets_v4 } from "googleapis";
import addRequest from "@/app/services/addRequest";

interface RequestFreeLessonProps {
    onAddRequest: (data: StudentInfo) => void;
}

export interface StudentInfo {
    name: string;
    age: number;
    target: string;
    parent: string;
    phone: string;
    email: string;
}

export const RequestFreeLesson = (props: RequestFreeLessonProps) => {

    const { onAddRequest } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [studentInfo, setStudentInfo] = useState<StudentInfo>(
        {
            name: '',
            age: 0,
            target: '',
            parent: '',
            phone: '',
            email: ''
        }
    );

    const addInfo = (type: keyof StudentInfo, info: StudentInfo[typeof type]) => {
        setStudentInfo({ ...studentInfo, [type]: info });
    }

    const addNewRequest = () => {
        onAddRequest(studentInfo);
    }

    return <div>
        {currentPage === 1 &&
            <div className="request-page">
                <div className="request-questionnaire">
                    <input className="request-field" type="text" placeholder="Ваше имя" onChange={e => addInfo('name', e.target.value)} />
                    <input className="request-field" type="number" placeholder="Ваш возраст" onChange={e => addInfo('age', e.target.value)} />
                    <select className="request-field" placeholder="Цель обучения" defaultValue={""} onChange={e => addInfo('target', e.target.value)} >
                        <option value="" disabled >{"Цель обучения"}</option>
                        <option value="Нравится изучать языки">{"Нравится изучать языки"}</option>
                        <option value="Подготовка к огэ">{"Подготовка к огэ"}</option>
                        <option value="Подготовка к ВПР">{"Подготовка к ВПР"}</option>
                        <option value="Повысить успеваемость учащегося">{"Повысить успеваемость учащегося"}</option>
                        <option value="Для путешествий">{"Для путешествий"}</option>
                        <option value="Преодолеть языковой барьер">{"Преодолеть языковой барьер"}</option>
                    </select>
                </div>
                <div className="request-button">
                    <input className="navigate-button next-button" type="button" value="Далее →" onClick={() => setCurrentPage(2)} />
                </div>
            </div>
        }
        {currentPage === 2 &&
            <div className="request-page">
                <div className="request-questionnaire">
                    <input className="request-field" type="text" placeholder="Имя родителя (можете оставить пустым)" onChange={e => addInfo('parent', e.target.value)} />
                    <input className="request-field" type="text" placeholder="Номер телефона" onChange={e => addInfo('phone', e.target.value)} />
                    <input className="request-field" type="text" placeholder="Электронная почта" onChange={e => addInfo('email', e.target.value)} />
                </div>
                <div>
                    <div className="request-button">
                        <input className="navigate-button back-button" type="button" value="←" onClick={() => setCurrentPage(1)} />
                        <input className="navigate-button next-button" type="button" value="Оставить заявку" onClick={() => addNewRequest()} />
                    </div>
                </div>
            </div>
        }
    </div>
}
