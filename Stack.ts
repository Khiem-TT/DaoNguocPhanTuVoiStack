export class Stack<T> {
    array: T[] = [];
    constructor() {
    }
    push(item: T) {
        this.array.push(item);
    }
    pop(): T {
        return this.array.pop();
    }
    size(): number {
        return this.array.length;
    }
}