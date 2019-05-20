const markdownToHTMLInput = document.getElementById('markdownToHTMLInput');
const markdownToHTMLResult = document.getElementById('markdownToHTMLResult');

function markdownToHTML() {
  const value = markdownToHTMLInput.value;
  const lines = value.split('\n');

  const result = lines.map(line => {
    const res = line
      // .replace(/^#{6}(.*)/, '<h6>h6</h6>')
      // .replace(/^#{5}(.*)/, '<h5>h5</h5>')
      // .replace(/^#{4}(.*)/, '<h4>h4</h4>')
      // .replace(/^#{3}(.*)/, '<h3>h3</h3>')
      // .replace(/^#{2}(.*)/, '<h2>h2</h2>')
      .replace(/^#(.*)/, '<h1>$1</h1>')
      .replace(/\*{2}(\w+)\*{2}/g, '<b>$1</b>');
    return res;
  });

  markdownToHTMLResult.innerHTML = result.join('\n');
}

markdownToHTMLInput.addEventListener('keyup', markdownToHTML);
