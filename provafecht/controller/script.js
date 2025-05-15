function buscarIdade() {
  const nome = document.getElementById('nome').value;

  fetch(`https://api.agify.io?name=${nome}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('resultado').innerHTML = 
        `<p>Nome: ${data.name} - Idade estimada: ${data.age}</p>`;
    })
    .catch(error => {
      console.log('Erro na API externa:', error);
    });
}

function carregarDados() {
  fetch('../model/main.php')
    .then(response => response.json())
    .then(dados => {
      let html = '<ul>';
      dados.forEach(item => {
        html += `<li>${item.nome} - ${item.info}</li>`;
      });
      html += '</ul>';

      document.getElementById('resultado').innerHTML = html;
    })
    .catch(error => {
      console.log('Erro no main.php:', error);
    });
}
