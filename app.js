// assets/js/app.js
// ------------------------------------------------------
// Ponto de entrada da aplicação (inicialização global)
// ------------------------------------------------------

const App = (function () {
    /**
     * Inicializa o roteamento (SPA) caso o módulo Router exista.
     * A responsabilidade de escutar o hashchange e trocar templates
     * fica dentro de router.js.
     */
    function initRouter() {
        if (window.Router && typeof window.Router.init === "function") {
            window.Router.init();
        } else {
            console.warn("[App] Módulo Router não encontrado ou sem método init().");
        }
    }

    /**
     * Inicializa a validação dos formulários, caso o módulo
     * FormValidation exista. As regras de consistência de dados
     * ficam em validation.js.
     */
    function initFormValidation() {
        if (window.FormValidation && typeof window.FormValidation.init === "function") {
            window.FormValidation.init();
        } else {
            console.warn("[App] Módulo FormValidation não encontrado ou sem método init().");
        }
    }

    /**
     * Inicializa o comportamento do menu hambúrguer no mobile.
     * Esta função é defensiva: se os elementos não existirem no HTML,
     * nada é quebrado.
     *
     * Esperado no HTML: um botão com classe .menu-toggle e um nav com classe .nav-collapsible contendo o .menu
     */
    function initMenuToggle() {
        const menuToggle = document.querySelector(".menu-toggle");
        const navCollapsible = document.querySelector(".nav-collapsible");
        const menu = navCollapsible ? navCollapsible.querySelector(".menu") : null;

        if (!menuToggle || !navCollapsible || !menu) {
            // Se o HTML ainda não tiver esses elementos, apenas não faz nada.
            console.info("[App] Menu hamburguer não encontrado no DOM (ok para agora).");
            return;
        }

        // Começa com o menu colapsado em telas pequenas
        menu.classList.add("is-collapsed");

        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("is-collapsed");
        });
    }

    /**
     * Função principal de inicialização da aplicação.
     * É chamada quando o DOM terminar de carregar.
     */
    function init() {
        initRouter();
        initFormValidation();
        initMenuToggle();
    }

    return {
        init
    };
})();

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    App.init();
});
