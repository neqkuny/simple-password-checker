const pw = document.getElementById('password');
const bar = document.getElementById('strength-bar');
const scoreText = document.getElementById('score-text');
const checks = {
  len: document.getElementById('len'),
  lower: document.getElementById('lower'),
  upper: document.getElementById('upper'),
  digit: document.getElementById('digit'),
  symbol: document.getElementById('symbol')
};

// show/hide toggle
const toggleBtn = document.getElementById('toggleShow');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const current = pw.getAttribute('type');
    if (current === 'password') {
      pw.setAttribute('type','text');
      toggleBtn.textContent = 'Hide';
      toggleBtn.setAttribute('aria-pressed','true');
    } else {
      pw.setAttribute('type','password');
      toggleBtn.textContent = 'Show';
      toggleBtn.setAttribute('aria-pressed','false');
    }
  });
}

function evaluate(value) {
  let score = 0;
  const tests = {
    len: value.length >= 8,
    lower: /[a-z]/.test(value),
    upper: /[A-Z]/.test(value),
    digit: /[0-9]/.test(value),
    symbol: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)
  };

  for (const k in tests) if (tests[k]) score++;
  return {score, tests};
}

pw.addEventListener('input', (e) => {
  const v = e.target.value || '';
  const {score, tests} = evaluate(v);
  const pct = Math.round((score/5)*100);
  bar.style.width = pct + '%';
  scoreText.textContent = `${score} / 5`;

  // bar color states
  bar.classList.remove('weak','medium','good');
  if (score <= 2) bar.classList.add('weak');
  else if (score <= 4) bar.classList.add('medium');
  else bar.classList.add('good');

  // set color via width (change gradient stops via css) and classes
  Object.keys(checks).forEach(k => {
    const el = checks[k];
    if (tests[k]) {
      el.classList.add('pass');
      el.classList.remove('fail');
    } else {
      el.classList.remove('pass');
      el.classList.add('fail');
    }
  });
  // confetti / spark when fully strong
  if (score === 5) {
    celebrate();
  }
});

// initialize empty state
pw.dispatchEvent(new Event('input'));

// create small confetti effect
function celebrate(){
  const c = document.getElementById('confetti');
  if (!c) return;
  // quick sparkle near score
  const rect = document.getElementById('score').getBoundingClientRect();
  const spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.left = (rect.left + rect.width/2) + 'px';
  spark.style.top = (rect.top - 6) + 'px';
  document.body.appendChild(spark);
  setTimeout(()=> spark.remove(), 700);

  // create confetti pieces
  const colors = ['#f97316','#f43f5e','#22c55e','#60a5fa','#a78bfa','#f59e0b'];
  const count = 28;
  for (let i=0;i<count;i++){
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const size = Math.random()*10 + 6;
    el.style.width = size + 'px';
    el.style.height = (size*1.2) + 'px';
    el.style.left = Math.random()*100 + '%';
    el.style.top = '-10vh';
    el.style.background = colors[Math.floor(Math.random()*colors.length)];
    el.style.opacity = 1;
    const delay = Math.random()*200;
    el.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
    el.style.animation = `confetti-fall ${1.6 + Math.random()*1}s ${delay}ms linear forwards`;
    c.appendChild(el);
    setTimeout(()=> el.remove(), 3000 + delay);
  }
}
