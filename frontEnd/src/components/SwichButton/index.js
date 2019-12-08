import React from 'react';

import { Switch} from "./styles"

const SwitchButton = (props) => {
    return (
        <Switch>
            <label>
                <input onchange={props.change} onclick={props.click} type="checkbox" id="possuiDeficiencia" autocomplete="off" />
                <span></span>
            </label>
        </Switch>
    );
}

export default SwitchButton;