function myNew(fn) {
    const res = {};
    //对象生万物
    res.constructor = fn;
    res.fn = fn;
    const result = res.fn();
    delete res.fn
    return typeof result === "object" ? result : res
}

let fn = function () {
    this.a = 1
}

myNew(fn)