import classNames from "classnames";
import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  hasError?: boolean;
  isChecked?: boolean;
  onChange?: (e: React.ChangeEvent) => {};
  errors?: string[];
  errorMessage?: string;
  name?: string;
  useRef?: any;
  className?: string;
  wrapperClassName?: string;
  label?: string;
}

const CheckBox: React.FC<Props> = ({
  isChecked,
  errors,
  onChange,
  useRef,
  name,
  className,
  wrapperClassName,
  label,
  children,
  hasError,
  errorMessage,
}) => {
  const id = uuidv4();
  return (
    <>
      <div
        className={classNames(
          "custom-control custom-checkbox",
          wrapperClassName
        )}
      >
        <input
          className={classNames("custom-control-input", className)}
          ref={useRef}
          type="checkbox"
          name={name}
          onChange={onChange}
          checked={isChecked}
          id={id}
        />
        {children}
        {label && (
          <label
            className={classNames("custom-control-label", {
              ["text-danger"]: hasError,
            })}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {errorMessage && <span className="text-danger">{errorMessage}</span>}
        {errors && errors.map((error) => <div>{error}</div>)}
      </div>
    </>
  );
};

export { CheckBox };
