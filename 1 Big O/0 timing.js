//what is better mean ?
// faster,more readable,less memor-intensive

// EX : Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.
// SOL 1
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  }
  
  var t1 = performance.now();
  addUpTo(1000000000);
  var t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

  //SOL 2   

  function addUpTo(n) {
    return n * (n + 1) / 2; //factorial
  }
  
  var time1 = performance.now();
  addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)