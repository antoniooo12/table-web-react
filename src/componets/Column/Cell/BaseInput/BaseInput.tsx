import React from 'react';

export type TBaseInput = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const BaseInput: React.FC<TBaseInput> = (props) => {
    return (
        <input {...props}/>
    );
};

export {BaseInput};