// Definindo a classe base Personagem
class Personagem {
    constructor(id, nomeCivil, nomeFantasia, poderes, fraquezas) {
        this.id = id;
        this.nomeCivil = nomeCivil;
        this.nomeFantasia = nomeFantasia;
        this.poderes = poderes;
        this.fraquezas = fraquezas;
    }
}

// Definindo a classe Herois que herda de Personagem
class Herois extends Personagem {
    constructor(id, nomeCivil, nomeFantasia, poderes, fraquezas, principalInimigo, valores, principalEquipe) {
        super(id, nomeCivil, nomeFantasia, poderes, fraquezas);
        this.principalInimigo = principalInimigo;
        this.valores = valores;
        this.principalEquipe = principalEquipe;
    }
}

// Definindo a classe Viloes que herda de Personagem
class Viloes extends Personagem {
    constructor(id, nomeCivil, nomeFantasia, poderes, fraquezas, objetivo, motivacao, principalParceiro) {
        super(id, nomeCivil, nomeFantasia, poderes, fraquezas);
        this.objetivo = objetivo;
        this.motivacao = motivacao;
        this.principalParceiro = principalParceiro;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const personagemArray = []; // Array para armazenar os personagens
    let id = 0; 
    let modoEdicao = false; // Define se estamos editando um personagem
    let personagemEditado; 

    const form = document.getElementById("personagem-form"); 
    const heroisList = document.getElementById("herois-ul"); 
    const viloesList = document.getElementById("viloes-ul"); 
    const camposHeroi = document.getElementById("campos-heroi"); 
    const camposVilao = document.getElementById("campos-vilao"); 
    const list = document.getElementById("personagens"); 

    function adicionarPersonagem(event) {
        event.preventDefault();
        id++;

        if (modoEdicao === true) {
            // Se estiver em modo de edição, atualiza o personagem existente
            atualizarPersonagem(personagemEditado, {
                nomeCivil: form.nomeCivil.value || "Desconhecido",
                nomeFantasia: form.nomeFantasia.value,
                poderes: form.poderes.value || "Desconhecido",
                fraquezas: form.fraquezas.value || "Desconhecido",
            }, form.tipo.value);

            modoEdicao = false;
            form.querySelector('button[type="submit"]').textContent = "Adicionar";
        } else {
            // Caso contrário, cria um novo personagem
            const nomeCivil = form.nomeCivil.value || "Desconhecido";
            const nomeFantasia = form.nomeFantasia.value;
            const poderes = form.poderes.value || "Desconhecido";
            const fraquezas = form.fraquezas.value || "Desconhecido";
            const tipo = form.tipo.value;

            let listItem = document.createElement("li");
            listItem.setAttribute("data-id", id);
            listItem.innerHTML = `<strong class="nomeFantasia">${nomeFantasia}</strong> (${tipo})<br>
                          <em>Nome Civil: ${nomeCivil}<br>
                          Poderes: ${poderes}<br>
                          Fraquezas: ${fraquezas}</em>`;

            if (tipo === "heroi") {
                // Se for um herói, adiciona campos específicos
                const principalInimigo = form.principalInimigo.value || "Desconhecido";
                const valores = form.valores.value || "Desconhecido";
                const principalEquipe = form.principalEquipe.value || "Desconhecido";
                listItem.innerHTML += `<br><em>Principal Inimigo: ${principalInimigo}<br>
                               Valores: ${valores}<br>
                               Equipe Principal: ${principalEquipe}</em><br><br>`;
                heroisList.appendChild(listItem);
                heroisList.style.display = "block";
            } else if (tipo === "vilao") {
                // Se for um vilão, adiciona campos específicos
                const objetivo = form.objetivo.value || "Desconhecido";
                const motivacao = form.motivacao.value || "Desconhecido";
                const principalParceiro = form.principalParceiro.value || "Desconhecido";
                listItem.innerHTML += `<br><em>Objetivo: ${objetivo}<br>
                               Motivação: ${motivacao}<br>
                               Principal Parceiro: ${principalParceiro}</em><br><br>`;
                viloesList.appendChild(listItem);
                viloesList.style.display = "block";
            }

            personagemArray.push(listItem);

            // Adiciona botões de editar e excluir ao novo item da lista
            const botaoEditar = document.createElement("button");
            botaoEditar.textContent = "Editar";
            botaoEditar.classList.add("btn-editar");
            botaoEditar.setAttribute("data-id", id);
            botaoEditar.addEventListener("click", () => editarPersonagem(listItem.getAttribute("data-id"), tipo));
            listItem.appendChild(botaoEditar);
            const botaoExcluir = document.createElement("button");
            botaoExcluir.textContent = "Excluir";
            botaoExcluir.classList.add("btn-excluir");
            botaoExcluir.setAttribute("data-id", id);
            botaoExcluir.addEventListener("click", () => excluirPersonagem(listItem, tipo));
            listItem.appendChild(botaoExcluir);

            // Limpa o formulário e esconde campos específicos
            form.reset();
            camposHeroi.style.display = "none";
            camposVilao.style.display = "none";
            form.tipo.value = "";

            // Exibe ou esconde as listas de heróis e vilões conforme necessário
            heroisList.style.display = heroisList.children.length > 0 ? "block" : "none";
            viloesList.style.display = viloesList.children.length > 0 ? "block" : "none";
            listaVisivel();
        }
    }

    
    function atualizarPersonagem(itemLista, infoAtualizada, tipo) {
        // Atualiza as informações do personagem na lista
        itemLista.querySelector(".nomeCivil").textContent = `Nome Civil: ${infoAtualizada.nomeCivil}`;
        itemLista.querySelector(".nomeFantasia").textContent = `Nome Fantasia: ${infoAtualizada.nomeFantasia}`;
        itemLista.querySelector(".poderes").textContent = `Poderes: ${infoAtualizada.nomeFantasia}`;
        itemLista.querySelector(".fraquesa").textContent = `Fraquesa: ${infoAtualizada.nomeFantasia}`;

        if (tipo === "heroi") {
            
            itemLista.querySelector(".principalInimigo").textContent = `Principal Inimigo: ${infoAtualizada.principalInimigo}`;
            itemLista.querySelector(".valores").textContent = `Valores: ${infoAtualizada.valores}`;
            itemLista.querySelector(".principalEquipe").textContent = `Equipe Principal: ${infoAtualizada.principalEquipe}`;
        } else if (tipo === "vilao") {
            
            itemLista.querySelector(".objetivo").textContent = `Objetivo: ${infoAtualizada.objetivo}`;
            itemLista.querySelector(".motivacao").textContent = `Motivação: ${infoAtualizada.motivacao}`;
            itemLista.querySelector(".principalParceiro").textContent = `Principal Parceiro: ${infoAtualizada.principalParceiro}`;
        }
    }

    
    function encontrarPersonagemPorId(id) {
        for (const item of personagemArray) {
            const dataId = item.getAttribute("data-id");
            if (dataId && parseInt(dataId) === id) {
                return item;
            }
        }
        return null;
    }

    function editarPersonagem(id, tipo) {
        modoEdicao = true;
        const idPersonagem = parseInt(id);
        personagemEditado = encontrarPersonagemPorId(idPersonagem);

        if (personagemEditado) {
            // Recupera as informações do personagem existente
            const nomeCivilElement = personagemEditado.querySelector(".nomeCivil");
            const nomeFantasiaElement = personagemEditado.querySelector(".nomeFantasia");
            const poderesElement = personagemEditado.querySelector(".poderes");
            const fraquezasElement = personagemEditado.querySelector(".fraquezas");

            const nomeCivil = nomeCivilElement ? nomeCivilElement.textContent.split("Nome Civil: ")[0] : "";
            const nomeFantasia = nomeFantasiaElement ? nomeFantasiaElement.textContent.split("Nome Fantasia: ")[0] : "";
            const poderes = poderesElement ? poderesElement.textContent.split("Poderes: ")[0] : "";
            const fraquezas = fraquezasElement ? fraquezasElement.textContent.split("Fraquezas: ")[0] : "";

            form.nomeCivil.value = nomeCivil;
            form.nomeFantasia.value = nomeFantasia;
            form.poderes.value = poderes;
            form.fraquezas.value = fraquezas;

            if (tipo === "heroi") {
                
                const principalInimigoElement = personagemEditado.querySelector(".principalInimigo");
                const valoresElement = personagemEditado.querySelector(".valores");
                const principalEquipeElement = personagemEditado.querySelector(".principalEquipe");

                const principalInimigo = principalInimigoElement ? principalInimigoElement.textContent.split("Principal Inimigo: ")[0] : "";
                const valores = valoresElement ? valoresElement.textContent.split("Valores: ")[0] : "";
                const principalEquipe = principalEquipeElement ? principalEquipeElement.textContent.split("Equipe Principal: ")[0] : "";

                form.principalInimigo.value = principalInimigo;
                form.valores.value = valores;
                form.principalEquipe.value = principalEquipe;
            } else if (tipo === "vilao") {
                
                const objetivoElement = personagemEditado.querySelector(".objetivo");
                const motivacaoElement = personagemEditado.querySelector(".motivacao");
                const principalParceiroElement = personagemEditado.querySelector(".principalParceiro");

                const objetivo = objetivoElement ? objetivoElement.textContent.split("Objetivo: ")[0] : "";
                const motivacao = motivacaoElement ? motivacaoElement.textContent.split("Motivação: ")[0] : "";
                const principalParceiro = principalParceiroElement ? principalParceiroElement.textContent.split("Principal Parceiro: ")[0] : "";

                form.objetivo.value = objetivo;
                form.motivacao.value = motivacao;
                form.principalParceiro.value = principalParceiro;
            }
            form.querySelector('button[type="submit"]').textContent = "Salvar Edição";
        } else {
            console.error("Personagem não encontrado.");
        }
    }

    function excluirPersonagem(itemLista, tipo) {
        const lista = tipo === "heroi" ? heroisList : viloesList;
        lista.removeChild(itemLista);
        lista.style.display = lista.children.length > 0 ? "block" : "none";
    }


    function atualizarCamposVisiveis() {
        const tipo = form.tipo.value;

        if (tipo === "heroi") {
            camposHeroi.style.display = "block";
            camposVilao.style.display = "none";
        } else if (tipo === "vilao") {
            camposHeroi.style.display = "none";
            camposVilao.style.display = "block";
        } else {
            camposHeroi.style.display = "none";
            camposVilao.style.display = "none";
        }
        listaVisivel();
    }

    // Função para verificar se a lista de personagens está visível
    function listaVisivel() {
        const heroisEmpty = heroisList.children.length === 0;
        const viloesEmpty = viloesList.children.length === 0;

        if (heroisEmpty && viloesEmpty) {
            list.style.display = "none";
        } else {
            list.style.display = "block";
        }
    }

    
    form.reset();
    camposHeroi.style.display = "none";
    camposVilao.style.display = "none";
    form.tipo.value = "";

    heroisList.style.display = heroisList.children.length > 0 ? "block" : "none";
    viloesList.style.display = viloesList.children.length > 0 ? "block" : "none";
    listaVisivel();

    form.tipo.addEventListener("change", atualizarCamposVisiveis);
    atualizarCamposVisiveis();

    form.addEventListener("submit", adicionarPersonagem);
    form.addEventListener("change", listaVisivel);
    listaVisivel();

    form.addEventListener("submit", adicionarPersonagem);
});
