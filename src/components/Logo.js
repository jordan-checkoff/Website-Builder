import {name, logo} from '../UserData';

const Logo = (props) => {

    return (

        <div>
            {props.logo ? <img alt="logo" src={logo} id='imglogo' /> : null}
            <p id='textlogo' className={props.logo ? "sr-only" : null}>{props.children ? props.children : name}</p>
        </div>
    )
}

export default Logo;