import Navbar from './Navbar';
import {Children} from 'react';

const Header = (props) => {
    let children = props.children;
    let num = Children.count(children);
    let align = props.align;

    const getClass = (num, align) => {
        if (num == 1) {
            if (align == "left") {
                return 'header';
            } else if (align == "right") {
                return 'headerright';
            } else {
                return "headerleft"
            }            
        } else if (num == 2) {
            if (align == "left") {
                return 'header';
            } else if (align == "right") {
                return "headerleft";
            } else {
                return "headerright";
            }
        } else {
            return 'header';
        }
    }

    return (
        <div>
            <div className={getClass(num, align)}>
                {children}
            </div>
            {props.navbar ? <Navbar pages={props.pages} /> : null}
        </div>
    )
}

export default Header;