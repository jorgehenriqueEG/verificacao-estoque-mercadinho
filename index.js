const produtos = [
  { nome: "Arroz", qtd: 3 },
  { nome: "Feijao", qtd: 12 },
  { nome: "Leite", qtd: 4 }
];

let alertas = produtos.filter(p => p.qtd <= 5);

if (alertas.length === 0) {
  console.log("Nenhum produto com baixo estoque");
} else {
  for (let a of alertas) {
    console.log(`Produto: ${a.nome} | Qtd: ${a.qtd}`);
  }
}