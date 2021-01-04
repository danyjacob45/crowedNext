import React from "react";
import classNames from "classnames";
import { AddSvg } from "../svges/add-svg";

type Props = {
  variation?: "main" | "secondary" | "danger";
  type?: "button";
  children: React.ReactNode;
  main?: boolean;
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

const Button: React.FC<Props> = ({
  icon,
  onClick,
  children,
  main = true,
  className,
  type,
  variation,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "add":
        return <AddSvg />;
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "bt py-2",
        {
          ["bt-main"]: main,
          [`bt-${variation}`]: variation,
        },
        className
      )}
    >
      {renderIcon()}
      {children}
    </button>
  );
};

export { Button };
