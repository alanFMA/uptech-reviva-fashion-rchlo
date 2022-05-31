const calculaTotal = (precos) => {
    return precos.reduce((acc, valor) => acc + valor);
};
export { calculaTotal };
