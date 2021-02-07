import React, { DetailedHTMLProps, FormHTMLAttributes } from 'react';

interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  netlify?: boolean;
}

const Form: React.FC<FormProps> = ({ netlify, children }) => (
  <form name="fale-comigo" {...netlify} className="grid grid-cols-1 gap-y-6">
    {children}
  </form>
);

export default Form;
