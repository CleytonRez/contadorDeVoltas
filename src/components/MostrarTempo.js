import react, { useState, useEffect } from "react"

//Componente que Seta o tempo contando.
const MostrarTempo = (props) => {

    // Variavel contendo o tempo de props.
    const tempo = props.tempo

    // Variavel contendo o tempo sendo contado.
    const minutos = Math.round(tempo / 60)
    const segundos = tempo % 60 // Contem o segundos.
    const minutosStr = minutos < 10 ? '0' + minutos : minutos // Converte os minutos em Strings e Concatena um "0" na frente quando precisar.
    const segundosStr = segundos < 10 ? '0' + segundos : segundos // Converte os segundos em Strings e Concatena um "0" na frente quando precisar.

    return <p className="tempo">
        <span>{`${minutosStr}:${segundosStr}`}</span> <br />
        Tempo médio de volta
    </p>
}

export default MostrarTempo;
