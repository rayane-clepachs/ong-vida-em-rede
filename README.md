# 🌐 Plataforma Web – ONG Vida em Rede

Projeto desenvolvido para a disciplina de Desenvolvimento Front-End, com foco na criação de uma plataforma web moderna, responsiva, acessível e funcional para Organizações Não Governamentais (ONGs).  
A proposta simula um ambiente profissional completo, passando por estruturação HTML, estilização CSS, interatividade JavaScript, versionamento Git e deploy.

---

## 🧭 Objetivo do Projeto

Criar uma plataforma web institucional para uma ONG fictícia (“ONG Vida em Rede”), permitindo:

- Apresentar informações institucionais  
- Listar projetos sociais  
- Engajar voluntários  
- Receber cadastros de doadores, parceiros ou voluntários  
- Simular funcionalidades reais de uma aplicação moderna em SPA  

O desenvolvimento seguiu todas as quatro entregas obrigatórias da disciplina.

---

# 🧩 **Funcionalidades principais**

## 🔹 **Entrega I — HTML5 e Estruturação**
- Páginas: `index.html`, `projetos.html`, `cadastro.html`
- Estrutura semântica completa (header, nav, main, section, article, figure etc.)
- Formulário com:
  - campos HTML5 modernos  
  - validações nativas  
  - máscaras de CPF, CEP e telefone  
- Imagens otimizadas organizadas na pasta `/assets/img`.

---

## 🎨 **Entrega II — CSS3, Responsividade e Design System**
- Design System completo utilizando variáveis CSS:
  - Paleta com 8 cores
  - Tipografia com 5 níveis de fonte
  - Escalas de espaçamento (8px a 64px)
- Layout responsivo (mobile-first)
- Grid próprio de 12 colunas
- Navegação responsiva com menu hambúrguer
- Componentes:
  - Cards
  - Botões (hover, focus, active, disabled)
  - Badges
  - Alerts, toasts e modal
  - Formulários estilizados

---

## ⚙️ **Entrega III — JavaScript, SPA e Interatividade**
- Mini SPA utilizando `hash routing` (`#inicio`, `#projetos`, `#cadastro`)
- Arquitetura JS modular:
  - `app.js` — inicialização geral
  - `router.js` — navegação SPA
  - `templates.js` — templates HTML dinâmicos
  - `validation.js` — validação avançada
- Validação de consistência do formulário (JS + HTML5)
- Mensagens dinâmicas de erro e sucesso
- Armazenamento de dados no `localStorage`
- Manipulação de DOM e eventos

---

## ♿ **Entrega IV — Versionamento, Acessibilidade e Deploy**
- GitFlow simplificado (branches: `main`, `develop`, `feature/*`, `release/*`)
- Commits semânticos
- Issues, Milestones e Releases (`v1.0.0`, `v1.1.0`, `v1.2.0`)
- Acessibilidade WCAG 2.1 – Nível AA:
  - Navegação por teclado
  - Foco visível
  - Contraste aprimorado
  - Texto alternativo nas imagens
  - Modo escuro e modo de alto contraste
- Arquivos minificados (CSS/JS)
- Imagens comprimidas
- Deploy realizado via **GitHub Pages**

---

# 📁 Estrutura de Pastas

/
├── index.html
├── projetos.html
├── cadastro.html
├── assets/
│ ├── css/
│ │ ├── base.css
│ │ ├── layout.css
│ │ ├── components.css
│ │ ├── utilities.css
│ │ └── style.css
│ ├── js/
│ │ ├── app.js
│ │ ├── router.js
│ │ ├── templates.js
│ │ └── validation.js
│ └── img/
│ ├── logo-ong.png
│ ├── capa-ong.png
│ ├── projeto1.png
│ ├── projeto2.png
│ └── projeto3.png


# 🛠️ Tecnologias utilizadas

- **HTML5** – semântica e acessibilidade  
- **CSS3** – flexbox, grid, variáveis, design system  
- **JavaScript (ES6+)** – SPA, validação, DOM, eventos  
- **Git & GitHub** – versionamento, releases e deploy  
- **WCAG 2.1 AA** – boas práticas de acessibilidade  

---

# 📄 Licença

Este projeto foi desenvolvido exclusivamente para fins educacionais no contexto da disciplina de Desenvolvimento Front-End (usei MIT por ser simples).

---

# 🙌 Agradecimentos

Agradecimentos à equipe docente e à proposta do projeto, que permitiu explorar tecnologias essenciais do desenvolvimento web, aplicadas em um contexto social relevante.
