export interface Department {
  id: number;
  name: string;
  createdAt: string;
}

export const departmentMock: Department[] = [
  { id: 1, name: "Computer Science", createdAt: "2025-01-01" }
];
