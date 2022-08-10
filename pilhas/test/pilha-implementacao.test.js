const Stack = require("../pilha-implementacao");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  //push
  it("should push item", () => {
    stack.push(1);

    expect(stack.isEmpty()).toBeFalsy();
  });

  //pop
  it("should pop item", () => {
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  //peek
  it("should peek item", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.peek()).toBe(4);
  });

  //isEmpty
  it("should be empty", () => {
    stack.push("Pessoa 1");
    stack.push("Pessoa 2");
    stack.push("Pessoa 3");
    stack.push("Pessoa 4");

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  //clear
  it("should clear", () => {
    stack.push("Valorant");
    stack.push("Wild Rift");
    stack.push("League of Legends");
    stack.push("Legends of Runeterra");

    stack.clear();

    expect(stack.isEmpty()).toBeTruthy();
  });

  //size
  it("should check size", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    expect(stack.size()).toBe(4);
  });
});
