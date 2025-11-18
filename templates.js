// assets/js/templates.js
// ------------------------------------------------------
// Templates HTML usados pela SPA.
// O Router insere estes conteúdos dentro de <main id="app">
// ------------------------------------------------------

window.Templates = {
    inicio: `
      <!-- Início / Home -->
      <section class="hero" aria-labelledby="titulo-principal">
        <div class="container hero-content">
          <div class="hero-text">
            <h1 id="titulo-principal">Conectando pessoas para transformar realidades</h1>
            <p>
              A <strong>ONG Vida em Rede</strong> apoia comunidades em situação de vulnerabilidade,
              promovendo educação, inclusão digital e desenvolvimento social.
            </p>
            <a class="btn btn-primary" href="#projetos">Conheça nossos projetos</a>
          </div>
          <figure class="hero-image">
            <img src="assets/img/capa-ong.png" alt="Crianças e voluntários em um projeto social da ONG">
            <figcaption>Voluntários da ONG Vida em Rede em ação.</figcaption>
          </figure>
        </div>
      </section>

      <!-- Seção Quem Somos -->
      <section class="section" aria-labelledby="titulo-quem-somos">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-quem-somos">Quem somos</h2>
          </header>
          <article>
            <p>
              Somos uma organização da sociedade civil sem fins lucrativos que acredita na força
              do trabalho em rede para gerar impacto positivo em comunidades de baixa renda.
            </p>
            <p>
              Atuamos desde 2015 com projetos de reforço escolar, capacitação profissional,
              inclusão digital e apoio a famílias em situação de vulnerabilidade social.
            </p>
          </article>
        </div>
      </section>

      <!-- Seção Missão, Visão e Valores -->
      <section class="section section-alt" aria-labelledby="titulo-missao-visao-valores">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-missao-visao-valores">Missão, Visão e Valores</h2>
          </header>
          <div class="cards-grid">
            <article class="card">
              <h3>Missão</h3>
              <p>
                Promover oportunidades de desenvolvimento social, educacional e humano por meio
                de projetos colaborativos e sustentáveis.
              </p>
            </article>
            <article class="card">
              <h3>Visão</h3>
              <p>
                Ser referência em articulação de redes de apoio comunitário, ampliando o impacto
                social em diferentes regiões do Brasil.
              </p>
            </article>
            <article class="card">
              <h3>Valores</h3>
              <ul>
                <li>Transparência</li>
                <li>Empatia</li>
                <li>Responsabilidade social</li>
                <li>Respeito à diversidade</li>
                <li>Trabalho em rede</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- Seção Histórico -->
      <section class="section" aria-labelledby="titulo-historico">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-historico">Nossa trajetória</h2>
          </header>
          <article>
            <p>
              Desde a nossa fundação em 2015, já impactamos diretamente mais de
              <strong>3.000 pessoas</strong> por meio de ações em comunidades, escolas e centros
              comunitários.
            </p>
            <p>
              Ao longo dos anos, ampliamos nossa atuação através de parcerias com empresas,
              universidades e outros coletivos sociais, sempre com foco na transparência e
              na participação ativa da comunidade.
            </p>
          </article>
        </div>
      </section>

      <!-- Seção Equipe -->
      <section class="section section-alt" aria-labelledby="titulo-equipe">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-equipe">Equipe</h2>
          </header>
          <div class="equipe-grid">
            <figure>
              <img src="assets/img/equipe.png" alt="Equipe da ONG Vida em Rede reunida">
              <figcaption>Equipe de coordenação e voluntários da ONG Vida em Rede.</figcaption>
            </figure>
            <article>
              <p>
                A ONG conta com uma equipe multidisciplinar formada por pedagogos, assistentes sociais,
                psicólogos e profissionais voluntários de diferentes áreas.
              </p>
              <p>
                Nosso time é responsável pela coordenação dos projetos, atendimento às famílias,
                formação de voluntários e prestação de contas junto aos parceiros e doadores.
              </p>
            </article>
          </div>
        </div>
      </section>

      <!-- Seção Contato -->
      <section class="section" aria-labelledby="titulo-contato">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-contato">Contato</h2>
          </header>
          <div class="contato-grid">
            <article>
              <h3>Informações de contato</h3>
              <p><strong>E-mail:</strong> contato@vidaemrede.org.br</p>
              <p><strong>Telefone:</strong> (11) 4000-1234</p>
              <p><strong>Endereço:</strong> Rua Solidariedade, 123 - Bairro Esperança, São Paulo - SP</p>
            </article>
            <article>
              <h3>Redes sociais</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
                <li><a href="#" target="_blank" rel="noopener">LinkedIn</a></li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    `,

    projetos: `
      <!-- Projetos -->
      <section class="hero hero-small" aria-labelledby="titulo-projetos">
        <div class="container">
          <h1 id="titulo-projetos">Projetos sociais</h1>
          <p>
            A ONG Vida em Rede desenvolve projetos contínuos em educação, inclusão digital e apoio
            às famílias. Cada projeto é construído em parceria com a comunidade.
          </p>
        </div>
      </section>

      <!-- Lista de projetos -->
      <section class="section" aria-labelledby="titulo-lista-projetos">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-lista-projetos">Nossos principais projetos</h2>
          </header>

          <div class="cards-grid">
            <article class="card" aria-labelledby="proj-reforco-escolar">
              <figure>
                <img src="assets/img/projeto1.png" alt="Crianças em sala de aula com material escolar">
                <figcaption>Atividades do projeto de reforço escolar.</figcaption>
              </figure>
              <h3 id="proj-reforco-escolar">Reforço Escolar Comunidade Ativa</h3>
              <p><strong>Público-alvo:</strong> Crianças de 7 a 14 anos.</p>
              <p>
                Aulas de reforço em português e matemática, oficinas de leitura e acompanhamento
                pedagógico individualizado para estudantes em defasagem escolar.
              </p>
              <p><strong>Local:</strong> Centro Comunitário Vida em Rede - Zona Leste de São Paulo.</p>
              <span class="badge badge-primary">Educação</span>
            </article>

            <article class="card" aria-labelledby="proj-inclusao-digital">
              <figure>
                <img src="assets/img/projeto2.png" alt="Jovens utilizando computadores em laboratório de informática">
                <figcaption>Turma do curso de inclusão digital.</figcaption>
              </figure>
              <h3 id="proj-inclusao-digital">Inclusão Digital para o Futuro</h3>
              <p><strong>Público-alvo:</strong> Jovens de 15 a 24 anos.</p>
              <p>
                Curso de informática básica e intermediária, com foco em ferramentas digitais,
                cidadania na internet e preparação para o mercado de trabalho.
              </p>
              <p><strong>Local:</strong> Laboratório de Informática - Sede da ONG Vida em Rede.</p>
              <span class="badge badge-secondary">Tecnologia</span>
            </article>

            <article class="card" aria-labelledby="proj-familias">
              <figure>
                <img src="assets/img/projeto3.png" alt="Reunião com famílias em um espaço comunitário">
                <figcaption>Encontro de famílias em ação social da ONG.</figcaption>
              </figure>
              <h3 id="proj-familias">Apoio às Famílias em Rede</h3>
              <p><strong>Público-alvo:</strong> Famílias em situação de vulnerabilidade social.</p>
              <p>
                Atendimento psicossocial, encaminhamento para serviços públicos, oficinas de
                geração de renda e rodas de conversa sobre direitos e cidadania.
              </p>
              <p><strong>Local:</strong> Diversos territórios atendidos pela rede de parceiros.</p>
              <span class="badge badge-warning">Assistência Social</span>
            </article>
          </div>
        </div>
      </section>

      <!-- Seção de voluntariado -->
      <section class="section section-alt" aria-labelledby="titulo-voluntariado">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-voluntariado">Voluntariado</h2>
          </header>

          <div class="duas-colunas">
            <article>
              <h3>Como ser voluntário</h3>
              <p>
                Você pode atuar em diversas frentes: reforço escolar, apoio em eventos, comunicação,
                captação de recursos, tecnologia, entre outras áreas.
              </p>
              <p>
                O primeiro passo é realizar seu cadastro em nossa plataforma. Após a análise do
                perfil, entraremos em contato para sugerir oportunidades alinhadas às suas habilidades
                e disponibilidade.
              </p>
              <p>
                Clique no botão abaixo para se cadastrar:
              </p>
              <p>
                <a class="btn btn-primary" href="#cadastro">Quero ser voluntário</a>
              </p>
            </article>

            <article>
              <h3>Benefícios de ser voluntário</h3>
              <ul>
                <li>Experiência prática em projetos sociais;</li>
                <li>Certificado digital de participação;</li>
                <li>Possibilidade de desenvolver novas habilidades;</li>
                <li>Participação em formações e encontros de voluntários.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- Seção de doações -->
      <section class="section" aria-labelledby="titulo-doacoes">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-doacoes">Como doar</h2>
          </header>

          <div class="doacao-grid">
            <article>
              <h3>Doações financeiras</h3>
              <p>
                As doações financeiras permitem manter nossos projetos ativos e ampliar o alcance
                das ações. Você pode contribuir com qualquer valor através de:
              </p>
              <ul>
                <li>Depósito ou transferência bancária;</li>
                <li>PIX;</li>
                <li>Doação recorrente mensal;</li>
              </ul>
              <p><strong>Dados bancários (exemplo):</strong></p>
              <p>
                Banco Exemplo (000) – Ag: 0000 – C/C: 00000-0<br>
                CNPJ: 00.000.000/0001-00 – ONG Vida em Rede
              </p>
            </article>

            <article>
              <h3>Doações de materiais</h3>
              <p>
                Também recebemos doações de alimentos, materiais escolares, equipamentos de
                informática e outros itens que possam fortalecer nossos projetos.
              </p>
              <p>
                Para combinar a entrega, entre em contato pelo e-mail
                <strong>doacoes@vidaemrede.org.br</strong> ou pelo telefone
                <strong>(11) 4000-1234</strong>.
              </p>
            </article>
          </div>
        </div>
      </section>
    `,

    cadastro: `
      <!-- Cadastro -->
      <section class="hero hero-small" aria-labelledby="titulo-cadastro">
        <div class="container">
          <h1 id="titulo-cadastro">Cadastro</h1>
          <p>
            Preencha o formulário abaixo para se cadastrar como voluntário, doador ou parceiro da
            ONG Vida em Rede.
          </p>
        </div>
      </section>

      <section class="section" aria-labelledby="titulo-formulario-cadastro">
        <div class="container">
          <header class="section-header">
            <h2 id="titulo-formulario-cadastro">Dados de cadastro</h2>
          </header>

          <!-- Área para mensagens de feedback da validação JS -->
          <div id="form-alert-container"></div>

          <form class="form" id="form-cadastro">
            <!-- Grupo: Dados Pessoais -->
            <fieldset>
              <legend>Dados pessoais</legend>

              <div class="form-group">
                <label for="nome-completo">Nome completo *</label>
                <input
                  type="text"
                  id="nome-completo"
                  name="nome-completo"
                  required
                  minlength="3"
                  placeholder="Digite seu nome completo">
              </div>

              <div class="form-group">
                <label for="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="seuemail@exemplo.com">
              </div>

              <div class="form-group">
                <label for="cpf">CPF *</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  maxlength="14"
                  pattern="^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$"
                  title="Digite no formato 000.000.000-00"
                  placeholder="000.000.000-00">
                <small class="form-help">Formato: 000.000.000-00</small>
              </div>

              <div class="form-group">
                <label for="telefone">Telefone *</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  required
                  maxlength="15"
                  pattern="^\\(\\d{2}\\) \\d{4,5}-\\d{4}$"
                  title="Digite no formato (11) 99999-9999"
                  placeholder="(11) 99999-9999">
                <small class="form-help">Formato: (11) 99999-9999</small>
              </div>

              <div class="form-group">
                <label for="data-nascimento">Data de nascimento *</label>
                <input
                  type="date"
                  id="data-nascimento"
                  name="data-nascimento"
                  required>
              </div>
            </fieldset>

            <!-- Grupo: Endereço -->
            <fieldset>
              <legend>Endereço</legend>

              <div class="form-group">
                <label for="endereco">Endereço (rua, número, complemento) *</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  required
                  minlength="5"
                  placeholder="Rua Exemplo, 123, apto 45">
              </div>

              <div class="form-group">
                <label for="cep">CEP *</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  required
                  maxlength="9"
                  pattern="^\\d{5}-\\d{3}$"
                  title="Digite no formato 00000-000"
                  placeholder="00000-000">
                <small class="form-help">Formato: 00000-000</small>
              </div>

              <div class="form-group">
                <label for="cidade">Cidade *</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  required
                  minlength="2"
                  placeholder="Digite sua cidade">
              </div>

              <div class="form-group">
                <label for="estado">Estado (UF) *</label>
                <select id="estado" name="estado" required>
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
            </fieldset>

            <!-- Grupo: Tipo de participação -->
            <fieldset>
              <legend>Como você deseja participar?</legend>

              <div class="form-group">
                <label for="tipo-participacao">Selecione uma opção *</label>
                <select id="tipo-participacao" name="tipo-participacao" required>
                  <option value="">Selecione</option>
                  <option value="voluntario">Quero ser voluntário(a)</option>
                  <option value="doador">Quero ser doador(a)</option>
                  <option value="parceiro">Quero ser parceiro institucional</option>
                </select>
              </div>

              <div class="form-group">
                <label for="area-interesse">Área de interesse (opcional)</label>
                <input
                  type="text"
                  id="area-interesse"
                  name="area-interesse"
                  placeholder="Ex: educação, comunicação, tecnologia, administrativo">
              </div>

              <div class="form-group">
                <label for="mensagem">Mensagem (opcional)</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  placeholder="Conte um pouco sobre você, suas motivações ou dúvidas."></textarea>
              </div>
            </fieldset>

            <!-- Termos e envio -->
            <fieldset>
              <legend>Confirmação</legend>

              <div class="form-group form-group-inline">
                <input
                  type="checkbox"
                  id="aceite-termos"
                  name="aceite-termos"
                  required>
                <label for="aceite-termos">
                  Li e concordo com o uso dos meus dados para fins de contato e participação nos
                  projetos da ONG Vida em Rede. *
                </label>
              </div>

              <p class="form-obrigatorio">Campos marcados com * são obrigatórios.</p>

              <button type="submit" class="btn btn-primary">Enviar cadastro</button>
            </fieldset>
          </form>
        </div>
      </section>
    `
};
