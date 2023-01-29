export type AnswerType = {
  id: number;
  title?: string;
  intro?: string;
  name1?: string;
  content1?: string;
  name2?: string;
  content2?: string;
  name3?: string;
  content3?: string;
};

export type UserObj = {
  displayName: string;
  uid: string;
};

export type List = {
  attachmentUrl?: string | undefined;
  author?: string;
  createdAt?: number;
  creatorId?: string;
  id: string;
  postedAt?: string;
  text?: string;
};

export type ProjectDetail = {
  id: number;
  title: string;
  stack: string;
  content: string;
  image: {
    id: number;
    image: string | HTMLImageElement;
  }[];
};
