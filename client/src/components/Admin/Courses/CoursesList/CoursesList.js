import React, { useState, useEffect } from 'react';
import { List, Button, notification, Modal as ModalAntd } from 'antd';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';
import Modal from '../../../Modal';
import { getAccessTokenApi } from '../../../../api/auth';
import { deleteCourseApi, getCourseDataUdemyApi } from '../../../../api/courses';
import AddEditCourseForm from '../AddEditCourseForm';

import './CoursesList.scss';

const { confirm } = ModalAntd;


export default function CoursesList(props) {

    const { courses, setReloadCourse } = props;
    const [listCourses, setListCourses] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const listCoursesArray = [];
        courses.forEach(course => {
            listCoursesArray.push({
                content: (
                    <Course 
                        course={course}
                        deleteCourse={deleteCourse}
                    />
                )
            })
        })
        setListCourses(listCoursesArray)
    }, [courses])

    const onSort = (sortedList, dropEvent) => {
        console.log(sortedList);
    }

    const deleteCourse = course => {
        const accessToken = getAccessTokenApi()

        confirm({
            title: "Eliminar curso.",
            content: `¿Estas seguro de eliminar el curso ${course.idCourse}?`,
            okText: 'Eliminar',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk() {
                deleteCourseApi(accessToken, course._id)
                    .then(response => {
                        const typeNotification = response.code === 200 ? 'success' : 'warning';
                        notification[typeNotification]({ message: response.message })
                        setReloadCourse(true)
                    })
                    .catch(() => {
                        notification['error']({message: 'Error del servidor, intentelo más tarde.'})
                    })
            }
        })

    }

    const addCourseModal = () => {
        setIsVisibleModal(true)
        setModalTitle('Creando nuevo curso.')
        setModalContent(
            <AddEditCourseForm 
                setIsVisibleModal={setIsVisibleModal}
                setReloadCourse={setReloadCourse}
            />
        )
    }

    return (
        <div className='courses-list'>
            <div className='courses-list__header'>
                <Button type='primary' onClick={addCourseModal}>
                    Nuevo curso
                </Button>
            </div>  
            <div className='courses-list__items'>
                {listCourses.length === 0 && (
                    <h2 style={{textAlign:"center", "margin":0}}>No tienes cursos creados</h2>
                )}
                <DragSortableList items={listCourses} onSort={onSort} type="vertical" />
            </div>
            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            >
                {modalContent}
            </Modal>
        </div>
    )
}


function Course(props) {
    const { course, deleteCourse } = props;
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        getCourseDataUdemyApi(course.idCourse).then(response => {
            if (response.code !== 200) {
                notification['warning']({message: `El curso con el id ${course.idCourse} no se ha encontrado.`})
            }
            setCourseData(response.data)
        })
    }, [course])

    if (!courseData) {
        return null
    }

    return (
        <List.Item
            actions={[
                <Button type='primary' onClick={() => console.log('Editar curso.')}><EditOutlined /></Button>,
                <Button type='danger' onClick={() => deleteCourse(course)}><DeleteOutlined /></Button>               
            ]}
        >
            <img src={courseData.image_480x270} alt={courseData.title} style={{ width: "100px", marginRight: "20px" }} />
            <List.Item.Meta 
                title={`${courseData.title} | ID: ${course.idCourse}`}
                description={courseData.headline}
            />

        </List.Item>
    )
}