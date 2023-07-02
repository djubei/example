// 9 Урок
/*
переменные написаные в разном регистре будут являться разными number=1 и Number=1

let означает что переменная изменяема
const константа ее значение изменить нельзя
const надо использовать где только возможно
прямых констант в js не бывает

console.log(name) - undefined
var name = 'Max' можно перезаписывать
она видна еще до того как объявлена в коде и будет равна undefined
использовние переменной до того как она объявлена называется хойстинг или всплытие переменных

console.log(a) - выдаст ошибку
let a = 1

у let и const область видимости блочная {let a = 1 } console.log(a)-ошибка

Область видимости переменных var ограничивается либо функцией, либо, если переменная глобальная, то скриптом
{var a = 1}console.log(a) - 1

в некоторых браузерах не поддерживается новый стандарт чтобы это проверить надо зайти на сайт
caniuse.com и вбить там в посиске
существуют технологии переводящие новый стандарт в старый чтобы не писать в ручную


'use strict' - пишется в начале js файла и означает что мы работаем в современном режиме где не
работает например объявление переменной без var let const и тд


document.write('sadadad')- заменяет все содержимое страницы на переданный аргумент
*/


//10Урок
/*
осознанное название переменных
const carBodyWidth =5000
const carBodyLength = 4000
console.log('ширина кузова автомобиля' + carBodyWidth + ' длина: ' + carBodyLength)

['masha','sasha','kolia'].map(empl=>)

множественное объявление переменных
const a = 1,
b = 2,
c = 3

стили названия переменных
camelCase
snake_case
UPPER_SNAKE_CASE
Kebab-case
PascalCase - используется для классов , первая буква большая
_ эта черточка называется lodash

const COLOR_RED = 'ffffffff' если встречаются такие переменные то как правило они приватные
const _apiBase = 'url' - смысл такой же руками не трогать

чтобы задавать переменную надо спросить у нее что она делает или чем является

 */


//11 Урок
/*
Типы данных js

Простые типы :

number 1,2,3   let number = 4.6   console.log(4/0) - Infinity ,typeof Infinity - NaN ,
                typeof NaN - number ,console.log('a'*9)- NaN
                способы преобразования из string в number :
                Number('12')
                parseInt('12',10)-округляет,parseInt('12',10)-округляет + 10тичная сс можно выбрать любую
                parseFloat('12.99')- для дробных
                +"12" - унарный плюс
                "12" * 1 - будет 12 - number
                "12" / 1 - будет 12 - number
                "12" - 0 - будет 12 - number
                ~~"19.99" - 19 - работает только на маленьких числах
                Math.floor("13.4") - 13
                Math.round("6.3") - 6
                Math.round("6.5") - 7
                Math.ceil("7.18") - 8

string 'masha'
boolean(логический тип)- true false
null - примитивное значение, которое представляет собой намеренное отсутствие какого-либо значения объекта.
undefined - елси переменная назначана но никакое значение ей не присвоено , либо ф-ия может возвращать
            если мы не делаем return какого либо значения ,
Symbol - Symbol("name"); используется конструкция
BigInt > 2^53

СпецОбъекты : 



Объект {} Объекты так же называют комплексным типом данных они хранят в себе коллекции
          может содержать данные которые называются св-вами объекта и действия - методы объекта



Массивы [] -массив это частный случай объекта , который хранит данные
             по порядку обозначенного индексом массива ,ключ(индекс)-значение
Функции Function
Объект даты -new Date()
Регулярные выражения
Ошибки throw new Error('asdasdsa')

Если переменная не объявлена ReferenceError - ошибка ссылочного типа
            мы не можем сослаться на несуществующий объект
*/


//12 Урок

/*
Разница между массивами и объектами

const arr=[1,2,3]
      arr[10]='3456' - [1,2,3,<7 empty items>,'1234']
const obj={0:'a',1:'b',2:'c'}
      obj.0 - будет ошибка, js не поймет почему там цифра,
      obj['0'] - 'a' все ок,
      obj[0] - 'a' все ок, можно без кавычек если цифра
      obj.b = '1234'
      obj['b'] - '1234'

const obj = {
'Anna':500,  - можно записывать ключ в кавычках или без, разница только в скорости написания
Elise:800
}

*/

//14 Урок

/*
интерполяция

const a = 'azbuka'
`www.aaaa.com/${a}/id`
*/

//15 Урок

