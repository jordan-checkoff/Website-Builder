const Navbar = (props) => {

    const styles = {
        nav: {
            justifyContent: (props.spread === 'separate') ? 'space-between'
                            : (props.spread === 'left') ? 'flex-start'
                            : (props.spread === 'center') ? 'space-around' : 'space-between',
            flexDirecton: "row",
        }
    }

    return (
        <nav style={styles.nav} className={props.spread === 'center' ? "row" : '' }>
            <p>
                <span className={props.logo ? 'sr-only' : ''}>{props.name}</span>
                {props.logo ? <img src={props.logo} /> : ''}
            </p>
            <ul>
                {props.links.map((page) => <a href={page.link}><li>{page.name}</li></a>)}
            </ul>
        </nav>
    )
}

export default Navbar;