// SignUpButton.js

import React from 'react';

const SignUpButton = () => {
    return (
        <div className="buttons">
            <button className="blob-btn relative ml-10 z-10 inline-block py-1 px-6 text-lg font-bold uppercase text-blue-600 bg-transparent outline-none transition duration-500 ease-in-out transform rounded-full border-2 border-blue-600 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-transparent">
                <div className="blob-btn__inner">
                    <div className="blob-btn__blobs">
                        <div className="blob-btn__blob"></div>
                        <div className="blob-btn__blob"></div>
                        <div className="blob-btn__blob"></div>
                        <div className="blob-btn__blob"></div>
                    </div>
                </div>
                Sign Up
            </button>
        </div>
    );
};

export default SignUpButton;
