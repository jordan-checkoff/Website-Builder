import React from 'react';
import {Children} from 'react';

const Footer = (props) => {
    let children = props.children;
    let num = Children.count(children);
    let spacing = props.spacing;
    let align = props.align;

    const getClass = (num, spacing, align) => {
        let myClass = ''
        if (num === 1) {
            if (spacing === "left") {
                myClass += 'headerdef';
            } else if (spacing === "right") {
                myClass += 'headerright';
            } else {
                myClass += "headerleft"
            }            
        } else if (num === 2) {
            if (spacing === "left") {
                myClass += 'headerdef';
            } else if (spacing === "right") {
                myClass += "headerleft";
            } else {
                myClass += "headerright";
            }
        } else {
            myClass += 'headerdef';
        }
        if (align === 'top') {
            myClass += ' top'
        } else if (align === 'bottom') {
            myClass += ' bottom'
        }

        myClass += props.thin ? ' thin' : null;

        return myClass;
    }

    return (
        <footer>
            <div className={getClass(num, spacing, align)}>
                {children}
            </div>
        </footer>
    )
}

export default Footer;