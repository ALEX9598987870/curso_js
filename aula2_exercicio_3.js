const arr = ["one", "two", "three", false, 100, 7.5];

function teyle(arr, str) {
  //console.log({arr, str})
  arr.splice(0, 2);
  arr.pop(2);
  arr.push(str);
  console.log(arr);
}

teyle(arr, "HAHA");
