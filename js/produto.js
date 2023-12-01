function pegaProduto(card) {
  let nomeProduto = card.parentElement.querySelector(".card-title").innerText;
  let precoTexto = card.parentElement.querySelector(".precoProd").innerText;
  let quantidadeProduto = card.parentElement.querySelector(".qtdProd").value;
  const precoNumero = parseFloat(precoTexto.replace(",", "."));
  const valorTotal = precoNumero * quantidadeProduto;
  let valorAparecer = valorTotal.toFixed(2);
  const novaLinha = document.createElement("tr");
  novaLinha.classList.add("prod");
  novaLinha.innerHTML = `
    <td class="nameProd">${nomeProduto}</td>
    <td class="priceProd">${precoTexto}</td>
    <td class="qtdProduto"><p class="qtdProd">${quantidadeProduto}</p></td>
    <td class="valorApa">${valorAparecer}</td>
    <td class="botoesLinha"><button type="submit" class="btn btn-danger" onclick="excluirLinha(this)">Deletar</button><button type="submit" class="btn btn-secondary" onclick="editarLinha(this)">Editar</button></td>
    `;
  let tabelaCorpo = document.getElementById("tabelaCorpo");
  tabelaCorpo.appendChild(novaLinha);
  const linhas = document.querySelectorAll("tabelaCorpo");
  funcaoCalcular();
}

function excluirLinha(botao) {
  const linha = botao.parentElement.parentElement;
  linha.remove();
  funcaoCalcular();
}

function editarLinha(botaozao) {
  const trzin = botaozao.parentElement.parentElement;
  botaozao.setAttribute("onclick", "salvarLinha(this)");
  botaozao.className = "btn btn-primary";
  botaozao.innerText = "Salvar";
  const qtdProds = trzin.querySelector(".qtdProduto");
  qtdProds.innerHTML = `<input type="number" class="qtdProd" min="1">`;
}

function salvarLinha(bots) {
  const trzao = bots.parentElement.parentElement;
  const qtdMil = trzao.querySelector(".qtdProduto");
  const qtdReal = qtdMil.querySelector(".qtdProd").value;
  bots.className = "btn btn-secondary";
  bots.innerText = "Editar";
  bots.setAttribute("onclick", "editarLinha(this)");
  qtdMil.innerHTML = `<p class="qtdProd">${qtdReal}</p>`;
  const precoD = trzao.querySelector(".priceProd").innerText;
  const precoN = parseFloat(precoD.replace(",", "."));
  const valReal = precoN * qtdReal;
  const valA = trzao.querySelector(".valorApa");
  valP = valReal.toFixed(2);
  valA.innerHTML = `${valP}`;
  funcaoCalcular();
}
function funcaoCalcular() {
  const linhas = document.querySelectorAll("#tabelaCorpo tr");
  let valorTotalizado = 0;

  linhas.forEach((linha) => {
    const valorMultiplicadoTexto =
      linha.querySelector("td:nth-child(4)").textContent;
    const valorMultiplicadoReal = parseFloat(valorMultiplicadoTexto);
    valorTotalizado += valorMultiplicadoReal;
  });

  const valorTotalElement = document.querySelector("#valorTotalizado");
  valorTotalElement.textContent = valorTotalizado.toFixed(2);
}
