export interface Correction {
  id: number;
  title: string;
  price: number;
  examId: number;
  resourceUrl: string;
  createdAt: string;
}

export const correctionMock: Correction[] = [
  {
    id: 1,
    title: "Correction - Génie Logiciel IN3",
    price: 500,
    examId: 1,
    resourceUrl: "assets/corrections/genie-logiciel.pdf",
    createdAt: "2025-01-02"
  },
  {
    id: 2,
    title: "Correction - Compilation IN3",
    price: 550,
    examId: 2,
    resourceUrl: "assets/corrections/compilation.pdf",
    createdAt: "2025-02-02"
  },
  {
    id: 3,
    title: "Correction - Algorithmique IN3",
    price: 500,
    examId: 3,
    resourceUrl: "assets/corrections/algorithmique.pdf",
    createdAt: "2025-02-05"
  },
  {
    id: 4,
    title: "Correction - Algorithmique IN3",
    price: 450,
    examId: 4,
    resourceUrl: "assets/corrections/algorithmique-2.pdf",
    createdAt: "2025-02-05"
  },
  {
    id: 5,
    title: "Correction - Langage Formel et Compilation IN3",
    price: 600,
    examId: 5,
    resourceUrl: "assets/corrections/langage-formel.pdf",
    createdAt: "2025-02-10"
  },
  {
    id: 6,
    title: "Correction - Algorithmique IN3 (2024)",
    price: 450,
    examId: 6,
    resourceUrl: "assets/corrections/algorithmique-2024.pdf",
    createdAt: "2025-02-12"
  },
  {
    id: 7,
    title: "Correction - Algorithmique IN3 (2022)",
    price: 350,
    examId: 7,
    resourceUrl: "assets/corrections/algorithmique-2022.pdf",
    createdAt: "2025-02-15"
  }
];
