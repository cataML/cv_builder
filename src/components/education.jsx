import { useState } from 'react'

function EducationInfo ({educationInfo, setEducationInfo}){
    const [isEditing, setIsEditing] = useState(true)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setEducationInfo({
            ...educationInfo,
            [name]: value
        })
    }

    return(
        <div className="section">
            <h2>Education Background</h2>
            {isEditing ? (
                <form>
                    <div>
                        <label>Institution: </label>
                        <input
                            type="text"
                            name="institution"
                            placeholder="Name of instituition"
                            value= {educationInfo.institution}
                            onChange= {handleChange}
                        />
                    </div>
                    <div>
                        <label>Course of Study: </label>
                        <input
                            type="text"
                            name="study"
                            placeholder="What did you study?"
                            value= {educationInfo.study}
                            onChange= {handleChange}
                        />
                    </div>
                    <div>
                        <label>Start Date: </label>
                        <input
                            type="date"
                            name="start"
                            placeholder="From"
                            value= {educationInfo.start}
                            onChange= {handleChange}
                        />
                    </div>
                    <div>
                        <label>End Date: </label>
                        <input
                            type="date"
                            name="end"
                            placeholder="To"
                            value= {educationInfo.end}
                            onChange= {handleChange}
                        />
                    </div>               
                </form>
            ):(
                <>
                    <p><strong>Institution:</strong> {education.institution}</p>
                    <p><strong>Course of Study:</strong> {education.study}</p>
                    <p><strong>Start Date:</strong> {education.start}</p>
                    <p><strong>End Date:</strong> {education.end}</p>

                    <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
            )}
            
        </div>
    );
}

export default EducationInfo;