import React, { Component } from "react"
import CardNota from "../CardNota"
import { Grid, Box } from "@material-ui/core";

import "./style.css"

class ListaDeNotas extends Component {
    render() {
        return (
            <Grid spacing={2} container>
                {this.props.notas.map((nota, index) => {
                    return (
                        <Box mb={3} display="flex" key={index}>
                            <CardNota
                            apagarNota={this.props.apagarNota}
                            titulo={nota.titulo} text={nota.texto}/>
                        </Box>
                    )
                })}
            </Grid>
        )
    }
}

export default ListaDeNotas;
