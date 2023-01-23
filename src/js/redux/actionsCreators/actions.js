export const GET_CHARACTER = "GET_CHARACTER";
export const NEXT_CHARACTER = "NEXT_CHARACTER";
export const PREV_CHARACTER = "PREV_CHARACTER";
const APi_CHARACTER = "https://rickandmortyapi.com/api/character/";

export const getCharacter = (id) => (dispatch) =>{
  console.log(id)
  return fetch(APi_CHARACTER + id)
    .then((r) => r.json())
    .then(payload =>  {
      dispatch({
        type : GET_CHARACTER,
        payload : payload
      })
    });
};

// export const getHouse = (id) => (dispatch) => {
//   return fetch(`http://localhost:3001/houses/${id}`)
//     .then((r) => r.json())
//     .then((payload) =>
//       dispatch({
//         type: GET_HOUSE,
//         'payload': payload,
//       })
//     );
// };
