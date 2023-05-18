class Tarefas {
  constructor() {
    this.lista = [];
  }

  adicionar(descricao) {
    const tarefa = { descricao: descricao, concluida: false}
    this.lista.push(tarefa)
    return tarefa
  }

  remover(indice) {
    this.lista.splice(indice)
  }

  todas() {
    return this.lista;
  }

  marcarConcluida(indice) {
   return this.lista[indice].concluida = true
  }
}

module.exports = Tarefas;