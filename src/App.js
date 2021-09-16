import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"

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
            <section>
                <FormularioCadastro criarNota={this.criarNota.bind(this)} />
                <ListaDeNotas notas={this.state.notas} />
            </section>
        );
    }
}

export default App;
