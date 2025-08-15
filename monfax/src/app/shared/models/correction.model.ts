export interface Correction {
  id: number;
  title: string;
  price: number;
  examId: number;
  resourceUrl: string;
  createdAt: string;
}

export const correctionMock: Correction[] = [
  { id: 1, title: "Math Exam Correction", price: 5, examId: 1, resourceUrl: "/corrections/math.pdf", createdAt: "2025-01-01" }
];
