let name = prompt("Insira o seu nome completo!")
window.document.getElementById("name").innerHTML = "Olá, " + name + "!"

const simNao = prompt (name + ", você quer inicar o questionário? \n 1.Sim \n 2.Não")
if (simNao == 1){
    let questao1 = prompt("Qual o nome da artista que interpreta a Bianca no filme \'10 Coisas que Odeio em Você\'? \n 1.Larisa Oleynik \n 2.Kristen Stewart \n 3.Angelina Jollie")
    if (questao1==1){
        document.getElementById("questao1").innerHTML = "Resposta 1"
    }
    else{
        document.getElementById("resEr1").innerHTML = "Resposta 1" 
    }
    let questao2 = prompt("Quem iterpreta a atriz principal no filme \'Uma linda mulher\'? \n 1.Julia Roberts \n 2.Sandra Bullock. \n 3.Cameron Diaz")
    if (questao1==1){
        document.getElementById("questao2").innerHTML = "Resposta 2"
    }
    else{
        document.getElementById("resEr2").innerHTML = "Resposta 2" 
    }
    let questao3 = prompt("Qual o nome do cachorro no filme \'Marley&Eu\'? \n 1.Bob \n 2.Marley \n 3.Jack")
    if (questao1==2){
        document.getElementById("questao3").innerHTML = "Resposta 3"
    }
    else{
        document.getElementById("resEr3").innerHTML = "Resposta 3" 
    }
    
}
    
else{
    alert("Que pena! Nos vemos outra hora.")
}






   
