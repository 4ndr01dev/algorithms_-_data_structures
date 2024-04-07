import { Stack } from "./stack.ts";

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.get());
console.log(stack.pop());
