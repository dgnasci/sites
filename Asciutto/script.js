document.addEventListener("DOMContentLoaded", function() {
    const cartaoTab = document.getElementById("cartao-tab");
    const boletoTab = document.getElementById("boleto-tab");
    const qrcodeTab = document.getElementById("qrcode-tab");

    const cartaoTabContent = document.getElementById("cartao");
    const boletoTabContent = document.getElementById("boleto");
    const qrcodeTabContent = document.getElementById("qrcode");

    // Função para exibir a aba de cartão
    function exibirCartaoTab() {
        cartaoTabContent.style.display = "block";
        boletoTabContent.style.display = "none";
        qrcodeTabContent.style display = "none";
    }

    // Função para exibir a aba de boleto
    function exibirBoletoTab() {
        cartaoTabContent.style.display = "none";
        boletoTabContent.style.display = "block";
        qrcodeTabContent.style.display = "none";
    }

    // Função para exibir a aba de QR Code
    function exibirQRCodeTab() {
        cartaoTabContent.style.display = "none";
        boletoTabContent.style.display = "none";
        qrcodeTabContent.style.display = "block";
    }

    // Ações ao selecionar a forma de pagamento
    cartaoTab.addEventListener("click", exibirCartaoTab);
    boletoTab.addEventListener("click", exibirBoletoTab);
    qrcodeTab.addEventListener("click", exibirQRCodeTab);

    // Lógica para o botão "Gerar Boleto"
    const gerarBoletoBtn = document.getElementById("gerarBoletoBtn");
    gerarBoletoBtn.addEventListener("click", function() {
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
    
        alert("Boleto gerado com sucesso!");
    });

    // Lógica para o botão "Gerar QR Code"
    const gerarQRCodeBtn = document.getElementById("gerarQRCodeBtn");
    gerarQRCodeBtn.addEventListener("click", function() {
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
  
        alert("QR Code gerado com sucesso!");
    });

    // Lógica para o botão "Finalizar Compra"
    const finalizarCompraBtn = document.getElementById("finalizarCompraBtn");
    finalizarCompraBtn.addEventListener("click", function() {
        // Implemente aqui a lógica para finalizar a compra
        alert("Compra finalizada com sucesso");
    });
});