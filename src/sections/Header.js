import React from 'react';
import HeadFootMaker from '../components/HeadFootMaker';
import { Logo } from '../components';

const Header = () => {

    return (
        <HeadFootMaker navbar={true} align={'top'}>
            <div>
                <Logo />
                <p>FITNESS FOR LIFE</p>
            </div>
            <p>Call or text me at 215.200.7907 to schedule your free consultation today!</p>
      </HeadFootMaker>
    )
}

export default Header;