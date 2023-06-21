// AULA 134 - FOREACH

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1})${nome}`)
})
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) // O Método forEach Executa a funcão exibirAprovados em cada elemento do array aprovados.
