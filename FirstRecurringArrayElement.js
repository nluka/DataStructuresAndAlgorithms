//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

function firstRecurringArrayElement(array) {
  if (!Array.isArray(array) || array.length < 2) {
    return undefined;
  }

  // This solution optimizes for time,
  // if memory was more important, a nested loop approach would be better.
  // Time complexity = O(n), space complexity = O(n)
  const previousValues = new Map();
  previousValues.set(array[0], 0);
  for (let i = 1; i < array.length; i++) {
    if (previousValues.get(array[i]) !== undefined) {
      return array[i];
    }
    previousValues.set(array[i], i);
  }
  return undefined;
}

module.exports.firstRecurringArrayElement = firstRecurringArrayElement;
