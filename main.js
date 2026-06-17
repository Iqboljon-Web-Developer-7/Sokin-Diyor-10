function pad(n) {
  return String(n).padStart(2, '0');
}

function startTimer(duration, display) {
  let timer = duration;
  setInterval(function () {
    const m = parseInt(timer / 60, 10);
    const s = parseInt(timer % 60, 10);
    display.textContent = pad(m) + ':' + pad(s);
    if (--timer < 0) timer = 0;
  }, 1000);
}

window.onload = function () {
  const display = document.getElementById('timer');
  if (display) startTimer(91, display);

  document.body.addEventListener('click', function (e) {
    if (!e.target.closest('a')) window.location.href = 'https://t.me/+TfU90Y9kj444MzY6';
  });
};
