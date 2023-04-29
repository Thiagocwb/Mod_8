const form = document.querySelector('#form-atividade');
const tabela = document.querySelector('.tabela tbody');

form.addEventListener('submit', (event) => {

  event.preventDefault();

  const nome = document.querySelector('#nome-atividade').value;
  const telefone = document.querySelector('#telefone').value;
  const email = document.querySelector('#email-atividade').value;
  
  const novaLinha = document.createElement('tr');
  novaLinha.innerHTML = `
    <td>${nome}</td>
    <td>${telefone}</td>
    <td>${email}</td>`;
  
  tabela.appendChild(novaLinha);
  
  form.reset();
});
