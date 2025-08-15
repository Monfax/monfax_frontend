export interface Resource {
  id: number;
  title: string;
  resourceUrl: string;
  size: number;
  numberOfDownload: number;
  numberOfView: number;
  createdAt: string;
}

// mock data
export const resourceMock: Resource[] = [
  {
    id: 1,
    title: "Sample Resource",
    resourceUrl: "/files/sample.pdf",
    size: 1024,
    numberOfDownload: 5,
    numberOfView: 20,
    createdAt: "2025-01-01"
  }
];
