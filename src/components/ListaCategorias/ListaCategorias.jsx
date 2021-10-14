import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class ListaCategorias extends Component {

    _eventoInput(e) {
        if (e.key == "Enter") {
            this.props.adicionarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <div>
                {this.props.categorias.categorias.map((categoria, index) => {
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
