
import { Exam } from './exam.model';
import { Video } from './video.model';
import { LectureCourse } from './lecture-course.model';
import { Payment } from './payment.model';

export interface Subject {
  id: number;
  name: string;
  price: number;
  semester_id: string;
  filiere: string;
  niveau: string;
  exams?: Exam[];
  videos?: Video[];
  lectureCourses?: LectureCourse[];
  payments?: Payment[];
}
export const subjectMock: Subject[] = [
  {
    id: 1,
    name: 'Programmation Java',
    price: 550,
    semester_id: '3',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 2'
  },
  {
    id: 2,
    name: 'Bases de Données',
    price: 250,
    semester_id: '3',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 2'
  },
  {
    id: 3,
    name: 'Langage Formel et Compilation',
    price: 400,
    semester_id: '5',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 3'
  },
  {
    id: 4,
    name: 'Langage c',
    price: 250,
    semester_id: '1',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 1'
  },  
  {
    id: 5,
    name: 'Base De Donnees',
    price: 450,
    semester_id: '6',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 3'
  },
  {
    id: 6,
    name: "Systeme d' exploitation et Reseau",
    price: 450,
    semester_id: '5',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 3'
  },
  {
    id: 7,
    name: 'Cryptographie',
    price: 400,
    semester_id: '3',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 2'
  }
];
