// Queue

class Queue {

  constructor() {
    this.items = []
  }

  enqueue(element) {
    this.items.push(element)
  }

  dequeue() {
    return `Element dequeued ${this.items.shift()}`
  }

  isEmpty() {
    return this.items.length === 0
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0]
    }
    return null
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(`Items of the queue: ${this.items.toString()}`)
  }

}

export { Queue }