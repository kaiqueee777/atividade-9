function resp1() {

    var resp1 = "oi tudo bem com você?"

    var nome = document.getElementById("resp").value;

    document.getElementById("respb").innerHTML = resp1 + nome;

}

function resp2() {

    var resp2 = "fico feliz,mas vc acha legal?"

    var vida = document.getElementById("resp").value;

    document.getElementById("respb").innerHTML = resp2 + vida;

}

function resp3() {

    var resp3 = "qual é sua comida preferida?"

    document.getElementById("respb").innerHTML = resp3;

}

function resp4() {

    var comida= document.getElementById("resp").value;

    var resp4 = "você torce para algum time de futebol?"

    var resp5 ="você prefere dia ou noite?"

    var resp6 ="qual é seu esporte favorito?"

    if (comida== "S"||comida == "s" || comida == "sim" ||  comida  == "Sim"){

        document.getElementById("respb").innerHTML = resp4;

    } else if ( comida == "N"||  comida == "n" ||  comida  == "não"||  comida  == "Não") {

        document.getElementById("perg").innerHTML = resp5;
       
      
        

    } else {

        document.getElementById("respb").innerHTML = resp6;

    }

}

function perg1() { 

    var perg1 = "qual faculdade vc quer fazer?"

    document.getElementById("perg").innerHTML = perg1
}
function perg2() { 

    var perg2 = "Se você ganhasse na loteria o`que vc faria ?"

    document.getElementById("perg").innerHTML = perg2
}function perg3() { 

    var perg3 = "você gosta de biscoito?(S/N)"

    document.getElementById("perg").innerHTML = perg3
}




let botao = document.getElementById("bt");
let funcoes = [resp1, resp2, resp3, resp4,];
let indice = 0;

botao.addEventListener("click", function() {
    funcoes[indice]();
    indice = (indice + 1) % funcoes.length;
});



let botao1 = document.getElementById("bt1");
let funcoes2 = [perg1, perg2, perg3,];
let indice3 = 0;

botao1.addEventListener("click", function() {
    funcoes2[indice3]();
    indice3 = (indice3 + 1) % funcoes2.length;
});
