const Menu = (props) => {

    return (
        <ul>
            {props.pages.map((page) => <a key={page.name} href={page.link}><li>{page.name}</li></a>)}
        </ul>
    )
}

export default Menu;