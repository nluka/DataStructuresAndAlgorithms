import SinglyLinkedList from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => clearList(l));

describe("SinglyLinkedList.reverse", () => {
  function assert(listValues: any[], reversedListValues: any[]) {
    test(`should succeed when listValues=${JSON.stringify(listValues)}`, () => {
      l = new SinglyLinkedList(listValues);
      l.reverse();
      const mirror = new SinglyLinkedList(reversedListValues);
      expect(l).toEqual(mirror);
    });
  }

  assert([], []);
  assert([1], [1]);
  assert([1, 2], [2, 1]);
  assert([1, 2, 3], [3, 2, 1]);
  assert([1, 1], [1, 1]);
  assert([1, 2, 1], [1, 2, 1]);
  assert([null, undefined], [undefined, null]);
  assert([true, true, false], [false, true, true]);
  assert(
    ["first", "second", "third", "fourth"],
    ["fourth", "third", "second", "first"]
  );
});
