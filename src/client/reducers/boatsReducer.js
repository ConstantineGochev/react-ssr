import {BOATS_DATA} from '.././actions/types'

export default(state = [], actions) =>{
    switch(actions.type){
        case BOATS_DATA:
//console.log(actions.payload.data)
        return actions.payload.data
        default:
        return state;
    }
}

