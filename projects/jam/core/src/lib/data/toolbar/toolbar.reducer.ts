import * as ToolbarActions from './toolbar.action';
import { ToolbarActionTypes } from './toolbar.action';
import { Toolbar } from './toolbar.model';

export type Action = ToolbarActions.All;

export interface State {
  toolbarLinks: Toolbar[];
}

export const initialState: State = {
  toolbarLinks: []
};

export function toolbarReducer(
  state = initialState,
  action: ToolbarActions.All
): State {
  switch (action.type) {
    case ToolbarActionTypes.ADD_TOOLBAR: {
      state.toolbarLinks.push(action.payload);
      return Object.assign({}, state);
    }
    default: {
      return state;
    }
  }
}
