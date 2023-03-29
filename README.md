# WaiterAPP
Um aplicativo de gerenciamento de comandas para Restaurantes e Lanchonetes

## Como Rodar

No seu terminal rode:

    git clone git@github.com:fcrfabiano/WaiterAPP.git
    cd WaiterAPP
    npm install
    
Mude o nome do arquivo .env.example para .env e coloque o endereço do cluster do mongodb:

    MONGOOSE=
    
Rode o servidor:

    npm run dev

Rode a documentação:

    npm run doc

Para ver ao backend acesse: [Documentação](http://localhost:3001/)
Para ver a documentação acesse: [Documentação](http://localhost:3000/)

# Categorias

- Não deve ser possível cadastrar uma categoria já existente.
- É possível cadastrar novas categorias.
- É possível listar todas as categorias.
- É possível listar os produtos por categoria.

# Produtos

- É possível cadastrar novos produtos.
- É possível fazer upload da imagem do produto.
- É possível listar todos os produtos.

# Pedidos

- É possível criar um pedido.
- É possível deletar um pedido.
- É possível atualizar o status do pedido.
- É possível listar todos os pedidos.
