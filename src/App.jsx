import { useState } from 'react';
import './App.css';

import Header from './components/Header.jsx';

import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';

import GeneralEdit from './components/GeneralEdit.jsx';
import EducationEdit from './components/EducationEdit.jsx';
import ExperienceEdit from './components/ExperienceEdit.jsx';
import { use } from 'react';

const initialPerson = [
  {name: 'Harry Potter', id: 0},
  {email: 'hp@hogwart.edu.com', id: 1},
  {phone: '777-777-7', id: 2},
  {school: 'Hogwart', id: 3},
  {course: 'Defense Against the Dark Art', id: 4},
  {dateStudy: '01/01/2000', id: 5},
  {company: 'Ministry of Magic', id: 6},
  {position: 'Minister', id: 7},
  {startDate: '02/01/2000', id: 8},
  {endDate: '03/01/2000', id: 9},
]

function App() {
  const [edit, setEdit] = useState(false);
  const [generalEdit, setGeneralEdit] = useState(false);
  const [educationEdit, setEducationEdit] = useState(false);
  const [experienceEdit, setExperienceEdit] = useState(false);
  const [person, setPerson] = useState(initialPerson)

  function handleEditState(section) {
    if (section === "general") {
      setGeneralEdit(prevEdit => !prevEdit);
    } else if (section === "education") {
      setEducationEdit(prevEdit => !prevEdit);
    } else if (section === "experience") {
      setExperienceEdit(prevEdit => !prevEdit);
    }
  }

  function handleChange(id, e) {
    setPerson(prevDetails => prevDetails.map((detail) => {
      console.log(detail)
      if (detail.id === id) {
        console.log(id)
        return {
          ...detail,
          name: e.target.value,
          email: e.target.value,
          phone: e.target.value,
          school: e.target.value,
          course: e.target.value,
          dateStudy: e.target.value,
          company: e.target.value,
          position: e.target.value,
          startDate: e.target.value,
          endDate: e.target.value,
        }
      } else {
        return detail
      }
    }))
  }


  return (
      <div className="container">
        <Header/>
        {generalEdit 
          ? <GeneralEdit handleEdit={() => handleEditState("general")} person={person} handleDetailChange={handleChange}/> 
          : <General handleEdit={() => handleEditState("general")} person={person}/>}
        {educationEdit 
          ? <EducationEdit handleEdit={() => handleEditState("education") } person={person} handleDetailChange={handleChange}/> 
          : <Education handleEdit={() => handleEditState("education")} person={person}/>}
        {experienceEdit 
          ? <ExperienceEdit handleEdit={() => handleEditState("experience")} person={person} handleDetailChange={handleChange}/> 
          : <Experience handleEdit={() => handleEditState("experience")} person={person}/>}
      </div>
  )
}

export default App
