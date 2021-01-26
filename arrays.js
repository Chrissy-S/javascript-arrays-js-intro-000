var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {

}
function destructivelyAddElementToBeginningOfArray(array, element) {
  [...array, element];
  return array;
}
