import React from 'react';

const Loading = () => {
    return (

        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        // <div className='h-screen flex justify-center items-center'>
        //     <button className="btn loading">Loading</button>
        // </div>
    );
};

export default Loading;