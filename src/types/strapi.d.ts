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
  platform?: Platform | Platform[];
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

const Width =
  "w-full" |
  "w-1/2" |
  "w-2/5" |
  "w-3/5" |
  "w-1/3" |
  "w-2/3" |
  "w-1/4" |
  "w-3/4" |
  "w-1/5" |
  "w-4/5" |
  "w-1/6" |
  "w-5/6";

type PlatformNames =
  | "transient"
  | "wic1w"
  | "ssi1w"
  | "medicaid1w"
  | "medical1w"
  | "calfresh1w"
  | "snap1w"
  | "ebt1w"
  | "california"
  | "main"
  | "main1w"
  | "byop1w"
  | "sim1w"
  | "tribal"
  | "getlifeline"
  | "gov1w"
  | "excstep"
  | "excstp"
  | "hispanic1w"
  | "infinitiex";

type Platform = {
  name: PlatformNames;
};
