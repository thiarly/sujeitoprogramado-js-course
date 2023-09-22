// function entrar(){
//     alert("Bem vindo ao sistema!");
// }


var area = document.getElementById("area");

function entrar(){
    var texto = prompt("Digite seu nome");
    if(texto == "" || texto == null){
        alert("Digite seu nome novamente");
        area.innerHTML = "Bem vindo...";
    }else{
        area.innerHTML = "Bem vindo " + texto + " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair";
        area.appendChild(botaoSair);
        botaoSair.onclick = function(){
            Sair();
        }

    }
}


function Sair(){
    alert("Você saiu do sistema");
    area.innerHTML = "Bem vindo...";
}