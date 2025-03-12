interface User {
    id: number;
    name: string;
}

interface Person extends User {
    age: number;
    [k:string]: any
}

const tom: Person = {id:1, name:"tt", age: 22}

type keys = keyof User;
type UserType = typeof tom;
const jack: UserType = {id:2, name:"tt1", age: 33}
type User1 = {
    // in只能在type中使用不能在interface中使用
    [k in keys]: any
}
const cat: User1 = {id:3, name:"cat"}


interface sum {
    (x:number,y:number): number
}

type sum1 = (x:number,y:number) => number

const add: sum = (a, b) => {
    return a + b;
}
const add11: sum1 = (a, b) => {
    return a + b;
}

function identity<T> (args:T):T {
    return args;
}

identity<number>(1)


export default {}