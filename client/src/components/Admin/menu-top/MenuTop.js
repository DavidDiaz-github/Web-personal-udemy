import React from "react";
import { Button } from "antd";
import Logo from '../../../assets/img/png/logo-white.png'
import  {MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './MenuTop.scss' 
import { logout } from '../../../api/auth';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;
    
    const logoutUser = () => {
        logout();
        window.location.reload();
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={Logo} alt="David Diaz Logo"/>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <PoweroffOutlined onClick={logoutUser}/>
                </Button>
            </div>
        </div>
    )
}

