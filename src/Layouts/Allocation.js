import React, { useState } from 'react'
import { AllocationPageComp } from '../Components/AllocationComponents'
import { CheckBox } from '../Components/CheckBoxComponent'
import FilterIcon from '../Components/svg/FilterIcon'

const AllocationPage = () => {
    const [cardDetails, setCardDetails] = useState([
        {
            createCard: true,
            completed: true,
        },
        {
            heading: 'B.E ECE SEM2',
            branch: 'B.E',
            department: 'ECE',
            semester: '2',
            subject: '5',
            lab: '2',
            ExamType: 'Semester',
            completed: true,
            id: 0,
        },
        {
            heading: 'B.E EEE SEM 2',
            branch: 'B.E',
            department: 'EEE',
            semester: '2',
            subject: '5',
            lab: '2',
            ExamType: 'Semester',
            completed: true,
            id: 1,
        },
        {
            heading: 'B.E MECH SEM2',
            branch: 'B.E',
            department: 'MECH',
            semester: '2',
            subject: '3',
            lab: '0',
            ExamType: 'Semester',
            completed: false,
            id: 2,
        },
        {
            heading: 'B.E CSE SEM 2',
            branch: 'B.E',
            department: 'CSE',
            semester: '2',
            subject: '4',
            lab: '0',
            ExamType: 'Internal',
            completed: false,
            id: 3,
        },
        {
            heading: 'B.TECH IT SEM2',
            branch: 'B.TECH',
            department: 'IT',
            semester: '2',
            subject: '4',
            lab: '0',
            ExamType: 'Model',
            completed: true,
            id: 4,
        },
    ])

    const [filterCardDetails, setFilterCardDetails] = useState(cardDetails)

    const onDelete = (item, index) => {
        let tempCardDetails = [...filterCardDetails]
        let orginalArray = [...cardDetails]
        const foundIndex = orginalArray?.findIndex(
            (i) => i?.id === item?.id
        )
        if (foundIndex > -1) {
            orginalArray.splice(foundIndex, 1)
            setCardDetails(orginalArray)
        }
        tempCardDetails.splice(index, 1)
        setFilterCardDetails(tempCardDetails)
    }

    // checkbox state
    const [isChecked, setIsChecked] = useState(false)
    const handleFilter = function () {
        if (!isChecked) {
            const filterData = cardDetails.filter((i) => i?.completed)
            setFilterCardDetails(filterData)
        } else setFilterCardDetails(cardDetails)
        setIsChecked(!isChecked)
    }

    const [showFilterOption, setFilterOption] = useState(false)
    const [filterOptions, setFilterOptions] = useState([
        'Semester',
        'Model',
        'Internal',
    ])
    // const [selectedFilterOption,setSelectedFilterOption] = useState({})
    const selectedFilterOption = function (data, index) {
        const tempValue = cardDetails?.filter((d) => d?.ExamType === data)
        setFilterCardDetails(tempValue)
        setFilterOption(!showFilterOption)
    }

    return (
        <div>
            <div
                style={{
                    marginLeft: '1120px',
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '20px',
                    marginBottom: '-2%',
                }}
            >
                <span
                    style={{
                        marginRight: '10px',
                    }}
                >
                    Show Allocated
                </span>
                <CheckBox onChange={handleFilter} />
                <span
                    style={{
                        marginRight: '10px',
                        marginLeft: '10px',
                        marginTop: '',
                    }}
                >
                    Filter
                </span>
                <FilterComponent
                    visible={showFilterOption}
                    setVisible={setFilterOption}
                    options={filterOptions}
                    selectOpition={selectedFilterOption}
                />
            </div>

            <div
                style={{
                    padding: '0px 120px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 20,
                }}
            >
                {filterCardDetails?.map((item, index) => {
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
                    )
                })}
            </div>
        </div>
    )
}

const FilterComponent = ({
    visible = false,
    setVisible = () => undefined,
    options = [],
    selectOpition = () => {},
}) => {
    return (
        <div style={{ position: 'relative' }}>
            <div onClick={() => setVisible(!visible)}>
                <FilterIcon />
            </div>

            <section
                style={{
                    width: '300px',
                    padding: '20px 20px ',
                    backgroundColor: 'blue',
                    position: 'absolute',
                    right: 6,
                    top: 30,
                    backgroundColor: 'whitesmoke',
                    borderRadius: 10,
                    display: visible ? 'block' : 'none',
                }}
            >
                {options?.map((data, index) => (
                    <p
                        style={{
                            fontWeight: 400,
                            fontSize: 16,
                            lineHeight: '22px',
                            margin: 0,
                            padding: 0,
                        }}
                        onClick={() => selectOpition(data, index)}
                    >
                        {data}
                    </p>
                ))}
            </section>
        </div>
    )
}
export default AllocationPage
