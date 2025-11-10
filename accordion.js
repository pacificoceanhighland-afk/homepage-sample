// 個別開閉
function setupAccordion(nameSelector, detailSelector) {
  const buttons = document.querySelectorAll(nameSelector);
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const detail = btn.nextElementSibling;
      if (detail && detail.matches(detailSelector)) {
        detail.classList.toggle('open');
      }
    });
  });
}

// 全開閉
function setupBulkOpenClose(openId, closeId, selector) {
  const openBtn = document.getElementById(openId);
  const closeBtn = document.getElementById(closeId);
  const targets = document.querySelectorAll(selector);

  if (openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      targets.forEach(el => el.classList.add('open'));
    });
    closeBtn.addEventListener('click', () => {
      targets.forEach(el => el.classList.remove('open'));
    });
  }
}

// キャラクター
setupAccordion('.char-name', '.char-detail');
setupBulkOpenClose('open-all-char', 'close-all-char', '.char-detail');

// ワールド
setupAccordion('.world-name', '.world-detail');
setupBulkOpenClose('open-all-world', 'close-all-world', '.world-detail');

// 用語
setupAccordion('.term-name', '.term-detail');
setupBulkOpenClose('open-all-term', 'close-all-term', '.term-detail');
