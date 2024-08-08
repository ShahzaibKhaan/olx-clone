// function updateCard() {
//   var schoolNameTxt = document.getElementById("SchoolName").value;
//   console.log(schoolNameTxt);
//   var studentNameTxt = document.getElementById("StudentName").value;
//   console.log(studentNameTxt);
//   var dobtxt = document.getElementById("DateOfBirth").value;
//   console.log(dobtxt);
//   var classtxt = document.getElementById("Class").value;
//   console.log(classtxt);
//   var ide = document.getElementById("RollNumber").value;
//   console.log(ide);
//   var cellNo = document.getElementById("ContactNumber").value;
//   console.log(cellNo);
// }
function updateCard() {
  document.getElementById("schoolName").innerText = document.getElementById("SchoolName").value;
  document.getElementById("stdName").innerHTML = document.getElementById("StudentName").value;
  document.getElementById("DOB").innerText = document.getElementById("DateOfBirth").value;
  document.getElementById("className").innerHTML = document.getElementById("Class").value;
  document.getElementById("RollNo").innerHTML = document.getElementById("RollNumber").value;
  document.getElementById("cellNo").innerHTML = document.getElementById("ContactNumber").value;
  }
function printIdCard(){
  window.print()
}


