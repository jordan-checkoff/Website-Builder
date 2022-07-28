import React, {Children} from "react";

const Strip = (props) => {

    let children = props.children;

    const getClassName = () => {
        let className = "strip";
        if (props.center) {
            className += " center"
        }
        if (props.width === "wide") {
            className += " wide"
        }
        return className;
    }

    const styles = {
        "strip": {
            backgroundColor: props.bg ? props.bg : "transparent",
            gridTemplateColumns: `repeat(${Children.count(children)}, 1fr)`
        }
    }


    return (
        <div className={getClassName()} style={styles.strip}>
            {props.children}
        </div>
    )
}

export default Strip;