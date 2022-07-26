import React, { Children } from "react";

const Row = (props) => {
    let children = props.children;

    const styles = {
        "row": {
            gridTemplateColumns: `repeat(${Children.count(children)}, 1fr)`,
        }
    }

    return (
        <div className="row" style={styles.row}>
            {props.children}
        </div>
    )
}

export default Row;