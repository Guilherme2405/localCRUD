 class Produto {
    constructor(nome, preco, descricao, estoque) {
        this.id = Math.random().toString(36).substr(2, 9); // Gerar um ID único
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.estoque = estoque;
        
    };
};

// Função para adicionar um produto
 document.getElementById('cadastroProduto').addEventListener('submit', function(e){
    // Obter os valores dos campos de entrada
    e.preventDefault(); // Evitar o envio do formulário
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const descricao = document.getElementById('descricao').value;
    const estoque = document.getElementById('estoque').value;
    console.log(nome, preco, descricao, estoque)
    const produto = new Produto(nome, preco, descricao, estoque);
    console.log(produto);
    produtos.push(produto);// Adicionar o produto ao array de produtos
    // Salvar o array atualizado no localStorage
    localStorage.setItem('produtos', JSON.stringify(produtos));

 });

function tabelaProdutos() {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach((produtos,indice) => {
        
    document.getElementById('tabelaBody').innerHTML +=
        `
        <tr>
        <td class="valores" value="${indice}">${indice}</td>

        <td class="valores">${produtos.id}</td>
        <td class="valores">${produtos.nome}</td>
        <td class="valores">${produtos.descricao}</td>
        <td class="valores">${produtos.preco}</td>
        <td class="valores">${produtos.estoque}</td>
        <td class="botoes"><button class="editaItem">editar</button></td>
        <td class="botoes"><button class="removeItem" type="button"  colspan="3">remover</button></td>
        </tr>
        `
    });

};

function removeProdutos() {
    document.querySelectorAll(".removeItem").forEach(function(value,indice){
        value.addEventListener('click',function(e){
        e.preventDefault();
        const produtos = (JSON.parse(localStorage.getItem('produtos')) || []);
        produtos.splice(indice,1);// remove o produto ao array de produtos
        localStorage.setItem('produtos', JSON.stringify(produtos));// Salvar o array atualizado no localStorage
        });
        
    });
};

function editaProdutos() {
document.querySelectorAll(".editaItem").forEach(function(value,indice) {
    value.addEventListener('click',function(e){

        e.preventDefault();
        const divItemEditado = document.createElement("div"); // criando elementos div
        divItemEditado.classList.add('editarItem'); //adicionando classe as divs
        document.querySelector('#editorDeItens').innerHTML =  
        `
        <form action="" method="POST">
        <h2>Editar Produto</h2>
    
        <label for="editaNome">Nome:</label>
        <input type="text" id="editaNome" name="nome"><br><br>
    
        <label for="editaDescricao">Descrição:</label>
        <textarea id="editaDescricao" name="descricao" rows="1"></textarea><br><br>
    
        <label for="editaPreco">Preço (R$):</label>
        <input type="number" id="editaPreco" name="preco" step="0.01" min="0"><br><br>
    
        <label for="editaEstoque">Estoque:</label>
        <input type="number" id="editaEstoque" name="estoque" min="0"><br><br>
    
        <button type="submit" id="salvaItem">Salvar Alterações</button>
        </form>
        `;
       

        document.getElementById('salvaItem').addEventListener('click', function(e){
            const editaNome = document.getElementById('editaNome').value;
            const editaDescricao = document.getElementById('editaDescricao').value;
            const editaPreco = document.getElementById('editaPreco').value;
            const editaEstoque = document.getElementById('editaEstoque').value;

            const produtos = (JSON.parse(localStorage.getItem('produtos')) || []);
            
            editaNome !== '' ? produtos[indice].nome = editaNome : produtos[indice].nome = produtos[indice].nome;
            editaDescricao !== '' ? produtos[indice].descricao = editaDescricao : produtos[indice].descricao = produtos[indice].descricao;
            editaPreco !== '' ? produtos[indice].preco = editaPreco : produtos[indice].preco = produtos[indice].preco;
            editaEstoque !== '' ? produtos[indice].estoque = editaEstoque : produtos[indice].estoque = produtos[indice].estoque;
            
            localStorage.setItem('produtos', JSON.stringify(produtos));
            console.dir(produtos[indice]);
                
        });
        const editor = document.querySelector('#editorDeItens')
        editor.style.backgroundColor = "white";
    })
})

}

tabelaProdutos(); // Função para adicionar itens a tabela de produtos
editaProdutos(); // Função para editar itens da tabela de produtos
removeProdutos();// Função para remover itens da tabela de produtos












    
        


