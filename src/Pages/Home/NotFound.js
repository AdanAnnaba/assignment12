import React from 'react';
import notfound from '../../assets/404.jpg';

const NotFound = () => {
    return (
        <div className='max-h-5'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;