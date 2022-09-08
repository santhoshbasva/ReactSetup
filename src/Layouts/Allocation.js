import React, { useState } from "react";
import { AllocationPageComp } from "../Components/AllocationComponents";
import { CheckBox } from "../Components/CheckBoxComponent";
import FilterIcon from "../Components/svg/FilterIcon";


const AllocationPage = () => {
  const [cardDetails, setCardDetails] = useState([
    {
      createCard: true,
      completed:true
    },
    {
      heading: "B.E ECE SEM2",
      branch: "B.E",
      department: "ECE",
      semester: "2",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "B.E EEE SEM 2",
      branch: "B.E",
      department: "EEE",
      semester: "2",
      subject: "5",
      lab: "2",
      ExamType: "Semster",
      completed: true,
    },
    {
      heading: "B.E MECH SEM2",
      branch: "B.E",
      department: "MECH",
      semester: "2",
      subject: "3",
      lab: "0",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "B.E CSE SEM 2",
      branch: "B.E",
      department: "CSE",
      semester: "2",
      subject: "4",
      lab: "0",
      ExamType: "Semster",
      completed: false,
    },
    {
      heading: "B.TECH IT SEM2",
      branch: "B.TECH",
      department: "IT",
      semester: "2",
      subject: "4",
      lab: "0",
      ExamType: "Semster",
      completed: true,
    },
  ]);

  const onDelete = (item, index) => {
    const tempCardDetails = [...cardDetails];
    tempCardDetails.splice(index, 1);
    setCardDetails(tempCardDetails);
  };
  return (
    <>
      <div
        style={{
          marginLeft: "1120px",
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          marginBottom:"-2%"
        }}
      >
        <span
          style={{
            marginRight: "10px",
          }}
        >
          Show Allocated
        </span>
        <CheckBox cardDetails={cardDetails} setCardDetails={setCardDetails}/>
        <span style={{ marginRight: "10px", marginLeft: "10px",marginTop:""}}>Filter</span>
        <FilterIcon />
      </div>

      <div
        style={{
          padding: "0px 120px",
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {cardDetails?.map((item, index) => {
          return (
            <AllocationPageComp
              isCreateCard={item?.createCard}
              heading={item?.heading}
              branch={item?.branch}
              department={item?.department}
              semester={item?.semester}
              subject={item?.subject}
              lab={item?.lab}
              ExamType={item?.ExamType}
              isCompleted={item?.completed}
              marginTop={51}
              deletePress={() => onDelete(item, index)}
            />
          );
        })}
      </div>
    </>
  );
};
export default AllocationPage;