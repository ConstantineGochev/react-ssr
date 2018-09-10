import React from 'react';
import {Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
               {/* <button  className="btn">
                   <a className="white-text text-darken-2" href="/boats">Boats</a>
               </button> */}
               <Link className="btn white-text text-darken-2" to='/boats' >Boats</Link>
           </div>
               );
   }
}

export default {
    component:Home
}