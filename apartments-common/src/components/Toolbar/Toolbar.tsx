import React from 'react';

import './Toolbar.scss';


const Toolbar = ({ children }: any): JSX.Element => (
    <div className="toolbar">
        {children}
    </div>
);

export default Toolbar;