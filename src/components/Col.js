import React from "react";

const Col = (props) => {

    const styles = {
        "col": {
            backgroundColor: props.bg ? props.bg : "transparent"
        }
    }

    return (
        <div style={styles.col} className="col">
            {props.children}
        </div>
    )
}

export default Col;