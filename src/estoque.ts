interface IProdutoImagem {
  url: string;
  descricao: string;
}

interface IProduto {
  id: number;
  nome: string;
  url: string;
  preco: number;
  descricao: string;
  tamanhos_disponiveis: string[] //Array<string>
  quantidade_disponivel: number;
  imagens: IProdutoImagem[];
}


const produtosInitial: IProduto[] = [
  {
    id: 1,
    nome: "Calça Black Jeans Feminina Skinny Preto Pool",
    url: "camiseta-lipp",
    preco: 55.9,
    descricao: "Uma calça muito confortável e com um design moderno",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/8388d930f7a0ad0df4cafcb55355ac1ccc72d06a.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/b923e81e5fdd174a1ef2a331ea550e61e6e1a826.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/b09be076feec0d04aac1abd5e023dd6a2a8d7bac.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/da6229a8a90d1da92119908fb0408d5bb56a3926.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/13776541005/portrait/8809f8996405bd25a759c8e837f24adebc53609b.jpg",
        descricao: "lorem ipsum",
      },
    ],
  },
  {
    id: 2,
    nome: "Camisa Manga Curta Masculina com Bolso Azul Pool",
    url: "camiseta-lipp",
    preco: 75.99,
    descricao: "Uma camisa diferenciada para ambientes mais quentes",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/57c98408b64b494992da8f5a0661631b07b24e3d.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/332f4f3ed37af0e5a04fc6778e363e34a549d8a8.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/c5652d6795802c161e4a618479c005b013b00f86.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/b72fb1894892584a8332cbf1600f5828b756f7e8.jpg",
        descricao: "lorem ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14190621002/portrait/eccb2509717f65a32eb0eca62de9cf23d2dba50f.jpg",
        descricao: "lorem ipsum",
      },
    ],
  },
  {
    id: 3,
    nome: "Vestido Curto Feminino Evasê Recorte Floral Natural",
    url: "camiseta-lipp",
    preco: 109.99,
    descricao: "Vestido floral para sintonizar com a natureza",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/286efb86fbe3668e2ec65c06a921a6aac37ff882.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/1d276305205a9f67b60067dd85dec936a6a6ea01.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/8b788131af06b7d0821904cfbabcbc22d1365f80.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/eaccde1c806cf033b37d7b1b7bda261709a392fc.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14630281001/portrait/7d5eeb3c0c0e4f8731d578c58cdcc4dabea47927.jpg",
        descricao: "Lorem Ipsum",
      },
    ],
  },
  {
    id: 4,
    nome: "Camisa Polo Masculina Básica Cinza",
    url: "camiseta-lipp",
    preco: 84.99,
    descricao: "Camisa polo básica para qualquer situação",
    tamanhos_disponiveis: ["P", "M", "G"],
    quantidade_disponivel: 12,
    imagens: [
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/93dd1b2ac01f6d220c04d73d99633e7f851a83b5.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/71678d547aa924929427381775e930074c419732.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/e3dc68e7fca9d870ace07e842817a8243cb0d4ba.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/1e2c5f1a9e54cda3e7982f55be6580e830a1f3d5.jpg",
        descricao: "Lorem Ipsum",
      },
      {
        url: "https://static.riachuelo.com.br/RCHLO/14327945004/portrait/8f62890f6f7b28e7df0b1d4eb1eea0b88a9b75da.jpg",
        descricao: "Lorem Ipsum",
      },
    ],
  },
];

const loadPage = ():void => {
  const estoqueTemp = localStorage.getItem("Produtos")

  if (!estoqueTemp) {
    localStorage.setItem(
      "Produtos",
       JSON.stringify(produtosInitial)
     );
  }

  console.log("carreguei estoque");
};

document.addEventListener("DOMContentLoaded", loadPage);
