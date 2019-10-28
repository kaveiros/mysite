import React from 'react'
import '../App.css';
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {

  return (
    <div className="container vertical-center">
      <Card>        
        <Card.Title>
          Get in touch
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <p className="cd-text">
              I am currently Athens based, Greece.
            </p>
            <p className="cd-text">
              If you like to get in touch, I would love to be hearing from you. So please do
            <Card.Link href="mailto:contact@nikthedev.com"> email me. </Card.Link>
              Or if you prefer, you can PM me on the following :
          </p>

            <Card.Link href="https://github.com/kaveiros?tab=repositories"><FontAwesomeIcon icon={faGithub} size='4x' /></Card.Link>
            <Card.Link href="https://linkedin.com/in/nikolaos-chantzopoulos-5093a63a">
              <FontAwesomeIcon icon={faLinkedin} size='4x' /></Card.Link>

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );

}

export default Contact