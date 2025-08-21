
import { Exam } from './exam.model';
import { Video } from './video.model';
import { LectureCourse } from './lecture-course.model';
import { Payment } from './payment.model';

export interface Subject {
  id?: number;
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
    semester_id: '1',
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
    semester_id: '2',
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
    semester_id: '3',
    exams: [],
    videos: [],
    lectureCourses: [],
    payments: [],
    filiere: 'Informatique',
    niveau: 'Licence 3'
  }
];
