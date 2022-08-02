import React from "react";
import styled from "styled-components";
import Layout from "../component/layout/Layout";
import Head from "../component/head/Head";
import Form from "../component/form/Form";
import List from "../component/list/List";
//스타일
const ListWrap = styled.div`
    background: #fff;
    width: 75vw;
    height: 96vh;
    margin: 2rem auto;
    border-radius: 1rem;
`;
//함수정의

const TodoList=()=>{
    return <ListWrap>
                <Layout>
                    <Head/>
                    <Form/>
                    <List/>
                </Layout>
            </ListWrap>;
}

export default TodoList;