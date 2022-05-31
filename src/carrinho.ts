import { calculaTotal } from "./calcula.js";

interface ICarrinhoProduto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: IProdutoImagem[];
}

const calculaTotalCarrinho = (carrinhoProduto: ICarrinhoProduto[]) => {
  const precos: number[] = carrinhoProduto.map((produto: ICarrinhoProduto): number => {
    return produto.preco * produto.quantidade;
  })
  const total = calculaTotal(precos);
  console.log(total)
}

const LoadCarrinhoPage = () => {
  const carrinhoAtual = JSON.parse(localStorage.getItem("Carrinho") as string);
  console.log("carreguei carrinho");
  calculaTotalCarrinho(carrinhoAtual)

  const createFieldsetTamanhos = (indice: number):HTMLFieldSetElement => {
    const labelP = document.createElement("label");
    labelP.setAttribute("for", `p${indice}`)
    labelP.innerHTML = "P";
  
    const botaoTamanhoP = document.createElement("button")
    botaoTamanhoP.classList.add("carrinho__tamanho__botao")
  
    botaoTamanhoP.appendChild(labelP)
  
    const inputTamanhoP = document.createElement("input")
    inputTamanhoP.setAttribute("type", "radio")
    inputTamanhoP.setAttribute("name", `tamanho${indice}`)
    inputTamanhoP.setAttribute("id", `p${indice}`)
  
    const labelM = document.createElement("label");
    labelM.setAttribute("for", `m${indice}`)
    labelM.innerHTML = "M";
  
    const botaoTamanhoM = document.createElement("button")
    botaoTamanhoM.classList.add("carrinho__tamanho__botao")
  
    botaoTamanhoM.appendChild(labelM)
  
    const inputTamanhoM = document.createElement("input")
    inputTamanhoM.setAttribute("type", "radio")
    inputTamanhoM.setAttribute("name", `tamanho${indice}`)
    inputTamanhoM.setAttribute("id", `m${indice}`)
    
    const labelG = document.createElement("label");
    labelG.setAttribute("for", `g${indice}`)
    labelG.innerHTML = "G";
  
    const botaoTamanhoG = document.createElement("button")
    botaoTamanhoG.classList.add("carrinho__tamanho__botao")
  
    botaoTamanhoG.appendChild(labelG)
  
    const inputTamanhoG = document.createElement("input")
    inputTamanhoG.setAttribute("type", "radio")
    inputTamanhoG.setAttribute("name", `tamanho${indice}`)
    inputTamanhoG.setAttribute("id", `g${indice}`)
  
    const fieldset = document.createElement("fieldset")
    fieldset.classList.add("carrinho__grid__tamanho__select")
    fieldset.appendChild(inputTamanhoP)
    fieldset.appendChild(botaoTamanhoP)
    fieldset.appendChild(inputTamanhoM)
    fieldset.appendChild(botaoTamanhoM)
    fieldset.appendChild(inputTamanhoG)
    fieldset.appendChild(botaoTamanhoG)
  
    return fieldset;
  }
   
  if (!carrinhoAtual) {
    alert("Você ainda não adicionou produto no carrinho")
  } else {

  const carrinhoPagina = document.querySelector(".box") as Element;
  
  carrinhoAtual.forEach((produto: any, indice: number) => {

    const subtotalValor = document.createElement("p")
    subtotalValor.setAttribute("class", "carrinho__grid__valor")
    subtotalValor.innerHTML = `${produto.quantidade * produto.preco}`

    const subtotalTitulo = document.createElement("p")
    subtotalTitulo.setAttribute("class", "carrinho__grid__titulo")
    subtotalTitulo.innerHTML = "Subtotal"

    const subtotalDiv = document.createElement("div")
    subtotalDiv.setAttribute("class", "subtotal")
    subtotalDiv.appendChild(subtotalTitulo)
    subtotalDiv.appendChild(subtotalValor)

    const quantidadeInput = document.createElement("input")
    quantidadeInput.setAttribute("type", "number")
    quantidadeInput.setAttribute("name", "qtd")
    quantidadeInput.setAttribute("id", "qtd")
    quantidadeInput.setAttribute("value", `${(produto.quantidade)}`)

    const quantidadeTitulo = document.createElement("p")
    quantidadeTitulo.setAttribute("class", "carrinho__grid__titulo")
    quantidadeTitulo.innerHTML = "Quantidade"

    const quantidadeDiv = document.createElement("div")
    quantidadeDiv.setAttribute("class", "carrinho__quantidade")
    quantidadeDiv.appendChild(quantidadeTitulo)
    quantidadeDiv.appendChild(quantidadeInput)

    const valorPreco = document.createElement("p")
    valorPreco.setAttribute("class", "garrinho__grid__valor")
    valorPreco.innerHTML = `${produto.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}`

    const valorTitulo = document.createElement("p")
    valorTitulo.setAttribute("class", "carrinho__grid__titulo")
    valorTitulo.innerHTML = "Valor"

    const valorDiv = document.createElement("div")
    valorDiv.setAttribute("class", "carrinho__valor")
    valorDiv.appendChild(valorTitulo)
    valorDiv.appendChild(valorPreco)
    
    const fieldsetTamanhos = createFieldsetTamanhos(indice)

    const tamanhoTitulo = document.createElement("p")
    tamanhoTitulo.setAttribute("class", "carrinho__grid__titulo")
    tamanhoTitulo.appendChild(fieldsetTamanhos)

    const tamanhoDiv = document.createElement("div")
    tamanhoDiv.setAttribute("class", "carrinho__grid__tamanho")
    tamanhoDiv.appendChild(tamanhoTitulo)

    const produtoNome = document.createElement("p")
    produtoNome.innerHTML = `${produto.nome}`

    const produtoInfo = document.createElement("p")
    produtoInfo.setAttribute("class", "carrinho__grid__titulo")
    produtoInfo.innerHTML = "Produto"
    produtoInfo.appendChild(produtoNome)

    const produtoInfoDiv = document.createElement("div")
    produtoInfoDiv.setAttribute("class", "carrinho__grid__info")
    produtoInfoDiv.appendChild(produtoInfo)

    const imagemProduto = document.createElement("img")
    imagemProduto.setAttribute("src", produto.imagem[0].url)
    
    const divImagemProduto = document.createElement("div")
    divImagemProduto.setAttribute("class", "carrinho__grid__imagem")
    divImagemProduto.appendChild(imagemProduto)

    const carrinhoGrid = document.createElement("div")
    carrinhoGrid.setAttribute("class", "carrinho__grid")
    carrinhoGrid.appendChild(divImagemProduto)
    carrinhoGrid.appendChild(produtoInfoDiv)
    carrinhoGrid.appendChild(tamanhoDiv)
    carrinhoGrid.appendChild(valorDiv)
    carrinhoGrid.appendChild(quantidadeDiv)
    carrinhoGrid.appendChild(subtotalDiv)
    
    
    const carrinho = document.createElement("div")
    carrinho.setAttribute("class", "carrinho")
    carrinho.appendChild(carrinhoGrid)
    
    carrinhoPagina.appendChild(carrinho)

  })
}
}

document.addEventListener("DOMContentLoaded", LoadCarrinhoPage)





