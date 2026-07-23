// ============================================================
// paste-jd tutorial — interactive quizzes + checklist
// Shared by tutorial pages alongside copy.js
// ============================================================

// ---------- 1. Interactive checklist + global progress bar ----------
// Each .tasklist <li> gets a real checkbox saved in localStorage (survives
// refresh). A page may have MANY .tasklist blocks (one per step); every
// checkbox also feeds one global progress bar injected into the header.
(function () {
  var lists = document.querySelectorAll('.tasklist');
  if (!lists.length) return;

  // -- global progress bar, injected into the sticky header --
  var header = document.querySelector('header.top');
  var bar = document.createElement('div');
  bar.className = 'page-progress';
  bar.innerHTML =
    '<div class="pp-inner">' +
      '<div class="pp-track"><div class="pp-fill"></div></div>' +
      '<div class="pp-label"></div>' +
    '</div>';
  if (header) header.appendChild(bar);
  else document.body.insertBefore(bar, document.body.firstChild);
  var fill = bar.querySelector('.pp-fill');
  var label = bar.querySelector('.pp-label');
  var total = document.querySelectorAll('.tasklist li input[type=checkbox]').length;

  function updateGlobal(justChecked) {
    var done = document.querySelectorAll('.tasklist li.done').length;
    var pct = total ? Math.round((done / total) * 100) : 0;
    fill.style.width = pct + '%';
    label.textContent = done + ' / ' + total + '  ·  ' + pct + '%' +
      (done === total ? '  🎉 전체 완료!' : '');
    bar.classList.toggle('complete', done === total);
    if (justChecked) {
      fill.classList.remove('pulse'); void fill.offsetWidth; fill.classList.add('pulse');
      if (done === total) celebrate();
    }
  }

  // -- per-step wiring. `g` is a page-global index so keys never collide
  //    across lists (list A item0 and list B item0 get distinct keys). --
  var g = 0;
  lists.forEach(function (list) {
    var items = list.querySelectorAll('li');
    var footer = document.createElement('div');
    footer.className = 'progress';
    list.appendChild(footer);

    function refreshFooter() {
      var done = list.querySelectorAll('li.done').length;
      footer.textContent = '이 단계 ' + done + ' / ' + items.length +
        (done === items.length ? '  ✓ 완료' : '');
    }

    items.forEach(function (li) {
      var cb = li.querySelector('input[type=checkbox]');
      if (!cb) return;
      var key = 'pastejd-check:' + location.pathname + ':' + (g++);
      if (localStorage.getItem(key) === '1') { cb.checked = true; li.classList.add('done'); }
      li.addEventListener('click', function (e) {
        if (e.target !== cb) cb.checked = !cb.checked;
        var nowDone = cb.checked;
        li.classList.toggle('done', nowDone);
        if (nowDone) {
          li.classList.remove('just-done'); void li.offsetWidth; li.classList.add('just-done');
          spawnParticles(cb);
        }
        localStorage.setItem(key, nowDone ? '1' : '0');
        refreshFooter();
        updateGlobal(nowDone);
      });
    });
    refreshFooter();
  });
  updateGlobal(false);

  // -- delight: a few emoji float up from the checkbox that was ticked --
  function spawnParticles(cb) {
    var r = cb.getBoundingClientRect();
    var set = ['✨', '✓', '⭐', '🎊', '💚'];
    for (var i = 0; i < 6; i++) {
      var p = document.createElement('div');
      p.className = 'pop-particle';
      p.textContent = set[i % set.length];
      p.style.left = (r.left + r.width / 2) + 'px';
      p.style.top = r.top + 'px';
      p.style.setProperty('--dx', Math.round((i - 2.5) * 16) + 'px');
      p.style.setProperty('--rot', Math.round((Math.random() - 0.5) * 90) + 'deg');
      document.body.appendChild(p);
      (function (el) { setTimeout(function () { el.remove(); }, 950); })(p);
    }
  }

  // -- bigger burst when the whole page hits 100% --
  function celebrate() {
    var set = ['🎉', '🎊', '✨', '🥳', '⭐', '💚', '🚀'];
    for (var i = 0; i < 44; i++) {
      var p = document.createElement('div');
      p.className = 'pop-particle';
      p.textContent = set[i % set.length];
      p.style.left = (Math.random() * window.innerWidth) + 'px';
      p.style.top = (window.innerHeight * (0.25 + Math.random() * 0.2)) + 'px';
      p.style.fontSize = (14 + Math.random() * 18) + 'px';
      p.style.setProperty('--dx', Math.round((Math.random() - 0.5) * 220) + 'px');
      p.style.setProperty('--rot', Math.round((Math.random() - 0.5) * 180) + 'deg');
      p.style.animationDuration = (0.9 + Math.random() * 0.8) + 's';
      document.body.appendChild(p);
      (function (el) { setTimeout(function () { el.remove(); }, 1800); })(p);
    }
  }
})();

// ---------- 2. Quizzes ----------
// Markup contract per quiz:
//   <div class="quiz">
//     <div class="q">질문…</div>
//     <div class="quiz-opts">
//       <button class="quiz-opt" data-correct="true">정답 보기…</button>
//       <button class="quiz-opt">오답…</button>
//     </div>
//     <div class="quiz-explain">왜 그런지 설명…</div>
//   </div>
document.querySelectorAll('.quiz').forEach(function (quiz) {
  quiz.querySelectorAll('.quiz-opt').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (quiz.classList.contains('answered')) return;
      revealChoice(quiz, btn);
    });
  });
});

// Runs once, when a learner clicks an option.
//   quiz  — the .quiz container element
//   btn   — the .quiz-opt button they clicked
// Available to you:
//   btn.dataset.correct === 'true'          → was this the right choice?
//   quiz.querySelectorAll('.quiz-opt')      → all option buttons
//   quiz.querySelector('.quiz-opt[data-correct="true"]')  → the correct one
//   quiz.querySelector('.quiz-explain')     → the "why" panel (add class 'show' to reveal)
//   quiz.classList.add('answered')          → marks the quiz as done (blocks re-clicks)
//   button.classList.add('correct' | 'wrong')  → CSS paints green / red
function revealChoice(quiz, btn) {
  quiz.classList.add('answered');
  var isCorrect = btn.dataset.correct === 'true';
  btn.classList.add(isCorrect ? 'correct' : 'wrong');
  // On a wrong guess, also light up the real answer so the contrast is visible.
  if (!isCorrect) {
    var right = quiz.querySelector('.quiz-opt[data-correct="true"]');
    if (right) right.classList.add('correct');
  }
  quiz.querySelector('.quiz-explain').classList.add('show');
}
