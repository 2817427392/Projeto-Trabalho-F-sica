function calcularVelocidadeFinal() {
    let g = document.getElementById("gravidade").value;
    let anguloGraus = document.getElementById("angulo").value;
    let v0 = document.getElementById("v0").value;
    let d = document.getElementById("distancia").value;
    let mensagem = "";

    if (g.trim()==="" || anguloGraus.trim()===""|| v0.trim()==="" || d.trim()==="") {
        mensagem = "Por favor, insira um valor em todos os campos.";
    }else if(gravidade<=0){
        mensagem = "A gravidade deve ser um número positivo.";
    }else if(anguloGraus<0 || anguloGraus>180){
        mensagem = "O ângulo deve ser um número de zero a 180.";   
    }else if(v0<0){
        mensagem = "A velocidade inicial deve ser um número positivo ou zero."; 
    }else if(d<=0){
        mensagem = "O tamanho da rampa deve ser um número positivo.";
    }else{
        g=parseFloat(g);
        anguloGraus=parseFloat(anguloGraus);
        v0=parseFloat(v0);
        d=parseFloat(d);
        // Fórmula para calcular a aceleração
        const rad = anguloGraus * Math.PI / 180;
        const aceleracao = g * Math.sin(rad);

        // Fórmula para calcular a velocidade final
        const vFinal2=v0*v0+2*aceleracao*d;
        const vFinal = Math.sqrt(vFinal2);

        mensagem=`A velocidade final é ${vFinal.toFixed(3)} m/s.`;
    }
    document.getElementById("resultado").textContent=mensagem;
}