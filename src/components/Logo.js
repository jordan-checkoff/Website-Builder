import React from 'react';

const Logo = (props) => {

    const styles = {
        logo: {
            marginBottom: props.navType === 'center' ? 30 : 0,
        }
    }

    return (
        <img alt="logo" src={props.img} className={'logo'} style={styles.logo} />
    )
}

export default Logo;