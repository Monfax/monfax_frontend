import { Injectable } from '@angular/core';
import { ExamWithThumbnail } from '../models/exam.model';
import { Subject } from '../models/subject.model';
import { Semester } from '../models/semester.model';
import { Correction } from '../models/correction.model';

export interface ExamDetails {
  id: number;
  title: string;
  examType: string;
  year: number;
  resourceUrl: string;
  thumbnailUrl: string;
  createdAt: string;
  semesterName: string;
  filiere: string;
  niveau: string;
  subject_id: string | null; // Corrigé : peut être null si pas de sujet
  correction?: Correction; 
}

@Injectable({
  providedIn: 'root'
})
export class ExamTransformService {
  transformExamsToDetails(
    exams: ExamWithThumbnail[],
    subjects: Subject[],
    semesters: Semester[],
    corrections: Correction[]
  ): ExamDetails[] {
    return exams.map(exam => {
      const subject = subjects.find(s => s.id === exam.subjectId);
      const semester = subject
        ? semesters.find(se => se.id === Number(subject.semester_id))
        : null;

      const correction = corrections.find(c => c.examId === exam.id);

      return {
        id: exam.id,
        title: exam.title,
        examType: exam.examType,
        year: exam.year,
        resourceUrl: exam.resourceUrl,
        thumbnailUrl: exam.thumbnailUrl,
        createdAt: exam.createdAt,
        semesterName: semester ? semester.name : 'Semestre inconnu',
        filiere: subject ? subject.filiere : 'Filière inconnue',
        niveau: subject ? subject.niveau : 'Niveau inconnu',
        subject_id: subject ? String(subject.id) : null, 
        correction
      };
    });
  }
}
