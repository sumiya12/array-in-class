let student1Courses = ["Математик", "Англи хэл", "Програмчлал"];
let student2Courses = ["Газар зүй", "Испани", "Програмчлал"];

let duplicate = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i].x != b[j].x) {
        return b.push(a[i]);
      }
    }
  }
};
console.log(duplicate(student1Courses, student2Courses));

array_one.forEach(function (item) {
  var isPresent = array_two.indexOf(item);
  if (isPresent !== -1) {
    console.log(item);
  }
});
