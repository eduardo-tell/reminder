import React, { Component } from "react"
import CardNota from "./CardNota"

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {
                    Array.of("trabalho", "trabalho").map((categoria) => {
                        return (
                            <li>
                                <span>{categoria}</span>
                                <CardNota/>
                            </li>
                        )
                    })
                };
            </ul>
        )
    }
}

export default ListaDeNotas;
