import React from 'react';
import { Row, Col, Card } from 'antd';
import  { CheckCircleOutlined, ClockCircleOutlined, DollarCircleOutlined, KeyOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';

import './HowMyCoursesWork.scss';


export default function HowMyCoursesWork() {
    return (
        <Row className='how-my-courses-work'>
            <Col lg={24} className='how-my-courses-work__title'>
                <h2>¿Como funcionan mis cursos?</h2>
                <h3>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                </h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
                <Row className='row-card'>
                    <Col md={8}>
                        <CardInfo icon={<ClockCircleOutlined />} title='Cursos y clases.' description='Cursos entre 10 y 30 horas este son 40 pero no pasa nada!!!!' />
                    </Col>
                    <Col md={8}>
                        <CardInfo icon={<KeyOutlined />} title='Acceso 24/7.' description='Poner lo que querais!!' />
                    </Col>
                    <Col md={8}>
                        <CardInfo icon={<MessageOutlined />} title='Apendizaje colaborativo.' description='Aprendizaje en grupo!!!!' />
                    </Col>
                </Row>
                <Row className='row-card'>
                    <Col md={8}>
                        <CardInfo icon={<UserOutlined />} title='Mejora tu perfil.' description='Mejora siempre!!!!' />
                    </Col>
                    <Col md={8}>
                        <CardInfo icon={<DollarCircleOutlined />} title='Precios económicos.' description='Precios competitivos!!' />
                    </Col>
                    <Col md={8}>
                        <CardInfo icon={<CheckCircleOutlined />} title='Certificado de finalizacion.' description='Certificado de finalizacion!!!! YaY....' />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { title, description, icon } = props;
    const { Meta } = Card;

    return (
        <Card className='how-my-courses-work__card'>
            {icon}
            <Meta  title={title} description={description} />
        </Card>
    )

}
