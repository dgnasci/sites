// Função para exibir campos de acordo com a forma de pagamento selecionada
document.addEventListener("DOMContentLoaded", function() {
    const cartaoCampos = document.getElementById("cartao-campos");
    const boletoQRCodeBotoes = document.getElementById("boleto-qrcode-botoes");
    const valorTotalModal = document.getElementById("valor-total-modal");

    const cartaoRadio = document.getElementById("cartao");
    const boletoRadio = document.getElementById("boleto");
    const qrcodeRadio = document.getElementById("qrcode");

    cartaoRadio.addEventListener("change", function() {
        cartaoCampos.style.display = "block";
        boletoQRCodeBotoes.style.display = "none";
        valorTotalModal.textContent = "Total: R$ 49.99";
    });

    boletoRadio.addEventListener("change", function() {
        cartaoCampos.style.display = "none";
        boletoQRCodeBotoes.style.display = "block";
        valorTotalModal.textContent = "Total: R$ 49.99";
    });

    qrcodeRadio.addEventListener("change", function() {
        cartaoCampos.style.display = "none";
        boletoQRCodeBotoes.style.display = "block";
        valorTotalModal.textContent = "Total: R$ 49.99";
    });

    // Lógica para o botão "Gerar Boleto"
    const gerarBoletoBtn = document.getElementById("gerarBoletoBtn");
    gerarBoletoBtn.addEventListener("click", function() {
        // Implemente aqui a lógica para gerar o boleto
        alert("Boleto gerado com sucesso!");
    });

    // Lógica para o botão "Gerar QR Code"
    const gerarQRCodeBtn = document.getElementById("gerarQRCodeBtn");
    gerarQRCodeBtn.addEventListener("click", function() {
        // Implemente aqui a lógica para gerar o QR Code
        alert("QR Code gerado com sucesso!");
    });

    // Lógica para o botão "Finalizar Compra"
    const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
    finalizarCompraBtn.addEventListener("click", function() {
        // Implemente aqui a lógica para finalizar a compra
        alert("Compra finalizada com sucesso");
    });
});