console.log(1)


function User(name, id) {
  this.name = name
  this.id = id
  this.human = true
  this.hello = function () {
    console.log(`Hello ${ this.name }`)
  }
}

const alex = new User('Alex', 22)


User.prototype.exit = function () {
  console.log(`${ this.name } вышел`)
}


const boris = new User('Boris', 32)
boris.exit()

console.dir(alex)
console.dir(boris)