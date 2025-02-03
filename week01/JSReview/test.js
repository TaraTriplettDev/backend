const assert = require('assert');
const {
returnEmptyString,
returnZeroNumber,
returnEmptyArray,
returnEmptyObject,
returnString,
addition,
subtraction,
multiplication,
division,
returnArray,
returnFirstIndex,
returnSecondIndex,
returnArrayLength,
arraySum,
arraySubtraction,
multiplicationArray,
divisionArray,
oddArray,
evenArray,
returnFruits
} = require('./functions')

describe("return an empty string", function () {
  it("should return an empty string", function () {
    assert.strictEqual(returnEmptyString(), "");
  });
});

describe("return a number zero", function () {
  it("should return a number zero", function () {
    assert.strictEqual(returnZeroNumber(), 0);
  });
});

describe("return an empty array", function () {
  it("should return an empty array", function () {
    assert(Array.isArray(returnEmptyArray()));
    assert.strictEqual(returnEmptyArray().length, 0);
  });
});

describe("return an empty object", function () {
  it("should return an empty object", function () {
    assert.deepStrictEqual(returnEmptyObject(), {});
  });
});

describe("return a string from the argument", function () {
  it("should return an abc123 string", function () {
    assert.strictEqual(returnString("abc123"), "abc123");
  });
});

describe("return sum of two parameters", function () {
  it("should return 10", function () {
    assert.strictEqual(addition(5, 5), 10);
  });
});

describe("return subtraction of two parameters", function () {
  it("should return 0", function () {
    assert.strictEqual(subtraction(5, 5), 0);
  });
});

describe("return multiply of two parameters", function () {
  it("should return 20", function () {
    assert.strictEqual(multiplication(4, 5), 20);
  });
});

describe("return division of two parameters", function () {
  it("should return 5", function () {
    assert.strictEqual(division(25, 5), 5);
  });
});

describe("return an array with value inside", function () {
  it("should return [1,2,3]", function () {
    assert.deepStrictEqual(returnArray([1, 2, 3]), [1, 2, 3]);
  });
});

describe("return an array first index of the array element - [1,2,3]", function () {
  it("should return 1", function () {
    assert.strictEqual(returnFirstIndex([1, 2, 3]), 1);
  });
});

describe("return an array second index of the array element - [1,2,3]", function () {
  it("should return 2", function () {
    assert.strictEqual(returnSecondIndex([1, 2, 3]), 2);
  });
});

describe("return the length of an array - [1,2,3]", function () {
  it("should return 3", function () {
    assert.strictEqual(returnArrayLength([1, 2, 3]), 3);
  });
});

describe("return the sum of an array", function () {
  it("should return 6", function () {
    assert.strictEqual(arraySum([1, 2, 3]), 6);
  });
});

describe("return the subtraction of an array", function () {
  it("should return -6", function () {
    assert.strictEqual(arraySubtraction([1, 2, 3]), -6);
  });
});

describe("return the multiplication of an array", function () {
  it("should return 6", function () {
    assert.strictEqual(multiplicationArray([1, 2, 3]), 6);
  });
});

describe("return the division of an array NOTE: Round the decimal place to third - USE GOOGLE", function () {
  it("should return 0.167", function () {
    assert.strictEqual(divisionArray([1, 2, 3]), 0.167);
  });
});

describe("return only odds number", function () {
  it("should return [1,3,5]", function () {
    assert.deepStrictEqual(oddArray([1, 2, 3, 4, 5]), [1, 3, 5]);
  });
});

describe("return only even ", function () {
  it("should return [2,4,6]", function () {
    assert.deepStrictEqual(evenArray([1, 2, 3, 4, 5, 6]), [2, 4, 6]);
  });
});

