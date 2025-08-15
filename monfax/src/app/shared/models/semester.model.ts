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
  { id: 1, name: "Semester 1", price: 500, program: programMock[0], subjects: [] }
];
