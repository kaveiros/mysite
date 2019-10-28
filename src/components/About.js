import React from 'react'
import { Card } from 'react-bootstrap'
import '../App.css';
import {Link} from 'react-router-dom'





const About = () => {
    return (

        <div className="container vertical-center">


                <Card>
                    <Card.Body>
                        <Card.Title>
                            Some words about me
                        </Card.Title>
                        <Card.Text>


                            {/* <Typing> */}
                            <p className="cd-text">

                                As a person, I am a firm believer in collaboration in research and a team player. 
                                However, I can work alone when required, and can take decisions when necessary; 
                                I take ownership and responsibility for my decisions. 
                                I always try to find innovative and flexible solutions to day-to-day challenges. 
                                Based not only on my strong engineering and technical skills, 
                                but also to my organizational skills, I believe my contribution to any project would be
                                essential and constructive. The experience I have gained from my work and also form MSC 
                                degree would allow me to contribute in transferring the outputs of my knowledge into 
                                commercial products and services.
                                
                                    </p>
                                    <p>
                                    <Link to='/skills'><a href="#">Here is what I do...</a></Link>
                                    </p>
                        </Card.Text>
                     </Card.Body>
                </Card>

           
        </div>
    );
}

export default About