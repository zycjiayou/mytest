import { promises } from "dns";

// import './space.ts';

let hello: string = 'hello world';
let flag: boolean = false;
let num: number|undefined = 1;

let arr: number[] = [1,2,3];
let arr1: Array<Number> = [2,3,4];

let tuple: [number, string] = [1, '2'];

let func: (x:number, y: string) => void = (x, y) => {
  console.log(x, y);
}

function test(x: number, y: number) : number {
  return 1;
}

interface Obj {
  x: number;
  y: string;
  [props: string]: any;
}

let obj: Obj = {
  x: 2,
  y: '3'
}

obj.z = 10;

interface Func {
  (name: string, age: number) : void;
}

let myFunc: Func = (a, b) => {
  console.log(a, b);
}

myFunc('1', 2);

let nul: null = null;
num = undefined;

enum Direction {
  UP = 1,
  Down,
  Left,
  Right
}

// 泛型
function full<T>(opt: T): T {
  return opt
}

function timeout(time: number): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('aaaaaaaaaa');
      resolve('aaa');
    }, time);
  });
}

const abc = async () => {
  await timeout(2000);
  console.log('after await');
}

abc();

full<String>('1');
console.log(full('bbbb'));
// try {
//   console.log('rule', Rule);
// } catch(e) {
//   console.error(e);
// }

// console.log(Shape);

// Shape('aaa');
// console.log(Shape.version);
// Shape.circle();

document.body.innerHTML = 'hello';