import axios from 'axios';
import {BOATS_DATA, BOAT_DATA} from './types'


export const fetch_boats_data = () => async dispatch => {

    const res = await axios.get('/api/boats');
   // console.log(res)

//localStorage.setItem('secret','hihi')
    dispatch({
        type: BOATS_DATA,
        payload: res
    })
}




export const fetch_single_boat_data = (id) => async dispatch => {
  //custom async action
    // return async dispatch => {
    //   function onSuccess(success) {
    //     dispatch({ type: 'DETAILS', payload: success });
    //     return success;
    //   }
    //   function onError(error) {
    //     dispatch({ type: 'ERROR_GENERATED', error });
    //     return error;
    //   }
    //   try {
    //  const success = await axios.get(`https://shielded-springs-23426.herokuapp.com/charters/${id}`)
    //       return onSuccess(success);
    //     } catch (error) {
    //       return onError(error);
    //     }
    //   }
        const data = await axios.get(`/api/boats/${id}`)
        dispatch({
          type: BOAT_DATA,
          payload: data
        })
  }