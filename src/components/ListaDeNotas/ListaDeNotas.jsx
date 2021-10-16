import React, { Component } from "react"
import CardNota from "../CardNota"
import { Grid, Box } from "@material-ui/core";

import "./style.css"

class ListaDeNotas extends Component {
    constructor() {
        super();
        this.state = {notas: []}
    }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this))
    }

    _novasNotas(notas) {
        this.setState({...this.state, notas})
    }

    render() {
        return (
            <Grid spacing={2} container>
                {this.state.notas.map((nota, index) => {
                    return (
                        <Box mb={3} display="flex" key={index}>
                            <CardNota
                                indice={index}
                                apagarNota={this.props.apagarNota}
                                titulo={nota.titulo}
                                text={nota.texto}
                                categoria={nota.categoria}/>
                        </Box>
                    )
                })}
            </Grid>
        )
    }
}

export default ListaDeNotas;
