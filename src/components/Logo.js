import {name, logo} from '../UserData';

const Logo = (props) => {

    return (

        <div>
            {logo ? <img alt="logo" src={logo} id='imglogo' /> : null}
            <p id='textlogo' className={logo ? "sr-only" : null}>{name}</p>
        </div>
    )
}

export default Logo;