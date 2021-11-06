import SinglyLinkedList from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

afterEach(() => clearList(l));

describe("SinglyLinkedList.getValues", () => {
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
      expect(l.getValues()).toEqual(listValues);
    });
  }
});
