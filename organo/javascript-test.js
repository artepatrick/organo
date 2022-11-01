const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input')
const elemDiv = document.createElement('div');

h1.addEventListener('click', testeFuncao)
p.onclick = showVariables
input.onkeypress = function (event) {
    console.log(event.currentTarget.value)
}


function testeFuncao() {
    console.log('Deu certo, mermão')
    document.body.appendChild(elemDiv)
}

// let cep = 30350070;

// const brasilApiCEP = fetch(
//     "https://brasilapi.com.br/api/cep/v1/30350070" //{`https://brasilapi.com.br/api/cep/v1/ ${cep}`}
// ).then((response) => {
//     return response.json();
// }).then(jsonCorpo => {
//     console.log(jsonCorpo)
// });

// console.log(brasilApiCEP)

// function cep() {
//     console.log(brasilApiCEP)
// }

function showVariables() {
    console.log('executou o testeFuncao2')
    console.log(h1)
    console.log(elemDiv)
    console.log(input)
    console.log('aprendi neste site: https://app.rocketseat.com.br/discover/course/pilotando-com-a-dom/eventos/argumento-event')
    // console.log(brasilApiCEP)
    // console.log(response)
    // console.log({`https://brasilapi.com.br/api/cep/v1/ ${cep}`})
}