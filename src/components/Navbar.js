const Navbar = (props) => {

    // const styles = {
    //     nav: {
    //         backgroundColor: props.bg
    //     }
    // }

    return (
        <nav className={"container test"}>
            <p>test</p>
            {props.children}
        </nav>
    )
}

export default Navbar;