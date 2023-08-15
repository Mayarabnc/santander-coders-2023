function calcularIMC(){
    let peso = 51;
    let altura = 1.65;
    let imc = peso/(altura*altura);

    if (imc < 18.5) {
        console.log("Abaixo do peso normal") ;
    }else if(imc >= 18.5 && imc <= 24.9){
        console.log("Peso normal") ;
    }else if(imc > 24.9 && imc <= 29.9){
        console.log("Sobrepeso");
    }else if(imc > 30 && imc <= 34.9){
        console.log("Obesidade grau I");
    }else if(imc > 34.9 && imc <= 39.9){
        console.log("Obesidade grau II ");
    }else{
        console.log ("Obesidade grau III ");
    }

    console.log(imc);

}

calcularIMC()

//Tipos de dados

// String
    let nome = "Mayara";
    console.log(typeof nome);

// Number
    const idade =  21;
    console.log(typeof idade);

// Boolean
    let hidden = false;
    console.log(typeof hidden );
    
// Symbol