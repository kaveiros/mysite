import React from 'react';
import { Card } from 'react-bootstrap'
import '../App.css';
import {Link} from 'react-router-dom'


const Skills = () => {

    return (
        <div className="container vertical-center">
            <Card>
                <Card.Body>
                    <Card.Title>
                       What I do
                        </Card.Title>
                    <Card.Text>
                        <p className="cd-text">
                            Throughout my career I have used many technologies and various programming languages. Although my main expertise is in backend development,
                            from time to time when needed, I also work at the front end binding functionalities and technologies together.
                        </p>
                        <p className="cd-text">
                            I focus mostly on Java, but I have programmed professionally on Python, PHP, Javascript.
                            I also have some experience on C# and C. I love analysing requirements for an application,
                            designing its various components and making architectural diagrams.
                            Software engineering is my passion.
                        </p>
                        <p className="cd-text">
                            I also like writing or consuming APIS and web services.
                            I believe that the web (cloud) is the platform to deploy applications.
                            Some frameworks/Libraries that I have used are Spring boot, Primefaces,
                            Google Web Toolkit,  Google App Engine, Apache Cordova, React, Laravel.
                        </p>
                        <p className="cd-text">
                            I prefer NOSQL databases like Google datastore, Google firestore, MongoDB, ArangoDB.
                            Oracle, Postgres, MariaDB are SQL databases that I have used.
                        </p>
                        <p>
                        <Link to='/contact'><Card.Link href="#">Contact me</Card.Link></Link>
                        </p>

                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

export default Skills