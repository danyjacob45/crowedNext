import classNames from "classnames";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";

interface IOption {
  value: string;
  label: string;
}

type Props = {
  hasError: boolean;
  options: IOption[];
  label?: string;
  defaultValue?: string;
  onChange: Function;
  errorMessage?: string;
  errors?: string[];
  value?: string;
  placeholder?: string;
};

const MySelect = ({
  hasError,
  defaultValue,
  onChange,
  errorMessage,
  errors,
  options,
  placeholder,
  value,
}: Props) => {
  return (
    <>
      <div>
        <ReactSelect
          placeholder={placeholder}
          className={classNames({ "border border-danger rounded": hasError })}
          defaultValue={options.filter((i) => i.value === defaultValue)}
          value={value ? options.filter((i) => i.value === value) : undefined}
          onChange={onChange as any}
          options={options}
        />
        {errorMessage && <span className="text-danger">{errorMessage}</span>}
        {errors && errors.map((error) => <div>{error}</div>)}
      </div>
    </>
  );
};

export { MySelect };
