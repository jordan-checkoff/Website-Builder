import React from 'react';
import { Logo, HeadFootMaker } from '../myComponents';

const Header = () => {

    return (
        <HeadFootMaker navbar={true}>
            <Logo />
            <p>Thank you for using my website builder!</p>
        </HeadFootMaker>
    )
}

export default Header;