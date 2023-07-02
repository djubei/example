`use strict`

/*
console.log('зварос данных')

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('Подготовка данных....')

    const product = {
      name: 'tv',
      price: 2000
    }

    res(product)
  }, 2000)
})

promise.then(product => {
  return new Promise((res, rej) => {// асинхронных код там где промисы

    setTimeout(() => {
      console.log('заказ осуществлен')
      product.status = 'order'
      //res(product)
      rej()
    }, 2000)
  })
  //promise2.then((product) => {console.log(product)})

}).then((product) => {// синхронный код , then можно так же использовать и для синхронного кода для создания цепочки
  product.modify = true
}).then((product) => {
  console.log(product)
}).catch(() => {
  console.log('error')
}).finally(() => {
  console.log('finally')
})
*/


const time1 = (time) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(time)
      res()
    }, time)
  })
}
const time2 = (time) => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(time)
      res()
    }, time)
  })
}

/*time(1000).then(res => {
  console.log(1000)
})
time(2000).then(res => {
  console.log(2000)
})*/

/*Promise.all([time1(1000), time2(2000)])
  .then(() => { // выполняется если все аргументы-промисы выполнятся (resolve)
    console.log("готово")
  })*/
Promise.race([time1(1000), time2(2000)])
  .then(() => {
    console.log("готово") // выполняется как только первый из промисов зарезолвится
  })
