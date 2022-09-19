export interface ButtonProperties {
  variant?: "primary" | "pill" | "pill-inactive" | "add" | "link";
  type: "submit" | "button";
  flexflow?: "row-reverse" | "column-reverse";
  text?: string;
  icon?: JSX.Element;
  id?: string;
  onClick: () => void;
}