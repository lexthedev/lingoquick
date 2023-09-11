"use client";
import { useState } from "react";
import './requestFreeLesson.css';

interface RequestFreeLessonProps {
    onAddRequest: (data: StudentInfo) => void;
}

export interface StudentInfo {
    name: string;
    age: number | null;
    target: string;
    parent: string;
    phone: string;
    email: string;
}

export const RequestFreeLesson = (props: RequestFreeLessonProps) => {

    const { onAddRequest } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [errorFields, serErrorFields] = useState<Set<string>>(new Set());
    const [studentInfo, setStudentInfo] = useState<StudentInfo>(
        {
            name: '',
            age: null,
            target: '',
            parent: '',
            phone: '',
            email: ''
        }
    );

    const validate = () => {
        const errorList = new Set<string>();
        if (currentPage === 1) {
            const { name, age, target } = studentInfo;
            if (!name) errorList.add('name');
            if (!age) errorList.add('age');
            if (!target) errorList.add('target');
        }
        if (currentPage === 2) {
            const { phone, email } = studentInfo;
            if (!phone) errorList.add('phone');
            if (!email) errorList.add('email');
        }
        serErrorFields(errorList);
        return errorList;
    }

    const handleClick = (callback: Function) => {
        const errorList = validate();
        !errorList.size && callback();
    }

    const addInfo = (type: keyof StudentInfo, info: StudentInfo[typeof type]) => {
        if (errorFields.has(type) && !!info) {
            const errors = new Set(errorFields);
            errors.delete(type);
            serErrorFields(errors);
        }
        setStudentInfo({ ...studentInfo, [type]: info });
    }

    const addNewRequest = () => {
        onAddRequest(studentInfo);
    }

    return <div>
        {currentPage === 1 &&
            <div className="request-page">
                <div className="request-questionnaire">
                    <input className={`request-field ${errorFields.has('name') && 'error-field'}`} type="text" placeholder="Ваше имя*" value={studentInfo.name} onChange={e => addInfo('name', e.target.value)} />
                    <input className={`request-field ${errorFields.has('age') && 'error-field'}`} type="number" placeholder="Ваш возраст*" value={studentInfo.age as number} onChange={e => addInfo('age', e.target.value)} />
                    <select className={`request-field ${errorFields.has('target') && 'error-field'}`} placeholder="Цель обучения*" defaultValue={""} value={studentInfo.target} onChange={e => addInfo('target', e.target.value)} >
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
                    <input className="navigate-button next-button" type="button" value="Далее →" onClick={() => handleClick(() => setCurrentPage(2))} />
                </div>
            </div>
        }
        {currentPage === 2 &&
            <div className="request-page">
                <div className="request-questionnaire">
                    <input className="request-field" type="text" placeholder="Имя родителя (можете оставить пустым)" onChange={e => addInfo('parent', e.target.value)} />
                    <input className={`request-field ${errorFields.has('phone') && 'error-field'}`} type="text" placeholder="Номер телефона" value={studentInfo.phone} onChange={e => addInfo('phone', e.target.value)} />
                    <input className={`request-field ${errorFields.has('email') && 'error-field'}`} type="text" placeholder="Электронная почта" value={studentInfo.email} onChange={e => addInfo('email', e.target.value)} />
                </div>
                <div>
                    <div className="request-button">
                        <input className="navigate-button back-button" type="button" value="←" onClick={() => setCurrentPage(1)} />
                        <input className="navigate-button next-button" type="button" value="Оставить заявку" onClick={() => handleClick(() => addNewRequest())} />
                    </div>
                </div>
            </div>
        }
    </div>
}
