import React from 'react';
import './button.style.scss';

const ButtonP = ({children}) => {
    return (
        <div className="btn-content">
            {children}
        </div>
    )
}

export default ButtonP
