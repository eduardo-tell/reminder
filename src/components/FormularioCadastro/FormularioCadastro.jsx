import React, { Component } from "react"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = "";
        this.texto = "";
    }

    _mudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    _mudancaTexto(evento) {
        this.texto = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault()
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form onSubmit={this._criarNota.bind(this)}>
                <input type="text" placeholder="Titulo" onChange={this._mudancaTitulo.bind(this)}/>
                <textarea rows={15} onChange={this._mudancaTexto.bind(this)} placeholder="Escreva sua nota" ></textarea>
                <button>Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro;
