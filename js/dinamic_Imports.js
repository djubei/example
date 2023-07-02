let {hi, bye, default: hello} = await import("./say.js")// что бы подобный импорт работал , скрипт должен быть модулем либо не быть скриптом
/*let obj = await import('./say.js');
let say = obj.default;*/

hi();
bye();
hello()
let modulePath = prompt('какой модуль загружать?')

import(modulePath)
  .then(obj => console.log("module object"))
  .catch(err => console.log("module error"))


/*


<script>
async function load() {
  let {hi, bye, default: hello} = await import('./js/say.js'); // let say =await import('./js/say.js');
  hi(); // Привет!
  bye(); // Пока!
  hello(); // Модуль загружен (экспорт по умолчанию)!
}
</script>


<script>

   async function load() {
     let say = await import("./js/say.js")
     say.hi()
     say.bye()
     say.default()
   }

</script>

<script>
  let load = () => {
    import("./js/say.js").then(
      obj => {
        obj.bye();
        obj.hi();
        obj.default()
      }
    )
  }
</script>


<button onclick='load()'>Нажми меня</button>
*/
