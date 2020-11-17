import React from 'react';
import { Row, Col } from 'antd';
import {
    BookOutlined,
    CodeOutlined,
    DatabaseOutlined,
    RightOutlined,
    HddOutlined,
    AppstoreOutlined,
    UserOutlined

} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './NavigationFooter.scss';

export default function NavigationFooter() {
    return (
        <Row className='navigation-footer'>
            <Col>
                <h3>Navegación</h3>
            </Col>
            <Row>
                <Col md={12}><RenderListLeft /></Col>
                <Col md={12}><RenderListRight /></Col>
            </Row>
        </Row>
    )
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href='#'>
                    <BookOutlined />Cursos online
                </a>
            </li>
            <li>
                <Link to='/contact'>
                    <CodeOutlined />Desarrollo web
                </Link>
            </li>
            <li>
                <a href='#'>
                    <DatabaseOutlined />Base de datos
                </a>
            </li>
            <li>
                <a href='#'>
                    <RightOutlined />Políctica de privacidad
                </a>
            </li>
        </ul>
    )
}

function RenderListRight() {
    return (
        <ul>
            <li>
                <a href='#'>
                    <HddOutlined />Sistemas / Servidores
                </a>
            </li>
            <li>
                <Link to='/contact'>
                    <AppstoreOutlined />CMS
                </Link>
            </li>
            <li>
                <a href='#'>
                    <UserOutlined />Portfolio
                </a>
            </li>
            <li>
                <a href='#'>
                    <RightOutlined />Políctica de Cookies
                </a>
            </li>
        </ul>
    )
}
