export default class ListaNotas {
    constructor() {
        this.notas = []
        this._inscritos = [];
    }

    adicionarNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
        this.notas.push(novaNota)
    }

    deletarNota(indice) {
        this.notas.splice(indice, 1)
    }

    inscrever(func) {
        this._inscritos.push(func)
    }

    notificar() {
        this._inscritos.forEach(func => func(this.categorias))
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}
