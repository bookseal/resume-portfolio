// Adds a "Copy" button to every .code block. Shared by all tutorial pages.
document.querySelectorAll('.code').forEach(function (block) {
  var pre = block.querySelector('pre');
  if (!pre) return;
  var btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.type = 'button';
  btn.textContent = 'Copy';
  btn.addEventListener('click', function () {
    var text = pre.innerText;
    navigator.clipboard.writeText(text).then(function () {
      btn.textContent = '✓ Copied';
      btn.classList.add('copied');
      setTimeout(function () {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 1500);
    }).catch(function () {
      // Fallback for file:// where clipboard API may be blocked
      var r = document.createRange();
      r.selectNodeContents(pre);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
      try { document.execCommand('copy'); btn.textContent = '✓ Copied'; }
      catch (e) { btn.textContent = 'Select + ⌘C'; }
      setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
    });
  });
  block.appendChild(btn);
});
