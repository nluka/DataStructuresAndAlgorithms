import Queue, { Node } from "../Queue";

let q: Queue<any>;

beforeAll(() => (q = new Queue()));

afterEach(() => q.clear());

describe("Queue.enqueue", () => {
  test("onto empty queue", () => {
    const val = 1;
    q.enqueue(val);
    const node = new Node(val, null);

    expect(q.first()).toBe(val);
    expect(q.firstNode()).toEqual(node);

    expect(q.last()).toBe(val);
    expect(q.lastNode()).toEqual(node);

    expect(q.length()).toBe(1);
  });

  test("onto populated queue", () => {
    q = new Queue([1, 2, 3]);
    const val = 4;
    q.enqueue(val);
    const node = new Node(val, null);

    expect(q.last()).toBe(val);
    expect(q.lastNode()).toEqual(node);
    expect(q.length()).toBe(4);
  });
});
