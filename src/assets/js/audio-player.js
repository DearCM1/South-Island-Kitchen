const players = [];

document.querySelectorAll('.audio-player').forEach(player => {
  const src = player.dataset.audioSrc;
  if (!src) return;

  const audio = new Audio(src);
  audio.preload = 'metadata';

  const toggle = player.querySelector('.audio-player__toggle');
  const time = player.querySelector('.audio-player__time');
  const scrubber = player.querySelector('.audio-player__scrubber');
  const progress = player.querySelector('.audio-player__progress');
  const buffered = player.querySelector('.audio-player__buffered');
  const volume = player.querySelector('.audio-player__volume-slider');

  if (!toggle || !time || !scrubber || !progress || !volume) return;

  const instance = { audio, toggle };
  players.push(instance);

  const pauseOthers = () => {
    players.forEach(p => {
      if (p.audio !== audio) {
        p.audio.pause();
        p.toggle.textContent = '▶';
      }
    });
  };

  const updateProgress = () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    scrubber.value = pct;
    progress.style.width = `${pct}%`;
    time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
  };

  const updateBuffered = () => {
    if (!audio.duration || !buffered) return;
    const last = audio.buffered.length - 1;
    if (last < 0) return;
    const pct = (audio.buffered.end(last) / audio.duration) * 100;
    buffered.style.width = `${Math.min(pct, 100)}%`;
  };

  const setVolumeFromSlider = () => {
    const value = Number(volume.value || 0);
    audio.volume = Math.min(Math.max(value / 100, 0), 1);
  };

  toggle.addEventListener('click', () => {
    if (audio.paused) {
      pauseOthers();
      audio.play();
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', () => {
    toggle.textContent = '❚❚';
  });

  audio.addEventListener('pause', () => {
    toggle.textContent = '▶';
  });

  audio.addEventListener('ended', () => {
    toggle.textContent = '▶';
    scrubber.value = 0;
    progress.style.width = '0%';
  });

  audio.addEventListener('loadedmetadata', () => {
    time.textContent = `0:00 / ${formatTime(audio.duration)}`;
    updateBuffered();
  });

  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('progress', updateBuffered);

  scrubber.addEventListener('input', () => {
    if (!audio.duration) return;
    audio.currentTime = (scrubber.value / 100) * audio.duration;
    progress.style.width = `${scrubber.value}%`;
  });

  volume.addEventListener('input', setVolumeFromSlider);
  setVolumeFromSlider();
});

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