/*
Операторы в js

+  Унарный плюс тот который ставится перед чем-то (типо это ф-ия которая принимает один аргумент)

let incr -
let decr -

++incr - префиксная инкрементация сразу возвращает увеличенное число
incr++ - постфиксная инкрементация в начале возвращает изначальное число

5%2 - возвращает остаток деления

== - нестрогое равенство
console.log(2*4 == "8") - true

=== - строгое сравнение по типу данных и значению
console.log(2*4 === "8") - false

&& - возвращает первую лож либо последнюю правду , так же в условии значит что все должно быть true
|| - возвращает первую правду либо последнюю лож , так же в условии значит что хотя бы одно из условий должно быть true
! - обращает значение в обратное
!! - превращает значение в булевый тип
!= - нестрогое неравенство
!== - строгое неравенство

*/

//16 Урок

/*Git

git - это программа предназначенная для контроля версий
gitHub - это сервер где хранятся репозитории
для его работы надо установить git bash и gitGUI
githowto.com/ru курс по гиту
вызов командной строки shift+mouseRightClick


git config --global user.name "Maxim Romanenko"  - выставляет имя под которым будет пушится
git config --global user.email "djubaiy@gmail.com" - выставляет мейл
git init - создание локального репозитория
git status - смотрит на то какие файлы отслеживает и гит
git add -A    -добавляет файлы в индекс
git add .    тоже самое что предыдущая строка
git add main.css - добавит в отслеживание этот файл
git add *.css - добавит в отслеживание все файлы заканчивающиеся на .css
git rm --cached <file> - удалить файлы из отслеживания и они не закомитятся
git commit -a -m"comment"   -  создать коммит -а значит что все файлы -m значит месседж
                          если после написать git status то никаких файлов не будет он больше не следит
                          до момента пока мы не изменим какой либо файл
git checkout -- <file>  - сбросить изменения до предыдущего коммита в данном файле
git log - посмотреть какие коммиты были потом копируем номер и используем с git checkout


git remote add origin git@github.com:User/UserRepo.git
                 после создания репозитория на гитхабе чтобы связять локальный и гитхаб репозиторий надо прописать
                 все эти команды отражены в репозитории при его создании надо просто читать )

git push пушит все на удаленный репозиторий

git push -u origin master  -  origin - название репозитория ,
                 master/main - ветка в которую пушим ,
                 -u дальше все пуши будут проходить в origin master

git branch -M main переименовывает изначальную ветку в main допустим с master

* */

//17 Урок


/*
Работа с гитом

что бы выйти из директории на 1 уровень ниже нужно прописать cd ..
git clone - клонировать репу , надо делать в нужной папке
в этом уроке есть инфа про мнрдж если пытаешься запушить проект на репу а там уже более новая версия
файл
.gitignore
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

*/

//20 Урок

/*
Условия
const num = 50
if(num === 2) {
console.log(1)
}else if(num === 5){
console.log(2)
}else{
console.log(3)
}


конструкция switch всегда на строгое сравнение то есть ===
switch (num){
      case 49:
              console.log('неверно')
              break                   - если не написать break то код продолжит выполняться дальше
      case 50:
              console.log('верно')
              break
      case 51:
              console.log('неверно')
              break
      default:console.log('нет такого значения')
              break
}

Название оператора (например тернарный) зависит от кол-ва аргументов участвующих в выражении
        x===1 ? 'a' : 'b' -три аргумента тернарный (условие)
        4 + 4 - два аргумента бинарный (сложение)
        + '1' - унарный один аргумент (превращает в число)
* */

/*21Урок

Логические Операции
*
если есть значение то возвращает в первую очередеь значение
оператор && возвращает первое ложное значение Именно значение либо последнее правдивое если все правдивые
оператор || возвращает первое правдивое значение Именно значение либо последнее ложное если все ложные

' ' - пустая строка с пробелом уже не false

результатом логической операции является булево значение (1&&2) - вернет true

console.log( NaN || 2 || undefined ); 2

console.log( NaN && 2 && undefined ); NaN

console.log( 1 && 2 && 3 ); 3

console.log( !1 && 2 || !3 ); false

console.log( 25 || null && !3 ); 25

console.log( NaN || null || !3 || undefined || 5); 5

console.log( NaN || null && !3 && undefined || 5); 5

console.log( 5 === 5 && 3 > 1 || 5); true

*/

//22 Урок

/*
Циклы


let a = 1

while (a <= 10) {
  console.log(a)
  a++
}

do{                   в начале выполняется тело цикла а потом проверятся условие
console.log(a)          в случае выполнения условия цикл продолжается
  a++                  Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз,
   }                    даже если условие окажется ложным
while(a<=10)


for(let i = 0;i<a;i++){
console.log(i)
}

for(let i = 0;i<a;i++){
  if(i>6){
      break;
          }
console.log(i)
}

for(let i = 0;i<a;i++){
  if(i>6){
      continue;        оператор continue позволяет пропустить тот шаг который нам не нужен но при этом не прерывает цикл
          }
console.log(i)
}
 */

