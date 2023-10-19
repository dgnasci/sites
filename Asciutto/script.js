document.addEventListener("DOMContentLoaded", function() {
    // Lógica para o botão "Gerar Boleto"
    const gerarBoletoBtn = document.getElementById("gerarBoletoBtn");
    gerarBoletoBtn.addEventListener("click", function() {
        // Troca a imagem do boleto e exibe a frase
        const boletoImage = document.getElementById("boletoImage");
        boletoImage.src = "boleto.jpg";
        const boletoPhrase = document.getElementById("boletoPhrase");
        boletoPhrase.textContent = "Vencimento em 1 dia útil. A data de entrega pode ser alterada devido ao tempo de processamento do Boleto.";
    });

    // Lógica para o botão "Gerar QR Code"
    const gerarQRCodeBtn = document.getElementById("gerarQRCodeBtn");
    gerarQRCodeBtn.addEventListener("click", function() {
        // Troca a imagem do QR code e exibe a frase
        const qrcodeImage = document.getElementById("qrcodeImage");
        qrcodeImage.src = "qrcode.jpg";
        const qrcodePhrase = document.getElementById("qrcodePhrase");
        qrcodePhrase.textContent = "O código Pix gerado para o pagamento é válido por 30 minutos após a finalização do pedido.";
    });

    // Lógica para mostrar/ocultar a aba de pagamento em Cartão
    const cartaoTab = document.getElementById("cartao-tab");
    const cartaoContent = document.getElementById("cartao");
    cartaoTab.addEventListener("click", function() {
        // Certifique-se de que o conteúdo da aba de pagamento em Cartão seja mostrado ao clicar na aba
        if (!cartaoContent.classList.contains("show")) {
            cartaoContent.classList.add("show");
        }
    });

    // Lógica para o botão "Finalizar Compra"
    const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
    finalizarCompraBtn.addEventListener("click", function() {
        // Substitua a lógica para finalizar a compra aqui

        // Exibe um alerta
        alert("Compra finalizada com sucesso");

        // Redireciona de volta para o índice
        window.location.href = "index.html";
    });
});