console.log("carreguei index")

const carrinho = [];

const loadCarrinho = () => {
  const carrinhoTemp = localStorage.getItem("uptech-reviva#carrinho")

  if(!carrinhoTemp) {
    localStorage.setItem("uptech-reviva#carrinho", JSON.stringify(carrinho));
  }
};

// Pagina Inicial Dinâmica

document.addEventListener("DOMContentLoaded", loadCarrinho);

const createFieldset = (indice) => {
  const labelP = document.createElement("label");
  labelP.setAttribute("for", `p${indice}`)
  labelP.innerHTML = "P";

  const botaoTamanhoP = document.createElement("button")
  botaoTamanhoP.classList.add("produto__imagem__tamanho__botao")

  botaoTamanhoP.appendChild(labelP)

  const inputTamanhoP = document.createElement("input")
  inputTamanhoP.setAttribute("type", "radio")
  inputTamanhoP.setAttribute("name", `tamanho${indice}`)
  inputTamanhoP.setAttribute("id", `p${indice}`)

  const labelM = document.createElement("label");
  labelM.setAttribute("for", `m${indice}`)
  labelM.innerHTML = "M";

  const botaoTamanhoM = document.createElement("button")
  botaoTamanhoM.classList.add("produto__imagem__tamanho__botao")

  botaoTamanhoM.appendChild(labelM)

  const inputTamanhoM = document.createElement("input")
  inputTamanhoM.setAttribute("type", "radio")
  inputTamanhoM.setAttribute("name", `tamanho${indice}`)
  inputTamanhoM.setAttribute("id", `m${indice}`)
  
  const labelG = document.createElement("label");
  labelG.setAttribute("for", `g${indice}`)
  labelG.innerHTML = "G";

  const botaoTamanhoG = document.createElement("button")
  botaoTamanhoG.classList.add("produto__imagem__tamanho__botao")

  botaoTamanhoG.appendChild(labelG)

  const inputTamanhoG = document.createElement("input")
  inputTamanhoG.setAttribute("type", "radio")
  inputTamanhoG.setAttribute("name", `tamanho${indice}`)
  inputTamanhoG.setAttribute("id", `g${indice}`)

  const fieldset = document.createElement("fieldset")
  fieldset.classList.add("produto__imagem__tamanho")
  fieldset.appendChild(inputTamanhoP)
  fieldset.appendChild(botaoTamanhoP)
  fieldset.appendChild(inputTamanhoM)
  fieldset.appendChild(botaoTamanhoM)
  fieldset.appendChild(inputTamanhoG)
  fieldset.appendChild(botaoTamanhoG)

  return fieldset;
}

const createContainerBotao = (id) => {
  const botaoSacolaVazio1 = document.createElement("div")
  botaoSacolaVazio1.classList.add("botao__sacola__vazio")
  
  const botaoTexto = document.createElement("p")
  botaoTexto.classList.add("botao__sacola__texto")
  botaoTexto.innerHTML = "POR NA SACOLA"

  const botaoImg = document.createElement("img")
  botaoImg.setAttribute("src", "img/shop.png")
  botaoImg.classList.add("botao__sacola__imagem")

  const botaoFlipSacolaDiv = document.createElement("div")
  botaoFlipSacolaDiv.classList.add("botao__flip__sacola")
  
  botaoFlipSacolaDiv.appendChild(botaoSacolaVazio1)
  botaoFlipSacolaDiv.appendChild(botaoTexto)
  botaoFlipSacolaDiv.appendChild(botaoImg)

  const botaoSacolaVazio2 = document.createElement("div")
  botaoSacolaVazio2.classList.add("botao__sacola__vazio")

  const checkedImg = document.createElement("img")
  checkedImg.setAttribute("src", "img/check-img.png")

  const botaoSacolaVazio3 = document.createElement("div")
  botaoSacolaVazio3.classList.add("botao__sacola__vazio")

  const botaoFlipChecked = document.createElement("div")
  botaoFlipChecked.classList.add("botao__flip__checked")

  botaoFlipChecked.appendChild(botaoSacolaVazio2)
  botaoFlipChecked.appendChild(checkedImg)
  botaoFlipChecked.appendChild(botaoSacolaVazio3)

  const botaoFlip = document.createElement("div")
  botaoFlip.classList.add("botao__flip")

  botaoFlip.appendChild(botaoFlipSacolaDiv)
  botaoFlip.appendChild(botaoFlipChecked)

  const containerBotao = document.createElement("div")
  containerBotao.setAttribute("productId", id)
  containerBotao.classList.add("container__botao")

  containerBotao.appendChild(botaoFlip)

  return containerBotao;
}

const vestuario = document.querySelector("#ultimos-lancamentos");

  produtosInitial.forEach((produto, indice)=> {
  const imagemProduto = document.createElement("img");
  imagemProduto.setAttribute("src", produto.imagens[0].url)
  imagemProduto.classList.add("produto__imagem")
  imagemProduto.setAttribute("alt", produto.nome)
  
  const linkProduto = document.createElement("a");
  linkProduto.setAttribute("href", "detalhes.html")
  
  linkProduto.appendChild(imagemProduto)

  const fieldset = createFieldset(indice);
  
  const produtoDiv = document.createElement("div")
  produtoDiv.classList.add("produto")

  produtoDiv.appendChild(linkProduto)
  produtoDiv.appendChild(fieldset)

  const pTitulo = document.createElement("p")
  pTitulo.classList.add("produto__imagem__descricao")
  pTitulo.innerHTML = produto.nome;

  const pPreco = document.createElement("p")
  pPreco.classList.add("produto__imagem__preco")
  pPreco.innerHTML = produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })

  const containerBotao = createContainerBotao(produto.id)

  const vestuarioGridItem = document.createElement("div")
  vestuarioGridItem.classList.add("vestuario__grid__item")

  vestuarioGridItem.appendChild(produtoDiv)
  vestuarioGridItem.appendChild(pTitulo)
  vestuarioGridItem.appendChild(pPreco)
  vestuarioGridItem.appendChild(containerBotao)

  vestuario.appendChild(vestuarioGridItem)
})

// Adicionando ao carrinho

const produtos = document.querySelectorAll(".container__botao");

const addCarrinho = function () {
  const produtosTemp = JSON.parse(
    localStorage.getItem("uptech-reviva#produtos")
  );
  const carrinhoTemp = JSON.parse(
    localStorage.getItem("uptech-reviva#carrinho")
  );

  const id = this.getAttribute("productId");

  const produto = produtosTemp.find((produto) => {
    return produto.id == id;
  });

  if (produto.quantidade_disponivel > 0) {
    const produtoCarrinho = carrinhoTemp.find((produto) => {
      return produto.id == id;
    });

    if (produtoCarrinho) {
      produtoCarrinho.quantidade++;
    } else {
      const produtoParaAdicionar = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        quantidade: 1,
        imagem: produto.imagens
      };
      carrinhoTemp.push(produtoParaAdicionar);
    }
    localStorage.setItem(
      "uptech-reviva#carrinho",
      JSON.stringify(carrinhoTemp)
    );
    console.table(carrinhoTemp);

    //Remover do estoque
    produto.quantidade_disponivel--;
    localStorage.setItem(
      "uptech-reviva#produtos",
      JSON.stringify(produtosTemp)
    );
  } else {
    alert("Produto sem estoque");
  }


  console.table(produtosTemp);
};

for (let i = 0; i < produtos.length; i++) {
  produtos[i].addEventListener("click", addCarrinho, false);
}