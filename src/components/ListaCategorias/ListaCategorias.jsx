import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class ListaCategorias extends Component {

    constructor() {
        super()
        this.state = {categorias: []}
    }

    componentDidMount() { // Para incrições e desinscrições
        this.props.categorias.inscrever(this._novasCategorias.bind(this))
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _eventoInput(e) {
        if (e.key == "Enter") {
            this.props.adicionarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <div>
                {this.state.categorias.map((categoria, index) => {
                    return (
                        <ul key={index}>
                            <li> <span> {categoria} </span> </li>
                        </ul>
                    )
                })}
                <TextField type="text" onKeyUp={this._eventoInput.bind(this)} id="outlined-basic" label="Pesquisar" variant="outlined" />
            </div>
        );
    }
}

export default ListaCategorias;
