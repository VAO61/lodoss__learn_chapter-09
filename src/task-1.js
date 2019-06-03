// import './style.css';
import './style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./html/task-1.html');
}

import './js/markdown-to-html';
