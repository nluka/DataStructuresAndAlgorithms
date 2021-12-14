import Stack from "../Stack";

export default function assertStackIsEmpty(s: Stack<any>) {
  expect(s.top()).toBeNull();
  expect(s.bottom()).toBeNull();
  expect(s.getItems()).toEqual([]);
  expect(s.length()).toEqual(0);
}
