import { ExamType } from './exam-type.enum';

export interface Exam {
  id: number;
  title: string;
  examType: ExamType;
  year: number;
  subjectId: number;
  resourceUrl: string;
  createdAt: string;
}

export const examMock: Exam[] = [
  { id: 1, title: "Math Exam", examType: ExamType.MAIN_EXAM, year: 2025, subjectId: 1, resourceUrl: "/exams/math.pdf", createdAt: "2025-01-01" }
];
