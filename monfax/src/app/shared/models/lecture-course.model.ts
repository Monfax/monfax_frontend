
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
export interface LectureCourseWithThumbnail extends LectureCourse{
  thumbnailUrl:string
}
// mock data
export const lectureCourseMock: LectureCourseWithThumbnail[] = [
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
    createdAt: "2025-01-01",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 1,
    title: "Les Automates",
    description: "Cours complet sur les Automates",
    price: 100,
    subject: { id: 1, name: "Language Formelle et  Compilation" },
    resourceUrl: "/courses/intro-angular.pdf",
    size: 2048,
    numberOfDownload: 10,
    numberOfView: 100,
    createdAt: "2025-01-01",
    thumbnailUrl: "assets/default-img-course.png"
  }
];
