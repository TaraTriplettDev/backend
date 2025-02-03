const assert = require("assert");

const {
  identity,
  first,
  last,
  each,
  indexOf,
  map
} = require("./functions");

describe("identity", function () {
  var uniqueObject = {};

  it("should return whatever value is passed into it", function () {
    assert.strictEqual(identity(1), 1);
    assert.strictEqual(identity("string"), "string");
    assert.strictEqual(identity(false), false);
    assert.strictEqual(identity(uniqueObject), uniqueObject);
  });
});

describe("first", function () {
  it("should be able to pull out the first element of an array", function () {
    assert.strictEqual(first([1, 2, 3]), 1);
  });

  it("should accept an index argument", function () {
    assert.deepStrictEqual(first([1, 2, 3], 2), [1, 2]);
  });

  it("should return an empty array if zero is passed in as the index", function () {
    assert.deepStrictEqual(first([1, 2, 3], 0), []);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    assert.deepStrictEqual(first([1, 2, 3], 5), [1, 2, 3]);
  });
});

describe("last", function () {
  it("should pull the last element from an array", function () {
    assert.strictEqual(last([1, 2, 3]), 3);
  });

  it("should accept an index argument", function () {
    assert.deepStrictEqual(last([1, 2, 3], 2), [2, 3]);
  });

  it("should return an empty array if zero is passed in as the index", function () {
    assert.deepStrictEqual(last([1, 2, 3], 0), []);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    assert.deepStrictEqual(last([1, 2, 3], 5), [1, 2, 3]);
  });
});

describe("each", function () {
  it("should iterate over arrays, providing access to the element, index, and array itself", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    assert.deepStrictEqual(iterationInputs, [
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should only iterate over the array elements, not properties of the array", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    animals.shouldBeIgnored = "Ignore me!";

    each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    assert.deepStrictEqual(iterationInputs, [
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should iterate over objects, providing access to the element, index, and object itself", function () {
    var animals = { a: "ant", b: "bat", c: "cat" };
    var iterationInputs = [];

    each(animals, function (animal, key, object) {
      iterationInputs.push([animal, key, object]);
    });

    assert.deepStrictEqual(iterationInputs, [
      ["ant", "a", animals],
      ["bat", "b", animals],
      ["cat", "c", animals],
    ]);
  });
});

describe("indexOf", function () {
  it("should find 40 in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    assert.strictEqual(indexOf(numbers, 40), 3);
  });

  it("should be able to compute indexOf even when the native function is undefined", function () {
    var numbers = [10, 20, 30];

    assert.strictEqual(indexOf(numbers, 20), 1);
  });

  it("returns -1 when the target cannot be found not in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    assert.strictEqual(indexOf(numbers, 35), -1);
  });

  it("returns the first index that the target can be found at when there are multiple matches", function () {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

    assert.strictEqual(indexOf(numbers, 40), 1);
  });
});

describe("map", function () {
  it("should apply a function to every value in an array", function () {
    var doubledNumbers = map([1, 2, 3], function (num) {
      return num * 2;
    });

    assert.deepStrictEqual(doubledNumbers, [2, 4, 6]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var numbers = [1, 2, 3];
    var mappedNumbers = map(numbers, function (num) {
      return num;
    });

    assert.notStrictEqual(mappedNumbers, numbers);
  });
});

const { filter, 
        reject, 
        uniq, 
        reduce } = require('./functions.js');

describe('filter', () => {
  it('should return an array with elements that pass the truth test', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, [2, 4]);
  });

  it('should return an empty array when no elements pass the truth test', () => {
    const arr = [1, 3, 5, 7, 9];
    const result = filter(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, []);
  });

  it('should return an empty array when the input array is empty', () => {
    const arr = [];
    const result = filter(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, []);
  });
});

describe('reject', () => {
  it('should return an array with elements that do not pass the truth test', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reject(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, [1, 3, 5]);
  });

  it('should return an empty array when all elements pass the truth test', () => {
    const arr = [2, 4, 6, 8, 10];
    const result = reject(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, []);
  });

  it('should return the same array when the input array is empty', () => {
    const arr = [];
    const result = reject(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, []);
  });
});

describe('uniq', () => {
  it('should return a duplicate-free version of the array', () => {
    const arr = [1, 2, 2, 3, 3, 4, 5, 5];
    const result = uniq(arr);
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
  });

  it('should return the same array when all elements are unique', () => {
    const arr = [5, 4, 3, 2, 1];
    const result = uniq(arr);
    assert.deepStrictEqual(result, arr);
  });

  it('should return an empty array when the input array is empty', () => {
    const arr = [];
    const result = uniq(arr);
    assert.deepStrictEqual(result, []);
  });
});

describe('reduce', () => {
  it('should reduce an array to a single value', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = reduce(arr, (accumulator, item) => accumulator + item, 0);
    assert.strictEqual(result, 15);
  });

  it('should reduce an object to a single value', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = reduce(obj, (accumulator, item) => accumulator + item, 0);
    assert.strictEqual(result, 6);
  });

  it('should return the initial accumulator value when the input array is empty', () => {
    const arr = [];
    const result = reduce(arr, (accumulator, item) => accumulator + item, 10);
    assert.strictEqual(result, 10);
  });

  it('should handle an empty object and return the initial accumulator value', () => {
    const obj = {};
    const result = reduce(obj, (accumulator, item) => accumulator + item, 10);
    assert.strictEqual(result, 10);
  });
});
