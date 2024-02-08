'use client';
import { MouseEvent, ReactNode, useLayoutEffect } from "react";
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

    const handleClose = (e: MouseEvent) => {
        e.stopPropagation();
        if (!e.currentTarget.classList.contains('modal')) { onClose() }
    }

    return <div className="modal-wrapper"
        onClick={handleClose}
    >
        <div className="modal" onClick={handleClose}>
            <h1 className="modal-header">
                {headerText}
            </h1>
            <div className="close"
                onClick={() => onClose()}></div>
            <div className="info">
                {text}
            </div>
        </div>
    </div>
}

export default Modal;
