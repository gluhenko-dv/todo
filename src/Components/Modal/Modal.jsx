import React, {useState} from 'react';
import {ModalWrap, ModalInput, ModalBtn} from '../styled';
import {useDispatch} from 'react-redux';
export const Modal = ({onClick, id, text, isCompleted}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState();

    return (
        <ModalWrap>
            <ModalInput
                placeholder="Введите текст задачи"
                onInput={(e) => setValue(e.target.value)}
                defaultValue={text && text}
                style={text && {height: '50px', padding: '14px 20px'}}
            />
            <ModalBtn onClick={onClick}>Закрыть</ModalBtn>
            <ModalBtn
                onClick={() => {
                    if (text) {
                        text = value ? value : text;
                        dispatch({
                            type: 'EDIT_TASK',
                            id,
                            text,
                            isCompleted,
                        });
                        onClick();
                    } else {
                        if (!value) return;
                        dispatch({
                            type: 'ADD_TASK',
                            id: new Date(),
                            text: value,
                            isCompleted: false,
                        });
                        onClick();
                    }
                }}
            >
                {text ? 'Сохранить' : 'Добавить'}
            </ModalBtn>
        </ModalWrap>
    );
};
