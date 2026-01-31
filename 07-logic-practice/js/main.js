const numeroInput = document.getElementById("numero-input");
const btnVerificar = document.getElementById("btn-verificar");
const resultado = document.querySelector(".res");

btnVerificar.addEventListener("click", () => {
    const valor = numeroInput.value.trim();
    const numero = Number(valor);

    // Validação
    if (valor === "" || isNaN(numero)) {
        resultado.textContent = "Digite um número válido.";
        return;
    }

    // Verificação
    if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é Par`;
    } else {
        resultado.textContent = `O número ${numero} é Ímpar`;
    }
});
