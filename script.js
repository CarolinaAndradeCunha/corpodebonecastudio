  const toggleButton = document.getElementById('darkModeToggle');

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      toggleButton.textContent = '☀️ Modo Claro';
    } else {
      toggleButton.textContent = '🌙 Modo Noturno';
    }
  });

const lofiPlayer = document.getElementById('lofiPlayer');
  const toggleLofi = document.getElementById('toggleLofi');
  let isPlaying = false;

  toggleLofi.addEventListener('click', () => {
    if (isPlaying) {
      lofiPlayer.pause();
      toggleLofi.textContent = '🎵 Tocar Lofi';
    } else {
      lofiPlayer.play();
      toggleLofi.textContent = '⏸️ Pausar Lofi';
    }
    isPlaying = !isPlaying;
  });
