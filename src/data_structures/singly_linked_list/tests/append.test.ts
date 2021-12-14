import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => l.clear());

describe("SinglyLinkedList.append", () => {
  test("onto empty list", () => {
    const val = 1;
    l.append(val);
    const node = new NodeUnilateral(val, null);
    expect(l.headNode()).toEqual(node);
    expect(l.tailNode()).toEqual(node);
    expect(l.length()).toBe(1);
  });

  test("onto populated list", () => {
    l = new SinglyLinkedList([1, 2, 3]);
    const val = 4;
    l.append(val);
    const node = new NodeUnilateral(val, null);
    expect(l.tailNode()).toEqual(node);
    expect(l.length()).toBe(4);
  });
});
