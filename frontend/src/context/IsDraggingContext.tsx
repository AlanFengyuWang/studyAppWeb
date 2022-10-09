import React, { Children, useContext, useState } from "react";

const IsDraggingContext = React.createContext({
  isDragging: false,
  setIsDragging: (value: boolean) => {},
});

export const useIsDraggingContext = () => {
  return useContext(IsDraggingContext);
};

export const IsDraggingContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  return (
    <IsDraggingContext.Provider value={{ isDragging, setIsDragging }}>
      {props.children}
    </IsDraggingContext.Provider>
  );
};
