import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core"

class App extends Component {

    constructor() {
        super()
        this.state = {
            notas: []
        }
    }

    criarNota(titulo, texto) {
        const novaNota = {titulo, texto}
        const mpvoArrayNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas: mpvoArrayNotas
        }
        this.setState(novoEstado)
    }

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid lg={2}>
                    <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                </Grid>
                <Grid lg={12}>
                    <ListaDeNotas notas={this.state.notas} />
                </Grid>
            </Box>
        );
    }
}

export default App;
