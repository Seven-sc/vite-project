
let name:string = "sd";

const age:number | string = 30
const isMan:boolean = true

type userType = {id:number; name:string; age:number}
const user: userType = {id:1, name:"jack", age:33}

const big:bigint = 100n

const arr: number[] = [1,2,3]

const arr1: Array<Number> = [4,5,6]

// 函数定义
function add1(x:number, y:number): number {
    return x + y;
}

const add2 = (a: number, b: number): number => {
    return a + b;
}



export default {}