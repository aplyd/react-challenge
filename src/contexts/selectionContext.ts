import { createContext, useContext } from 'react';

interface SelectionContextData {
  chooseSelection: (category: string, selection: string) => void;
  userSelection: { [key: string]: string };
}

export const SelectionContext = createContext<SelectionContextData | undefined>(
  undefined
);

export function useSelectionContext(): SelectionContextData {
  const selectionContext = useContext(SelectionContext);
  if (!selectionContext) {
    throw new Error(
      'useSelectionContext must be used within the SelectionContext.Provider'
    );
  }

  return selectionContext;
}
