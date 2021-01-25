import classNames from "classnames";
import React from "react";

interface Props {
  hasError?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void)
    | undefined;
  items: { value: string | number; label: string }[];
  defaultChecked?: string | number | any;
  name?: string;
  useRef?:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | undefined;
}

export const Radios: React.FC<Props> = ({
  defaultChecked,
  items,
  onClick,
  name,
  useRef,
  hasError,
}) => {
  console.log(name, defaultChecked, items);
  return (
    <>
      {items.map((item) => (
        <div key={item.value + item.label}>
          <label style={{ color: hasError ? "#dc3545" : "" }}>
            <input
              ref={useRef}
              onClick={onClick}
              type="radio"
              name={name}
              value={item.value}
              className={classNames("mr-2", { ["is-invalid"]: hasError })}
            />
            {item.label}
          </label>
        </div>
      ))}
    </>
  );
};
