/* const markdownToHTMLInput = document.getElementById('markdownToHTMLInput');
const markdownToHTMLResult = document.getElementById('markdownToHTMLResult');
// const input = '**text**';
function markdownToHTML() {
  let text = markdownToHTMLInput.nodeValue;
  // input.replace();
  text = text.replace(/#.+/, '<h1>$&</h1>');
  // text = text.replace(/<h1>#/, '<h1>');
  // let result = input.replace(/\*{2}.+\*{2}/, '<b>$&</b>');
  markdownToHTMLResult.innerHTML = text;
}
// markdownToHTML();
console.log(markdownToHTML()); */

const input = '**text**';
function markdownToHTML() {
  input.replace();
  let result = input.replace(/\*{2}.+\*{2}/, '<b>');
  return result;
}
// markdownToHTML();
console.log(markdownToHTML());
