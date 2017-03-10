// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(elem, index){
  if (elem === "Waldo"){
    found(index);
  }
})
}


function actionWhenFound(indexNumber) {
  console.log("Found Waldo at index " + indexNumber + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

