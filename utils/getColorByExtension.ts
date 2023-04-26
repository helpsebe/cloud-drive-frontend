const extColor = {
  pdf: "purpule",
  doc: "blue",
  docx: "blue",
  xls: "green",
  xlsx: "green",
  ppt: "orange",
  pptx: "orange",
  txt: "gray",
  jpg: "red",
  jpeg: "red",
  png: "red",
  gif: "red",
  zip: "yellow",
  rar: "yellow",
} as const;

export type Extension = keyof typeof extColor;
export type Color = (typeof extColor)[Extension];

export const getColorByExtension = (ext: string): Color => {
  const extention = ext.toLowerCase() as Extension;
  return extColor[extention];
};
