function emailValidation(value) {
  return /^[a-zA-Z]+([-._]?[a-zA-Z]+){1,}@[a-zA-Z_]+?\.[a-zA-Z]{2,6}(.[a-zA-Z]{2,6})?$/.test(
    value
  );
}

// abc@site.com
// abc@site.ua.com

/*

Недействительны:

@gmail.ru
xxx@yyy@gmail.ru
.v2-111@gmail.ru
_name@gmail.ru
-name@gmail.ru
vao@gmail
vao..frontend@gmail.com
vao frontend@gmail.com

Действительны: 

vao_front-END@gmail.com
vao.frontend@gmail.com
vaofrontend@gmail.com
vao.front.end@gmail.com
vao.frontend@site.ua.com

*/
