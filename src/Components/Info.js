import React from 'react';
import image from '../Images/profilePic1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Info() {
    return(
        <div className='info'>
            <img className='info--image' src={image} alt='profile Pic'/>
            <h2 className='info--name'>Mohammad Waris Fayiz</h2>
            <h4 className='info--career p'>Frontend developer</h4>
            <h4 className='info--web p'>fayizooo.xyz</h4>
            <div className='info--buttons'>
                <button>
                    <a 
                    href='https://mail.google.com/mail/?view=cm&fs=1&to=mohammadwaris456@gmail.com&su=&body=&bcc='
                    >
                        <FontAwesomeIcon className='fa-lg' icon={faEnvelope} />
                    </a>
                    <span>facebook</span>
                </button>
                <button className='info--button'>
                    <a 
                    href='https://www.linkedin.com/in/mohammad-waris-fayiz-8860b11a2/'
                    >
                        <FontAwesomeIcon className='fa-lg' icon={faLinkedin} />
                    </a>
                    <span>Linkedin</span>
                </button>
            </div>
        </div>
    )
};
