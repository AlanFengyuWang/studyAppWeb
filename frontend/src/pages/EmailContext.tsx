import React, { useContext, useState } from "react";

type SetValue = (value: string) => void;
interface AppContextInterface {
  email: string;
  setEmail: SetValue;
}

const EmailContext = React.createContext<AppContextInterface>({
  email: "",
  setEmail: () => {},
});

export const useEmailContext = () => {
  return useContext(EmailContext);
};

export const EmailProvider = (props: { children: React.ReactNode }) => {
  const [email, setEmail] = React.useState<string>("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {props.children}
    </EmailContext.Provider>
  );
};
