import React from 'react';

const Navbar = (props) => {

    const styles = {
        nav: {
            justifyContent: (props.spread === 'separate') ? 'space-between'
                            : (props.spread === 'left') ? 'flex-start'
                            : (props.spread === 'center') ? 'space-around' : 'space-between',
        }
    }

    return (
        <nav style={styles.nav} className={props.spread === 'center' ? "row" : null }>
            {React.Children.map(props.children, (child) => {
                return React.cloneElement(child, {navType: props.spread});
            }
          )}
        </nav>
    )
}

export default Navbar;