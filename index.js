// Your code here
function mapToNegativize(sourceArray){
  let array=sourceArray.map(element=>element*-1)
  return array;
}
mapToNegativize([1, 2, 3, -9]);


/*function mapToNoChange(sourceArray){
  let array=[];
  array=sourceArray.map(element=>array.push(element));
  return array;
}
mapToNoChange(dune);*/

function mapToDouble(sourceArray){
   let array=sourceArray.map(element=>element*2)
  return array;
}
mapToDouble([1, 2, 3, -9])

function mapToSquare(sourceArray){
   let array=sourceArray.map(element=>element**2)
  return array;
}

 
 function reduceToTotal(sourceArray, startingPoint){
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
   return sourceArray.reduce(reducer,startingPoint)
 }
 
 
 
 
 

 
