export interface ButtonProperties {
  variant?: "primary" | "pill" | "add" | "link";
  type: "submit" | "button";
  alignment?: "center-horizontally" | "vertically" | "between";
  flexflow?: "row-reverse" | "column-reverse";
  mgAmount?: "26" | "lr-26" | "lr-2rem" | "tb-1rem" | "tb-2rem";
  pdAmount?: "05rem" | "tp-15rem" | "bt-2rem" | "tb-075rem" | "lr-125rem";
  color?: "primary" | "secondary" | "black" | "success" | "warning" | "danger";
  text?: string;
  icon?: JSX.Element;
  onClick: () => void;
}