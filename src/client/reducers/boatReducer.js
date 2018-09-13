import {BOAT_DATA} from '.././actions/types'


export default(state = {}, actions) =>{
    switch(actions.type){
        case BOAT_DATA:
       // console.log(actions.payload.data)
       // console.log(actions.payload.data.charter.model)
       return actions.payload.data
    
        default:
        return state;
    }
}