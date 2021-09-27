import React, { Component } from 'react';
import TextField from '@mui/material/TextField';

class ListaCategorias extends Component {

    _eventoInput(e) {
        console.log(e)
        if (e.key == "Enter") {
            console.log("Categoria")
        }
    }

    render() {
        return (
            <form>
                <ul>
                    <li> <span> Item </span> </li>
                </ul>
                <TextField type="text" onKeyUp={this._eventoInput.bind(this)} id="outlined-basic" label="Pesquisar" variant="outlined" />
            </form>
        );
    }
}

export default ListaCategorias;
