export default class ListaNotas {
    constructor() {
        this.notas = []
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1)
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}
