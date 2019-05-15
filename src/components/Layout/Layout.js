
import React from 'react';
import Heading from '../Heading/Heading';
import Controls from '../Controls/Controls';

const Layout = (props) => {
    return (
        <div className="layout col-md-10 offset-1 mt-5 text-center">
            <div className="message-controls col-md-6 offset-3">
                <Heading heading="Text To Speech" />
                <Controls />
            </div>
        </div>
    );
};

export default Layout;
