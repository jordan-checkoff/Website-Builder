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

    const styles = {
        "row": {
            backgroundColor: props.bg ? props.bg : "transparent"
        }
    }


    return (
        <div className={getClassName()} style={styles.row}>
            {props.children}
        </div>
    )
}

export default Strip;