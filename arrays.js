var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {

}
function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array
  newArray.unshift(element);
  return newArray;
}
