module.exports = {
    students: [],
    registerStudent(newID, newName, course) {
        this.students.push({ id: newID, name: newName, course: course });
        console.log("Student admitted");
    },
    removeStudent(id) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            this.students = this.students.filter(stud => stud.id !== id);
            console.log("Student successfully removed");
        } else {
            console.log("Student does not exist");
        }
    },
    editStudentName(id, newName) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            this.students[index].name = newName;
        } else {
            console.log("Student not found");
        }
    },
    transferStudent(id, newCourse) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            this.students[index].course = newCourse;
        } else {
            console.log("Student not found");
        }
    },
    getStudentName(id) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            return this.students[index].name;
        } else {
            console.log("Student not found");
        }
    },
    getStudentCourse(id) {
        let index = this.students.findIndex(stud => stud.id == id);
        if (index !== -1) {
            return this.students[index].course;
        } else {
            console.log("Student not found");
        }
    },
    getStudentsByCourse(course) {
        let courseSearch = this.students.filter(stud => stud.course === course);
        return courseSearch;
    },
    getStudentByName(name) {
        let nameSearch = this.students.filter(stud => stud.name === name);
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
    getStudentList() {
        return this.students;
    }
}
