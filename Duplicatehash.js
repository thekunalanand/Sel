const labelHashes = document.querySelectorAll('span.labelHash');

const hashMap = {};

labelHashes.forEach((label) => {
  const hash = label.textContent.trim();
  if (!hashMap[hash]) {
    hashMap[hash] = [];
  }
  hashMap[hash].push(label);
});

let checkedCount = 0;

Object.values(hashMap).forEach((labels) => {
  if (labels.length > 1) {
    labels.forEach((label) => {
      const post = label.closest('.innerPost');
      const checkbox = post.querySelector('input.deletionCheckBox');
      if (checkbox.checked) {
        return;
      }
      checkbox.checked = true;
      checkedCount++;
    });
  }
});

console.log(checkedCount);
