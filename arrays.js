var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item) {
  var newArray = [element];
  [element, ...newArray];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  newArray.unshift(element);
  return newArray;
}
