import React from 'react';
import HeadFootMaker from '../components/HeadFootMaker';
import { Logo, Menu } from '../components';

const Header = () => {

    return (
        <HeadFootMaker navbar={true}>
            <Logo />
            <p>Thank you for using my website builder!</p>
        </HeadFootMaker>
    )
}

export default Header;