import { createContext, Dispatch, Reducer } from 'react';

interface State {
  columns: Array<{ key: string; title: string }>;
  filterDataSource: [];
  hides: string[];
}

interface Action {
  type: 'init-column' | 'add-hide-keys' | 'set-data-source';
  payload?: any;
}

export const initialState: State = {
  columns: [],
  filterDataSource: [],
  hides: [],
};

export const Context = createContext<{ state: State; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'init-column':
      const { columns, hides } = action.payload;
      return { ...state, columns, hides };
    case 'set-data-source':
      return { ...state, filterDataSource: action.payload };
    case 'add-hide-keys':
      return { ...state, hides: action.payload };
    default:
      return state;
  }
};
