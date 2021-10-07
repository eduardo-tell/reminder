import React, { Component } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./estilo.scss"

class FormularioCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
    }

    _mudancaTitulo(evento) {
        this.titulo = evento.target.value;
    }

    _mudancaTexto(evento) {
        this.texto = evento.target.value;
    }

    _mudancaCategoria(evento) {
        console.log(evento)
        this.categoria = evento.target.value;
    }

    _criarNota(evento) {
        evento.preventDefault()
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }

    render() {
        return (
            <form className="form" onSubmit={this._criarNota.bind(this)}>
                <TextField type="text" id="outlined-basic" label="Titulo" variant="outlined" onChange={this._mudancaTitulo.bind(this)} />
                 <TextField
                    onChange={this._mudancaTexto.bind(this)}
                    label="Escreva sua nota"
                    multiline
                    maxRows={4}
                />
                <select name="" id="" onChange={this._mudancaCategoria.bind(this)}>
                    <option value=""></option>
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <option key={index} value={categoria} > {categoria}</option>
                        )
                    })}
                </select>
                <Button type="submit" variant="outlined">Adicionar</Button>
            </form>
        )
    }
}

export default FormularioCadastro;
