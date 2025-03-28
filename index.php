<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sampaio e Freitas</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">


    <link rel="stylesheet" href="./styles/style.css">
</head>
<body>
    <header class="header-bg">
        <div class="header">
            <div class="header-opening">
                <div>
                    <img src="./assets/schedule.svg" alt="">
                </div>
                <span>Funcionamento: seg à sexta das 8h às 18h</span>
            </div>
            
            <div class="header-menu container">
                <div>
                    <img src="./assets/logo-sampaio-freitas.svg" alt="">
                </div>

                <button class="menu-toggle" aria-label="Abrir menu">
                    <img src="./assets/menu-hamburguer.svg" alt="Ícone de menu">
                </button>                  
                
                <div>
                    <nav>
                        <ul class="header-menu-nav">
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#location">Localização</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <a href="https://wa.me/559899835437?text=Olá,%20gostaria%20de%20saber%20como%20o%20escritório%20pode%20me%20ajudar.%20Poderia%20me%20dar%20mais%20informações?" class="button header-menu-button">
                        <img src="./assets/message-chat.svg" alt="">
                        Entrar em contato
                    </a>
                </div>     
            </div>
        </div>
    </header>

    <main id="banner" class="banner-bg">
        <div class="banner container">
            <div class="banner-text">
                <h1>Defendendo seus direitos, assegurando seu futuro.</h1>
                <p>No escritório <span>Sampaio & Freitas Advogadas Associadas</span>, oferecemos um serviço especializado em <span>direitos dos servidores públicos e dos segurados do INSS</span>, com foco em garantir que você receba todos os benefícios a que tem direito. Nossa equipe está aqui para te apoiar em cada etapa do processo.</p>
                <ul>
                    <li>
                        <img class="banner-check" src="./assets/check-box.svg" alt="">
                        <span class="text">
                            Mais de <span class="bold">25 Anos de Experiência</span>
                        </span>
                    </li>
                    <li>
                        <img class="banner-check" src="./assets/check-box.svg" alt="">
                        <span class="text">
                            Atendimento <span class="bold">Humanizado</span> e 100% <span class="bold">Personalizado</span>
                        </span>
                    </li>
                    <li>
                        <img class="banner-check" src="./assets/check-box.svg" alt="">
                        <span class="text">
                            Especialistas em <span class="bold">Previdênciário</span> e Direito dos <span class="bold">Servidores Públicos</span>
                        </span>
                    </li>
                </ul>
                <div class="banner-text-button">
                    <a href="https://wa.me/559899835437?text=Olá,%20gostaria%20de%20saber%20como%20o%20escritório%20pode%20me%20ajudar.%20Poderia%20me%20dar%20mais%20informações?" class="button banner-button">
                        <img src="./assets/chat.svg" alt="">
                        Fale com uma Advogada Agora!
                    </a>
                </div>
            </div>
            <div class="banner-img">
                <img src="./assets/banner-sampaio-freitas.png" alt="">
            </div>
        </div>
    </main>

    <section id="services" class="services-bg">

        <div id="service-modal" class="modal hidden">
            <div class="modal-content">
              <span class="close-btn">&times;</span>
              <h3 id="modal-title"></h3>
              <p id="modal-description"></p>
            </div>
          </div>

        <div class="services container">

            <div class="services-text">
                <h2>SERVIDOR PÚBLICOS - Como podemos te ajudar?</h2>
                <div>
                    <a href="#form-section" class="button">
                        <img src="./assets/click.svg" alt="">
                        Quero meu direito!
                    </a>
                </div>
            </div>

            <div class="services-cards">
                <div id="abono-permanencia" class="services-card">
                    <img src="./assets/card-abono-permanencia.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Abono de Permanência</p>
                    </div>
                </div>

                <div id="funben" class="services-card">
                    <img src="./assets/card-funben.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>FUNBEN</p>
                    </div>
                </div>

                <div id="licenca-premio" class="services-card">
                    <img src="./assets/card-licenca-premio.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Lincença Prêmio</p>
                    </div>
                </div>

                <div id="averbacao-tempo-servico" class="services-card">
                    <img src="./assets/card-averbacao-tempo-servico.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Averbação de Tempo de Serviço</p>
                    </div>
                </div>

                <div id="defesa-processos-administrativos" class="services-card">
                    <img src="./assets/card-defesa-processos-administrativos.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Defesa em Processos Administrativos</p>
                    </div>
                </div>

                <div id="correcoes-revisoes-salariais" class="services-card">
                    <img src="./assets/card-correcoes-revisoes-salariais.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Correções/Revisões Salariais</p>
                    </div>
                </div>
            </div>

            <div class="services-text">
                <h2>SEGURADOS DO INSS - O que podemos fazer por você?</h2>
                <div>
                    <a href="#form-section" class="button">
                        <img src="./assets/click.svg" alt="">
                        Quero meu direito!
                    </a>
                </div>
            </div>

            <div id="planejamento-previdenciario" class="services-cards">
                <div class="services-card">
                    <img src="./assets/card-planejamento-previdenciario.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Planejamento Previdenciário</p>
                    </div>
                </div>

                <div id="aposentadorias" class="services-card">
                    <img src="./assets/card-aposentadoria.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Aposentadorias</p>
                    </div>
                </div>

                <div id="pensao-morte" class="services-card">
                    <img src="./assets/card-pensao-morte.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Pensão por Morte</p>
                    </div>
                </div>

                <div id="auxilios-incapacidade" class="services-card">
                    <img src="./assets/card-auxilio-acidente.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Auxílios por Incapacidade</p>
                    </div>
                </div>

                <div id="bpcloas" class="services-card">
                    <img src="./assets/card-bpcloas.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>BPC/LOAS</p>
                    </div>
                </div>

                <div id="revisao-beneficios" class="services-card">
                    <img src="./assets/card-revisao-beneficios.png" alt="">
                    <div class="card-text">
                        <img src="./assets/logo-sf-white.svg" alt="">
                        <p>Revisão de Benefícios</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about-bg">
        <div class="about container">
            <div class="about-text">
                <h2>Quem somos?</h2>
                <p>O escritório Sampaio & Freitas Advogadas Associadas presta consultoria e assessoria para pessoas físicas e jurídicas, atuando há mais de 25 anos na advocacia, garantindo os direitos de segurados do INSS e servidores públicos. 
                    Nosso compromisso é oferecer segurança jurídica, transparência e atendimento humanizado!</p>
                <div class="about-img about-img-group">
                    <img src="./assets/sf-group.png" alt="">
                </div>
                
            </div>
            <div class="about-text">
                <div class="about-img about-img-chair">
                    <img src="./assets/sf-chair.png" alt="">
                </div>
                <h3>Missão</h3>
                <p>O escritório Sampaio & Freitas Advogadas Associadas presta consultoria e assessoria para pessoas físicas e jurídicas, atuando há mais de 25 anos na advocacia, garantindo os direitos de segurados do INSS e servidores públicos. 
                    Nosso compromisso é oferecer segurança jurídica, transparência e atendimento humanizado!</p>
            </div>
        </div>
    </section>

    <section id="feedbacks" class="feedbacks-bg">
        <div class="feedbacks container">
            <h2>Depoimentos</h2>
            <div class="feedback-div">
                <div class="arrow-left">
                    <img src="./assets/arrow-left.svg" alt="">
                </div>
                <div class="feedback-box">
                   <p>"Minha experiência com o escritório Sampaio e Freitas foi incrível! A Dra. Walena Freitas foi fundamental na resolução do meu caso, sempre disponível e transparente. Me senti segura e confiante em suas mãos. Recomendo para qualquer pessoa que precise de assistência jurídica!"</p>
                   <span>- Silvia Santos</span>
                </div>
                <div class="arrow-right">
                    <img src="./assets/arrow-right.svg" alt="">
                </div>
            </div>         
        </div>
    </section>

    <section id="form-section" class="form-bg">
        <div class="form container">
            <div class="form-text">
                <div>
                    <h4>Localização:</h4>
                    <div class="form-location">
                        <img src="./assets/location.svg" alt="">
                        <p>Av. Colares Moreira, Edf. Planta Tower, sala 406, Renascença II - São Luís, MA</p>
                    </div>
                </div>
                <div>
                    <h4>Contatos:</h4>
                    <div class="form-contact">
                        <ul>
                            <li>
                                <a class="footer-contact" href="https://wa.me/559899835437?text=Olá,%20gostaria%20de%20saber%20como%20o%20escritório%20pode%20me%20ajudar.%20Poderia%20me%20dar%20mais%20informações?"><img src="./assets/icon-phone-red.svg" alt="">(98) 99983-5437</a>
                            </li>
                            <li>
                                <a class="footer-contact" href="https://www.instagram.com/sampaioefreitas.adv?igsh=MWc3dG8yY2tveDM3aA== "><img src="./assets/icon-instagram-red.svg" alt="">@sampaioefreitas.adv</a>
                            </li>
                            <li>
                                <a class="footer-contact" href="https://www.facebook.com/share/1C1i7MbnCE/?mibextid=wwXIfr "><img src="./assets/icon-facebook-red.svg" alt="">Sampaio e Freitas.adv</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="form-div">
                <form id="form" class="form-camps" method="POST">
                    <div>
                      <label for="nome">Nome:</label>
                      <input type="text" id="nome" name="nome" placeholder="Seu nome">
                    </div>
                    <div>
                      <label for="telefone">Telefone:</label>
                      <input type="text" id="telefone" name="telefone" placeholder="Seu telefone">
                    </div>
                    <div>
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" placeholder="Seu email">
                    </div>
                    <div>
                      <label for="mensagem">Como podemos te ajudar?</label>
                      <textarea rows="1" id="mensagem" name="mensagem" placeholder="Assunto"></textarea>
                    </div>
                    <button class="button button-form" type="submit">
                        <img src="./assets/chat-pink.svg" alt="">
                        Entrar em contato
                    </button>
                  </form>

                  <div id="response-message"></div>
            </div>
        </div>
    </section>

    <section id="location">
        <iframe class="location-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3986.0414283657706!2d-44.28439451332096!3d-2.4932315720044014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1715894251717!5m2!1spt-BR!2sbr" width="600" height="280" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="location">
            <h3>Encontre o escritório de forma fácil</h3>
            <a href="https://maps.app.goo.gl/uPTsSPmz3jV1E5Lv6?g_st=iw" class="button"><img src="/assets/location.svg" alt="">Visite aqui</a>
        </div>
    </section>

    <footer id="footer" class="footer-bg">
        <div class="footer container">
            <div>
                <h4>Nossos serviços:</h4>
                <div class="footer-services">
                    <ul>
                        <li><a href="#abono-permanencia">Abono de Permanência</a></li>
                        <li><a href="#funben">FUNBEN</a></li>
                        <li><a href="#licenca-premio">Lincença Prêmio</a></li>
                        <li><a href="#averbacao-tempo-servico">Averbação de Tempo de Serviço</a></li>
                        <li><a href="#defesa-processos-administrativos">Defesa em Processos Administrativos</a></li>
                        <li><a href="#correcoes-revisoes-salariais">Correções/Revisões Salariais</a></li>
                    </ul>
                    <ul>
                        <li><a href="#planejamento-previdenciario">Planejamento Previdenciário</a></li>
                        <li><a href="#aposentadorias">Aposentadorias</a></li>
                        <li><a href="#pensao-morte">Pensão por Morte</a></li>
                        <li><a href="#auxilios-incapacidade">Auxílios por Incapacidade</a></li>
                        <li><a href="#bpcloas">BPC/LOAS</a></li>
                        <li><a href="#revisao-beneficios">Revisão de Benefícios</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h4>Localização:</h4>
                <p>Av. Colares Moreira, Edf. Planta Tower, sala 406, Renascença II - São Luís, MA</p>
            </div>
            <div>
                <h4>Entre em contato:</h4>
                <ul>
                    <li>
                        <a class="footer-contact" href="https://wa.me/559899835437?text=Olá,%20gostaria%20de%20saber%20como%20o%20escritório%20pode%20me%20ajudar.%20Poderia%20me%20dar%20mais%20informações?"><img src="./assets/icon-phone.svg" alt="">(98) 99983-5437</a>
                    </li>
                    <li>
                        <a class="footer-contact" href="https://www.instagram.com/sampaioefreitas.adv?igsh=MWc3dG8yY2tveDM3aA== "><img src="./assets/icon-instagram.svg" alt="">@sampaioefreitas.adv</a>
                    </li>
                    <li>
                        <a class="footer-contact" href="https://www.facebook.com/share/1C1i7MbnCE/?mibextid=wwXIfr "><img src="./assets/icon-facebook.svg" alt="">Sampaio e Freitas.adv</a>
                    </li>
                </ul>
                
            </div>
        </div>
        <div class="copyright-footer">
            <p>Sampaio e Freitas © 2025 | Todos os Direitos Reservados</p>
        </div>
    </footer>

    <script src="./scripts/scripts.js"></script>
</body>
</html>