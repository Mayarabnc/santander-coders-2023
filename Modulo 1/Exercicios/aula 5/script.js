function enviar(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    if(nome != "" && email != "" && telefone != "" && mensagem != ""){
        alert("Enviado");
    }else{
        alert("Preencha todos os campos!");
    }
}