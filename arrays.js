var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray.push(element);
  return newArray;
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  newArray.unshift(element);
  return newArray;
}
