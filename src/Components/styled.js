import styled from 'styled-components';

export const ListStyled = styled.div`
    width: 295px;
    margin: 59px 0 0 40px;
`;

export const ItemStyled = styled.h2`
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.01em;
    margin: 40px 0 0 40px;
`;

export const AddBtn = styled.button`
    background: transparent;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
    background-image: url('../Assets/Image/plus.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    &:focus {
        outline: none;
    }
`;
export const ModalWrap = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    border-radius: 40px 40px 0px 0px;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    height: 85%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    padding: 40px 40px 0 40px;
`;

export const ModalInput = styled.textarea`
    width: 100%;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 10px;
    height: 160px;
    font-family: Gilroy;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.01em;
    resize: none;
    &:focus {
        outline: none;
    }
`;

export const ModalBtn = styled.button`
    background: #f2f2f2;
    border: none;
    border-radius: 10px;
    padding: 9px 0;
    text-align: center;
    font-family: Gilroy;
    font-weight: 200;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.01em;
    margin-top: 31px;
    width: 47%;
    cursor: pointer;
    &:nth-child(3) {
        background: #23a3ff;
        color: #fff;
        margin-left: 6%;
    }
    &:focus {
        outline: none;
    }
`;
export const Title = styled.h1`
    font-family: Gilroy;
    font-weight: 800;
    font-size: 28px;
    line-height: 41px;
    letter-spacing: 0.01em;
    margin: 60px 0 0 40px;
`;

export const DeleteBtn = styled.button`
    border: none;
    width: 22px;
    height: 22px;
    background-image: url('../Assets/Image/delete.svg');
    background-position: center;
    background-size: cover;
`;
export const EditBtn = styled.button`
    border: none;
    width: 86px;
    height: 27px;
    text-align: center;
    cursor: pointer;
    position: fixed;
    right: 40px;
    top: 67px;
    background: #f2f2f2;
    border-radius: 4px;
    font-family: Gilroy;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    letter-spacing: 0.01em;
    &:focus {
        outline: none;
    }
`;
