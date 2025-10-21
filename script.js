const imagemVisualizacao = document.querySelector("#visualizacao img");
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.getElementById("nome-cor-selecionada");

const imagemMiniAtura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniAtura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniAtura2 = document.querySelector('[for="2-imagem"] img');

const opcoesTamanho = ["41mm", "45mm"];
const listaCores = [
  "Verde-cipreste",
  "Azul-inverno",
  "Meia-noite",
  "Estelar",
  "Rosa-claro",
];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

function AtualizarImagemSelcionada() {
  const opcaoImagemSelecionada = document
    .querySelector('[name="opcao-imagem"]:checked')
    .id.charAt(0);

  numImagemSelecionada = opcaoImagemSelecionada;

  //   console.log(numImagemSelecionada);

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-" +
    listaCores[numCorSelecionada].toLowerCase() +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";
}
function AtualizarTamanho() {
  const tamanhoSelecionado = document
    .querySelector('[name="opcao-tamanho"]:checked')
    .id.charAt(0);
  numTamanhoSelecionado = tamanhoSelecionado;
  const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado];
  tituloProduto.innerText =
    "Pulseira loop esportiva" +
    " " +
    listaCores[numCorSelecionada].toLowerCase() +
    " " +
    "para caixa de" +
    " " +
    tamanhoCaixa;
  if (tamanhoCaixa === "41mm") {
    imagemVisualizacao.classList.add("caixa-pequena");
  } else {
    imagemVisualizacao.classList.remove("caixa-pequena");
  }
}
function AtualizaCor() {
  const opcaoCorSelecionada = document
    .querySelector('[name="opcao-cor"]:checked')
    .id.charAt(0);
  numCorSelecionada = opcaoCorSelecionada;
  const nomeCor = listaCores[numCorSelecionada];

  tituloProduto.innerText =
    "Pulseira loop esportiva" +
    " " +
    nomeCor.toLowerCase() +
    " " +
    "para caixa de" +
    " " +
    opcoesTamanho[numTamanhoSelecionado];
  nomeCorSelecionada.innerText = "Cor -" + " " + nomeCor;

  imagemVisualizacao.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-" +
    numImagemSelecionada +
    ".jpeg";

  imagemMiniAtura0.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-0.jpeg";
  imagemMiniAtura1.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-1.jpeg";
  imagemMiniAtura2.src =
    "./imagens/opcoes-cores/imagens-" +
    nomeCor.toLowerCase() +
    "/imagem-2.jpeg";
}
