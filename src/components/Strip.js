import React from "react";

const Strip = (props) => {

    const getClassName = () => {
        let className = "strip";
        if (props.center) {
            className += " center"
        }
        if (props.thin) {
            className += " thin"
        }
        return className;
    }


    return (
        <div className={getClassName()}>
            {props.children}
        </div>
    )
}

export default Strip;