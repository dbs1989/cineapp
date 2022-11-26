import styled from "styled-components"
export const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
export const BgContainer = styled.div`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 200px;
  background-size: cover;

`;
export const Title = styled.h1`
    color: white;
    margin-top: 16px;
    margin-bottom: 16px;
`
export const Synopsis = styled.p`
    color: white;
    text-align: justify;
`
export const ReturnPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`