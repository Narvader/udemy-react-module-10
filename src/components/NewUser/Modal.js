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
            <div className="modal__overlay" onClick={props.onConfirm}></div>
            <Card className="modal">
                <div className="modal__header">Invalid input</div>
                <p className="modal__text">{content[props.inputStatus]}</p>
                {props.children}
                <div className="modal__btn">
                    <button type="button" className='cta-btn' onClick={props.onConfirm}>Okay</button>
                </div>
            </Card>
        </div>
    )
};

export default Modal;