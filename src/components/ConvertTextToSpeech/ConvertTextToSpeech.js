
import React from 'react';

const convertTextToSpeech = (msg) => {
    speechSynthesis.speak(msg);
}

const ConvertTextToSpeech = (props) => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = "Hello Ram krishan bhambri";
    msg.volume = 1; // 0 to 1
    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1.5; // 0 to 2
    return (
        <div className="layout col-md-12 text-center">
            <button className="btn btn-md btn-primary" onClick={() => convertTextToSpeech(msg)}>Test it</button>
        </div>
    );
};

export default ConvertTextToSpeech;
