import React from 'react';
import Logo from '../../../../assets/img/png/logo-white.png';
import SocialLink from '../../SocialLinks';

import './MyInfo.scss';

export default function MyInfo() {
    return (
        <div className='my-info'>
            <img src={Logo} alt='David Diaz Logo' />
            <h4>Entra en el maravilloso mundo del desarrollo web!!!</h4>
            <SocialLink />
        </div>
    )
}
