import SinglyLinkedList from "../SinglyLinkedList";

let l: SinglyLinkedList<any>;

afterEach(() => l.clear());

describe("SinglyLinkedList.getItems", () => {
  assert([]);
  assert([{ property: "value" }]);
  assert([1, 2, 3]);
  assert(["1", "2"]);
  assert([undefined, null, true, false]);

  function assert(listValues: any[]) {
    test(`should return correct array when values=${JSON.stringify(
      listValues
    )}`, () => {
      l = new SinglyLinkedList(listValues);
      expect(l.getItems()).toEqual(listValues);
    });
  }
});
