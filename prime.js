var PrimeNumberGenerator = {
  validateInput: function(input){
    isValid = true;
    if (typeof input !== "number" || String(input).indexOf(".") !== -1 || input < 0){
      isValid = false;
    }
    return isValid;
  },
  generate: function(startingValue, endingValue) {
    var primeArray = [];
    if (this.validateInput(startingValue) && this.validateInput(endingValue)){
      var min;
      var max;
      if (startingValue <= endingValue){
        min = startingValue;
        max = endingValue;
      } else {
        min = endingValue;
        max = startingValue;
      }
      for (var i = min; i <= max; i++){
        if(this.isPrime(i)){
          primeArray.push(i);
        }
      }
    }
    else {
      console.log("Invalid input. Enter two whole, positive numbers.");
    }
    return primeArray;
  },
  isPrime: function(val){
    var isPrime = true;
    for (var i = 0; i <= val; i++){
      if (i !== 1 && i !== 0 && i !== val && val % i === 0 || val === 1 || val === 0){
        isPrime = false;
      }
    }
    return isPrime;
  }
};

function test(num1, num2, expected) {
  results.tests++;
  var result = PrimeNumberGenerator.generate(num1, num2);
  if (result.join() !== expected.join()) {
    results.fails++;
    console.log("Expected " + expected + " but got " + result);
  }
}

var results = {
    tests: 0,
    fails: 0
};

test(0,0,[]);
test(1,1,[]);
test(2,2,[2]);
test(2,3,[2,3]);
test(1,10,[2,3,5,7]);
test(10,1,[2,3,5,7]);
test(7900,7920,[7901,7907,7919]);
test(3,1.2,[]);
test(4,"banana",[]);
test(0,-3,[]);

console.log(results.tests + " tests: " + results.fails + " failed;");
