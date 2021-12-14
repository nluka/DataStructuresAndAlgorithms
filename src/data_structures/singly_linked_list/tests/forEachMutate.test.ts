import SinglyLinkedList from "../SinglyLinkedList";

let l: SinglyLinkedList<any>;

afterEach(() => l.clear());

describe("SinglyLinkedList.forEachMutate", () => {
  function assert(
    listValues: any[] | undefined,
    callback: (item: any, index: number) => void,
    expectedValues: any[],
    description: string
  ) {
    test(`should correctly ${description}`, () => {
      l = new SinglyLinkedList(listValues);
      l.forEachMutate(callback);
      expect(l.getItems()).toEqual(expectedValues);
    });
  }

  assert([1, 2, 3], (item) => item * 2, [2, 4, 6], "double each value");
  assert(
    ["a", "b"],
    (item) => (item += "_"),
    ["a_", "b_"],
    "append to each string value"
  );
  assert(
    [true, false, true, false],
    (item) => item || true,
    [true, true, true, true],
    "|| each boolean value with true"
  );
  assert(
    [
      [1, 2],
      [3, 4],
    ],
    (item) => item.concat(100),
    [
      [1, 2, 100],
      [3, 4, 100],
    ],
    "concat number to each value"
  );
});
