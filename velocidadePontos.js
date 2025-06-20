function calcularVelocidadePonto() {
    let g = document.getElementById("gravidade").value.trim();
    let anguloGraus = document.getElementById("angulo").value.trim();
    let v0 = document.getElementById("v0").value.trim();
    let d1 = document.getElementById("distancia1").value.trim();
    let d2 = document.getElementById("distancia2").value.trim();

    let mensagem = "";

    if (g === "" || anguloGraus === "" || v0 === "" || d1 === "" || d2 === "") {
        mensagem = "Por favor, insira um valor em todos os campos.";
    } else {
        g = parseFloat(g);
        anguloGraus = parseFloat(anguloGraus);
        v0 = parseFloat(v0);
        d1 = parseFloat(d1);
        d2 = parseFloat(d2);

        if (g <= 0) {
            mensagem = "A gravidade deve ser um número positivo.";
        } else if (anguloGraus < 0 || anguloGraus > 180) {
            mensagem = "O ângulo deve ser um número de zero a 180.";
        } else if (v0 < 0) {
            mensagem = "A velocidade inicial deve ser um número positivo ou zero.";
        } else if (d1 <= 0) {
            mensagem = "O tamanho da rampa deve ser um número positivo.";
        } else if (d2 <= 0) {
            mensagem = "O tamanho percorrido deve ser maior que 0.";
        } else if (d2 > d1) {
            mensagem = "A distância percorrida não pode ser maior que o tamanho da rampa.";
        } else {
            const rad = anguloGraus * Math.PI / 180;
            const aceleracao = g * Math.sin(rad);
            const vFinal2 = v0 * v0 + 2 * aceleracao * d2;

            if (vFinal2 < 0) {
                mensagem = "A velocidade calculada seria um número imaginário. Verifique os valores.";
            } else {
                const vFinal = Math.sqrt(vFinal2);
                mensagem = `A velocidade nesse ponto é de ${vFinal.toFixed(3)}m/s.`;
            }
        }
    }

    document.getElementById("resultado").textContent = mensagem;
}