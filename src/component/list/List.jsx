import React from "react";
import { useSelector} from "react-redux";
import Item from '../item/Item'
import styled from "styled-components";

const ListWrap = styled.div`
  width  : 100%;
  display: flex;
  margin: 3rem 0;
`;
const ListContent = styled.div`
  width  : 50%;
  height: 100%;
`;


const List = ()=>{
    const my_lists = useSelector((state) => state.todoList);

    return <ListWrap>
            <ListContent>
                <h2 style={{textAlign:"center"}}>Working..!</h2>
                {my_lists.map((todo)=>{
                    if(!todo.isDone){
                        return <Item todo={todo} id={todo.id} key={todo.id}/>
                    }else{
                        return null;
                    }
                })}
            </ListContent>
            <ListContent>
                <h2 style={{textAlign:"center"}}>Done..!</h2>
                {my_lists.map((todo)=>{
                        if(todo.isDone){
                            return <Item todo={todo} key={todo.id}/>
                        }else{
                            return null;
                        }
                    })}
            </ListContent>
    </ListWrap>;
}

export default List;