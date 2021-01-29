import React from "react";
import classNames from "classnames";

interface Props {
  label: string;
  required?: boolean;
  className?: string;
  hasError?: boolean;
  fontSize?: number;
}

export const FormGroup: React.FC<Props> = ({
  label,
  children,
  required,
  className,
  hasError,
  fontSize,
}) => {
  return (
    <div className={classNames("form-group", className)}>
      <label
        style={{ fontSize: fontSize }}
        className={classNames({
          required: required,
          ["text-danger"]: hasError,
        })}
      >
        {label}
      </label>
      {children}
    </div>
  );
};
