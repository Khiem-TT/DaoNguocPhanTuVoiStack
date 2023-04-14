import {Stack} from "./Stack";

let stack = new Stack<number>();
let array = [1, 2, 3, 4, 5];
let reversedArray = [];

array.forEach(item => {
    stack.push(item);
})

for (let i = 0; i < array.length; i++) {
    reversedArray.push(stack.pop());
}
console.log(reversedArray);