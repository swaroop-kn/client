import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage =  () => {
    return (
        <div>
            Im some other page!
            <Link to="/">GO Back Home</Link>
        </div>
    );
};

export default OtherPage;