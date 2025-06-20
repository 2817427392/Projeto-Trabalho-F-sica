function calcularTempo() {
  const g = document.getElementById("gravidade").value;
  const anguloGraus = document.getElementById("angulo").value;
  const v0 = document.getElementById("v0").value;
  const s = document.getElementById("distancia").value;
  let mensagem = "";

  if (g.trim() === "" || anguloGraus.trim() === "" || v0.trim() === "" || s.trim() === "") {
    mensagem = "Por favor, insira um valor em todos os campos.";
  } else if (g <= 0) {
    mensagem = "A gravidade deve ser um número positivo.";
  } else if (anguloGraus < 0 || anguloGraus > 180) {
    mensagem = "O ângulo deve ser um número de zero a 180.";
  } else if (v0 < 0) {
    mensagem = "A velocidade inicial deve ser um número positivo ou zero.";
  } else if (s <= 0) {
    mensagem = "O tamanho da rampa deve ser um número positivo.";
  } else {
    const anguloRad = anguloGraus * Math.PI / 180;
    const a = g * Math.sin(anguloRad);

    // Resolve a equação do 2º grau: s = v0*t + 1/2*a*t²
    // Coeficientes:
    const A = 0.5 * a;
    const B = v0;
    const C = -s;

    const delta = B * B - 4 * A * C;

    if (delta < 0) {
      mensagem = "Não há solução real (Δ < 0).";
      return;
    } else {
      const t1 = (-B + Math.sqrt(delta)) / (2 * A);
      const t2 = (-B - Math.sqrt(delta)) / (2 * A);

      const tempo = Math.max(t1, t2);
      mensagem = `Tempo: ${tempo.toFixed(3)} segundos`
    }
  }
  const resultado = document.getElementById("resultado");
  resultado.textContent = mensagem;
}