import styled from "styled-components"

const StyledDiv = styled.div `
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #17151F 0%, #1C172B 100%);
    position: relative;
    padding: 50px 25px 0 25px;
    overflow-y: hidden;
`;
export function Container(props){
    return (
        <StyledDiv >
            {props.children}
        </StyledDiv>
    )
}