import Stack from "../Stack";

export default function assertStackIsEmpty(s: Stack<any>) {
  expect(s._top).toBeNull();
  expect(s._bottom).toBeNull();
  expect(s._values).toEqual([]);
}
