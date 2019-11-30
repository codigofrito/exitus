import React from 'react';

import { Switch } from "./styles"


function SwitchButton() {

    return (

        <Switch>
            <input type="checkbox" id="isPerguntaObjetiva" className="bloqueavel" autoComplete="off" />
            <span></span>
        </Switch>
    );
}

export default SwitchButton;