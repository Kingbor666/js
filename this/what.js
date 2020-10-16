//函数执行的环境对象

//作为普通函数调用  指向window

function f() {
    console.log(this)  //window
}
//作为对象的方法调用  指向对象

const obj = {
    fn() {
        console.log(this)  //obj
    }
}

//call  apply  bind 改变this指向

let obj = {}

function f() {
    console.log(this)
}

f.call(obj)  //obj

let ff = f.bind(obj);
ff()  //obj

//箭头函数没有this，指向调用时所在的函数执行上下文
let obj = {
    fn: () => {
        console.log(this)  //window
    }
}

let obj = {
    fn() {
        let a = () => {
            console.log(this)
        }
        a()
    }
}

obj.fn()  //obj
let b = obj.fn;
b()  //window