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
   return sourceArray.reduce(reducer)
 }
 
 

/*describe('my own reduce-like methods', function() {
  describe("reduceToTotal returns a running total when not given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      expect(reduceToTotal(sourceArray)).to.equal(6)
    })
  })

  describe("reduceToTotal returns a running total when given a starting point", function() {
    it("reduces correctly", function(){
      sourceArray = [1,2,3]
      startingPoint = 100
      expect(reduceToTotal(sourceArray, startingPoint)).to.equal(106)
    })
  })

  describe("reduceToAllTrue returns true when all values are truthy", function() {
    it("reduces correctly", function(){
      sourceArray = [1, 2, true, "razmatazz"]
      expect(reduceToAllTrue(sourceArray)).to.be.true
    })
  })

  describe("reduceToAllTrue returns false when any value is falsy", function() {
    it("reduces correctly", function(){
      sourceArray = [1, 2, true, "razmatazz", false]
      expect(reduceToAllTrue(sourceArray)).to.be.false
    })
  })

  describe("reduceToAnyTrue returns true when a true value is present", function() {
    it("reduces correctly", function(){
      sourceArray = [ false, null, null, null, true]
      expect(reduceToAnyTrue(sourceArray)).to.equal(true)
    })
  })

  describe("reduceToAnyTrue returns false when no true value is present", function() {
    it("reduces correctly", function(){
      sourceArray = [ false, null, null, null]
      expect(reduceToAnyTrue(sourceArray)).to.equal(false)
    })
  })
})*/

