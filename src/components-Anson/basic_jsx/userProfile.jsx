import PropTypes from 'prop-types';
import React from 'react';

export default function UserProfile (props){
    console.log(props);-
    props.callme()
    return(
        <React.Fragment>
            <h1>Profile</h1>
            <br />
            <b>age : { props.age}</b>
            <br />
            <span>email: arunava{props.company}@gmail.com</span>
            <br />
            <span>08arunava07@gmail.com</span>
            <br />
            
            <ul>
                <li>chai</li>
                <li>coffee</li>
                <li>sutta</li>
                <li>bar</li>
            </ul>
        </React.Fragment>
    );
}

UserProfile.propTypes = {
    age :PropTypes.number.isRequired,
    company:PropTypes.string,
    callme : PropTypes.func
}
    