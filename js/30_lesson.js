'use strict'

function learnJs(lang, callback) {
  console.log('lang')
}

learnJs("JavaScript", function () {
  console.log('я прошел этот урок')
})

//колбек не начнет свое выполнение пока другой код не завершить свое выполнение


/*
function loadScript(src) { // функция добавления скрипта
  let script = document.createElement('script')
  script.src = src
  document.head.append(script)

}*/


function loadScript1(src, callback) {// асинхронная загрузка скрипта
  let script = document.createElement('script')
  script.src = src
  script.onload = () => callback(script) // евент по загрузке скрипта
  document.head.append(script)
}

loadScript1('./js/30_lesson_scratch.js', function () {// мы можем вызвать любую ф-ию из загруженного скрипта
  f()
})

function loadScript2(src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`ошибка загрузки скрипта ${ script.src }`))
  document.head.append(script)
  console.log('script', script)
}

loadScript2('./js/30_lesson_scratch.js', function (script) {//можно добавить сколько угодно скриптов
  fq();

  loadScript2('./js/scratch.js', function (script) {
    scratch()
  })
})

loadScript2('./js/30_lesson_scatch.js', function (error, script) {//ошибка в пути скрипта
  if (error) {
    console.log('error')
  } else {
    console.log('скрипт загружен')
  }
})

/* колбек хел

loadScript('1.js', function(error, script) {

  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', function(error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript('3.js', function(error, script) {
          if (error) {
            handleError(error);
          } else {
            // ...и так далее, пока все скрипты не будут загружены (*)
          }
        });

      }
    })
  }
});*/

window.onerror // глобальный обработчик ошибок в котором есть описание ошибки а не только сам факт как в script.onError

//События load и error также срабатывают и для других ресурсов, а вообще, для любых ресурсов, у которых есть внешний src.


let img = document.createElement('img');
img.src = "https://js.cx/clipart/train.gif"; // (*)
document.body.append(img)

img.onload = function () {
  console.log(`Изображение загружено, размеры ${ img.width }x${ img.height }`);
};

img.onerror = function () {
  console.log("Ошибка во время загрузки изображения");
};


//Однако есть некоторые особенности:
//
// Большинство ресурсов начинают загружаться после их добавления в документ. За исключением тега <img>.
// Изображения начинают загружаться, когда получают src (*).
// Для <iframe> событие load срабатывает по окончании загрузки как в случае успеха, так и в случае ошибки.


//Чтобы разрешить кросс-доменный доступ, нам нужно поставить тегу <script> атрибут crossorigin, и, кроме того,
// удалённый сервер должен поставить специальные заголовки.

//Атрибут crossorigin отсутствует – доступ запрещён.
// crossorigin="anonymous" – доступ разрешён, если сервер отвечает с заголовком Access-Control-Allow-Origin
// со значениями * или наш домен. Браузер не отправляет авторизационную информацию и куки на удалённый сервер.
// crossorigin="use-credentials" – доступ разрешён, если сервер отвечает с заголовками Access-Control-Allow-Origin
// со значением наш домен и Access-Control-Allow-Credentials: true. Браузер отправляет авторизационную информацию и куки
// на удалённый сервер.


//Событие readystatechange также работает для ресурсов, но используется редко, потому что события load/error проще в
// использовании.

/*
<iframe name="iframe"></iframe>

<!-- форма могла быть динамически сгенерирована и отправлена с помощью JavaScript -->
<form target="iframe" method="POST" action="https://another.com/…">
  ...
</form>*/


/*function gotWeather({temperature, humidity}) {
  alert(`температура: ${ temperature }, влажность: ${ humidity }`);
}

let loadScript3 = function (callback) {
  let script = document.createElement('script');
  script.src = `http://another.com/weather.json?callback=gotWeather`;
  script.onload = () => callback(script)
  document.body.append(script);
  console.log(script)
}

loadScript3(gotWeather)*/


/*
fetch("http://another.com/weather.json?callback=gotWeather", )
  .then(res => {
    console.log(res.json(), 'res')
  }).catch(err => {
  console.log(err, 'err')
})*/
/*

let response = async () => {
  let data = await fetch('https://site.com/service.json', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'secret'
    }
  });
  console.log(data,'data')
  return data
}
response()

*/


/*
let folder = async () => {
  let fold = await getFold();
  //await localStorage.save('folder');
  return fold;
};*/
console.log(document.cookie, 'cookie')

// специальные символы (пробелы), требуется кодирование
let name = "my name";
let value = "John Smith"

// кодирует в my%20name=John%20Smith
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
document.cookie = encodeURIComponent("user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT")

console.log(document.cookie); // ...; my%20name=John%20Smith
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "user=John; expires=" + date;
document.cookie = "user=John; max-age=3600";

// удалим куки (срок действия истекает прямо сейчас)
document.cookie = "user=John; max-age=0";


// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
setCookie('user', 'Jn', {secure: true, 'max-age': 3600});

function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}


class Cookie {
  constructor(name, value, options) {
    this.name = name;
    this.options = options;
    this.value = value;
  }

  get() {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + this.name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  exist() {
    return !!this.get();
  }

  set() {
    let options = this.options,
      expires = options.expires;

    if (expires && typeof expires === "number") {
      const d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    let value = encodeURIComponent(this.value);

    let updatedCookie = this.name + "=" + value;

    for (const propName in options) {
      updatedCookie += "; " + propName;
      const propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }

  destroy() {
    this.options = {
      expires: -1
    };
    this.value = "";

    this.set();
  }
}


