import type { Dispatch, ReactNode } from 'react';
// import { SquareState } from 'app.types';
import type { HomeData } from 'components/home-data-form';

export interface AppState {
  square?: HomeData[];
}

export type AppAction = { type: 'SET_SQUARE_STATE'; payload: HomeData[] };

export type AppDispatch = Dispatch<AppAction>;

export interface AppProviderProps {
  reducer: (state: AppState, action: AppAction) => AppState;
  initialState: Partial<AppState>;
  children: ReactNode;
}
