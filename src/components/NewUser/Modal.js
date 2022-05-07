import React from "react";
import Card from '../UI/Card';
import './Modal.css';

const Modal = (props) => {

    const content = [
        'Please, enter a valid name and age (non-empty values).',
        'Please, enter a valid name (non-empty value).',
        'Please, enter a valid age (> 0).'
    ];

    return (
        <div>
            <Card className="modal">
                <div className="modal__header">Invalid input</div>
                <p className="modal__text">{content[props.inputStatus]}</p>
                {props.children}
            </Card>
        </div>
    )
};

export default Modal;