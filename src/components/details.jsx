import { useState } from 'react'
import '../styles/details.css'

function GeneralInfo({generalInfo, setGeneralInfo}){
    const [isEditing, setisEditing] = useState(true)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setGeneralInfo({
            ...generalInfo,
            [name]: value
        })}
    return(
        <div className="section">
            
            {isEditing ? ( 
                <form className="form">
                    <h2>Personal Information</h2>
                    <label>Full Name: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={generalInfo.name}
                        onChange={handleChange}
                    />
                    
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter your professional title"
                        value={generalInfo.title}
                        onChange={handleChange}
                    />
                    
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={generalInfo.email}
                        onChange={handleChange}
                    />

                    <label>Phone: </label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone eg. +254 xxxx xxxx"
                        value={generalInfo.phone}
                        onChange={handleChange}
                    />

                    <div>
                        <label>Gender: </label>
                        <select
                            name="gender"
                            value={generalInfo.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    
                    <button onClick={()=> setIsEditing(false)}>Submit</button>
                </form>
            ):(
                <>
                    <p><strong>Name: </strong>generalInfo.name</p>
                    <p><strong>Title: </strong>generalInfo.title</p>
                    <p><strong>Email: </strong>generalInfo.email</p>
                    <p><strong>Phone: </strong>generalInfo.phone</p>
                    <p><strong>Gender:</strong> {generalInfo.gender}</p>
                
                    <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
            )}
        </div>
    );
}

   
export default GeneralInfo;