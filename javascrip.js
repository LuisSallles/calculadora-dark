// Essa função irá calcular os números inseridos ao apertar "="
function calcular() {
    let resultado = document.getElementById('calculadora-resultado').innerHTML
    if (resultado || numeroLimite(oito)) {
        document.getElementById('calculadora-resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('calculadora-resultado').innerHTML = `0`
    }
}

// Essa função mostra os números na tela
function insert(txtnum) {
    var numero = document.getElementById('calculadora-resultado').innerHTML
    document.getElementById('calculadora-resultado').innerHTML = numero + txtnum
}

// Essa função apaga todos os números da tela. "C"
function apagarTudo() {
    document.getElementById('calculadora-resultado').innerHTML = ``
}

// Essa função apaga apenas um número de cada vez. "AC"
function apagarUmNumero() {
    var apagarNumero = document.getElementById('calculadora-resultado').innerHTML
    document.getElementById('calculadora-resultado').innerHTML = apagarNumero.substring(0, apagarNumero.length -1)
}

