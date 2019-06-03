// import './style.css';
import './style.scss';

import './js/markdown-to-html';
import './js/rendering';
import './js/validation';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./index.html');
  // require('file-loader!./html/task-2.html');
}
