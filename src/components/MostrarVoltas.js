import react, { useState, useEffect } from "react"

//Componente que Seta a quantidade de voltas.
const MostrarVoltas = (props) => {
    return <p className="voltas">
        <span >{props.voltas} </span> <br />
        Voltas
    </p>
}

export default MostrarVoltas