var peso;
var altura;
var imc;
var resultado;



function calcular(event){
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");

    if(imc < 18.5){
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " e você está abaixo do peso.";
    }else if (imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " e você está com o peso normal.";
    }else if (imc >= 25 && imc <= 29.9){
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " e você está com sobrepeso.";
    }else if (imc >= 30 && imc <= 34.9){
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " e você está com obesidade grau 1.";
    }

}