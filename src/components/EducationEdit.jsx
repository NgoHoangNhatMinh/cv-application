import '../styles/Section.css';

export default function EducationEdit() {
    const section = <h2>Education</h2>

    const form = <form action="">
        <input type="text" id="school" placeholder='School'/>
        <br />

        <input type="text" id="course" placeholder='Course'/>
        <br />

        <label htmlFor="study-date">Date of Study:</label>
        <input type="date" id="study-date" placeholder='Date of Study'/>
        <br /><br />

        <button type="Submit">Submit</button>
    </form>

    return <div className="sectionContainer">
        {section}
        {form}
        <br />
    </div>
}