var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, item) {
  var newArray = array;
  [item, ...newArray]
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray.unshift(element);
  return newArray;
}

function addElementToEndOfArray(array, element) {

}

function destructivelyAddElementToEndOfArray (array, element) {
  array.pop(element);
  return array;
}
