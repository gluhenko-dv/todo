import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from '../Modal/Modal';
import {Title, ItemStyled, AddBtn, EditBtn} from '../styled';
import {Item} from '../Item/Item';
import {EditItem} from '../Item/editItem';
export const ToDo = () => {
    const todoList = useSelector((state) => state.tasks);
    const [addModal, setAddModal] = useState(false);
    const [type, setType] = useState(true);

    const toggleModal = () => {
        setAddModal(!addModal);
    };

    useEffect(() => {
        if (!todoList.length) setType(true);
    }, [todoList.length]);

    return (
        <>
            <Title>Сегодня</Title>

            {todoList.length ? (
                <>
                    <EditBtn onClick={() => setType(!type)}>{type ? `Править` : `Отмена`}</EditBtn>
                    <div className="items-wrap">
                        {todoList.map((item) => (type ? <Item {...item} key={item.id} /> : <EditItem {...item} key={item.id} />))}
                    </div>
                </>
            ) : (
                <ItemStyled>Список задач пуст</ItemStyled>
            )}

            {type && <AddBtn onClick={toggleModal} />}
            {addModal && <Modal onClick={toggleModal} />}
        </>
    );
};
