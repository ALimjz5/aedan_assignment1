const student = require("./Aedan_StudentManager");
console.log("Startup successful");

student.registerStudent(12345, "John", "CF001");
console.log(student.getStudentList());
student.editStudent(12345, "LeBron");
console.log(student.getStudentList());
student.editStudent(12345, "", "DB023");
console.log(student.getStudentList());
student.editStudent(12345, "Kevin", "DMV07");
console.log(student.getStudentList());
student.registerStudent(55555, "Jim", "DMV07");
console.log(student.getStudentByName("Kevin"));
console.log(student.getStudentsByCourse("DMV07"));
student.removeStudent(12345);
console.log(student.getStudentList());