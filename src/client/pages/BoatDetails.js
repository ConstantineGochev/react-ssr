import React from 'react'
import {connect} from 'react-redux'
import {fetch_single_boat_data} from '../actions/index';
import Details from '../components/Details';
import {Link} from 'react-router-dom'
import Payments from '../components/StripeBilling'


/*TODO
Don`s use url for id

*/
class BoatDetails extends React.Component{
    constructor(props){
        super()
        //console.log(props.location.pathname.split("/").slice(-1)[0])
        this.url = props.location.pathname.split("/").slice(-1)[0];
        this.render_model = this.render_model.bind(this);
    }
    componentDidMount(){
        this.props.fetch_single_boat_data(this.url)

      
    }

    render_model(){
        return (
            <div> Model: {this.props.boat.model} </div>
        )
    }

    render(){
     //   console.log(this.props.boat)
        return (
            
            <div>
                <Link to='/boats'>Back</Link>
                {this.render_model()}
                <Payments />
            </div>
         
        )
    }
}
function map_state_to_props(state){
    return {
        boat: state.boat
       }
}

function loadDataWithMatch(store, match) {
    return store.dispatch(fetch_single_boat_data(match.params.id));
   }

export default {
    loadDataWithMatch:loadDataWithMatch,
    component:connect(map_state_to_props,{fetch_single_boat_data})(BoatDetails)
}