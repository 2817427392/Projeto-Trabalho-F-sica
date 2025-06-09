function calcularVelocidadeFinal() {
    const g = parseFloat(document.getElementById("gravidade").value);
    const a = parseFloat(document.getElementById("angulo").value);
    let v = parseFloat(document.getElementById("v0").value);
    const d = parseFloat(document.getElementById("distancia").value);
    const m = parseFloat(document.getElementById("massa").value);

    const rad = a*Math.PI/180;
    const seno = Math.sin(rad);
    const aceleracao = g*seno;
    v = v*v+2*aceleracao*d;
    v=Math.sqrt(v);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = v;
}