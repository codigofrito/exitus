import React from 'react';

function SwitchButton() {

    return (

        <label className="switch">
            <input type="checkbox" id="isPerguntaObjetiva" className="bloqueavel" autoComplete="off" />
            <span className="slider round"></span>
        </label>
    );
}

export default SwitchButton;