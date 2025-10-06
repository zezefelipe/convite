// Funções para mostrar mensagem imediatamente e enviar Formspree
function respostaAceitar(event) {
  event.preventDefault(); // não muda de página
  document.getElementById('resposta').textContent = "Que bom! Eu te busco às 20:30 ❤️";

  // envia os dados para o Formspree
  const form = event.target;
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
}

function respostaNaoAceitar(event) {
  event.preventDefault();
  document.getElementById('resposta').textContent = "Tudo bem 😔, não irei incomodar novamente.";

  const form = event.target;
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });
}

// Cria corações animados
const numHearts = 30;
for (let i = 0; i < numHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.width = heart.style.height = (20 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.animationDelay = Math.random() * 5 + 's';
  document.body.appendChild(heart);
}
