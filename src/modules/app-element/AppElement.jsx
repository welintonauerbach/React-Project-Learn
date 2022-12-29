import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
<div>
<label type="text">{props.label}</label>
<input type="text" placeholder="Digite aqui" value={props.textValue}/>
</div>