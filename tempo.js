function calcularTempo() {
  const g = parseFloat(document.getElementById("gravidade").value);
  const anguloGraus = parseFloat(document.getElementById("angulo").value);
  const v0 = parseFloat(document.getElementById("v0").value);
  const s = parseFloat(document.getElementById("distancia").value);

  const anguloRad = anguloGraus * Math.PI / 180;
  const a = g * Math.sin(anguloRad);

  // Resolve a equação do 2º grau: s = v0*t + 1/2*a*t²
  // Coeficientes:
  const A = 0.5 * a;
  const B = v0;
  const C = -s;

  const delta = B * B - 4 * A * C;

  const resultadoDiv = document.getElementById("resultado");

  if (delta < 0) {
    resultadoDiv.textContent = "Não há solução real (Δ < 0).";
    return;
  }

  const t1 = (-B + Math.sqrt(delta)) / (2 * A);
  const t2 = (-B - Math.sqrt(delta)) / (2 * A);

  const tempo = Math.max(t1, t2);

  resultadoDiv.textContent = `Tempo: ${tempo.toFixed(2)} segundos`;
}