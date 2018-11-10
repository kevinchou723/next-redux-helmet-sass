import {
  SET_EXAMPLE_TEXT
} from '../action-types/example-action-types'

const initialState = {
  text: 'I am initial example text'
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_EXAMPLE_TEXT:
      return {
        ...state,
        ...payload,
      };
    default: {
      return state;
    }
  }
}
