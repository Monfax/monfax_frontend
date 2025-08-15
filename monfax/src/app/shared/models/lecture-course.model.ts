export interface SubjectBrief {
  id: number;
  name: string;
}

export interface LectureCourse {
  id: number;
  title: string;
  description: string;
  price: number;
  subject: SubjectBrief;
  resourceUrl: string;
  size: number;
  numberOfDownload: number;
  numberOfView: number;
  createdAt: string;
}

// mock data
export const lectureCourseMock: LectureCourse[] = [
  {
    id: 1,
    title: "Intro to Angular",
    description: "Cours complet Angular",
    price: 20,
    subject: { id: 1, name: "Web Development" },
    resourceUrl: "/courses/intro-angular.pdf",
    size: 2048,
    numberOfDownload: 10,
    numberOfView: 100,
    createdAt: "2025-01-01"
  }
];
