import React from 'react';
import Loading from '../../Images/loader.gif';
const Loader = () => {
    return (
        <>
        <img
            src={Loading}
            style={{ width: '200px', margin: 'auto', display: 'block' }}
            alt='Loading'
        />   
        </>
    )
}

export default Loader;
