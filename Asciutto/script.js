document.addEventListener("DOMContentLoaded", function() {
    // Lógica para o botão "Gerar Boleto"
    const gerarBoletoBtn = document.getElementById("gerarBoletoBtn");
    gerarBoletoBtn.addEventListener("click", function() {
        // Troca a imagem do boleto
        const boletoImage = document.getElementById("boletoImage");
        boletoImage.src = "boleto.jpg";

        // Oculta a frase
        const boletoPhrase = document.getElementById("boletoPhrase");
        boletoPhrase.style.display = "none";

        // Oculta o botão de gerar boleto
        gerarBoletoBtn.style.display = "none";
    });

    // Lógica para o botão "Gerar QR Code"
    const gerarQRCodeBtn = document.getElementById("gerarQRCodeBtn");
    gerarQRCodeBtn.addEventListener("click", function() {
        // Troca a imagem do QR code
        const qrcodeImage = document.getElementById("qrcodeImage");
        qrcodeImage.src = "qrcode.jpg";

        // Oculta a frase
        const qrcodePhrase = document.getElementById("qrcodePhrase");
        qrcodePhrase.style.display = "none";

        // Oculta o botão de gerar QR Code
        gerarQRCodeBtn.style.display = "none";
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