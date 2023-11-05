Array.prototype.customeMap = function (cb){
    const result =[]
    for (let index = 0; index < this.length; index++){
        result.push(cb(this[index], index))
    }
return result
}
const testMap = [1,2,3].customeMap((item) => item + 1)
console.log(testMap)
/////////////////////////////

Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  }
  const testFilter = [1,2,3].customFilter((item1) => item1 % 2 === 0)
console.log(testFilter)

//////////////////////////////////

Array.prototype.customSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        return true;
      }
    }
    return false;
  }
  const testSome = [1,2,3].customSome((item2) => item2 % 2 !== 0)
console.log(testSome)

/////////////////////////////////////

Array.prototype.customEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  const testEvery = [1,2,3].customEvery((item3) => item3 < 0)
  console.log(testEvery)

  /////////////////////////////////////

  let p = new Promise((resolve, reject) =>{
    let a=  34+5
    if (a === 39){
        resolve('success')

    }else {
        reject('failed')
    }
  })
  p.then((message) => {
    console.log('This is in then '  + message)
  })
//////////////////////////
  let p1 = new Promise((resolve, reject) =>{
    let a=  67-2
    if (a === 4){
        resolve('success')

    }else {
        reject('failed')
    }
  })
  p1.then((message) => {
    console.log('This is in then '  + message)
  }).catch((message) =>{
    console.log('This is in a catch ' + message)
  })
  ////////////////////////
  let p2 = new Promise((resolve, reject) =>{
    let a=  77-4
    if (a === 3){
        resolve('success')

    }else {
        reject('failed')
    }
  })
  p2.then((message) => {
    console.log('This is in then '  + message)
  }).catch((message) =>{
    console.log('This is in a catch ' + message)
  }).finally(() =>{
    console.log('This will be implemented')
  })

  const promise1 = new Promise((res,rej) => res('promise1'))
  const promise2 = new Promise((res,rej) => res('promise2'))
  const promise3 = new Promise((res,rej) => res('promise3'))
  const promise4 = new Promise((res,rej) => res('promise4'))

  Promise.all([
    promise1,
    promise2,
    promise3,
    promise4
  ]).then((message) => {
    console.log(message)
  })