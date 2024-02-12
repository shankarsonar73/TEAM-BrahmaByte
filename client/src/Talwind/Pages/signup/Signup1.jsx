import React from 'react';
import SignUpButton from './SignUpButton';
import download from './download.jpg';

const Signup1 = () => {
    // JSX content for the Signup1 component
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            
            <div className="min-w-screen-xl px-20 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h2 className="text-2xl ml-5 font-bold mb-4">SGGS-[Media]</h2>
                    <img src={download} alt='' className="w-full mb-4"/>
                    <form className="flex flex-col items-center">
                        <input type="text" name="username" placeholder="Enter Username" className="mb-4 p-2 border border-gray-300 rounded" required />
                        <input type="password" name="password" placeholder="Enter Password" className="mb-4 p-2 border border-gray-300 rounded" required />
                        {/* <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Log-in</button> */}
                        <div className="mt-4 ">
                        <SignUpButton/>
                            <p className="text-sm">Don't have an account?<button className="ml-2 text-blue-500">Sign-Up</button></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup1;
