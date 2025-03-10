type Content = {
  content: string;
  width: Width;
  mobileWidth?: Width;
  tabletWidth?: Width;
  desktopWidth?: Width;
  asCard: boolean;
  border?: string;
  padding?: string;
  margin?: string;
  background?: string;
  platform?: Platform;
};

type ContentDoc = Content & RawDoc;
