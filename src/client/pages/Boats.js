import React from 'react';
import {connect, dispatch} from 'react-redux';
import {fetch_boats_data} from '../actions/index';
import {Link } from 'react-router-dom'
import Charter from '../components/Charter';
import Details from '../components/Details';



class Boats extends React.Component {
    constructor(props){
        super();
    }
    componentDidMount() {
        this.props.fetch_boats_data()
    }


    render_charters = () => {
         // TODO 
         //Loading component
          if(this.props.boats === undefined) return <div>loading...</div>
          return this.props.boats.map((charter)=>{
              return (
                  <div key={charter._id}>
                     <Charter model={charter.model}/>
                     <Link className='btn white-text text-darken-2' to= {`/boats/details/${charter._id}`}>Details</Link>
                  </div>
              )
          })
      
    }
    
    render(){
        //console.log(this.props.boats)
        //console.log(AdSense)
        return (
            <div>
                <button><a href="/">Home</a></button>
                <ul>
                    {this.render_charters()}
                </ul>
            </div>
        )
    }
}


function map_state_to_props({boats}) {
    return {
        boats,
    }
}


function load_data(store){
    
    return store.dispatch(fetch_boats_data()) 
    
}


export default {
    load_data:load_data,
    component:connect(map_state_to_props,{fetch_boats_data })(Boats)
}