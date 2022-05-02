let wowDatatypes = ["hello", 12, 12.4, "A", true];
let type = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i]);
    console.log(arr[i]);
  }
};
type(wowDatatypes);
