import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { getMenuApi } from '../../../api/menu';
import SocialLinks from '../SocialLinks';

import './MenuTop.scss';
import logo from '../../../assets/img/png/logo-white.png';


export default function MenuTop() {

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getMenuApi().then(response => {
            const arrayMenu = [];
            response.menu.forEach(item => {
                if (item.active === true) {
                    arrayMenu.push(item)
                }
            })
            setMenuData(arrayMenu)
        })
    },[])

    return (
        <Menu className='menu-top-web' mode='horizontal'>
            <Menu.Item className='menu-top-web__logo'>
                <Link to={'/'}>
                    <img src={logo} alt='logo'/>
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") > -1 ? true : false;

                if (external) {
                    return (
                        <Menu.Item key={item._id} className='menu-top-wen__item'>
                            <a href={item.url} target='_blank'>{item.title}</a>
                        </Menu.Item>
                    )
                }
                return (
                    <Menu.Item key={item._id} className='menu-top-wen__item'>
                        <Link to={item.url}>{item.title}</Link>
                    </Menu.Item>
                )
            })}

            <SocialLinks />
        </Menu>
    )
}