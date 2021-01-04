import React from "react";
import classNames from "classnames";

interface Props {
  hasError?: boolean;
  onkeyup?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "number";
  elType?: "input" | "textarea";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errors?: string[];
  placeholder?: string;
  name?: string;
  useRef?: React.RefObject<any> | undefined | any;
  className?: string;
  errorMessage?: string;
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  useRef,
  name,
  elType = "input",
  type = "text",
  className,
  onkeyup,
  onKeyPress,
  hasError,
  errors,
  errorMessage,
}) => {
  return (
    <>
      {elType === "input" && (
        <input
          onKeyUp={onkeyup}
          onKeyPress={onKeyPress}
          name={name}
          ref={useRef}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={classNames("form-control", className, {
            ["is-invalid"]: hasError,
          })}
        />
      )}
      {elType === "textarea" && (
        <textarea
          name={name}
          ref={useRef}
          value={value}
          onChange={onChange as any}
          placeholder={placeholder}
          className={classNames("form-control", className)}
        />
      )}
      {errorMessage && <span className="text-danger">{errorMessage}</span>}
      {errors && errors.map((error) => <div>{error}</div>)}
    </>
  );
};
