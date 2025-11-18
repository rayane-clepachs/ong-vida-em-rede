// assets/js/validation.js
// ------------------------------------------------------
// Módulo responsável pela verificação de consistência
// dos dados do formulário de cadastro.
// - Usa HTML5 (checkValidity) + regras adicionais
// - Exibe mensagens de erro/sucesso na interface
// - Integra com a SPA (form é recriado ao mudar de rota)
// ------------------------------------------------------

window.FormValidation = (function () {
    const STORAGE_KEY = "ongVidaEmRedeUltimoCadastro";

    function showAlert(type, messages) {
        const container = document.getElementById("form-alert-container");
        if (!container) return;

        container.innerHTML = "";

        if (!messages || (Array.isArray(messages) && messages.length === 0)) {
            return;
        }

        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");

        if (type === "error") {
            alertDiv.classList.add("alert-error");
        } else if (type === "success") {
            alertDiv.classList.add("alert-success");
        }

        if (Array.isArray(messages)) {
            const ul = document.createElement("ul");
            messages.forEach((msg) => {
                const li = document.createElement("li");
                li.textContent = msg;
                ul.appendChild(li);
            });
            alertDiv.appendChild(ul);
        } else {
            alertDiv.textContent = messages;
        }

        container.appendChild(alertDiv);
    }

    /**
     * Limpa mensagens de alerta.
     */
    function clearAlerts() {
        const container = document.getElementById("form-alert-container");
        if (container) {
            container.innerHTML = "";
        }
    }

    /**
     * Valida o formulário de cadastro com base em validação nativa HTML5 (required, pattern, etc.) e regras adicionais de consistência (ex: tamanhos mínimos)
     */
    function validateForm(form) {
        const errors = [];

        const nome = form.querySelector("#nome-completo");
        const email = form.querySelector("#email");
        const cpf = form.querySelector("#cpf");
        const telefone = form.querySelector("#telefone");
        const dataNascimento = form.querySelector("#data-nascimento");
        const endereco = form.querySelector("#endereco");
        const cep = form.querySelector("#cep");
        const cidade = form.querySelector("#cidade");
        const estado = form.querySelector("#estado");
        const tipoParticipacao = form.querySelector("#tipo-participacao");
        const aceiteTermos = form.querySelector("#aceite-termos");

        // Verificação básica de campos obrigatórios (além do required)
        if (!nome.value.trim()) {
            errors.push("Informe o nome completo.");
        } else if (nome.value.trim().length < 3) {
            errors.push("O nome completo deve ter pelo menos 3 caracteres.");
        }

        if (!email.value.trim()) {
            errors.push("Informe o e-mail.");
        } else if (!email.validity.valid) {
            errors.push("Informe um e-mail em formato válido.");
        }

        if (!cpf.value.trim()) {
            errors.push("Informe o CPF.");
        } else if (!cpf.validity.valid) {
            errors.push("O CPF deve estar no formato 000.000.000-00.");
        }

        if (!telefone.value.trim()) {
            errors.push("Informe o telefone.");
        } else if (!telefone.validity.valid) {
            errors.push("O telefone deve estar no formato (11) 99999-9999.");
        }

        if (!dataNascimento.value) {
            errors.push("Informe a data de nascimento.");
        }

        if (!endereco.value.trim()) {
            errors.push("Informe o endereço completo.");
        }

        if (!cep.value.trim()) {
            errors.push("Informe o CEP.");
        } else if (!cep.validity.valid) {
            errors.push("O CEP deve estar no formato 00000-000.");
        }

        if (!cidade.value.trim()) {
            errors.push("Informe a cidade.");
        }

        if (!estado.value) {
            errors.push("Selecione o estado (UF).");
        }

        if (!tipoParticipacao.value) {
            errors.push("Selecione como você deseja participar (voluntário, doador ou parceiro).");
        }

        if (!aceiteTermos.checked) {
            errors.push("Você precisa aceitar os termos de uso dos dados para prosseguir.");
        }

        if (dataNascimento.value) {
            const hoje = new Date();
            const dataNasc = new Date(dataNascimento.value);
            if (dataNasc > hoje) {
                errors.push("A data de nascimento não pode ser uma data futura.");
            }
        }

        if (!form.checkValidity()) {
        }

        const isValid = errors.length === 0;
        return { isValid, errors };
    }

    function saveToLocalStorage(form) {
        try {
            const data = {
                nome: form.querySelector("#nome-completo")?.value || "",
                email: form.querySelector("#email")?.value || "",
                tipoParticipacao: form.querySelector("#tipo-participacao")?.value || "",
                criadoEm: new Date().toISOString()
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.warn("[FormValidation] Não foi possível salvar no localStorage.", e);
        }
    }

    /**
     * Tenta preencher alguns campos com base no localStorage,
     * se já houver algum cadastro anterior.
     */
    function restoreFromLocalStorage(form) {
        if (!form) return;
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return;

            const data = JSON.parse(raw);
            if (data.nome && form.querySelector("#nome-completo")) {
                form.querySelector("#nome-completo").value = data.nome;
            }
            if (data.email && form.querySelector("#email")) {
                form.querySelector("#email").value = data.email;
            }
            if (data.tipoParticipacao && form.querySelector("#tipo-participacao")) {
                form.querySelector("#tipo-participacao").value = data.tipoParticipacao;
            }
        } catch (e) {
            console.warn("[FormValidation] Não foi possível restaurar dados do localStorage.", e);
        }
    }

    /**
     * Configura o listener de submit para o formulário de cadastro.
     * Chamado sempre que a rota muda (SPA recria o HTML do formulário).
     */
    function attachFormHandler() {
        const form = document.getElementById("form-cadastro");
        if (!form) {
            // Estamos em outra rota, não há formulário na tela.
            return;
        }

        // Evitar adicionar o listener mais de uma vez
        if (form.dataset.hasValidation === "true") {
            return;
        }
        form.dataset.hasValidation = "true";

        // Restaurar dados do localStorage (opcional, mas enriquece o projeto)
        restoreFromLocalStorage(form);

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // SPA: não queremos recarregar a página
            clearAlerts();

            const { isValid, errors } = validateForm(form);

            if (!isValid) {
                showAlert("error", errors);
                // Exibir balão de validação nativo do primeiro campo inválido, se quiser
                form.reportValidity();
                return;
            }

            // Se chegou até aqui, os dados são considerados consistentes
            saveToLocalStorage(form);
            showAlert("success", "Cadastro enviado com sucesso! Em breve entraremos em contato.");

            // Limpa o formulário após um envio bem-sucedido
            form.reset();
        });
    }

    /**
     * Inicializa o módulo de validação:
     * - Tenta anexar o handler ao formulário atual
     * - Escuta mudanças de rota (hashchange) para reaplicar
     */
    function init() {
        attachFormHandler();

        window.addEventListener("hashchange", function () {
            // A cada mudança de rota, tentamos novamente,
            // pois o formulário pode ter sido recriado pela SPA.
            attachFormHandler();
        });
    }

    // Expor apenas o init
    return {
        init
    };
})();
