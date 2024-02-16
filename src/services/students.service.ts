import { Student, students } from "../mocks/students.mock";

const getStudents = () => {
  return students;
};

const getStudent = (studentId: string) => {
  return students.find((student) => student.id.toString() === studentId);
};

const createStudent = (name: string, firstname: string, age: number) => {
  const newStudent = {
    id: students.length + 1,
    name: name,
    firstname: firstname,
    age: age,
  };
  students.push(newStudent);
  return students;
};

const updateStudent = (studentId: string, body: Student) => {
  const studentToUpdate = getStudent(studentId);
  if (studentToUpdate) {
    studentToUpdate.name = body.name;
    studentToUpdate.firstname = body.firstname;
    studentToUpdate.age = body.age;
    return studentToUpdate;
  }
};

const deleteStudent = (studentId: string) => {
  const index = students.findIndex(
    (student) => student.id.toString() === studentId
  );
  students.splice(index, 1);
  return students;
};

export {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};