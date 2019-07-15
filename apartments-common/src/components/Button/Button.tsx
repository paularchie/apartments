import React from 'react';

import { ButtonProps } from '../../models/ButtonProps.type';

const Button = ({ text, clickHandler, isDisabled }: ButtonProps): JSX.Element => {

    return (
        <button
            onClick={clickHandler}
            disabled={isDisabled}
        >{text}</button>
    )
}

export default Button;