type Justify = "start" | "end" | "center" | "between" | "around" | "evenly";
type Align = "start" | "end" | "center" | "baseline" | "stretch";

type Grid = {
  mobileColumns?: number;
  tabletColumns?: number;
  desktopColumns?: number;

  rows?: number;
  /**
   * gaps in rem
   */
  gaps?: number;
  /**
   * gaps in rem
   */
  gapsX?: number;
  /**
   * gaps in rem
   */
  gapsY?: number;

  justify: Justify;
  align: Align;

  children: ContentDoc[];

  platform?: Platform;
};

type GridDoc = Grid & RawDoc;
