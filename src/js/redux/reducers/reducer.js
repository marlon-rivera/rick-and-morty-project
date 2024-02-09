import { GET_CHARACTER, TOTAL_CHARACTERS, DELETE_CHARACTER } from "../actionsCreators/actions";

const initialState = {
  character: null,
  totalCharacters: 0,
  idCharacter: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      state.character = {};
      return {
        character: action.payload,
        idCharacter: action.payload.id,
      };
    case TOTAL_CHARACTERS:
      return {
        ...state,
        totalCharacters : action.payload.info.count
      };
    case DELETE_CHARACTER:
      return{
        character : null,
        idCharacter : null
      }
    default:
      return state;
  }
}

export default rootReducer;
