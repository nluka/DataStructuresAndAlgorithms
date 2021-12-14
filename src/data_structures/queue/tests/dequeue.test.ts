import Queue, { Node } from "../Queue";

let q: Queue<any>;

beforeAll(() => (q = new Queue()));

afterEach(() => q.clear());

describe("Queue.dequeue", () => {
  function assertSuccess(
    qValues: any[],
    expectedReturnValue: any,
    expectedFirstNode: any,
    expectedLastNode: any
  ) {
    test(`should succeed when items=${JSON.stringify(qValues)}`, () => {
      q = new Queue(qValues);
      const prevLength = q.length();

      expect(q.dequeue()).toEqual(expectedReturnValue);
      expect(q.firstNode()).toEqual(expectedFirstNode);
      expect(q.lastNode()).toEqual(expectedLastNode);
      expect(q.length()).toBe(prevLength - 1);
    });
  }

  assertSuccess([1], 1, null, null);
  {
    const expectedFirstAndLast = new Node(2, null);
    assertSuccess([1, 2], 1, expectedFirstAndLast, expectedFirstAndLast);
  }
  {
    const expectedFirstAndLast = new Node(2, null);
    assertSuccess([1, 2], 1, expectedFirstAndLast, expectedFirstAndLast);
  }
  {
    const expectedLast = new Node(3, null);
    const expectedFirst = new Node(2, expectedLast);
    assertSuccess([1, 2, 3], 1, expectedFirst, expectedLast);
  }
  {
    const expectedLast = new Node(1, null);
    const expectedFirst = new Node(2, expectedLast);
    assertSuccess([3, 2, 1], 3, expectedFirst, expectedLast);
  }
});
