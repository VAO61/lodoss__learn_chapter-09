import createMenu from './menu';
var menu = createMenu(
  ['Main', 'About', 'Some other item', 'Another some item'],
  'menu'
);
document.body.appendChild(menu);
