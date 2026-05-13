import { useState } from 'react'

function WorkExperience({workExperience, setWorkExperience}){
    const [showForm, setShowForm] = useState(false)
    const [isEditing, setIsEditing] = useState(true)
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setWorkExperience({
            ...workExperience,
            [name]: value
        })}
    
    return(
        <div className="section">
            <div className="section-header">
                <h2>Work Experience</h2>
                <button type="button" onClick={() => setShowForm(!ShowForm)}>
                    {showForm ? "-" : "+"}
                </button>
            </div>
            {showForm && (
                isEditing ? (
                    <form className="form">
                    
                    <div>
                        <label htmlFor="">Company: </label>
                        <input 
                            type="text"
                            name="company"
                            placeholder="Name of the company/Organization"
                            value={workExperience.company}
                            onChannge={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Position: </label>
                        <input 
                            type="text"
                            name="position"
                            placeholder="Your position at the company"
                            value={workExperience.position}
                            onChannge={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Duties: </label>
                        <input 
                            type="text"
                            name="roles"
                            placeholder="Your duties at the company"
                            value={workExperience.roles}
                            onChannge={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">From: </label>
                        <input 
                            type="date"
                            name="start"
                            value={workExperience.start}
                            onChannge={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">To:</label>
                        <input 
                            type="date"
                            name="end"
                            value={workExperience.end}
                            onChannge={handleChange} />
                    </div>
                    <button onClick={()=> setIsEditing(false)}>Submit</button>
                </form>
            ):(
                <>
                    <p><strong>Company:</strong> {workExperience.company}</p>
                    <p><strong>Position:</strong> {workExperience.position}</p>
                    <p><strong>Duties:</strong> {workExperience.roles}</p>
                    <p><strong>start Date:</strong> {workExperience.start} - {experience.until}</p>
                    <p><strong>End Date:</strong> {workExperience.end} - {experience.until}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>

                )
            )}
                
        </div>
    );}

export default WorkExperience;