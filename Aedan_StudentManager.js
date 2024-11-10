module.exports = {
    students: [
        {
            id: 33456,
            name: "Devin",
            course: "GHJ01"
        }
    ],
    //register new student
    registerStudent(newID, newName, course) {
        this.students.push({ id: newID, name: newName, course: course });
        console.log("Student admitted");
    },
    //remove student
    removeStudent(id) {
        let index = this.students.findIndex(stud => stud.id == id);         // Code will attempt find the student with the matching id and return the index in which the student is in the array
        if (index !== -1) {                                                 //Index wil return a -1 value if it does not find student with id
            this.students = this.students.filter(stud => stud.id !== id);
            console.log("Student successfully removed");
        } else {
            console.log("Student does not exist");
        }
    },
    //edit a student's particulars or transfer their course
    editStudent(id, newName, newCourse) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            if ((newName != null || newName != "") && (newCourse == null || newCourse == "")) {                     //Checks if only the name is being changed
                this.students[index].name = newName;
            } else if ((newName == null || newName == "") && (newCourse != null || newCourse != "")) {              //Checks if the student is only transferring course
                this.students[index].course = newCourse;
            } else if ((newName != null || newName != "") && (newCourse != null || newCourse != "")) {              //Checks if both student name and course is being changed
                this.students[index].name = newName;
                this.students[index].course = newCourse;
            }
        } else {
            console.log("Student not found");
        }
    },
    //Shows all students under a course
    getStudentsByCourse(course) {
        let courseSearch = this.students.filter(stud => stud.course === course);                                    //Filters out the students who are in the chosen course
        return courseSearch;
    },
    //For searching for a student by their name (multiple students will be shown if they have the same name)
    getStudentByName(name) {
        let nameSearch = this.students.filter(stud => stud.name === name);                                          //Filters out the students who's name has been searched
        return nameSearch;
    },
    getStudentById(id) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) { 
            return this.students.at({ id: id });
        } else {
            console.log("Student not found");
        }
    },
    //Shows all students
    getStudentList() {
        return this.students;
    }
}
