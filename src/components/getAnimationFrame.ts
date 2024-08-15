import Color from "color";
import { mod } from "../utils/mod";
import {
  ANGLE_INCREMENTS,
  BASE_CHARACTERS,
  CENTER_XS,
  CENTER_YS,
  CHARACTERS,
  RADII,
  SINE_TABLE,
} from "./constants";
import { Glyph } from "./types";

const angles = [0.0, 0.0, 0.0, 0.0];
let hueShift = 0;

export const getAnimationFrame = ({
  width,
  height,
  complexity = 4,
  zoomFactor = 0.1,
  speedFactor = 0.25,
}: {
  width: number;
  height: number;
  complexity?: number;
  zoomFactor?: number;
  speedFactor?: number;
}) => {
  const frame: Glyph[][] = Array.from({ length: height }, () =>
    Array.from({ length: width }, () => getGlyph(" "))
  );

  const sxs = [];
  const ys = [];

  for (let i = 0; i < complexity; i++) {
    sxs[i] = Math.round(Math.cos(angles[i]) * RADII[i] + CENTER_XS[i]);
    ys[i] = Math.round(Math.sin(angles[i]) * RADII[i] + CENTER_YS[i]);
  }

  for (let y = 0; y < height; y++) {
    const xs = [...sxs];
    for (let x = 0; x < width; x++) {
      let value = hueShift;
      for (let i = 0; i < complexity; i++) {
        const xi = xs[i];
        const yi = ys[i];
        const scale = i > 1 ? 0.5 : 1;
        const shift = i > 1 ? 4 : 5;
        value +=
          SINE_TABLE[
            (Math.round((xi * xi + yi * yi) * zoomFactor * scale) >> shift) &
              0xff
          ];
      }
      const index = Math.floor(mod(value, CHARACTERS.length));
      frame[y][x] = getGlyph(CHARACTERS[index]);
      for (let i = 0; i < complexity; i++) {
        xs[i] -= 1;
      }
    }
    for (let i = 0; i < complexity; i++) {
      ys[i] -= 1;
    }
  }

  const randomFactor = Math.random() * 0.5 + 0.5;

  for (let i = 0; i < complexity; i++) {
    angles[i] += ANGLE_INCREMENTS[i] * speedFactor * randomFactor;
  }
  hueShift += 2 * speedFactor * randomFactor;

  return frame;
};

const glyphColors = BASE_CHARACTERS.reduce(
  (acc, character, idx, arr) => {
    const color = Color.hsl(0, 0, 40 + ((arr.length - idx) / arr.length) * 40);
    return {
      ...acc,
      [character]: color.hex(),
    };
  },
  {} as Record<string, string>
);

const getGlyph = (character: string) => {
  return {
    character,
    style: { color: glyphColors[character] },
  };
};
