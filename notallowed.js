// script to check FOR not allowed words

const divMessages = document.querySelectorAll('div.divMessage');

const prohibitedWords = ['disspam', 'not allowed', 'private trading', 'scam', 'spam'];

let checkedCount = 0;

divMessages.forEach((div) => {
  prohibitedWords.forEach((word) => {
    if (div.textContent.includes(word)) {
      const post = div.closest('.innerPost');
      const checkbox = post.querySelector('input.deletionCheckBox');
      if (checkbox.checked) {
        return;
      }
      checkbox.checked = true;
      checkedCount++;
    }
  });
});
console.log(checkedCount);
