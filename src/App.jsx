import { useState } from 'react';
import './App.css';
import GeneralInfo  from './components/details.jsx';
import EducationInfo  from './components/education.jsx';
import WorkExperience  from './components/work.jsx';
import CVDisplay  from './components/display.jsx';



function App(){
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    gender: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    institution: "",
    study: "",
    start: "",
    end: "",
  });

  const [workExperience, setWorkExperience] = useState({
    company: "",
    position: "",
    roles: "",
    start: "",
    end: ""
  })
  return(
    <div>
      <h1>CV Builder</h1>
      <GeneralInfo
        generalInfo = {generalInfo}
        setGeneralInfo = {setGeneralInfo}
      />
    
      <EducationInfo
        educationInfo = {educationInfo}
        setEducationInfo = {setEducationInfo}
      />

      <WorkExperience
        workExperience = {workExperience}
        setWorkExperience = {setWorkExperience}
      />

      <CVDisplay
        generalInfo={generalInfo}
        educationInfo={educationInfo}
        workExperience={workExperience}
      />
    </div>
  );
}


export default App;
    