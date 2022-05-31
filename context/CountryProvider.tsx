import React from "react";


interface FormProps {
  children: JSX.Element;
}

export const FormContext = React.createContext<any | null>(null);

const FormContextProvider: React.FC<FormProps> = ({ children }) => {
  return (
    <FormContext.Provider value={{}}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;

