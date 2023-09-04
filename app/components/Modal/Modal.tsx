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
    return <div className="modal z-10">
        <h1 className="flex justify-between">
            <div>{headerText}</div>
            <div className="close"
                onClick={() => onClose()}></div>
        </h1>
        <div className="mt-[15px]">
            {text}
        </div>
    </div>
}

export default Modal;