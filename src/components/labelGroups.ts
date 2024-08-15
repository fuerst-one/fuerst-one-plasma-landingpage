import { LabelGroup } from "./types";

export const getLabelsGroups = (
  isPlaying: boolean,
  toggleIsPlaying: () => void
): LabelGroup[] => [
  getPlayPauseLabelGroup(isPlaying, toggleIsPlaying),
  topLeftLabelGroup,
  centerLabelGroup,
  bottomLabelGroup,
];

const getPlayPauseLabelGroup = (
  isPlaying: boolean,
  onClick?: () => void
): LabelGroup => ({
  labels: [
    { label: "play/pause", onClick },
    { label: isPlaying ? "⏸" : "⏵", onClick },
  ],
  yAlign: "top",
  xAlign: "right",
  padding: 1,
});

const topLeftLabelGroup: LabelGroup = {
  labels: [
    {
      label: "code",
      href: "https://github.com/fuerst-one/fuerst-one-plasma-landingpage",
    },
  ],
  yAlign: "top",
  xAlign: "left",
};

const centerLabelGroup: LabelGroup = {
  labels: [
    {
      label: "FUERST.ONE",
      className: "font-bold",
      href: "https://portfolio.fuerst.one",
    },
  ],
  yAlign: "center",
};

const bottomLabelGroup: LabelGroup = {
  labels: [
    { label: "contact", href: "mailto:alexander@fuerst.one" },
    { label: "github", href: "https://github.com/fuerst-one" },
    { label: "imprint", href: "https://portfolio.fuerst.one/legal-notice" },
    { label: "privacy", href: "https://portfolio.fuerst.one/privacy-policy" },
  ],
  yAlign: "bottom",
};