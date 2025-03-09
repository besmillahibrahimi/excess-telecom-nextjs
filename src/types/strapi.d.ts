type RawDoc = {
  id: string;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isDefault: true;
};

type RawDocWithLocale = RawDoc & {
  locale: string;
};

type Block = RawDoc & {
  __component: string;
};

type MediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type Media = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: MediaFormat;
    small?: MediaFormat;
    medium?: MediaFormat;
    large?: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
};

type DynamicZone = {
  layouts: Block[];
};

type Locale = RawDoc & {
  name: string;
  code: string;
};
