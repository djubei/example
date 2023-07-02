/*console.log(`1`)

 let result = confirm('enter smg') // подтверждение на сайте
 console.log(result)*/

//==================================================================================

/*let result = prompt('enter smg', '11')
// команда для запроса получения какой-либо инфы от пользователя на сатйе возвращет
// тип данных строка
console.log(result)
console.log(typeof (result))*/

//==================================================================================

/*let resultNumber = +prompt('enter smg', '11')
// возвращает резултат с типом данных намбр если поставить + перед prompt*/

//==================================================================================

/*
let answers = []

const getAnswers = (question) => {
    let answer = prompt(question, '')
    answers.push(answer)
    console.log(answers)
}
getAnswers('как дела')
getAnswers('как тебя зовут')
getAnswers('сколько времени?')

document.write(answers)// выводит на странице значения
console.log(typeof (undefined))*/

//==================================================================================

/*
//унарный плюс преобразует все в числа тоже самое что и Number()
console.log(+'a')
console.log(Number(true))
console.log(Number(`2`))//строку нельзя преобразовать в число , если это не строка с числом "1"
console.log(Number(`2`))
let a = (1 + 2, 3 + 4)
console.log(a)
console.log("" + 1 + 0)
console.log(" \t \n" - 2)
let b = 1, c = 4, e = 10, m = 8
console.log(b++)
console.log(c--)
console.log(++e)
console.log(--m)
*/

//==================================================================================
//создать репозиторий из консоли
//установить GitHub CLI
//авторизоваться gh auth login
//git init
//gh repo create
//gh repo create myRepo
//Here is an example of a more complex configuration:
//gh repo create agile-board --public -d 'my description' --enable-issues=false
//To see more options when creating a repo, you can always ask for help:
//gh repo create --help
// потом пишем git add -A  ==>
//git commit -a -m"first commit"  ==>
//git push  ==>
//git remote add origin git@github.com:User/UserRepo.git  ==>     связать локальный репозиторий с гитом
//git push -u origin main   ==> запушить локальный репозиторий в папку на гите
//git checkout -b 'name_branch'
//git push --set-upstream origin name_branch запушить ветку на репозиторий в первый раз в новой ветке
//git checkout 'branch_name' перейти на ветку


//git init -инициализация репозитория
//git config --global user.name "Max" имя
//git config --global user.email "djubaiy@gmail.com" имя
//git status посмотреть статус файлов проекта
//git add -A добавить файлы в index
//git add *.js добавить файлы c окончанием .js в index
//git commit -a -m""   добавить контрольную точку -а - значит всё -m значит комментарий к коммиту
//git log   посмотреть какие коммиты были


// для того чтобы залить данные в созданый на гите репозиторий
// создать свой репозиторий
// echo "# имя" >> README.md
// git init
// git add README.md
// git commit -m "initial commit"
// git branch -M main
// git remote add origin git@github.com:djubei/sadas.git       имя репозитория(ссылка)
// git push -u origin master

//git remote add origin git@github.com:User/UserRepo.git       связать локальный репозиторий с гитом
//git push -u origin main запушить локальный репозиторий в папку на гите

//================================================================================== 11

// git clone git@github.com:djubei/example.git my-app
// - в конце указываем название папки в данном случае май апп и он ее создаст
//папка будет связана с репозиторием и можно менять и пушить

//git pull в случае если работаешь с разных компов с одной репой то чтобы поддянуть
//изменения которые были сделаны на одном компе а на другом нет

//если уже так произошло что ты написал код но не запулил в начале репу ,
//то прописываешь git pull пишешь название коммита жмешь энтер потом два раза cntl+c
//потом :wq! и нажать энтр и все смерджится без потери данных и потом пушим с помощью git push.

//для того чтобы удалить папку из git
//git rm -r --cached .idea  -имя папки
//В .gitignore должно быть просто .idea/

//ошибка LF will be replaced by CRLF
//устранить git config core.autocrlf true

//shit+rightMouse - покажет в меню запуск терминала

//стандартные настройки jshint
// .jshintrc
// {
//   "camelcase" : true,
//   "indent": 2,
//   "undef": true,
//   "quotmark": false,
//   "maxlen": 120,
//   "trailing": true,
//   "curly": true,
//   "strict": false,
//   "browser": true,
//   "devel": true,
//   "jquery": true,
//   "esversion": 9,
//   "node": true
// }

//'use strict' - строгий режим


let a = false
let b = false
let c = false
let d = false

let e = false

let a = (...rest) => {
  return rest.filter(it => it).length >= 2
}

if (!a && !b || !a && !c || !a && !d || !b && !c || !b && !d || !c && !d) {
  e = true
}