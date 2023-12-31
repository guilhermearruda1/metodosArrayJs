const elementoInserirLivros = document.getElementById('livros')
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')


function exibirLivros(listaLivros){
    elementoInserirLivros.innerHTML = ''
    elementoValorTotal.innerHTML = ''

    listaLivros.forEach(livro => {
        let disponibilidade = verificaDisponibilidadeLivro(livro)
        elementoInserirLivros.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}

function verificaDisponibilidadeLivro(livro) {
  if(livro.quantidade > 0){
    return 'livro__imagens'
  } else {
    return 'livro__imagens indisponivel'
  }
}
