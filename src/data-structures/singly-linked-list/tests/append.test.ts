import SinglyLinkedList, { NodeUnilateral } from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

beforeAll(() => (l = new SinglyLinkedList()));

afterEach(() => clearList(l));

describe("SinglyLinkedList.append", () => {
  test("onto empty list", () => {
    const val = 1;
    l.append(val);
    const node = new NodeUnilateral(val, null);
    expect(l._head).toEqual(node);
    expect(l._tail).toEqual(node);
    expect(l._length).toBe(1);
  });

  test("onto populated list", () => {
    l = new SinglyLinkedList([1, 2, 3]);
    const val = 4;
    l.append(val);
    const node = new NodeUnilateral(val, null);
    expect(l._tail).toEqual(node);
    expect(l._length).toBe(4);
  });
});
