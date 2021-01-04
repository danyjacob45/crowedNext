import { useState } from "react";

export const useErrors = <T,>(defaultValue: T) => {
  const [errors, setErrors] = useState<T>(defaultValue);
  return { errors, setErrors };
};
