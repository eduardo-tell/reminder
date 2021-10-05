import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class ListaCategorias extends Component {

    _eventoInput(e) {
        console.log(e)
        if (e.key == "Enter") {
            console.log("Categoria")
            this.props.adicionarCategoria(e.target.value)
        }
    }

    render() {
        return (
            <form>
                {this.props.categorias.map((categoria, index) => {
                    return (
                        <ul>
                            <li> <span> {categoria} </span> </li>
                        </ul>
                    )
                })}
                <TextField type="text" onKeyUp={this._eventoInput.bind(this)} id="outlined-basic" label="Pesquisar" variant="outlined" />
            </form>
        );
    }
}

export default ListaCategorias;
