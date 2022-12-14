import React,{ useState } from 'react'
import styled from 'styled-components'
import CustomDropDown from '../Components/CustomDropDown'
import Wrapper from '../Components/WrapperComponent'
import InputComponent from '../Components/InputComponent'
import TextComponent from '../Components/TextComponent'
import { FormData } from '../FormData'
import SubjectLabComponent from '../Components/SubjectLabComponent'
import Pop from '../Components/PopupComponent'
import {useRouter } from 'next/router'
import Link from 'next/link'

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
const StyledWrapper = styled(Wrapper)`
    padding: 37px 55px 50px 55px;
    background: #fbfbfb;
`
const StyledInputText1 = styled(TextComponent)`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 12px;
    margin-right: 30%;
`
const StyledInputText2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInput2 = styled(InputComponent)`
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 17px 0px 17px 16px;
    margin-right: 30px;
    width: 5%;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
`
const StyledInputText2_1 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 37px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`
const StyledInputText2_2 = styled(TextComponent)`
    margin-top: 21px;
    margin-right: 56px;
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
`
const StyledCheckBox = styled(InputComponent)`
    margin-top: 10px;
    margin-right: 13px;
    color: #767676;
`
const StyledInputText3 = styled(StyledInputText1)`
    margin-bottom: 30px;
`
const DropIcon = () => {
    return (
        <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.0148 1.73389L10.5896 0.0187441L6.04937 5.71184L1.41013 0.14078L0.015455 1.89342L6.07996 9.19192L12.0148 1.73389Z"
                fill="#1F1F1F"
            />
        </svg>
    )
}
const CreateSchedule = () => {
    const [branch, setBranch] = useState(FormData?.branchanddep || [])
    const [selectedBranch, setSelectedBranch] = useState(branch[0] || {})

    const [deps, setdeps] = useState(selectedBranch?.deps || [])
    const [selectedDep, setSelectedDep] = useState()

    const [ExamType, setExamType] = useState([])
    const [selectedExamType, setSelectedExamType] = useState()

    const [labDetails, setLabDetails] = useState([])

    const [subjectDetails, setSubjectDetails] = useState([])

    const [sem, setsem] = useState('')
    const handleChangeInSem = (event) => {
        setsem(event.target.value)
        setExamType(FormData?.[selectedDep]?.[event.target.value - 1])
    }
    let AMPMOption = ['AM', 'PM']
    const [selectedAmPmDropDown, setSelectedAmPmDropDown] = useState(AMPMOption[0,1])

    const setBranchs = (option) => {
        setSelectedBranch(option)
        setdeps(option?.deps)
        setSelectedDep(option?.deps?.[0])
    }

    const setDepartmentDetails = (option) => {
        console.log({ option })
        setSelectedDep(option)
        setExamType(FormData?.[option]?.[0])
        setSelectedExamType(FormData?.[option]?.[0]?.[0]?.ExamType)
    }

    const setexamTypes = (option) => {
        console.log(sem)
        setSelectedExamType(option.ExamType)
        setSubjectDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.subjects)
        setLabDetails(FormData?.[selectedDep]?.[sem - 1]?.[0]?.labs)
    }
   
    const Router=useRouter()
    const AB =()=>{
        Router.push('/HomePage')
    }
    return (
        <>
            <StyledMainContainer>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginBottom: '20px',
                    }}
                >
                <Link href="/">
                    <StyledArrow
                        
                        src="https://i.ibb.co/RBRPtj0/Vector-Arrow.png"
                        alt="Arrow"
                        
                    />
                    </Link>
                    <StyledTitle>Create new schedule</StyledTitle>
                </div>
                <StyledWrapper>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.689%', width: '33.3%' }}>
                            <CustomDropDown
                                options={branch}
                                selectedOption={selectedBranch?.branch}
                                setSelectedOption={setBranchs}
                                label="Branch"
                                optionObjectValue="branch"
                            />
                        </div>
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <CustomDropDown
                                options={deps}
                                selectedOption={selectedDep}
                                setSelectedOption={setDepartmentDetails}
                                label="Department"
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Semester"
                                onChange={handleChangeInSem}
                                value={sem}
                            />
                        </div>
                    </div>
                    <div style={{ marginBottom: '2.689%' }}>
                        <CustomDropDown
                            options={ExamType}
                            selectedOption={selectedExamType}
                            setSelectedOption={setexamTypes}
                            label="ExamType"
                            optionObjectValue="ExamType"
                        />
                    </div>
                    <div>
                        <StyledInputText1 label={'Time Range'} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '20px',
                        }}
                    >
                        <StyledInputText2 label="FN" />
                        <StyledInput2 type="number" />
                        <StyledInput2 type="number" />
                        <div style={{ marginRight: '30px', width: '7%' }}>
                            <CustomDropDown
                                options={AMPMOption}
                                selectedOption={selectedAmPmDropDown}
                                setSelectedOption={setSelectedAmPmDropDown}
                            />
                        </div>
                        <StyledInputText2_1 label="to" />
                        <StyledInput2 type="number" />
                        <StyledInput2 type="number" />
                        <div style={{ marginRight: '30px', width: '7%' }}>
                            <CustomDropDown
                                options={AMPMOption}
                                selectedOption={selectedAmPmDropDown}
                                setSelectedOption={setSelectedAmPmDropDown}
                            />
                        </div>
                        <StyledInputText2_2 label="3 hours" />
                        <StyledCheckBox type="checkbox" value="FN" />
                        <StyledInputText2_2 label="Set all for FN" />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '30px',
                        }}
                    >
                        <StyledInputText2 label="AN" />
                        <StyledInput2 type="number" />
                        <StyledInput2 type="number" />
                        <div style={{ marginRight: '30px', width: '7%' }}>
                            <CustomDropDown
                                options={AMPMOption}
                                selectedOption={selectedAmPmDropDown}
                                setSelectedOption={setSelectedAmPmDropDown}
                            />
                        </div>
                        <StyledInputText2_1 label="to" />
                        <StyledInput2 type="number" />
                        <StyledInput2 type="number" />
                        <div style={{ marginRight: '30px', width: '7%' }}>
                            <CustomDropDown
                                options={AMPMOption}
                                selectedOption={selectedAmPmDropDown}
                                setSelectedOption={setSelectedAmPmDropDown}
                            />
                        </div>
                        <StyledInputText2_2 label="3 hours" />
                        <StyledCheckBox type="checkbox" value="AN" />
                        <StyledInputText2_2 label="Set all for AN" />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginBottom: '2.689%',
                        }}
                    >
                        <div style={{ marginRight: '2.69%', width: '33.3%' }}>
                            <InputComponent
                                label="Subjects"
                                value={subjectDetails.length}
                            />
                        </div>
                        <div style={{ width: '33.3%' }}>
                            <InputComponent
                                label="Labs"
                                value={labDetails.length}
                            />
                        </div>
                    </div>
                    <SubjectLabComponent
                        details={subjectDetails}
                        setDetails={setSubjectDetails}
                        label="Subject"
                    />
                    <div>
                        <StyledInputText3 label="Labs" />
                    </div>
                    <SubjectLabComponent
                        details={labDetails}
                        setDetails={setLabDetails}
                        label="Lab"
                    />
                </StyledWrapper>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Pop/>
                    <div />
                </div>
            </StyledMainContainer>
        </>
    )
}

export default CreateSchedule

