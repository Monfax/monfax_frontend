import { Program, programMock } from "./program.model";
import { Subject } from "./subject.model";

export interface Semester {
  id: number;
  name: string;
  price: number;
  program: Program;
  subjects: Subject[];
}

export const semesterMock: Semester[] = [
  { id: 1, name: "Semestre 1", price: 500, program: programMock[0], subjects: [] },
  { id: 2, name: "Semestre 2", price: 700, program: programMock[0], subjects: [] },
  { id: 3, name: "Semestre 3", price: 400, program: programMock[0], subjects: [] },
  { id: 4, name: "Semestre 4", price: 550, program: programMock[0], subjects: [] },
  { id: 5, name: "Semestre 5", price: 600, program: programMock[0], subjects: [] },
  { id: 6, name: "Semestre 6", price: 450, program: programMock[0], subjects: [] }
];
