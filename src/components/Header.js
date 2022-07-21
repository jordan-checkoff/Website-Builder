import Navbar from './Navbar';
import {Children} from 'react';

const Header = (props) => {
    let children = props.children;
    let num = Children.count(children);
    let type = props.type;

    const getClass = (num, type) => {
        if (num === 1 && type === "center") {
            return 'headercen';
        } else if (num === 2 && type === "left") {
            return "headerleft";
        } else if (num === 3) {
            return "headerthree";
        } else {
            return 'headersep';
        }
    }

    return (
        <div>
            <div className={getClass(num, type)}>
                {children}
            </div>
            {props.navbar ? <Navbar pages={props.pages} /> : null}
        </div>
    )
}

export default Header;