function mostrar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    var nascimento = document.getElementById("nascimento").value
    var observacao = document.getElementById("observacao").value
    var estados = document.getElementById("estados").value
    var senha = document.getElementById("senha").value
    var sexo = document.querySelector("input[name='sexo']:checked").value
    var almoco=document.getElementById("checkboxAlmoco").checked
    if (almoco)
    {almoco="sim"}
    else
    {almoco="não"}

    var valetransporte=document.getElementById("checkboxTransporte").checked
    if (valetransporte)
    {valetransporte="sim"}
    else
    {valetransporte="não"}


    alert("Nome: " + nome + "\nIdade: " + idade + " \n Data de nascimento: " 
    + nascimento + "\n Oberservação: " + observacao + "\n Estado de origem: " 
    + estados + "\n Senha: " + senha + "\n Sexo: " + sexo + "\n Almoço: " + almoco + "\n VT" + valetransporte)
}