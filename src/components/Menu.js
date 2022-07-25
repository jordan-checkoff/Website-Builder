import {pages} from '../UserData';

const Menu = (props) => {

    return (
        <nav>
            <ul>
                {pages.map((page) => <a key={page.name} href={page.link}><li>{page.name}</li></a>)}
            </ul>
        </nav>
    )
}

export default Menu;