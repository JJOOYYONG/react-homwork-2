import React from "react";
import styled from "styled-components";

const HeadWrap=styled.h2`
    text-align: center;
    padding: 1rem 0;
    background: #7878FF;
    border-radius: 10px 10px 0 0;
    color: #fff;
`;

const Head = ()=>{
    return <HeadWrap>⭐️My Todo List⭐️</HeadWrap>
}

export default Head;