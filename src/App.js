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

    deletarNota(index) {
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index, 1)
        console.log("Deletar");
        this.setState({notas: arrayNotas})
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item lg={2}>
                    <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                </Grid>
                <Grid item lg={10}>
                    <ListaDeNotas
                    apagarNota={this.deletarNota.bind(this)}
                    notas={this.state.notas} />
                </Grid>
            </Grid>
        );
    }
}

export default App;
