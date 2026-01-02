//efeito do botão voltar ao Topo
function topo() {
    windows.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}
//Validação de Login
function login() {
    var logado = 0;
    var usuario = document.getelementById("usuario").value;
    var senha = document.getelementById("senha").value;

    if (usuario == "admin" && senha == "123456") {
        window.location = "index.html";
        logado = 1;
        alert("Login realizado com sucesso!");
    }
    if (logado == 0) {
        alert("Usuário ou senha incorretos!");
    }

}
//Ativar alert no botão cadastrar

function cadastro() {
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
}