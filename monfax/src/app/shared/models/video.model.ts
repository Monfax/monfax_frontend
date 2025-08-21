import { Resource } from "./resource.model";
import { Subject, subjectMock } from "./subject.model";
import { Payment } from "./payment.model";

export interface SubjectBrief {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  duration: number;
  price: number;
  subject: SubjectBrief;
  resourceUrl: string;
  size: number;
  numberOfDownload: number;
  numberOfView: number;
  createdAt: string;
}

// mock data
export const videoMock: Video[] = [
  {
    id: 1,
    title: "Intro to Algorithms",
    description: "Cours video sur les algorithmes",
    duration: 120,
    price: 15,
    subject: { id: 1, name: "Algorithms" },
    resourceUrl: "/videos/intro-algorithms.mp4",
    size: 50000,
    numberOfDownload: 2,
    numberOfView: 100,
    createdAt: "2025-01-15"
  }
];
