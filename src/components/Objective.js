/* eslint-disable max-len */

import React from 'react'
//import {Typing} from 'react-typing-animation'
import { Card } from 'react-bootstrap'
import '../App.css';
import target from './images/target.png'




const Objective = () => {
    return (

        <div className="container vertical-center">


                <Card>
                    <Card.Body>
                        {/* <Card.Img variant="top" style={{width:'18rem', height:'18rem'}} src={target}/> */}
                        <Card.Title>
                            My Objective
                        </Card.Title>
                        <Card.Text>


                            {/* <Typing> */}
                            <p className="cd-text">

                                My education and seminars that I have attended reflect that I am a firm believer in collaboration in research and a team player. However, I can work alone when required, and can take decisions when necessary; I take ownership and responsibility for my decisions. I always try to find innovative and flexible solutions to day-to-day challenges. Based not only on my strong engineering and technical skills, but also to my organizational skills, I believe my contribution to your company's IT group would be essential and constructive. The experience I have gained from my work and also form MSC degree would allow me to contribute in transferring the outputs of my knowledge into commercial products and services.
                                
                                    </p>
                            {/* </Typing> */}

                        </Card.Text>
                     </Card.Body>
                </Card>

           
        </div>
    );
}

export default Objective