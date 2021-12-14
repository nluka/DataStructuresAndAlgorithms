import Queue from "../Queue";
import assertQueueIsEmpty from "./assertQueueIsEmpty";

let q: Queue<any>;

describe("Queue.clear", () => {
  test(`should correctly clear an empty queue`, () => {
    q = new Queue([1, 2, 3]);
    q.clear();
    assertQueueIsEmpty(q);
  });

  test(`should correctly clear a populated queue`, () => {
    q = new Queue([]);
    q.clear();
    assertQueueIsEmpty(q);
  });
});
