import { CSSProperties } from "react";

export type FrameBounds = {
  width: number;
  height: number;
}

export type Glyph = {
  character: string;
  href?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
};

export type Label = Omit<Glyph, "character"> & {label: string};

export type LabelGroup = {
  labels: Label[];
  padding?: number;
  yAlign: "top" | "center" | "bottom";
  xAlign?: "left" | "center" | "right";
}