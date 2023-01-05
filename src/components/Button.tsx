import { Icon } from "./Icon";

import { ButtonHTMLAttributes, memo } from "react";
import "../styles/button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
}

function ButtonComponent({ iconName, title, selected, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={selected ? "selected" : undefined}
      {...props}
    >
      <Icon name={iconName} color={selected ? "#FAE800" : "#FBFBFB"} />
      {title}
    </button>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return prevProps.selected === nextProps.selected;
});