// This keyword and Window Object

// console.log(this==window)

console.log(this)

let meth = {
    name:"teckiajay",
    lname:"ajay kumar",

    fn:function(){
        console.log(this.lname)
    }
}

meth.fn()