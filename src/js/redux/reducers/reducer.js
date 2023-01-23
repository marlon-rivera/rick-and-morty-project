import {GET_CHARACTER} from "../actionsCreators/actions";

const initialState = {
    character : {},
    idCharacter : 0
};

function rootReducer(state = initialState, action){
    switch (action.type) {
        case GET_CHARACTER:
            state.character = {};
            return{
                character : action.payload,
                idCharacter : action.payload.id
            }
        case 'RESET':
            return{
                character : {},
                idCharacter : 0
            }
        default:
            return state;
    }
}

export default rootReducer;