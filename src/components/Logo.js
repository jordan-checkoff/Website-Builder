import React from 'react';

const Logo = (props) => {

    return (
        <div>
            {props.img ? <img alt="logo" src={props.img} id='imglogo' /> : <p id='textlogo'>{props.children}</p>}
        </div>
    )
}

export default Logo;