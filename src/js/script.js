const formulario = document.querySelector("form");
const entradaResposta = document.querySelector("#resposta");
const textoResultado = document.querySelector("#resultado");
const textoTarefa = document.querySelector("#texto-tarefa");
const imagem = document.querySelector("img");

let tarefaAtual = 0;

const tarefas = [
  {
    texto:
      "Posicione a imagem no canto esquerdo da tela usando a propriedade 'justify-content'.",
    resposta: "justify-content: flex-start;",
  },
  {
    texto:
      "Agora, alinhe a imagem na parte superior esquerda da tela usando a propriedade 'align-items'.",
    resposta: "align-items: flex-start;",
  },
  {
    texto:
      "Posicione a imagem no canto direito da tela usando as propriedades 'justify-content'.",
    resposta: "justify-content: flex-end;",
  },
  {
    texto:
      "Agora, alinhe a imagem na parte superior direita da tela usando a propriedade 'align-items'.",
    resposta: "align-items: flex-end;",
  },
  {
    texto:
      "Posicione a imagem no centro da tela usando as propriedades 'justify-content' e 'align-items'." +
      " Obs: separado por ponto e vírgula (;)",
    resposta: "justify-content: center; align-items: center;",
  },
  {
    texto: "Parabéns! Todas as tarefas foram concluídas com sucesso.",
  },
];

exibirTarefa(tarefaAtual);

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const resposta = entradaResposta.value.toLowerCase();

  if (resposta === tarefas[tarefaAtual].resposta) {
    textoResultado.textContent = "Parabéns, você acertou!";
    textoResultado.style.fontWeight = "bold";
    textoResultado.style.fontSize = "28px";
    textoResultado.style.color = "green";
    textoResultado.style.backgroundColor = "white";
    tarefaAtual++;
    entradaResposta.value = "";
    exibirTarefa(tarefaAtual);

    if (tarefaAtual === tarefas.length) {
      entradaResposta.disabled = true;
    } else {
      atualizarPosicaoImagem(tarefaAtual);
    }
  } else {
    textoResultado.textContent = "Ops, tente novamente!";
    textoResultado.style.fontWeight = "bold";
    textoResultado.style.fontSize = "28px";
    textoResultado.style.color = "red";
    textoResultado.style.backgroundColor = "white";
  }
});

function exibirTarefa(indice) {
  textoTarefa.textContent = tarefas[indice].texto;
}

function atualizarPosicaoImagem(indice) {
  if (indice === 0) {
    imagem.style.left = "0";
    imagem.style.top = "50%";
    imagem.style.transform = "translateY(-50%)";
  } else if (indice === 1) {
    imagem.style.left = "0";
    imagem.style.top = "40";
  } else if (indice === 2) {
    imagem.style.right = "auto";
    imagem.style.left = "0";
    imagem.style.top = "0";
  } else if (indice === 3) {
    const currentTop = parseFloat(imagem.style.top) || 0;
    const newTop = currentTop + 40;
    imagem.style.left = "auto";
    imagem.style.right = "0";
    imagem.style.top = `${newTop}%`;
  } else if (indice === 4) {
    imagem.style.left = "auto";
    imagem.style.right = "0";
    imagem.style.top = "0";
  } else if (indice === 5) {
    imagem.style.left = "46%";
    imagem.style.top = "46%";
    imagem.style.transform = "translate(-50%, -50%)";
  }

  imagem.style.position = "absolute";
}
