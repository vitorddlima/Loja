function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()

    if(nome && senha && nome === "admin" && senha === "1234"){
        const user = {
            name: nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("usuario", JSON.stringify(user))

        window.location.href = "../loja/loja.html"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "2px solid lightpink"
        document.getElementById("senha").style.border = "2px solid lightpink"
    }
}

function fecharError(){
    document.getElementById("nome").style.border = "2px solid aliceblue"
    document.getElementById("senha").style.border = "2px solid aliceblue"
    document.getElementById("error-modal").style.display = "none"
}

function showPessword(){
    var imputSenha = document.querySelector("#senha")
    if(imputSenha.getAttribute("type") === "password"){
    imputSenha.setAttribute("type", "text")

}else{
    imputSenha.setAttribute("type", "password")
}
}