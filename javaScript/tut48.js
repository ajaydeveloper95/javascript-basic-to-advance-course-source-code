// more useful things in javascript

// Iterables
// Sets
// Maps
// Object.assign
// Optinal Chaining

// Iterables
// string iterate
// for (let item of "string"){
//     console.log(item)
// }

// // array iterate
// for(let d of [4,5,6,6,7,43,78]){
//     console.log(d)
// }

// value
// done

let v = {};

v[Symbol.iterator] = function () {
  let n = 0;
  let done = false;
  return {
    next() {
      n += 1;
      if (n == 10) {
        done = true;
      }
      return { value: n, done: done };
    },
  };
};

let it = v[Symbol.iterator]();
// console.log(it)

let v1 = it.next();

// while(true){
//     let vaaaa = it.next()
//     console.log(vaaaa.value)
//     if(vaaaa.done){
//         break
//     }
// }

// Sets
// don't repate allow
// index not fix
// all element are unique

// how to create a set
let g = new Set([4, 5, 6, 4, 56, 5]);
g.add(99);
g.delete(4);
let b = g.has(4);

// console.log(g)
// console.log(b)

// Maps
// key and value pair combination (any data type)
// indexing not fixed

// how to create a Maps function or Method
// let b1 = new Map([["fruti", "graps"], ["helo","hii"]]);
// b1.set("good","best")
// console.log(b1)

// Object assign
let ob = {
  name: "ajay",
  age: 21,
};

let obTarget = {
  name: "vijay",
  age: 25,
  value: 67,
};

// let vb = Object.assign({val:"hello",name:"vijay"},ob)

// console.log(vb)

// Optional chain
let user = {
    name:"tecki ajay",
    age:2,
    addresh:{
        city:"jaipur",
        state:"Raj"
    },
    firstname:{
        name:"vijay"
    }
}

console.log(user.firstname?.name.vijay?.hello)