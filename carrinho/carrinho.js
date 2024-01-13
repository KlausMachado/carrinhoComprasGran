let qtd = [0, 0]; //qtd de cada produto
let valorProduto = [9.99, 20.9]; //valor unitário de cd prdt
let valorTotal = [0, 0]; //valor total de cd prdt

//adicionando itens
function adicionarItem(item) {
  let quantidade = document.getElementById("quantidade" + item);
  qtd[item] = qtd[item] + 1; //somando 1 na quantidade
  quantidade.innerHTML = qtd[item]; //adicionando qtd de item no html

  //somando total
  let total = document.getElementById("total" + item);
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item]; //multiplica valor pela qtd;
  total.innerHTML = valorTotal[item].toFixed(2); //adicionando valor no html
  valorCompra()
}

//retirando itens
function removerItem(item) {
  if (qtd[item] > 0) {
    let quantidade = document.getElementById("quantidade" + item);
    qtd[item] = qtd[item] - 1; //diminuindo 1 na quantidade
    quantidade.innerHTML = qtd[item]; //adicionando qtd de item no html

    let total = document.getElementById("total" + item);
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2);
    valorCompra()
  }
}


//somando totais
function valorCompra() {
    let valorTotalCompra = document.getElementById('valorTotalCompras');
    let valor = 0;
    for (let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}

//zerando qtd
function zerarItem(item) {
    let quantidade = document.getElementById("quantidade" + item);
    qtd[item] = 0;
    quantidade.innerHTML = qtd[item];
    let valorTotalCompra = document.getElementById('valorTotalCompras');
    if (item == 0) {
        valorTotal[0] = 0
    } else if (item == 1){
        valorTotal[1] = 0
    }
    valorCompra()
}

