import React from 'react';
import HeadFootMaker from '../components/HeadFootMaker';
import { Strip, Image } from '../components';
import ColLayout from '../components/ColLayout';

const Footer = () => {

    return (
        <footer>
            <Strip center={true}>
                <ColLayout>
                    <Image file="https://static.wixstatic.com/media/e74aeb_f02a9a7e6b144d03b0a8574fef2bd357~mv2.png/v1/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e74aeb_f02a9a7e6b144d03b0a8574fef2bd357~mv2.png" />
                        <Image file="https://static.wixstatic.com/media/e74aeb_56feb1b5b3fc45f2ae52a1dfddd63f6c~mv2.png/v1/fill/w_143,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e74aeb_56feb1b5b3fc45f2ae52a1dfddd63f6c~mv2.png" />
                        <Image file="https://static.wixstatic.com/media/e74aeb_cb2fd205b200476e88a317e479170d82~mv2.jpg/v1/fill/w_215,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e74aeb_cb2fd205b200476e88a317e479170d82~mv2.jpg" />
                </ColLayout>
                <p>Work with a Silver Sneakers certified, ACE Certified, and AFAA-CFI Certified Personal Trainer and Group Instructor.</p>
            </Strip>
            <HeadFootMaker>
                <p>©2022 by Newtown Personal Fitness</p>
                <p>215.200.7907</p>
            </HeadFootMaker>
        </footer>
    )
}

export default Footer;