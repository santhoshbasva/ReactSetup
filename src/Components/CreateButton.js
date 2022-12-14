import React from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

const CreateButton = () => {
  
const StyledCreateButton = styled.div`
background: #5375e2;
border: 5px solid #5375e2;
border-radius: 10px;
margin: 0px 121px 0px 100px;
font-weight: 400;
font-size: 20px;
line-height: 27px;
color: #ffffff;
padding: 8px 23px;
display: flex;
flex-direction: row;
`;

const StyledIconButton = styled.img`
margin-top: 6.49px;
height: 14.411139488220215px;
width: 15px;
object-fit: cover;
margin-left: 13px;
margin-bottom: 8px;
`;
const StyledTextButton = styled.div`
margin-left: 33px;
margin-top: 3px;
border:;

`;
const Router = useRouter()
const New = () => {
    Router.push('/NewSchedule')
}

  return (
    <>
      <StyledCreateButton>
        <StyledIconButton
          src="https://i.ibb.co/tzndXDc/Vector.png"
          alt="Vector"
          border="0"
        />
        <StyledTextButton onClick={New}>Create New</StyledTextButton>
      </StyledCreateButton>
    </>
  );
};

export default CreateButton;

// export const ScheduleButton = () => {

// const StyledScheduleButton = styled.div`
// background: #5375e2;
// border: 5px solid #5375e2;
// border-radius: 10px;
// margin: 0px 121px 0px 100px;
// font-weight: 400;
// font-size: 20px;
// line-height: 27px;
// color: #ffffff;
// padding: 8px 23px 15px 21px;
// display: flex;
// flex-direction: row;
// `;
// const StyledTextButton = styled.div`
// margin-left: 33px;
// margin-top: 3px;
// `;
//   return (
//   <>
//     <StyledScheduleButton>
//     <StyledTextButton>Schedules</StyledTextButton>

//     </StyledScheduleButton>
//   </>
//   )
// }
