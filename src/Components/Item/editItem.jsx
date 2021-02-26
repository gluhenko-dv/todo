import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {DeleteBtn} from '../styled';
import {Modal} from '../Modal/Modal';
export const EditItem = (item) => {
    const dispatch = useDispatch();
    const [addModal, setAddModal] = useState(false);
    const toggleModal = () => {
        setAddModal(!addModal);
    };
    return (
        <div className={item.isCompleted ? `item item-completed` : `item`}>
            <DeleteBtn onClick={() => dispatch({type: 'REMOVE_TASK', id: item.id})} />
            <span onClick={toggleModal} className="item-text">
                {item.text}
            </span>
            {addModal && <Modal onClick={toggleModal} {...item} />}
        </div>
    );
};
