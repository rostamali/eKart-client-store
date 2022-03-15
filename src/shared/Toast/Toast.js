import React from 'react';
import { ToastContainer } from 'react-toastify';

const Toast = () => {
    return (
        <div className='ekart__toast'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Toast;