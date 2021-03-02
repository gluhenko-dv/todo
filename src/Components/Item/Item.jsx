import {useDispatch} from 'react-redux';
import React, {useCallback} from 'react';
export const Item = ({id, text, isCompleted}) => {
    const dispatch = useDispatch();
    const completeTask = useCallback(() => {
        dispatch({type: 'COMPLETE_TASK', id: id});
    }, [dispatch, id]);

    return (
        <div className={isCompleted ? `item item-completed` : `item`}>
            <input
                onClick={completeTask}
                className="custom-checkbox"
                type="checkbox"
                id={`item-${id}`}
                name={`item-${id}`}
                value={text}
                defaultChecked={isCompleted}
            />
            <label htmlFor={`item-${id}`}></label>
            <span className="item-text">{text}</span>
        </div>
    );
};
