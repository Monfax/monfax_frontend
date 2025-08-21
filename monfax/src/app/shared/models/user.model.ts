export interface User {
  id: number;
  username: string;
  email: string;
  numero: string;
  filiere: string;
  role: string;
  createdAt: string;
  lastLogin: string;
}

// mock data
export const userMock: User[] = [
  {
    id: 1,
    username: "John Doe",
    email: "john@example.com",
    numero: "+237650000000",
    filiere: "Computer Science",
    role: "STUDENT",
    createdAt: "2025-01-01",
    lastLogin: "2025-08-10"
  }
];
