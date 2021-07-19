const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let data = {
    name,
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('@lead', convertData);

  let result = document.getElementById('form-result');
  let loading = `<p>Loading...</p>`;
  let completed = `<p>Parabéns! Você foi cadastrado com sucesso.</p>`;

  result.innerHTML = loading;

  setTimeout(() => {
    result.innerHTML = completed;
  }, 500)
})