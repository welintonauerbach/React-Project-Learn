import React from "react";

// App frame container - Exemplo
const AppControlFrame = props => (

    <section className="container" hidden={!props.appEnable}>
        <div className="app-control-frame">
            <h3>{props.frameName}</h3>
            {props.children}
        </div>
    </section>);

export default AppControlFrame;