function CVDisplay({ generalInfo, educationInfo, workExperience }) {
  return (
    <div className="cv-display">
      <h2>CV Preview</h2>

      <h3>Personal Information</h3>
      <p>{generalInfo.name}</p>
      <p>{generalInfo.title}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.gender}</p>

      <h3>Education Background</h3>
      <p>{educationInfo.institution}</p>
      <p>{educationInfo.study}</p>
      <p>{educationInfo.start}</p>
      <p>{educationInfo.start}</p>

      <h3>Work Experience</h3>
      <p>{workExperience.company}</p>
      <p>{workExperience.position}</p>
      <p>{workExperience.roles}</p>
      <p>{workExperience.start}</p>
      <p>{workExperience.start}</p>
    </div>
  );
}

export default CVDisplay;