# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

## Pre-requisites
### In main file, ensure that the module is required in the code before use.
e.g. const student = require("./Aedan_StudentManager");

## Register Student
### To register students use the registerStudent(newID, newName, newCourse) function and input student's new ID, Name and Course.<br>
e.g. student.registerStudent(12345, "John", "CF001");

## Remove Student
### To remove a student from database, use the removeStudent(id) function and input student's current ID<br>
e.g. student.removeStudent(12345);

## Editing Student
### To edit a student's information, use the editStudent(id, name, course) function and input student's current ID and new name, new course or both.
e.g. <br>
student.editStudent(12345, "", "DB023");<br>
or<br>
student.editStudent(12345, "LeBron");<br>
or<br>
student.editStudent(12345, "Kevin", "DMV07");<br>

## Getting Student(s)
### To get/return student info, there are various ways to do so. getStudentList() will return all students inside of the database. getStudentByCourse(course) will filter all students according to a course. getStudentById(id) will return the specific student according to their ID. getStudentByName(name) will filter all students according to their name.
e.g.<br>
student.getStudentList()<br>
student.getStudentByName("Kevin")<br>
student.getStudentsByCourse("DMV07")<br>

# References
Provide the references that you have used to support your assignment. 

For filtering arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#using_filter_on_sparse_arrays

For finding by index in arrays
https://www.w3schools.com/jsref/jsref_findindex.asp
https://builtin.com/software-engineering-perspectives/javascript-array-contains#:~:text=The%20find()%20method%20returns,then%20the%20function%20returns%20undefined.