const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

const serviceDescriptions = {
    "Abono de Permanência": "Você já pode se aposentar, mas continua trabalhando? Então pode ter direito a receber um valor extra todo mês: o abono de permanência, é um valor mensal pago ao servidor público que já cumpriu os requisitos para se aposentar, mas opta por continuar em atividade. Nós analisamos seu caso e buscamos garantir esse benefício!",
    "FUNBEN": "O FUNBEN não pode ser descontado do seu salário de forma irregular! O Fundo de Benefícios dos Servidores do Estado do Maranhão oferece assistência médica aos servidores e seus dependentes que solicitam a inclusão no plano. Em alguns casos, esses descontos são realizados indevidamente, sem que o servidor tenha solicitado, o que é proibido. Se isso está acontecendo com você, saiba que é possível recuperar o que foi cobrado indevidamente.",
    "Lincença Prêmio": "Se você não gozou sua licença-prêmio antes de se aposentar, tem direito de receber esse tempo em dinheiro. É um direito seu e pode fazer diferença no seu orçamento. Ajudamos a transformar esse tempo não gozado em indenização.",
    "Averbação de Tempo de Serviço": "Consiste na inclusão, no registro funcional do servidor, de períodos de tempo de serviço prestados em outros vínculos. Essa averbação é necessária para que esses períodos sejam considerados para efeitos de aposentadoria e outros direitos funcionais.",
    "Defesa em Processos Administrativos": "Se você recebeu uma notificação de PAD, precisa agir com cautela. Um bom acompanhamento jurídico pode evitar punições injustas ou até demissão. Nossa equipe oferece defesa técnica completa para proteger sua carreira e seus direitos.",
    "Correções/Revisões Salariais": "Você pode estar recebendo menos do que deveria. Erros na remuneração, falhas na progressão, cortes em gratificações e outras falhas são mais comuns do que se imagina. Nós analisamos sua ficha funcional e buscamos na Justiça os valores que você tem direito a receber.",
    "Planejamento Previdenciário": "É o estudo detalhado da vida contributiva do segurado, com o objetivo de identificar o melhor momento para a aposentadoria, o tipo de benefício mais vantajoso e os requisitos já cumpridos ou ainda pendentes. Permite uma tomada de decisão consciente e segura sobre o futuro previdenciário.",
    "Aposentadorias": "São benefícios pagos pelo INSS aos segurados que atingem os requisitos legais de idade, tempo de contribuição ou condições especiais de trabalho. Existem diferentes modalidades, como a aposentadoria por idade, por tempo de contribuição, especial e por invalidez.",
    "Pensão por Morte": "Benefício destinado aos dependentes do segurado do INSS que falece. Pode ser concedido ao cônjuge, companheiro(a), filhos menores de idade ou inválidos, entre outros. O valor e a duração do benefício variam conforme o tempo de contribuição do segurado e a idade do dependente.",
    "Auxílios por Incapacidade": "São benefícios pagos ao segurado que, por motivo de doença ou acidente, fica temporária ou permanentemente incapaz para o trabalho. Incluem o auxílio por incapacidade temporária (antigo auxílio-doença), o auxílio-acidente e a aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez).",
    "BPC/LOAS": "O Benefício de Prestação Continuada, previsto na Lei Orgânica da Assistência Social (LOAS), garante 1 salário mínimo mensal a pessoas com deficiência, ou idosos a partir de 65 anos que comprovem baixa renda familiar. É um benefício assistencial, sem necessidade de contribuição prévia ao INSS.",
    "Revisão de Benefícios": "Consiste na reanálise de benefícios já concedidos pelo INSS para verificar se houve erro no cálculo, na consideração do tempo de contribuição ou no enquadramento da modalidade. Quando identificadas falhas, o segurado pode ter direito à correção do valor e ao pagamento de diferenças retroativas."
};

document.querySelectorAll('.services-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('p').textContent.trim();
      modalTitle.textContent = title;
      modalDescription.textContent = serviceDescriptions[title] || "Descrição ainda não disponível.";
      modal.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
});

