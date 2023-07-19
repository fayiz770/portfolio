import { faFacebookSquare, faGithubSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
    return(
        <div className='footer'>
            <a href='https://twitter.com/mohammadwarisfayiz'>
                <FontAwesomeIcon className='fa-2x' icon={faTwitterSquare} style={{color: 'white'}}/>
            </a>
            <a href='https://facebook.com/mohammadwarisfayiz'>
                <FontAwesomeIcon className='fa-2x' icon={faFacebookSquare} style={{color: 'white'}}/>
                </a>
            <a href='https://instagram.com/mohammadwarisfayiz'>
                <FontAwesomeIcon className='fa-2x' icon={faInstagramSquare} style={{color: 'white'}}/>
                </a>
            <a href='https://github.com/fayiz770'>
                <FontAwesomeIcon className='fa-2x' icon={faGithubSquare} style={{color: 'white'}}/>
                </a>
        </div>
    )
};
