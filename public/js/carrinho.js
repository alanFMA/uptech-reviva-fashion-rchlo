const LoadCarrinhoPage = () => {
  const carrinhoAtual = JSON.parse(localStorage.getItem("uptech-reviva#carrinho"));
  console.log("carreguei carrinho")
   
  if (!carrinhoAtual) {
    alert("Você ainda não adicionou produto no carrinho")
  } else {

  const carrinhoPagina = document.querySelector(".carrinho")

  carrinhoAtual.forEach(produto => {

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

