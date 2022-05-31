const calculaTotal = (precos: number[]): number => {
  return precos.reduce((acc: number, valor: number) => acc + valor)
}

export { calculaTotal }