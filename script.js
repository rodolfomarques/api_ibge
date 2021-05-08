let styleLink = document.createElement('link');
styleLink.setAttribute('rel', 'stylesheet')
styleLink.setAttribute('type', 'text/css')
styleLink.setAttribute('href', 'https://raw.githubusercontent.com/rodolfomarques/api_ibge/main/style.css')
document.head.append(styleLink);
// Projeção da População //

let tituloPopulacao = document.getElementById('titulo-populacao');
var valorPopulacao = document.getElementById('valor-populacao');

fetch('https://servicodados.ibge.gov.br/api/v1/projecoes/populacao').then(result => result.json()).then(data => {

    var indice = data.projecao.populacao.toString();
    var milhao = indice.slice(0, 3);
    var milhar = indice.slice(3, 6);
    var centena = indice.slice(6, 9);
    tituloPopulacao.innerText = 'População Estimada'
    valorPopulacao.innerText = `${milhao}.${milhar}.${centena}`;

})

// IPCA15 Acumulado //

let tituloIPCA = document.getElementById('titulo-IPCA_acumulada');
var valorIPCA = document.getElementById('valor-indice');

fetch('https://servicodados.ibge.gov.br/api/v3/agregados/7062/periodos/-6/variaveis/1120?localidades=N1[all]&classificacao=315[7169]').then(result => result.json()).then(data => {

    var serie = data[0].resultados[0].series[0].serie;
    console.log(serie['202104'])

    var titulo = data[0].variavel;
    var indices = Object.values(serie)

    tituloIPCA.innerText = data[0].variavel;
    valorIPCA.innerText = indices[indices.length - 1] + '%';

});

// IPCA15 mensal //

let tituloIPCA_mensal = document.getElementById('titulo-IPCA_mensal');
var valorIPCA_mensal = document.getElementById('valor-indice_mensal');

fetch('https://servicodados.ibge.gov.br/api/v3/agregados/3065/periodos/-6/variaveis/355?localidades=N1[all]').then(result => result.json()).then(data => {

    var serie = data[0].resultados[0].series[0].serie;
    var titulo = data[0].variavel;
    var indices = Object.values(serie)

    tituloIPCA_mensal.innerText = data[0].variavel;
    valorIPCA_mensal.innerText = indices[indices.length - 1] + '%';

})