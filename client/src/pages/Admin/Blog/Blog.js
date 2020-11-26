import React, { useEffect, useState } from 'react';
import { Button, notification } from 'antd';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Modal from '../../../components/Modal';
import PostsList from '../../../components/Admin/Blog/PostList';
import Pagination from '../../../components/Pagination';
import AddEditPostForm from '../../../components/Admin/Blog/AddEditPostForm';

import './Blog.scss';
import { getPostApi } from '../../../api/post';

function Blog(props) {

    const [modalTitle, setModalTitle] = useState('');
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [posts, setPosts] = useState(null);
    const [reloadPosts, setReloadPosts] = useState(false);

    const { location, history } = props;
    const { page = 1 } = queryString.parse(location.search);
     
    
     
    useEffect(() => {
        getPostApi(9, page)
            .then(response => {
                if (response?.code !== 200) {
                    notification['warning']({message: response.message})
                } else {
                     setPosts(response.post)
                }
            })
            .catch(() => notification['error']({ message: 'Error del servidor.' }))
        setReloadPosts(false)
    }, [page, reloadPosts])

    const addPost = () => {
        setIsVisibleModal(true)
        setModalTitle('Nuevo Post')
        setModalContent(<AddEditPostForm setIsVisibleModal={setIsVisibleModal} setReloadPosts={setReloadPosts} post={null} />)
    }

    const editPost = post => {
        setIsVisibleModal(true)
        setModalTitle('Editar Post')
        setModalContent(<AddEditPostForm setIsVisibleModal={setIsVisibleModal} setReloadPosts={setReloadPosts} post={post} />)
    }
     
    if (!posts) {
        return null;
    }

    return (
        <div className='blog'>
            <div className='blog__add-post'>
                <Button type='primary' onClick={addPost}>
                    Nuevo Post
                </Button>
            </div>
            <PostsList posts={posts} setReloadPosts={setReloadPosts} editPost={editPost} />
            <Pagination posts={posts} location={location} history={history} />
            <Modal 
                title={modalTitle }
                isVisible={isVisibleModal }
                setIsVisible={setIsVisibleModal }
                width='55%'
            >
                {modalContent}
            </Modal>
        </div>
    )
}


export default withRouter(Blog)