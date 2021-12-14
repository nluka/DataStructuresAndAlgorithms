import Queue, { Node } from "../Queue";
import assertQueueIsEmpty from "./assertQueueIsEmpty";

let q: Queue<any>;

afterEach(() => q.clear());

describe("Queue.constructor", () => {
  describe("constructor", () => {
    test("no values", () => {
      q = new Queue();
      assertQueueIsEmpty(q);
    });

    test("single value", () => {
      const val = 1;
      q = new Queue([val]);
      const firstAndLastNode = new Node(val, null);
      expect(q.firstNode()).toEqual(firstAndLastNode);
      expect(q.lastNode()).toEqual(firstAndLastNode);
      expect(q.length()).toEqual(1);
    });

    test("multiple values", () => {
      q = new Queue([1, 2, 3]);
      const expectedLastNode = new Node(3, null);
      const expectedFirstNode = new Node(1, new Node(2, expectedLastNode));
      expect(q.firstNode()).toEqual(expectedFirstNode);
      expect(q.lastNode()).toEqual(expectedLastNode);
      expect(q.length()).toEqual(3);
    });
  });
});
