/**
 * Searches an array for the first repeating element and returns it. Linear time and space complexity - O(n).
 * @param array The array to search.
 * @returns The first repeating element in `array` if one exists, `null` otherwise.
 */
export default function arrayFirstRepeatingElement<T>(array: T[]): T | null {
  if (!Array.isArray(array)) {
    throw new TypeError(`expected an array but got '${typeof array}'`);
  }
  if (array.length < 2) {
    return null;
  }

  const valueToIndexMap = new Map<any, number>([[array[0], 0]]);

  for (let i = 1; i < array.length; ++i) {
    const val = array[i];
    if (valueToIndexMap.get(val) !== undefined) {
      return val as T;
    }
    valueToIndexMap.set(val, i);
  }

  return null;
}
