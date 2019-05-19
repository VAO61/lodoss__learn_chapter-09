const markdownToHTMLInput = document.getElementById('markdownToHTMLInput');
const markdownToHTMLResult = document.getElementById('markdownToHTMLResult');
// const input = '**text**';
// function markdownToHTML() {
//   let text = markdownToHTMLInput.value;
//   // input.replace();
//   text = text.replace(/#.+/, '<h1>$&</h1>');
//   text = text.replace(/<h1>#/, '<h1>');
//   // let result = input.replace(/\*{2}.+\*{2}/, '<b>$&</b>');
//   markdownToHTMLResult.innerHTML = text;
// }
// markdownToHTML();
// console.log(markdownToHTML());

// const input = '**text**';
// function markdownToHTML() {
//   input.replace();
//   let result = input.replace(/\*{2}.+\*{2}/, '<b>');
//   return result;
// }
// // markdownToHTML();
// console.log(markdownToHTML());

function markdownToHTML() {
  const value = markdownToHTMLInput.value;
  const lines = value.split('\n');

  const result = lines.map(line => {
    const res = line
      .replace(/^#(.*)/, '<h1>$1</h1>')
      .replace(/\*{2}(\w+)\*{2}/g, '<b>$1</b>');
    return res;
  });

  markdownToHTMLResult.innerHTML = result.join('\n');
}

markdownToHTMLInput.addEventListener('keyup', markdownToHTML);
