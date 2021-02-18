import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
    return ReactDOM.createPortal(
        <div>
            DEmo modal
        </div>,
        document.getElementById('modal')
    )
}

export default Modal