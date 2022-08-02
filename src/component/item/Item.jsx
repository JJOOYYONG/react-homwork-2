import React from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { updateTodo,deleteTodo } from "../../redux/modules/todo";
import { Link } from "react-router-dom";


const ItemWrap = styled.div`
    width: 92%;
    margin: 5px;
    padding: 0.5rem;
    border: 2px solid #7878E1;
    border-radius: 5px;
  
`;
const TopWrap=styled.div`
    display: flex;
    justify-content: space-between;
`
const BtnWrap = styled.div`
    width  :100% ;
    display: flex;
    justify-content: flex-end;
`;
const Btn=styled.button`
    border: none;
    background: ${(props) => props.color};
    width: 20%;
    height: 25px;
    margin: 2px;
    color: #fff;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
`;
const StyledLink = styled(Link)`
	background: #87AFEB;
    border-radius: 5px;
    padding: 0.3rem;
    text-decoration: none;
    color: #fff;
    margin: 1rem 0;
    font-size: 13px;
    cursor: pointer;
    
`;

//부모 컴포넌트에서 받은 프롭스를 내부 state로 사용함
const Item =({todo})=>{
    //함수 정의
    const my_lists = useSelector((state) => state.todoList);
    const dataDispath = useDispatch();
    
    const editeHandler=(itemId)=>{
        const upTodos = my_lists.map((todo)=>{
            if(todo.id === itemId){
                return {
                    ...todo,isDone:!todo.isDone,
                }
            }else{
                return{...todo};
            }
        });

        //완료/취소 변경 값을 다시 전역 state에 올림
        dataDispath(updateTodo(upTodos))
    }

    const deleteHandler=(itemId)=>{
        dataDispath(deleteTodo(itemId))

    }

    return <ItemWrap>
                <TopWrap>
                    <h3>(ID:{todo.id}){todo.title}</h3>
                    <StyledLink to={`/detail/${todo.id}`}>상세보기</StyledLink>
                </TopWrap>
                <div>{todo.content}</div>
                 <BtnWrap>
                    <Btn color="#C32E61" onClick={()=>deleteHandler(todo.id)}>삭제</Btn>
                    <Btn color="#28A8A8" onClick={()=>editeHandler(todo.id)}>
                        {todo.isDone?"취소":"완료"}
                    </Btn>
                 </BtnWrap>
        </ItemWrap>
                
}

export default Item;