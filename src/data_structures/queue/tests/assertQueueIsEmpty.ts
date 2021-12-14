import Queue from "../Queue";

export default function assertQueueIsEmpty(q: Queue<any>) {
  expect(q.first()).toBeNull();
  expect(q.last()).toBeNull();
  expect(q.length()).toBe(0);
}
