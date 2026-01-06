document.querySelectorAll('.audio-player').forEach(player => {
  const src = player.dataset.audioSrc;
  if (!src) return;

  const audio = new Audio(src);
  audio.preload = 'metadata';

  const toggle = player.querySelector('.audio-player__toggle');
  const time = player.querySelector('.audio-player__time');
  const scrubber = player.querySelector('.audio-player__scrubber');
  const volume = player.querySelector('.audio-player__volume-slider');

  toggle.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      toggle.textContent = '❚❚';
    } else {
      audio.pause();
      toggle.textContent = '▶';
    }
  });

  audio.addEventListener('loadedmetadata', () => {
    time.textContent = `0:00 / ${formatTime(audio.duration)}`;
  });

  audio.addEventListener('timeupdate', () => {
    scrubber.value = (audio.currentTime / audio.duration) * 100 || 0;
    time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  });

  scrubber.addEventListener('input', () => {
    audio.currentTime = (scrubber.value / 100) * audio.duration;
  });

  volume.addEventListener('input', () => {
    audio.volume = volume.value / 100;
  });
});

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
