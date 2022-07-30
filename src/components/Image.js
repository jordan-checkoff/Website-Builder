import React from "react";

const Image = (props) => {
    let size = props.size;

    const getSize = () => {
        if (size === 'icon') {
            return 50;
        } else {
            return 'auto';
        }
    }

    const styles = {
        'image': {
            width: getSize(),
            maxWidth: '100%'
        }
    }

    return (
        <img src={props.file} style={styles.image} alt={"alt text"} />
    )
}

export default Image;