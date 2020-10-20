let foo = function () {
  setTimeout(() => {
    console.log('this=>', this)
    console.log(this.id)
  }, 100)
  return this.id
}
let id = 21
let data = {
  id: 41
}
foo()
foo.call(data)