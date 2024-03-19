import { Student, students } from "../mocks/students.mock";

const getStudents = () => {
  return students;
};

const getStudent = (id: string) => {
  return students.find((student) => student.id.toString() === id);
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

const updateStudent = (id: string, body: Student) => {
  const studentToUpdate = getStudent(id);
  if (studentToUpdate) {
    studentToUpdate.name = body.name;
    studentToUpdate.firstname = body.firstname;
    studentToUpdate.age = body.age;
    return studentToUpdate;
  }
};

const deleteStudent = (id: string) => {
  const index = students.findIndex(
    (student) => student.id.toString() === id
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