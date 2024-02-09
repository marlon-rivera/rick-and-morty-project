export const GET_CHARACTER = "GET_CHARACTER";
export const TOTAL_CHARACTERS = "TOTAL_CHARACTERS";
const APi_CHARACTER = "https://rickandmortyapi.com/api/character/";

export const getCharacter = (id) => async (dispatch) => {
  return await fetch(APi_CHARACTER + id)
    .then((r) => {
      dispatch(getTotalCharacters(dispatch));
      return r.json();
    })
    .then((payload) => {
      dispatch({
        type: GET_CHARACTER,
        payload: payload,
      });
    });
};

export const getTotalCharacters = () => async (dispatch) => {
  return await fetch(APi_CHARACTER)
    .then((r) => r.json())
    .then((payload) => {
      dispatch({
        type: TOTAL_CHARACTERS,
        payload: payload,
      });
    });
};
