// src/app/shared/models/exam.model.ts

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

export interface ExamWithThumbnail extends Exam {
  thumbnailUrl: string;
}

export const examMock: ExamWithThumbnail[] = [
  {
    id: 1,
    title: 'Epreuve de Genie Logiciel IN3',
    examType: ExamType.MAIN_EXAM,
    year: 2025,
    subjectId: 1,
    resourceUrl: 'assets/math-exam.pdf',
    createdAt: '2025-01-01',
    thumbnailUrl: 'assets/default-pdf.png'
  },
  {
    id: 2,
    title: "Epreuve de Compilation IN3",
    examType: ExamType.MAIN_EXAM,
    year: 2025,
    subjectId: 2,
    resourceUrl: 'assets/physics-exam.pdf',
    createdAt: '2025-02-01',
    thumbnailUrl:'assets/default-pdf.png'

  },
  {
    id: 3,
    title: "Epreuve d'Algogrithmique IN3",
    examType: ExamType.MAIN_EXAM,
    year: 2025,
    subjectId: 3,
    resourceUrl: 'assets/physics-exam.pdf',
    createdAt: '2025-02-01',
    thumbnailUrl:'assets/default-pdf.png'

  }
];