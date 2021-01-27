function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    "I am ${i} strange loop${i === 0 ? '' : 's'}.";
}
return array;
}

function whileLoop(n) {
  var countdown = n;
  while (countdown > 0) {
    console.log(--countdown);
  }
}

function doWhileLoop(num)
{
  let i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);

}
