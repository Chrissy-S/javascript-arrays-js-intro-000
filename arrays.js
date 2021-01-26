var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  [...array, element];
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  newArray.unshift(element);
  return newArray;
}
