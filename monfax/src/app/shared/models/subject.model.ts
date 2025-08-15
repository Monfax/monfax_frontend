export interface Subject {
  id: number;
  name: string;
  price: number;
}

// mock data
export const subjectMock: Subject[] = [
  { id: 1, name: "Algorithms", price: 50 },
  { id: 2, name: "Mathematics", price: 45 }
];
