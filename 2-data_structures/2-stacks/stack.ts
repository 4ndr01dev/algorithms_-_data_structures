export class Stack<T> {
  items: T[] = []
  push = (item: T) => {
    this.items.push(item)
  }
  pop = (): T | undefined => {
    return this.items.pop()
  }
  get = (): T[] => {
    return this.items
  }
}
