let scanf = require('scanf');
//let categoria = imput('Digite sua Categoria: ')

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]

const listar_por_categoria = categoria => {
    for (let i = 0; i < produtos.length; i++) {
      if (categoria == produtos[i].categoria) {
        console.log(produtos[i]);
      }
    }
  };
  
listar_por_categoria("Eletrônico");

/*
  for (let i = 0; i < produtos.length; i++) {
    if (categoria == produtos[i].categoria) {
      console.log(produtos[i]);
    }
  }
*/
