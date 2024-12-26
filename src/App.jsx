import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
  {name: 'John Smith', id: 0},
  {email: 'johnsmith@gmail.com', id: 1},
  {phone: '0987654321', id: 2},
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

  function handleEdit() {
    setEdit(prevEdit => prevEdit ? false : true);
  }

  return (
      <div className="container">
        <Header/>
        {edit ? <GeneralEdit/> : <General person={person}/>}
        {edit ? <EducationEdit/> : <Education person={person}/>}
        {edit ? <ExperienceEdit/> : <Experience person={person}/>}
        <button onClick={handleEdit}>Edit</button>
      </div>
  )
}

export default App
