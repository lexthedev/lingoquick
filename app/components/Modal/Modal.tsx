import { ReactNode } from "react";
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
    return <div className="modal z-10000">
        <h1 className="modal-header flex justify-between gap-[30px]">
            {headerText}
        </h1>
        <div className="close"
            onClick={() => onClose()}></div>
        <div className="mt-[15px]">
            {text}
        </div>
    </div>
}

export default Modal;