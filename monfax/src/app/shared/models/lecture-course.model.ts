

export interface LectureCourse {
  id: number;
  title: string;
  description: string;
  price: number;
  subject_id:string;
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
  // Licence 2 - Programmation Java (subject_id: '1')
  {
    id: 1,
    title: "Introduction à Java",
    description: "Bases du langage Java, syntaxe et premiers programmes.",
    price: 50,
    subject_id: "1",
    resourceUrl: "/courses/java-intro.pdf",
    size: 3000,
    numberOfDownload: 25,
    numberOfView: 120,
    createdAt: "2025-01-10",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 2,
    title: "Programmation Orientée Objet en Java",
    description: "Cours complet sur la POO avec Java : classes, héritage, interfaces.",
    price: 80,
    subject_id: "1",
    resourceUrl: "/courses/java-poo.pdf",
    size: 5000,
    numberOfDownload: 40,
    numberOfView: 200,
    createdAt: "2025-02-01",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 3,
    title: "Gestion des Exceptions et Fichiers en Java",
    description: "Apprendre la gestion des erreurs et la manipulation des fichiers.",
    price: 70,
    subject_id: "1",
    resourceUrl: "/courses/java-exceptions.pdf",
    size: 4500,
    numberOfDownload: 35,
    numberOfView: 150,
    createdAt: "2025-02-20",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 2 - Bases de Données (subject_id: '2')
  {
    id: 4,
    title: "Introduction aux Bases de Données",
    description: "Notions de base sur les bases de données relationnelles.",
    price: 60,
    subject_id: "2",
    resourceUrl: "/courses/db-intro.pdf",
    size: 3500,
    numberOfDownload: 20,
    numberOfView: 100,
    createdAt: "2025-01-15",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 5,
    title: "SQL Fondamentaux",
    description: "Apprentissage du langage SQL : SELECT, INSERT, UPDATE, DELETE.",
    price: 75,
    subject_id: "2",
    resourceUrl: "/courses/sql-basics.pdf",
    size: 4200,
    numberOfDownload: 30,
    numberOfView: 180,
    createdAt: "2025-02-05",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 6,
    title: "Modélisation Conceptuelle et Logique",
    description: "Conception de bases de données avec MCD et MLD.",
    price: 90,
    subject_id: "2",
    resourceUrl: "/courses/db-modelisation.pdf",
    size: 4800,
    numberOfDownload: 40,
    numberOfView: 160,
    createdAt: "2025-02-25",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 3 - Langage Formel et Compilation (subject_id: '3')
  {
    id: 7,
    title: "Théorie des Automates",
    description: "Introduction aux automates finis et grammaires formelles.",
    price: 100,
    subject_id: "3",
    resourceUrl: "/courses/automates.pdf",
    size: 6000,
    numberOfDownload: 50,
    numberOfView: 210,
    createdAt: "2025-03-01",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 8,
    title: "Analyse Syntaxique",
    description: "Méthodes descendantes et ascendantes pour la compilation.",
    price: 120,
    subject_id: "3",
    resourceUrl: "/courses/compilation-syntax.pdf",
    size: 7000,
    numberOfDownload: 45,
    numberOfView: 190,
    createdAt: "2025-03-10",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 9,
    title: "Génération de Code",
    description: "Traduction intermédiaire et optimisation de code.",
    price: 150,
    subject_id: "3",
    resourceUrl: "/courses/code-generation.pdf",
    size: 8000,
    numberOfDownload: 55,
    numberOfView: 230,
    createdAt: "2025-03-20",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 1 - Langage C (subject_id: '4')
  {
    id: 10,
    title: "Introduction au C",
    description: "Bases de la programmation en langage C.",
    price: 40,
    subject_id: "4",
    resourceUrl: "/courses/c-intro.pdf",
    size: 2500,
    numberOfDownload: 15,
    numberOfView: 90,
    createdAt: "2025-01-12",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 11,
    title: "Structures et Pointeurs",
    description: "Manipulation de structures et pointeurs en langage C.",
    price: 70,
    subject_id: "4",
    resourceUrl: "/courses/c-pointers.pdf",
    size: 4000,
    numberOfDownload: 25,
    numberOfView: 140,
    createdAt: "2025-02-15",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 12,
    title: "Gestion Mémoire en C",
    description: "Malloc, free et gestion manuelle de la mémoire.",
    price: 90,
    subject_id: "4",
    resourceUrl: "/courses/c-memory.pdf",
    size: 5000,
    numberOfDownload: 30,
    numberOfView: 160,
    createdAt: "2025-02-28",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 3 - Base de Données Avancées (subject_id: '5')
  {
    id: 13,
    title: "Bases de Données Distribuées",
    description: "Concepts de la distribution et réplication des données.",
    price: 120,
    subject_id: "5",
    resourceUrl: "/courses/db-distribuees.pdf",
    size: 7000,
    numberOfDownload: 40,
    numberOfView: 180,
    createdAt: "2025-03-05",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 14,
    title: "Optimisation de Requêtes",
    description: "Techniques avancées pour optimiser SQL.",
    price: 140,
    subject_id: "5",
    resourceUrl: "/courses/db-optimisation.pdf",
    size: 7500,
    numberOfDownload: 50,
    numberOfView: 200,
    createdAt: "2025-03-15",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 3 - Système d'exploitation et Réseau (subject_id: '6')
  {
    id: 15,
    title: "Introduction aux OS",
    description: "Gestion des processus, mémoire et systèmes de fichiers.",
    price: 100,
    subject_id: "6",
    resourceUrl: "/courses/os-intro.pdf",
    size: 6000,
    numberOfDownload: 35,
    numberOfView: 170,
    createdAt: "2025-01-20",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 16,
    title: "Réseaux Informatiques",
    description: "TCP/IP, protocoles et topologies de réseaux.",
    price: 130,
    subject_id: "6",
    resourceUrl: "/courses/networks.pdf",
    size: 6500,
    numberOfDownload: 45,
    numberOfView: 190,
    createdAt: "2025-02-18",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 17,
    title: "Sécurité des Réseaux",
    description: "Cryptographie appliquée aux réseaux et protocoles sécurisés.",
    price: 160,
    subject_id: "6",
    resourceUrl: "/courses/network-security.pdf",
    size: 8000,
    numberOfDownload: 55,
    numberOfView: 210,
    createdAt: "2025-03-22",
    thumbnailUrl: "assets/default-img-course.png"
  },

  // Licence 2 - Cryptographie (subject_id: '7')
  {
    id: 18,
    title: "Introduction à la Cryptographie",
    description: "Historique et concepts fondamentaux.",
    price: 80,
    subject_id: "7",
    resourceUrl: "/courses/crypto-intro.pdf",
    size: 4500,
    numberOfDownload: 25,
    numberOfView: 120,
    createdAt: "2025-01-25",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 19,
    title: "Chiffrement Symétrique et Asymétrique",
    description: "AES, RSA, Diffie-Hellman et signatures numériques.",
    price: 110,
    subject_id: "7",
    resourceUrl: "/courses/crypto-sym-asym.pdf",
    size: 7000,
    numberOfDownload: 40,
    numberOfView: 180,
    createdAt: "2025-02-12",
    thumbnailUrl: "assets/default-img-course.png"
  },
  {
    id: 20,
    title: "Applications de la Cryptographie",
    description: "SSL/TLS, blockchain, sécurité des communications.",
    price: 130,
    subject_id: "7",
    resourceUrl: "/courses/crypto-applications.pdf",
    size: 7500,
    numberOfDownload: 45,
    numberOfView: 200,
    createdAt: "2025-03-08",
    thumbnailUrl: "assets/default-img-course.png"
  }
];
