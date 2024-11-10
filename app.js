const student = require("./Aedan_StudentManager");
console.log("Startup successful");

student.registerStudent(12345, "John Deere", "CF001");
console.log(student.getStudentList());
student.editStudent(12345, "LeBron James");
console.log(student.getStudentList());
student.editStudent(12345, "", "DB023");
console.log(student.getStudentList());
student.editStudent(12345, "Kevin Durant", "UR455");
console.log(student.getStudentList());
