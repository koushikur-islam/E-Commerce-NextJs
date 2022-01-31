import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-fields">
      <ErrorMessage component="div" name={field.name} className="error" />
      <input placeholder={label} {...field} {...props} autoComplete="off" />
    </div>
  );
};
