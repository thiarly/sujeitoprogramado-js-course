 function pedir(){
    var valor = prompt("Digite um valor: 1 a 5: ");

    switch (Number(valor)) {
        case 1:
            document.write("Você escolheu Suco");
            break;
        case 2:
            document.write("Você escolheu Refrigerante");
            break;
        case 3:
            document.write("Você escolheu Água");
            break;
        case 4:
            document.write("Você escolheu Café");
            break;
        case 5:
            document.write("Você escolheu Chá");
            break;
}}