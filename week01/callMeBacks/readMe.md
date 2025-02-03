# Call Me Backs!
The purpose of this module is to teach about callbacks!

Read the instruction carefully below, each function has it specific requirement

In the terminal run npm run test

identity - Returns whatever value is passed as the argument. This function doesn't seem very useful, but remember it--if a function needs to provide an iterator when the user does not pass one in, this will be handy.

first - Return an array of the first n elements of an array. If n is undefined, return just the first element.

last - Like first, but for the last elements. If n is undefined, return just the last element.

each - Call iterator(value, key, collection) for each element of collection. Accepts both arrays and objects.

Note: each does not have a return value, but rather simply runs the
iterator function over each item in the input collection.

\*\*\* ALL EXCEPT THE FIRST FUNCTION TEST IS COMMENTED OUT. MUST UNCOMMENT EACH PART OF THE TEST TO CHECK EACH FUNCTION. (UNCOMMENT IN test.js)

indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

filter - Return all elements of an array that pass a truth test.

reject - Return all elements of an array that don't pass a truth test.

uniq - Produce a duplicate-free version of the array.

map - Return the results of applying an iterator to each element.

reduce - Reduces an array or object to a single value by repetitively calling
iterator(accumulator, item) for each item. accumulator should be
the return value of the previous iterator call.

You can pass in a starting value for the accumulator as the third argument to reduce. If no starting value is passed, the first element is used as the accumulator, and is never passed to the iterator. In other words, in the case where a starting value is not passed, the iterator is not invoked until the second element, with the first element as its second argument.

Example:
var numbers = [1,2,3];
var sum = reduce(numbers, function(total, number){
return total + number;
}, 0); // should be 6

    var identity = reduce([5], function(total, number){
      return total + number * number;
    }); // should be 5, regardless of the iterator function passed in
    No accumulator is given so the first element is used.
