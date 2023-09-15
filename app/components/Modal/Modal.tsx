'use client';
import { ReactNode, useLayoutEffect } from "react";
import '../Modal/Modal.css';

export interface ModalData {
    headerText: string;
    text: string | ReactNode;
}

interface ModalProps extends ModalData {
    onClose: () => void;
}

const Modal = (props: ModalProps) => {
    const { headerText, text, onClose } = props;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"
        }
    })
    return <div className="modal-wrapper">
        <div className="modal">
            <h1 className="modal-header flex justify-between gap-[30px]">
                {headerText}
            </h1>
            <div className="close"
                onClick={() => onClose()}></div>
            <div className="mt-[15px]">
                {text}
            </div>
        </div>
    </div>
}

export default Modal;
