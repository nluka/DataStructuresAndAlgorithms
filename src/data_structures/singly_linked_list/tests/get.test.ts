import SinglyLinkedList from "../SinglyLinkedList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => l.clear());

describe("SinglyLinkedList.get", () => {
  test("should throw error when index is out of bounds", () => {
    l = new SinglyLinkedList([1, 2, 3]);
    expect(() => l.get(-1)).toThrowError(RangeError);
    expect(() => l.get(4)).toThrowError(RangeError);
  });

  assert([], 0, null);
  assert([1], 0, 1);
  assert([1, 2], 1, 2);
  assert([1, 2, 3], 1, 2);

  function assert(listValues: any[], index: number, expected: any) {
    test(`should return correct value when index=${index}`, () => {
      l = new SinglyLinkedList(listValues);
      expect(l.get(index)).toEqual(expected);
    });
  }
});
