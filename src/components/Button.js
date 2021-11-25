import react, { useState, useEffect } from "react"

// Componente que retorna o HTML button.
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

export default Button