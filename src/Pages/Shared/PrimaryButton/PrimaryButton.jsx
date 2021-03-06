import React from 'react';

const PrimaryButton = ({children}) => {
    return (
         <button className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white font-bold">{children}</button>
    );
};
export default PrimaryButton;