import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailWrap=styled.div`
      width: 50%;
      height: 300px;
      background: #fff;
      margin: 22px auto;
      border-radius: 5px;
`
const DetailId=styled.div`
      border-bottom: 2px solid #7878FF;
      padding: 1rem;
      font-size: 2rem;
`
const DetailContent=styled.div`
      padding: 1rem;
`
const StyledLink = styled(Link)`
	background: #87AFEB;
    border-radius: 5px;
    padding: 0.3rem;
    text-decoration: none;
    color: #fff;
    float: right;
    margin: 0 2rem 0 0;
    font-size: 13px;
    cursor: pointer;
`;
const Detail =()=>{
    const {id} = useParams();

    const my_lists = useSelector((state) => state.todoList);
  
    
    return (<div>
            {my_lists.map((data)=>{
                if(data.id === id){
                    return <DetailWrap key={data.id}>
                        <DetailId>{data.id}</DetailId>
                        <DetailContent>
                            <h2>{data.title}</h2>
                            <p>{data.content}</p>
                        </DetailContent>
                        <StyledLink to='/'> ←이동하기</StyledLink>
                    </DetailWrap>
                }
        })}
    </div>)
}

export default Detail;