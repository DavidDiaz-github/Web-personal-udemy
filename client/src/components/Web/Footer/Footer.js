import React from 'react';
import { Layout, Row, Col } from 'antd';
import MyInfo from './MyInfo';
import NavigationFooter from './NavigationFooter';
import NewsLetter from './NewsLetter';

import './Footer.scss';

export default function Footer() {
    const { Footer } = Layout;

    return (
        <Footer className='footer'>
            <Row>
                <Col md={4} />
                <Col md={16}>
                    <Row>
                        <Col md={8}>
                            <MyInfo />
                        </Col>
                        <Col md={8}>
                            <NavigationFooter />
                        </Col>
                        <Col md={8}><NewsLetter /></Col>
                    </Row>
                    <Row className='footer__copyright'>
                        <Col md={12}>&copy; 2020 Todos los derechos reservados.</Col>
                        <Col md={12}>David Díaz Fueyo | Desarrollador Web.</Col>
                    </Row>
                </Col>
                <Col md={4} />
            </Row>
        </Footer>
    )
}
