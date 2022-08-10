const Queue = require("../fila-implementacao");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  //enqueue
  it("should add element to the queue", () => {
    queue.enqueue(1);

    expect(queue.isEmpty()).toBeFalsy();
  });

  //dequeue
  it("should remove element from the queue", () => {
    queue.enqueue(1);
    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  //front
  it("should check the element at the front of the queue", () => {
    queue.enqueue("Pessoa 1");
    queue.enqueue("Pessoa 2");
    queue.enqueue("Pessoa 3");

    expect(queue.front()).toBe("Pessoa 1");
  });

  //isEmpty
  it("should check if the queue is empty", () => {
    queue.enqueue("Pessoa 1");
    queue.enqueue("Pessoa 2");
    queue.enqueue("Pessoa 3");
    queue.enqueue("Pessoa 4");

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBeTruthy();
  });

  //size
  it("should check the size of the queue", () => {
    queue.enqueue("Valorant");
    queue.enqueue("Wild Rift");
    queue.enqueue("League of Legends");
    queue.enqueue("Legends of Runeterra");

    expect(queue.size()).toBe(4);
  });
});
