var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {

}
function destructivelyAddElementToBeginningOfArray(array, element) {
  [element, ...array]
  return array;
}
