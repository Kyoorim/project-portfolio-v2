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
  id?: string;
  postedAt?: string;
  text?: string;
};

export type ProjectDetail = {
  id: number;
  title: string;
  period: string;
  github?: string;
  storybook?: string;
  link?: string;
  stack: { idx: number; stackContent: string }[];
  content: string;
  image: {
    idx: number;
    imageContent: string | HTMLImageElement;
  }[];
};
