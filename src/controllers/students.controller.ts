import * as StudentsService from "../services/students.service";

export const getStudents = (req: any, res: any) => {
  const students = StudentsService.getStudents();
  return res.status(200).json(students);
};

export const getStudent = (req: any, res: any) => {
  const { studentId } = req.params;
  const student = StudentsService.getStudent(studentId);
  return res.status(200).json(student);
};

export const createStudent = (req: any, res: any) => {
  const { name, firstname, age } = req.body;
  const students = StudentsService.createStudent(name, firstname, age);
  return res.status(200).json(students);
};

export const updateStudent = (req: any, res: any) => {
  const { studentId } = req.params;
  const studentUpdated = StudentsService.updateStudent(studentId, req.body);
  return res.status(200).json(studentUpdated);
};

export const deleteStudent = (req: any, res: any) => {
  const { studentId } = req.params;
  const students = StudentsService.deleteStudent(studentId);
  return res.status(200).json(students);
};