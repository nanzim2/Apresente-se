const botao = document.getElementById("botao");

botao.addEventListener("click", function(){
   var nome = String(prompt("Qual é o seu Nome?"));

   //validação nome
   if (nome.trim() === "" || !isNaN(Number(nome))) {
      alert("Por favor, digite um nome válido");
      return; //sai da função
   }

   var idade = prompt("Qual a sua idade?");

   //validação idade
   if (idade.trim() !== "" && !isNaN(idade)) { 
      idade = parseInt(idade); //Converte para número
      
      window.alert(`Prazer em te conhecer ${nome}!`)

      if (idade >= 18) {
       window.alert(`Você tem ${idade} anos e você é MAIOR de idade`)
      }  else {
       window.alert(`Você tem ${idade} anos e você é MENOR de idade`)
      }
   } else {
      alert ("Por favor, digite um número válido.")
   }
});