//23 Урок
/*
Цикл в цикле и метки

for(let i =0;i<3;i++){
    console.log(i)
    for(let j=0;j<3;j++){}
      console.log(i)
}


for (let i = 1; i < 6; i++) {
  console.log('*'.repeat(i))
}

let result = ''

const length = 7

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += '*'
  }
  result += '\n'                     '\n' - перенос строки js в string

}

console.log(result)

first : for (let i = 1; i < 3; i++) {
  console.log(`first lvl ${i}`)
  for (let j = 0; j < 3; j++) {
    console.log(`second lvl ${j}`)
    for (let k = 0; k < 3; k++) {
      if (k == 2) {
        continue first  // frist это метка с помощью нее мы можем влиять на другие циклы  = 2
      }                        в данном случае продолжаем но пропускаем итерацию где k ==2
      console.log(`third lvl ${k}`)
    }
  }
}

console.log(result)

first : for (let i = 1; i < 3; i++) {
  console.log(`first lvl ${i}`)
  for (let j = 0; j < 3; j++) {
    console.log(`second lvl ${j}`)
    for (let k = 0; k < 3; k++) {
      if (k == 2) {
        break first // frist это метка с помощью нее мы можем влиять на другие циклы
                              в данном случае останавливаем когда k==2
      }
      console.log(`third lvl ${k}`)
    }
  }
}

Пропуск частей «for»
Любая часть for может быть пропущена.

Для примера, мы можем пропустить начало если нам ничего не нужно делать перед стартом цикла.

Вот так:

let i = 0; // мы уже имеем объявленную i с присвоенным значением

for (; i < 3; i++) { // нет необходимости в "начале"
  alert( i ); // 0, 1, 2
}
Можно убрать и шаг:

let i = 0;

for (; i < 3;) {
  alert( i++ );
}
Это сделает цикл аналогичным while (i < 3).

А можно и вообще убрать всё, получив бесконечный цикл:

for (;;) {
  // будет выполняться вечно
}


(i > 5) ? alert(i) : continue; // continue здесь приведёт к ошибке


метки

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Значение на координатах (${i},${j})`, '');

    // если пустая строка или Отмена, то выйти из обоих циклов
    if (!input) break outer; // (*)

    // сделать что-нибудь со значениями...
  }
}

alert('Готово!');


Метки не дают возможности передавать управление в произвольное место кода.

Например, нет возможности сделать следующее:

break label; // не прыгает к метке ниже

label: for (...)

Вызов break/continue возможен только внутри цикла, и метка должна находиться где-то выше этой директивы.

Обе этих директивы поддерживают метки, которые ставятся перед циклом. Метки – единственный способ для break/continue
      выйти за пределы текущего цикла, повлиять на выполнение внешнего.



for (let i = 0;   i < 5;   ++i) alert( i );
   1-ое-единожды    2        4       3
for (let i = 0; i < 5; i++) alert( i );
Такой результат обусловлен алгоритмом работы for:

Выполнить единожды присваивание i = 0 перед чем-либо (начало).
Проверить условие i < 5
Если true – выполнить тело цикла alert(i), и затем i++
Увеличение i++ выполняется отдельно от проверки условия (2),
        значение i при этом не используется, поэтому нет никакой разницы между i++ и ++i.

let n = 10;

nextPrime:
  for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
      if (i % j === 0) continue nextPrime; // не подходит, берём следующее
    }

    console.log( i ); // простое число
  }

Метки С break можно использоваться любое блочное выражение, а с continue только циклы.

*/


//26 Урок Стрелочные ф-ии
/*
// что бы импортировать скрипт должен быть модулем а расширение должно быть точным ".js import { gg } from "./scratch.js";"
let num = 20

function showFirstMessage() {  // function declaration создается до начала скрипта можно вызвать перед объявлением
  console.log('hello world')
  let num = 30
  return num
  console.log(1) // unreachable code
}

showFirstMessage()
const anotherNum = showFirstMessage()
console.dir(showFirstMessage)
console.log(`num`, num)
console.log(`anotherNum`, anotherNum)

const foo = function () { // создается только тогда когда доходит поток кода , можно вызвать только после объявления
  console.log(1)
}

const fOo = () => { //не имеет своего контекста this
  console.log(2)
}
(function () {
  console.log(3)
})()

 function createCounter() {
  let counter = 1
   const myFunction = function() {
    counter = counter + 1
     return counter
  }
  return myFunction
} const increment = createCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 console.log('example increment', c1, c2, c3)
*/

/*
1: function createCounter() {
  2:   let counter = 0
  3:   const myFunction = function() {
    4:     counter = counter + 1
    5:     return counter
    6:   }
  7:   return myFunction
  8: }
9: const increment = createCounter()
10: const c1 = increment()
11: const c2 = increment()
12: const c3 = increment()
13: console.log('example increment', c1, c2, c3)*/

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();