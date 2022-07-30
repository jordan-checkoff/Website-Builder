import React from 'react';
import { banners } from '../UserData';

const Banner = (props) => {
    let num = props.num ? props.num : 0;
    let height = props.height ? props.height : 400;
    let top = props.top ? props.top : 'center'
    let left = props.left ? props.left : 'center'

    const styles = {
        'banner': {
            backgroundImage: `url(${banners[num]})`,
            height: height,
            paddingTop: height / 10,
            paddingBottom: height / 10,
            backgroundPosition: left + ' ' + top
        }
    }

    return (
        <div className="banner" style={styles.banner}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Banner;