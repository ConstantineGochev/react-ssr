import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {
            hasMounted: false
        }
    }
    componentDidMount () {
        this.setState({hasMounted: true})
    }
    render() {
        return (
            <div>
                <h1> TEST TITLE </h1>
                <Button>Click</Button>
               {this.state.hasMounted && <Link className="btn white-text text-darken-2" to='/boats' >Boats</Link> }
            </div>
        );
    }
}

export default {
    component: Home
}