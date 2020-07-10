export default function (a: number, b: number) {
  console.log(a, b);
  return a + b;
}

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

async function test() {
  for (let x of list) {
    const res = await square(x); 
    console.log(res);
  }
}
// test()