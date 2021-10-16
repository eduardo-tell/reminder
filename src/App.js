import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core"
import ListaCategorias from "./components/ListaCategorias";
import Categorias from "./dados/Categorias";
import ListaNotas from "./dados/Notas";

class App extends Component {

    constructor() {
        super()
        // this.state = {
            // notas: [],
            // categorias: []
        // }
        this.categorias = new Categorias();
        this.notas = new ListaNotas();
    }

    // Virou um método dentro da classe nota
    // criarNota(titulo, texto, categoria) {
    //     const novaNota = {titulo, texto, categoria}
    //     const mpvoArrayNotas = [...this.state.notas, novaNota]
    //     const novoEstado = {
    //         notas: mpvoArrayNotas
    //     }
    //     this.setState(novoEstado)
    // }

    // deletarNota(index) {
    //     let arrayNotas = this.state.notas;
    //     arrayNotas.splice(index, 1)
    //     console.log("Deletar");
    //     this.setState({notas: arrayNotas})
    // }

    componentDidMount() {
        this.props.notas.inscrever(this._novasNotas.bind(this))
    }

    _novasNotas(notas) {
        this.setState = {...this.notas, notas}
    }

    render() {
        return (
            <Grid container spacing={2}>
                <Grid item lg={2}>
                    <FormularioCadastro
                        categorias={this.categorias}
                        criarNota={this.notas.adicionarNota.bind(this.notas)} />
                </Grid>
                <Grid item lg={10}>
                    <ListaCategorias
                        adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
                        categorias={this.categorias} />

                    <ListaDeNotas
                        apagarNota={this.notas.apagarNota}
                        notas={this.notas} />
                </Grid>
            </Grid>
        );
    }
}

export default App;
