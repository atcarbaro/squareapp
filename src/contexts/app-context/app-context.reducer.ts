import { AppAction, AppState } from './app-context.types';

export const appInitialState: Partial<AppState> = {
  square: []
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_SQUARE_STATE': {
      return { ...state, square: action.payload };
    }
    default: {
      // @ts-ignore
      throw new Error(`The ${action.type} is not allowed`);
    }
  }
};
