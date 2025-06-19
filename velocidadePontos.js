function calcularVelocidadeFinal() {
    const g = parseFloat(document.getElementById("gravidade").value);
    const anguloGraus = parseFloat(document.getElementById("angulo").value);
    const v0 = parseFloat(document.getElementById("v0").value);
    const d1 = parseFloat(document.getElementById("distancia1").value);
    const d2 = parseFloat(document.getElementById("distancia2").value);

    const d=d2-d1

    const rad = anguloGraus * Math.PI / 180;
    const aceleracao = g * Math.sin(rad);

    // Coeficientes da equação quadrática: (1/2) a t² + v0 t - d = 0
    const A = 0.5 * aceleracao;
    const B = v0;
    const C = -d;

    const delta = B * B - 4 * A * C;

    if (delta < 0) {
        document.getElementById("resultado").textContent = "Não há solução real para o tempo.";
        return;
    }

    const t1 = (-B + Math.sqrt(delta)) / (2 * A);
    const t2 = (-B - Math.sqrt(delta)) / (2 * A);

    // Escolhe o tempo positivo e maior que zero
    let tempo;
    if (t1 > 0 && t2 > 0) tempo = Math.min(t1, t2);
    else if (t1 > 0) tempo = t1;
    else if (t2 > 0) tempo = t2;
    else {
        document.getElementById("resultado").textContent = "Tempo negativo, situação inválida.";
        return;
    }

    // Calcula velocidade final: v = v0 + a * t
    const vFinal = v0 + aceleracao * tempo;

    document.getElementById("resultado").textContent =
        `A velocidade final é ${vFinal.toFixed(2)} m/s.`;
}