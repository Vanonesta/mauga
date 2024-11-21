function start() {
  // Sembunyikan tombol mulai dan tampilkan gombalan
  document.querySelector('.start-btn').classList.add('hidden');
  document.querySelector('#gombalan').classList.remove('hidden');

  // Mulai memutar musik
  const music = document.getElementById('background-music');
  music.play();
}

function showQuestion() {
  // Sembunyikan gombalan dan tampilkan pertanyaan
  document.querySelector('#gombalan').classList.add('hidden');
  document.querySelector('#question').classList.remove('hidden');
}

function showResponse(answer) {
  const responseContainer = document.getElementById('response-container');
  const responseText = document.getElementById('response');

  if (answer === 'yes') {
    responseText.textContent = '🎉 Aku sangat bahagia! Terima kasih sudah membuat hariku spesial. ❤️';
  } else {
    responseText.textContent = '😢 Tidak apa-apa. Aku tetap menghargai kamu apa adanya.';
  }

  document.getElementById('question').classList.add('hidden');
  responseContainer.classList.remove('hidden');
}

function reset() {
  // Ulangi permainan
  document.querySelector('#response-container').classList.add('hidden');
  document.querySelector('#question').classList.add('hidden');
  document.querySelector('.start-btn').classList.remove('hidden');
  document.querySelector('#gombalan').classList.add('hidden');

  // Reset musik
  const music = document.getElementById('background-music');
  music.pause();
  music.currentTime = 0;
}
