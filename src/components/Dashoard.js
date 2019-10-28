import React from 'react'
import { Jumbotron, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Dashboard = () => {

    return (

        <div className="container vertical-center">
            <Jumbotron>
            <h1>Hello, I am Nikos Chantzopoulos and I am a developer.</h1>
                <p>
                    Programming is my passion.
                </p>
                <p>
                <Link to='/about'><a href="#">Find out more...</a></Link>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Dashboard