const toggleBtn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.header-menu-nav');
const toggleIcon = toggleBtn.querySelector('img');

const iconOpen = './assets/menu-hamburguer.svg'; // Ícone padrão (hambúrguer)
const iconClose = './assets/menu-close.svg';    // Ícone de fechar

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');

    // Alterna entre os ícones
    if (menu.classList.contains('active')) {
        toggleIcon.src = iconClose;
        toggleBtn.setAttribute('aria-label', 'Fechar menu');
    } else {
        toggleIcon.src = iconOpen;
        toggleBtn.setAttribute('aria-label', 'Abrir menu');
    }
});


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
      {
          text: `"A razão de ter uma Assessoria Jurídica na nossa instituição se deu pela segurança nos encaminhamentos de alguns eventos. E o escritório Sampaio & Freitas foi muito além – competência, transparência e compromisso – resumem o que sentimos sobre  a sua atuação advocatícia, sobretudo, pela disponibilidade em ouvir e direcionar  da melhor forma possível as decisões. 
  Somos muito gratos pela Dra. Walena Freitas nos acompanhar há 15 anos. A experiência exitosa nos pareceres, na consultoria  e nas lides,  em todas as vezes que foi acionada, demonstram claramente o acerto nessa contratação. Recomendo de olhos fechados."`,
          author: "- Elsa Balluz, Gestora Escolar"
      },
      {
          text: `“Confiança, dedicação e excelência definem o trabalho da Sampaio & Freitas Advogadas. Sempre atenciosas, conduzem nossas demandas com habilidade e estratégia, garantindo resultados satisfatórios. Sua seriedade, compromisso e competência fazem toda a diferença. Sou grato por sua atuação impecável!"`,
          author: "- José Nilton, Espaço Gourmet - Empresa de Varejo"
      }
  ];

  let currentIndex = 0;
  const feedbackText = document.querySelector(".feedback-box p");
  const feedbackAuthor = document.querySelector(".feedback-box span");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  function updateFeedback(index) {
      feedbackText.innerHTML = testimonials[index].text;
      feedbackAuthor.innerHTML = testimonials[index].author;
  }

  arrowLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateFeedback(currentIndex);
  });

  arrowRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateFeedback(currentIndex);
  });

  // Inicializar com o primeiro depoimento
  updateFeedback(currentIndex);
});

function updateImageSource() {
  const images = document.querySelectorAll(".banner-check");
  
  images.forEach(image => {
    if (window.innerWidth < 720) {
      image.src = "./assets/check-box-white.svg"; // Novo ícone para telas menores
    } else {
      image.src = "./assets/check-box.svg"; // Ícone padrão para telas maiores
    }
  });
}

// Chama a função ao carregar a página
updateImageSource();

// Adiciona um listener para monitorar a mudança de tamanho da tela
window.addEventListener("resize", updateImageSource);


function updateButtonImage() {
  const buttonImage = document.querySelector(".banner-button img");

  if (buttonImage) {
    if (window.innerWidth < 720) {
      buttonImage.src = "./assets/chat-pink.svg"; // Novo ícone para telas menores
    } else {
      buttonImage.src = "./assets/chat.svg"; // Ícone padrão para telas maiores
    }
  }
}

// Chama a função ao carregar a página
updateButtonImage();

// Adiciona um listener para monitorar a mudança de tamanho da tela
window.addEventListener("resize", updateButtonImage);

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o comportamento padrão (o envio do formulário)

  var formData = new FormData(this); // Captura todos os dados do formulário

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "enviar.php", true); // Configura o envio para o arquivo PHP

  // Quando o envio for completado, processa a resposta
  xhr.onload = function() {
      if (xhr.status === 200) {
          // Exibe a resposta do servidor na página
          document.getElementById("response-message").innerHTML = xhr.responseText;
      } else {
          // Caso ocorra algum erro no envio
          document.getElementById("response-message").innerHTML = "Erro ao enviar mensagem!";
      }
  };

  // Envia os dados para o servidor
  xhr.send(formData);
});
