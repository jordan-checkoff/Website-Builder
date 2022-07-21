const Menu = (props) => {

    return (
        <nav>
            <ul style={props.styles}>
                {props.pages.map((page) => <a key={page.name} href={page.link}><li>{page.name}</li></a>)}
            </ul>
        </nav>
    )
}

export default Menu;