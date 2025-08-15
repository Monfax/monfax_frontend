export interface DepartmentBrief {
  id: number;
  name: string;
}

export interface Program {
  id: number;
  name: string;
  department: DepartmentBrief;
  createdAt: string;
}

// mock data
export const programMock: Program[] = [
  { id: 1, name: "Computer Science", department: { id: 1, name: "Engineering" }, createdAt: "2025-01-01" }
];
