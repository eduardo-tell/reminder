import React, { Component } from "react"
import CardNota from "../CardNota"
import { Grid, Box } from "@material-ui/core";

import "./style.css"

class ListaDeNotas extends Component {
    render() {
        return (
            <Grid spacing={2}>
                {this.props.notas.map((nota, index) => {
                    return (
                        <Box mb={3} display="flex">
                            <CardNota titulo={nota.titulo} text={nota.texto}  key={index} />
                        </Box>
                    )
                })}
            </Grid>
        )
    }
}

export default ListaDeNotas;
