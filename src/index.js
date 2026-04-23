function calcularJuros(event){
    event.preventDefault();
    //Estou pegando as informções dos campos
    let n1 = parseFloat( document.getElementById('valor1').value);
    let n2 = parseFloat( document.getElementById('valor2').value);
    let n3 = parseFloat( document.getElementById('valor3').value);

    //Validação simples (para não calcular campos vazios)
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('jurosFinal').innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    //Cálculo de Juros Simples 
    let taxaReal = n2 / 100;
    let jurosFinal = n1 * n2 * n3;

    //Exibindo no HTML com formatação de moeda
    document.getElementById('jurosFinal').innerHTML = 
        `Juros no período de ${n3} meses é de <strong> R$ ${jurosFinal.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</strong>`;
}