import { useState } from 'react'

function EducationInfo ({educationInfo, setEducationInfo}){
    const [showForm, setShowForm] = useState(false);
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
            <div className="section-header">
                <h2>Education Background</h2>
                <button
                    type="button"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "-" : "+"}
                </button>
            </div>

            {showForm && (

                isEditing ? (

                    <form className="form">
                        <div>
                            <label>Institution:</label>
                            <input
                                type="text"
                                name="institution"
                                placeholder="Name of institution"
                                value={educationInfo.institution}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Course of Study:</label>
                            <input
                                type="text"
                                name="study"
                                placeholder="What did you study?"
                                value={educationInfo.study}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Start Date:</label>
                            <input
                                type="date"
                                name="start"
                                value={educationInfo.start}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>End Date:</label>

                            <input
                                type="date"
                                name="end"
                                value={educationInfo.end}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                        >
                            Submit
                        </button>

                    </form>

                ) : (

                    <>
                        <p>
                            <strong>Institution:</strong>
                            {educationInfo.institution}
                        </p>

                        <p>
                            <strong>Course of Study:</strong>
                            {educationInfo.study}
                        </p>

                        <p>
                            <strong>Start Date:</strong>
                            {educationInfo.start}
                        </p>

                        <p>
                            <strong>End Date:</strong>
                            {educationInfo.end}
                        </p>

                        <button onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                    </>
                )
            )}

        </div>

    );
}

export default EducationInfo;