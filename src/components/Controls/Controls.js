import React, { useState } from 'react';

const Controls = (props) => {
    let [message, setMessage] = useState(new SpeechSynthesisUtterance());

    const changeHandler = (event) => {
        message[event.target.name] = event.target.value;
        setMessage(message);
    };

    const convertTextToSpeech = (event) => {
        event.preventDefault();
        speechSynthesis.speak(message);
    };

    return (
        <form onChange={(event) => changeHandler(event)}>
            <textarea
                rows="10"
                className="form-control mt-5"
                name="text"
                placeholder="Enter text for speech......" />
            <input
                type="number"
                className="form-control mt-2"
                name="volume"
                placeholder="Set volume 0 to 1"
                step="0.1"
                max="1"
            />
            <input
                type="number"
                className="form-control mt-2"
                name="rate"
                placeholder="Set rate 0.1 to 10"
                max="10"
            />
            <input
                type="number"
                className="form-control mt-2"
                name="pitch"
                placeholder="Set pitch 0 to 2"
                max="2"
            />
            <button
                className="form-control btn btn-md btn-success mt-2"
                onClick={(event) => convertTextToSpeech(event)}>
                Test
                    </button>
        </form>
    );
};

export default Controls;
