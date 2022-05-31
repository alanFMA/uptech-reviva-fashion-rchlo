const calculaTotal = (precos: number[]): number => {
  return precos.reduce((acc: number, valor: number) => acc + valor)
}

const calculaTotalCarrinho = (carrinhoProduto: ICarrinhoProduto[]) => {
  const precos: number[] = carrinhoProduto.map((produto: ICarrinhoProduto): number => {
    return produto.preco;
  })
  const total = calculaTotal(precos);
  console.log(total)
}

const LoadCarrinhoPage = () => {
  const carrinhoAtual = JSON.parse(localStorage.getItem("Carrinho") as string);
  console.log("carreguei carrinho");
  calculaTotalCarrinho(carrinhoAtual)
   
  if (!carrinhoAtual) {
    alert("Você ainda não adicionou produto no carrinho")
  } else {

  const carrinhoPagina = document.querySelector(".carrinho") as Element;

  carrinhoAtual.forEach((produto: any) => {

  const imagemProduto = document.createElement("img")
  imagemProduto.setAttribute("src", produto.imagem[0].url)
  
  const divImagemProduto = document.createElement("div")
  divImagemProduto.setAttribute("class", "carrinho__grid__imagem")
  divImagemProduto.appendChild(imagemProduto)

  const carrinhoGrid = document.createElement("div")
  carrinhoGrid.setAttribute("class", "carrinho__grid")
  carrinhoGrid.appendChild(divImagemProduto)


  carrinhoPagina.appendChild(carrinhoGrid)

  })

  
}
}

document.addEventListener("DOMContentLoaded", LoadCarrinhoPage)





