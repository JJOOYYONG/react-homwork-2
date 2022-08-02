import React, { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/modules/todo";
import styled from "styled-components";


// 스타일 적용
const FormWrap =styled.div`
    height: 7vh;
`;
const FormStyle =styled.form`
   text-align: center;
    line-height: 3;
`;
const InputStyle = styled.input`
    height: 2rem;
    width: 37%;
    margin: 0 3px 0 0;
    border: 1px solid #8C8CFF;
    border-radius: 5px;
    list-style: cambodian;
    padding: 0.2rem;
`;
const BtnStyle = styled.button`
   height: 2.5rem;
    width: 13%;
    border: none;
    border-radius: 5px;
    margin: 0 0 0 3px;
    font-size: 17px;
    letter-spacing: 0.1rem;
    background: #7878FF;
    font-weight: 600;
    color: #fff;
`;

const Form = ()=>{
    //함수 정의
    const idNum = useRef(2);
    //form 내부 state 정의
    const initState={
        id:0,
        title:"",
        content:"",
        isDone:false,
      };
    const [todo,setTodo]=useState(initState);
    //전역 state에 값 추가할 수 있도록 hook 사용
    const dataDispath = useDispatch();
    //input 값 변경
    const onChangeHandler=(e)=>{
        const {name,value} = e.target;
        setTodo({...todo,id:idNum.current,[name]:value});
    }
    
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        dataDispath(createTodo(todo));
        setTodo(initState);
        idNum.current++
        
    }
    
    
    return <FormWrap>
            <FormStyle onSubmit={onSubmitHandler}>
                <InputStyle type="text" name="title" placeholder="제목을 입력해주세요" value={todo.title} onChange={onChangeHandler}  required />
                <InputStyle type="text" name="content" placeholder="내용을 입력해주세요" value={todo.content} onChange={onChangeHandler} required/>
                <BtnStyle>추가</BtnStyle>
            </FormStyle>
           </FormWrap>;
}

export default Form;