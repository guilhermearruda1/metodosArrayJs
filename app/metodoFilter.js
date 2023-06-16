const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click',
    filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value

    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponibilidade() : livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalLivros(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalLivrosDiponiveis(valorTotal)
    }
}

function filtrarDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDiponiveis(valorTotal) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}