export interface User {
    id: number;
    username: string;
    email: string;
    numero?: string;
    dateNaissance?: string;
    filiere?: string;
    role: string;
  }
  
  export interface LoginDTO {
    email: string;
    password: string;
  }
  
  export interface RegisterDTO {
    username: string;
    email: string;
    password: string;
    filiereId?: number;
  }
  