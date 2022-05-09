import { createContext, useContext, useReducer } from 'react';
import type { FC } from 'react';
import { AppDispatch, AppProviderProps, AppState } from './app-context.types';

const AppStateContext = createContext<AppState>(undefined);

const AppDispatchContext = createContext<AppDispatch>(undefined);

export const AppProvider: FC<AppProviderProps> = ({
  reducer,
  initialState,
  children
}: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useAppState must be within AppProvider');
  }

  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error('useAppDispatch must be within AppProvider');
  }

  return context;
};
