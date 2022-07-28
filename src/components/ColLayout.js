import React, {Children} from "react";

const ColLayout = (props) => {

    let children = props.children;
    let bg = props.bg || [];

    const childMaker = (child, index) => {
        let color = "transparent";
        if (bg.length > index) {
            color = bg[index]
        }
        return <div style={{backgroundColor: color}}>{child}</div>;
    }

    const styles = {
        "cols": {
            // backgroundColor: props.bg ? props.bg : "transparent",
            gridTemplateColumns: `repeat(${Children.count(children)}, 1fr)`
        }
    }


    return (
        <div className="colLayout" style={styles.cols}>
            {Children.map(props.children, (child, index) => childMaker(child, index))}
        </div>
    )
}

export default ColLayout;