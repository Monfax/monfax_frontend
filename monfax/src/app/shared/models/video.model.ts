
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
  subject: SubjectBrief|null;
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
    title: "Introduction à Java - Les bases",
    description: "Une vidéo d'introduction pour comprendre les concepts fondamentaux du langage Java.",
    duration: 45,
    price: 0,
    subject: { id: 1, name: "Programmation Java" },
    resourceUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    size: 120,
    numberOfDownload: 35,
    numberOfView: 240,
    createdAt: "2024-06-01T10:00:00Z"
  },
  {
    id: 2,
    title: "Bases de Données - Modèle relationnel",
    description: "Cours vidéo expliquant les bases du modèle relationnel et SQL.",
    duration: 60,
    price: 250,
    subject: { id: 2, name: "Bases de Données" },
    resourceUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_2mb.mp4",
    size: 180,
    numberOfDownload: 50,
    numberOfView: 350,
    createdAt: "2024-06-10T14:30:00Z"
  },
  {
    id: 3,
    title: "Langages formels et automate fini",
    description: "Introduction aux automates finis et leur utilisation dans la compilation.",
    duration: 35,
    price: 400,
    subject: { id: 3, name: "Langage Formel et Compilation" },
    resourceUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
    size: 95,
    numberOfDownload: 22,
    numberOfView: 180,
    createdAt: "2024-07-05T09:15:00Z"
  },
  {
    id: 4,
    title: "Langage C - Les pointeurs expliqués",
    description: "Comprendre et maîtriser les pointeurs en langage C.",
    duration: 50,
    price: 200,
    subject: { id: 4, name: "Langage C" },
    resourceUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_10mb.mp4",
    size: 210,
    numberOfDownload: 40,
    numberOfView: 310,
    createdAt: "2024-08-01T16:45:00Z"
  },
  {
    id: 5,
    title: "Systèmes d'exploitation - Gestion mémoire",
    description: "Vidéo détaillant la gestion de la mémoire dans un OS moderne.",
    duration: 55,
    price: 450,
    subject: { id: 6, name: "Système d'exploitation et Réseau" },
    resourceUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_30mb.mp4",
    size: 300,
    numberOfDownload: 65,
    numberOfView: 520,
    createdAt: "2024-08-15T11:20:00Z"
  },
  {
    id: 6,
    title: "Cryptographie - Introduction au chiffrement symétrique",
    description: "Une explication simple et claire du chiffrement symétrique.",
    duration: 40,
    price: 400,
    subject: { id: 7, name: "Cryptographie" },
    resourceUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_50mb.mp4",
    size: 150,
    numberOfDownload: 30,
    numberOfView: 270,
    createdAt: "2024-09-01T08:50:00Z"
  }
];
