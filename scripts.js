function valorFinal () {
    const quantidadeKw = document.querySelector("#KW").value
    
    const valorKw = document.querySelector("#tarifa").value

    const valorFinal = quantidadeKw * valorKw

    document.querySelector("#result").finalAnwer.innerHTML = valorFinal
}