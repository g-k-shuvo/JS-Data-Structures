// Stack

class Stack {

  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
    console.log(`${element} Added to the stack!`)
  }

  pop() {
    return `Element Popped: ${this.items.pop()}`
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(`Items of the stack: ${this.items.toString()}`)
  }
}

export { Stack }

