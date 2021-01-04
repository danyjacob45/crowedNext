import { useState, useCallback } from "react";

export const useInput = (
  defaultValue: string | number = "",
  cb?: () => void
) => {
  const [value, setInputName] = useState(defaultValue + "");
  const onChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | string
        | number
        | undefined
        | null
    ) => {
      if (typeof e === "string" || typeof e === "number") {
        setInputName(e + "");
        if (cb) cb();
        return;
      }
      if (typeof e === "undefined" || e === null) {
        setInputName("");
        if (cb) cb();
        return;
      }
      if (cb) cb();
      setInputName(e.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return { value, onChange };
};
