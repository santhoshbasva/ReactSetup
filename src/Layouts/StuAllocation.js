import React from 'react'
import styled from 'styled-components'

const StyledMainContainer = styled.div`
    padding: 35px 122px 89px;
`
const StyledArrow = styled.img`
    height: 24px;
    width: 24px;
    margin-top: 4px;
`
const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
    margin-left: 19px;
    `

export const StuAllocation = () => {
  return (
    <div>
    <StyledMainContainer>
    <div style={{display:"flex",direction:"row"}}>
        <StyledArrow src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"/>
        <StyledTitle> Semester Exam - BE EEE SEM 3</StyledTitle>
    </div>
    
    </StyledMainContainer>

    </div>
  )
}
