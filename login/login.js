

// console.log("Hello World!!");

// alert("Hello World!");

// var nome = "Késsia" Não vamos usar o var.

// let nome = "Késsia"
// console.log(nome)
// const nome = "késsia"

// nome= "Pedro"
// console.log(nome)

const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha")

console.log(btnSenha.type)

btnSenha.addEventListener("click", function () {

//  if(campoSenha.type == "password") {
//      campoSenha.type = "text";
//
//   }
//   else {
//       campoSenha.type = "password";
//    }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
})

