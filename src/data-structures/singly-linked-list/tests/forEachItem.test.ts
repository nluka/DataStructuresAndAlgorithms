import SinglyLinkedList from "../SinglyLinkedList";
import clearList from "./clearList";

let l: SinglyLinkedList<any>;

afterEach(() => clearList(l));

describe("SinglyLinkedList.forEachItem", () => {
  test(`should iterate the correct number of times with empty list`, () => {
    l = new SinglyLinkedList([]);

    let callCount = 0;

    l.forEachItem(() => {
      ++callCount;
    });

    expect(callCount).toBe(0);
  });

  test(`should iterate the correct number of times with populated list`, () => {
    l = new SinglyLinkedList([1, 2, 3, 4, 5]);

    let callCount = 0;

    l.forEachItem(() => {
      ++callCount;
    });

    expect(callCount).toBe(5);
  });

  test(`case 1 (double each value)`, () => {
    const values = [-2, -1, 0, 1, 2];
    l = new SinglyLinkedList(values);

    const doubled: number[] = [];
    let callCount = 0;

    l.forEachItem((item) => {
      doubled.push(item * 2);
      ++callCount;
    });

    expect(l.getValues()).toEqual(values);
    expect(doubled).toEqual([-4, -2, 0, 2, 4]);
    expect(callCount).toBe(callCount);
  });

  test(`case 2 (append each value to string)`, () => {
    const values = ["a", "b", "c"];
    l = new SinglyLinkedList(values);

    let sum = "";
    let callCount = 0;

    l.forEachItem((item) => {
      sum += item;
      ++callCount;
    });

    expect(l.getValues()).toEqual(values);
    expect(sum).toEqual("abc");
    expect(callCount).toBe(callCount);
  });
});
