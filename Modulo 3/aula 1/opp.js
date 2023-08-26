class Caneta{
    constructor(cor,carga,tampada){
        this.cor = cor;
        this.carga = carga;
        this.tampada = tampada;
        if(tampada == true){
            console.log("Caneta tampada, não tem como escrever, por favor tire a tampa");
        }else if(carga <= 0){
            console.log("não existe carga nessa caneta, por favor pegue outra se você deseja escrever alguma coisa");
        }
    }
    dadosCaneta(){
        return `cor: ${this.cor};\ncarga: ${this.carga}%;\ntampada: ${this.tampada}`
    }
    imprimir() {
        const dadosCanetaElement = document.getElementById("dadosCaneta");
        dadosCanetaElement.innerHTML = this.dadosCaneta();
    }
}

const c1 = new Caneta("vermelha",100,false);
c1.dadosCaneta();