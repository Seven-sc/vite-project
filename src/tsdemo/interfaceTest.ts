interface User {
    id: number;
    name: string;
}

interface Person extends User {
    age: number;
    [k:string]: any
}

const tom: Person = {id:1, name:"tt", age: 22}

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