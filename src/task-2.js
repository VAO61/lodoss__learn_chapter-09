// import './style.css';
import './style.scss';

if (process.env.NODE_ENV !== 'production') {
  require('file-loader!./html/task-2.html');
}

import './js/rendering';
