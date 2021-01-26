var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item) {
  var newArray = ["1", "2"];
  [element, ...newArray]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray;
  newArray.unshift(element);
  return newArray;
}
