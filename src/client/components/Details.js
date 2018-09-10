import React from 'react';
import {connect} from 'react-redux'

// import {connect} from 'react-redux';
// import {fetch_single} from '../actions/index';


// class Details extends React.Component{
//     constructor(props){
//          super();
//         // this.state = {
//         //     id: ''
//         // }
//         // console.log(props.location.pathname.split("/").slice(-1)[0])
//        // this.url = props.location.pathname.split("/").slice(-1)[0];
      
//     }
//     componentDidMount(){
//         ///console.log(props.location.pathname.split("/").slice(-1)[0])
        
//        // console.log(this.props.location)
//        // this.get_id(this.url)
//          //this.props.fetch_single(props.location.pathname.split("/").slice(-1)[0])
//     }
//     // get_id(id){
//     //     this.setState({
//     //         id:id
//     //     })
//     // }
//     // load_data(store){
//     //         return store.dispatch(fetch_single(this.state.id)) 
//     //     }
//         render_details(){
//             // if(this.props.charter === undefined) return
//             // if(this.props.charter.charter === undefined) return
//          //  console.log(this.props)
//         }
        
//         render(){
            
//            // console.log(this.state.id)
//         return (
//                 <div>
//                    {this.props.model}
             
//                 </div>
//                )

//       }
// }

// function map_state_to_props(state){
//     return {charter: state.charter}
// }


// function load_data(store){
//     return store.dispatch(fetch_single(props.location.pathname.split("/").slice(-1)[0])) 
// }
// export default {
//     //load_data:load_data,
//     component:Details//connect(map_state_to_props,{fetch_single})(Details)
// }

export default (props)=> {
    return (
        <div>
            <div>{props.model}</div>   
        </div>
    )
}

// class Details extends React.Component{
//     constructor(props){
//         super()
//     }
//     render_charter(){
//        console.log(this.props.charter) 
//     }
//     render(){
//          return (
//              <div>{this.render_charter()}</div>
//          )
//     }
// }
// function map_state_to_props(state){
//     return {charter: state.charter,
//            }
// }

// export default {
//         component:connect(map_state_to_props)(Details)
//     }