const frases = [
  "✨ Eu já sou quem quero ser.",
  "🌙 O universo conspira ao meu favor.",
  "💫 Estou vibrando na frequência da minha DR.",
  "🌸 Tudo flui com facilidade e amor.",
  "🌌 Minha energia cria a minha realidade.",
  "🦋 Eu mereço viver o que desejo."
];

function mudarFrase() {
  const aleatoria = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById('frase').innerText = "Frase: " + aleatoria;
}
