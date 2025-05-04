const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
   var nome = prompt("Qual é o seu Nome?");
   var idade = prompt("Qual a sua idade?");
   window.alert(`Prazer em te conhecer ${nome}!`)
   if (idade >= 18) {
    window.alert(`Você tem ${idade} anos e você é MAIOR de idade`)
   }
   else {
    window.alert(`Você tem ${idade} anos e você é MENOR de idade`)
   }
});