function calcularFactorial() {
    let numeroInput = document.getElementById('numero').value;
    let numero = parseInt(numeroInput);
    
    if (isNaN(numero)) {
        alert('Por favor, introduce un número válido.');
        return;
    }

    if (numero < 0) {
        alert('Por favor, introduce un número entero no negativo.');
        return;
    }

    let resultado = factorial(numero);
    document.getElementById('resultado').innerText = `El factorial de ${numero} es ${resultado}.`;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
