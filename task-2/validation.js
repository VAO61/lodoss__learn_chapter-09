function emailValidation(value) {
  return /.*@.*\..*/.test(value);
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

*/

// \S+@\w+\.\w+
// ([A-Za-z0-9])+@\w+\.\w+
