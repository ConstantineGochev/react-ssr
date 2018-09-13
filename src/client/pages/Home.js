import React from 'react';
import {Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div>
               <h1> TEST TITLE </h1>
               <Button>Click</Button>
               <Link className="btn white-text text-darken-2" to='/boats' >Boats</Link>
           </div>
               );
   }
}

export default {
    component:Home
}