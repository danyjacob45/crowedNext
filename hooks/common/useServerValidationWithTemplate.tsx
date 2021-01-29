import { useState } from "react";
import Alert from "react-bootstrap/Alert";

export const useServerValidationWithTemplate = () => {
  const [serverValidationErrors, setServerValidationErrors] = useState<{
    msg?: string;
    errors?: { [k: string]: string[] };
  } | null>();

  const serverValidationResponseAlertTemplate: JSX.Element | null = serverValidationErrors ? (
    <Alert variant="danger">
      {serverValidationErrors?.msg}
      <br />
      {serverValidationErrors?.errors &&
        Object.keys(serverValidationErrors.errors).map((key) => (
          <p key={key}>
            {" "}
            {serverValidationErrors?.errors &&
              serverValidationErrors?.errors[key]}{" "}
          </p>
        ))}
    </Alert>
  ) : null;

  return {
    serverValidationErrors,
    setServerValidationErrors,
    serverValidationResponseAlertTemplate,
  };
};
