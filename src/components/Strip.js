import React from "react";

const Strip = (props) => {

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
        }
    }


    return (
        <div className={getClassName()} style={styles.strip}>
            {props.children}
        </div>
    )
}

export default Strip;