import React from 'react';

const FormRenderError = ({ meta }) => {
    return (
        <>
            {meta.error && meta.touched ? (
                <small className="errorMess">{meta.error}</small>
            ) : (
                ''
            )}
        </>
    );
};

export default FormRenderError;

// const renderError = (meta) => {
//     if (meta.error && meta.touched) {
//         return <small className="errorMess">{meta.error}</small>;
//     }
// };
