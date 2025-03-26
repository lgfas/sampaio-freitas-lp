const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-btn');

const serviceDescriptions = {
    "Abono de Permanência": "É um valor mensal pago ao servidor público que já cumpriu os requisitos para se aposentar, mas opta por continuar em atividade. Esse abono corresponde, em regra, ao valor da contribuição previdenciária que o servidor seguiria recolhendo, funcionando como forma de incentivo à permanência no serviço público.",
    "FUNBEN": "Refere-se aos valores descontados no contracheque dos servidores vinculados ao Fundo de Benefícios dos Servidores do Estado do Maranhão (FUNBEN). Em alguns casos, esses descontos podem continuar indevidamente após a aposentadoria ou serem realizados sem respaldo legal. Por isso, é importante verificar a legalidade e a regularidade dessas cobranças.",
    "Lincença Prêmio": "A licença-prêmio é um direito do servidor que, após determinado período de tempo em exercício sem faltas injustificadas, adquire o direito a um afastamento remunerado. Quando essa licença não é usufruída durante a atividade e o servidor se aposenta, é possível solicitar sua conversão em indenização.",
    "Averbação de Tempo de Serviço": "Consiste na inclusão, no registro funcional do servidor, de períodos de tempo de serviço prestados em outros vínculos públicos. Essa averbação é necessária para que esses períodos sejam considerados para efeitos de aposentadoria e outros direitos funcionais.",
    "Defesa em Processos Administrativos": "É o acompanhamento jurídico oferecido ao servidor que responde a um processo administrativo disciplinar. O PAD é instaurado quando há suspeita de infração funcional, e o servidor tem direito à ampla defesa e ao contraditório durante todas as fases do procedimento.",
    "Correções/Revisões Salariais": "Trata-se da verificação de possíveis erros ou omissões na folha de pagamento do servidor, como o não pagamento de gratificações, incorreções em reajustes ou falhas na progressão funcional. Caso sejam identificadas irregularidades, é possível requerer a correção e o pagamento dos valores retroativos.",
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

const iconOpen = './assets/menu-hamburguer.svg'; // ícone padrão (hambúrguer)
const iconClose = './assets/menu-close.svg';         // ícone de fechar

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
      },
      {
          text: `"Profissionais extremamente competentes e atenciosos. Me senti acolhida e bem representada. Recomendo sem dúvidas!"`,
          author: "- Mariana Souza"
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

