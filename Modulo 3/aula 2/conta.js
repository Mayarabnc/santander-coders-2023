class Conta {
    #numeroConta;
    static #cpfs = new Set();

    
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;

        // Convertendo o CPF para array de dígitos
        const cpfArray = Array.from(String(cpf), Number);

        // Verificar se o CPF já existe
        const cpfNumero = parseInt(cpf);
        if (Conta.#cpfs.has(cpfNumero)) {
            this.mensagemCriacao = this.mensagemCpfExistente();
            this.#numeroConta = formatacaoVermelhaComNegrito("Não criada");
        } else {
            this.mensagemCriacao = this.mensagemContaCriada();
            this.#numeroConta = Utils.numeroConta();

            Conta.#cpfs.add(cpfNumero);
        }
    }

    mensagemContaCriada() {
        return formatacaoVerdeComNegrito("Conta criada com sucesso!");
    }

    mensagemCpfExistente() {
        return formatacaoVermelhaComNegrito("CPF já existente, gostaria de logar?");
    }

    exibirInformacoes() {
        return `\nNúmero da Conta:\x1b[1m\x1b[36m ${this.numeroConta} \x1b[0m\nNome: ${this.nome}\nCPF: ${this.cpf}\n${this.mensagemCriacao}\n`;
    }

    set numeroConta(numero) {
        this.#numeroConta = numero;
    }

    get numeroConta() {
        return this.#numeroConta;
    }
}

class Utils {
    static totalContas = 0;

    static numeroConta() {
        return ++Utils.totalContas;
    }
}

function formatacaoVermelhaComNegrito(text) {
    return `\x1b[1m\x1b[31m${text}\x1b[0m`;
}

function formatacaoVerdeComNegrito(text) {
    return `\x1b[1m\x1b[32m${text}\x1b[0m`;
}

const c = new Conta("Mayara", "123456789");
const c1 = new Conta("Telma", "987654321");
const c2 = new Conta("Marina", "647589123");
const c3 = new Conta("Mariana", "879650432");
const c4 = new Conta("Mayara 2", "123456789");
const c5 = new Conta("Izaura", "321456789");

console.log(c.exibirInformacoes());
console.log(c1.exibirInformacoes());
console.log(c2.exibirInformacoes());
console.log(c3.exibirInformacoes());
console.log(c4.exibirInformacoes());
console.log(c5.exibirInformacoes());