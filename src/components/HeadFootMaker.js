import React, {Children} from "react";
import Navbar from "./Navbar";


const HeadFootMaker = (props) => {

    let children = props.children;
    let num = Children.count(children);
    let spacing = props.spacing;
    let align = props.align;

    const getClass = (num, spacing, align) => {
        let myClass = ''
        if (num === 1) {
            if (spacing === "left") {
                myClass += 'headfootdef';
            } else if (spacing === "right") {
                myClass += 'headfootright';
            } else {
                myClass += "headfootleft"
            }            
        } else if (num === 2) {
            if (spacing === "left") {
                myClass += 'headfootdef';
            } else if (spacing === "right") {
                myClass += "headfootleft";
            } else {
                myClass += "headfootright";
            }
        } else {
            myClass += 'headfootdef';
        }
        if (align === 'top') {
            myClass += ' top'
        } else if (align === 'bottom') {
            myClass += ' bottom'
        }

        if (props.thin) {
            myClass += ' thin';
        }

        return myClass;
    }

    return (
        <div>
            <div className={getClass(num, spacing, align)}>
                {children}
            </div>
            {props.navbar ? <Navbar /> : null}
        </div>
    )
}

export default HeadFootMaker;