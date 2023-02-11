/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
let arr1 = [
  { houseno: 1, name: "jenson", age: "21", profession:  "Doctor" },
  { houseno: 2, name: "victor", age: "24", profession:  "Tailor"},
  { houseno: 3, name: "kiran", age: "23", profession:  "Engineer" },
];
arr.map(PrintStudentswithMap)
function PrintStudentswithMap(arritem) {
  //Write your code here , just console.log
  if(arritem.marks >50){
    console.log(arritem);
  }
}
arr.forEach(PrintStudentsbyForEach)
function PrintStudentsbyForEach(arritem) {
  //Write your code here , just console.log
  if(arritem.marks >50){
    console.log(arritem);
}}

function addData() {
  //Write your code here, just console.log
  let newobj ={id:4,name:"susan",age:"20",marks:45};
  arr.push(newobj);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
  const community = arr.concat(arr1);
  console.log(community);
}
