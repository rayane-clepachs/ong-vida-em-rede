// assets/js/router.js
// ------------------------------------------------------
// Mini SPA baseada em hash (#inicio, #projetos, #cadastro)
// Responsável por:
// - Ler a rota atual (hash)
// - Buscar o template correspondente em window.Templates
// - Renderizar dentro do <main id="app">
// - Atualizar estado visual do menu (aria-current)
// ------------------------------------------------------

window.Router = (function () {
    // Nome da rota padrão
    const DEFAULT_ROUTE = "inicio";

    /**
     * Lê o hash da URL e devolve a rota (sem o #).
     */
    function getRouteFromHash() {
        const hash = window.location.hash || "";
        const route = hash.replace("#", "").trim();

        if (!route) {
            return DEFAULT_ROUTE;
        }

        return route;
    }

    /**
     * Busca o template correspondente à rota dentro de window.Templates.
     */
    function getTemplateForRoute(route) {
        if (!window.Templates) {
            console.warn("[Router] window.Templates não está definido. Verifique templates.js.");
            return `<p>Erro: templates não carregados.</p>`;
        }

        const template = window.Templates[route];

        if (!template) {
            console.warn(`[Router] Template não encontrado para a rota "${route}". Usando rota padrão "${DEFAULT_ROUTE}".`);
            return window.Templates[DEFAULT_ROUTE] || `<p>Rota "${route}" não encontrada.</p>`;
        }

        // Se o template for string, retorna direto.
        // Se for função que retorna string, chama a função.
        if (typeof template === "function") {
            return template();
        }

        return template;
    }

    /**
     * Atualiza o conteúdo do <main id="app"> com o template da rota.
     */
    function render(route) {
        const appContainer = document.getElementById("app");

        if (!appContainer) {
            console.warn('[Router] Elemento com id="app" não encontrado no DOM. SPA não será aplicada.');
            return;
        }

        const html = getTemplateForRoute(route);
        appContainer.innerHTML = html;
    }

    /**
     * Atualiza a navegação (menu), marcando o link atual
     * com aria-current="page" para bater com o CSS já existente.
     */
    function updateActiveNav(route) {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach((link) => {
            const href = link.getAttribute("href") || "";
            const linkRoute = href.replace("#", "").trim();

            if (linkRoute === route) {
                link.setAttribute("aria-current", "page");
            } else {
                // Remove atributo se não for a rota atual
                if (link.hasAttribute("aria-current")) {
                    link.removeAttribute("aria-current");
                }
            }
        });
    }

    /**
     * Lida com mudança de hash na URL.
     * Chamado tanto na inicialização quanto no evento "hashchange".
     */
    function handleRouteChange() {
        const route = getRouteFromHash();
        render(route);
        updateActiveNav(route);
    }

    /**
     * Inicializa o roteador: Faz o primeiro render e Configura o listener para hashchange
     */
    function init() {
        // Se não houver hash, define o padrão
        if (!window.location.hash) {
            window.location.hash = `#${DEFAULT_ROUTE}`;
        }

        // Renderiza baseado no hash atual
        handleRouteChange();

        // Atualiza sempre que o hash mudar
        window.addEventListener("hashchange", handleRouteChange);
    }

    // Expor apenas o init
    return {
        init
    };
})();
