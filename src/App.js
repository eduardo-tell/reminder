import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core"
import ListaCategorias from "./components/ListaCategorias";

class App extends Component {

    constructor() {
        super()
        this.state = {
            notas: [],
            categorias: ["Categoria 01", "Categoria 02"]
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

    adicionarCategoria(titulo) {
        const novacategoria= {titulo, texto}
        const novoArraycategoria = [...this.state.categorias, novacategoria]
        const novoEstado = {
            notas: novoArraycategoria
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
                    <FormularioCadastro
                        adicionarCategoria={this.adicionarCategoria.bind(this)}
                        criarNota={this.criarNota.bind(this)} />
                </Grid>
                <Grid item lg={10}>
                    <ListaCategorias
                        categorias={this.state.categorias} />

                    <ListaDeNotas
                        apagarNota={this.deletarNota.bind(this)}
                        notas={this.state.notas} />
                </Grid>
            </Grid>
        );
    }
}

export default App;
