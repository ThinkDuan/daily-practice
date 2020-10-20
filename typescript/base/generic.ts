function identity<T>(arg: T): T {
  return arg;
}
function identityLogger <T> (arg: T[]) : T[] {
  console.log(arg.length)
  return arg;
}

const data1 = identity('string')
const data2 = identity([1,2,'string'])
const data3 = identity({name: 'lisi'})
console.log(data1, data2, data3)
const data4 = identityLogger([1,'str'])
console.log(data4)

let myIdentity: <T>(arg: T) => T = identity
console.log(myIdentity.toString())

