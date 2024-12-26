import '../styles/Section.css';

export default function ExperienceEdit() {
    const section = <h2>Experience</h2>

    const form = <form action="">
        <input type="text" id="company" placeholder='Company Name'/>
        <br />

        <input type="text" id="position" placeholder='Position'/>
        <br />

        <input type="text" id="description" placeholder='Brief Description'/>
        <br />

        <label htmlFor="start-date">Start Date:</label>
        <input type="date" id="start-date"/>
        <br />

        <label htmlFor="end-date">End Date:</label>
        <input type="date" id="end-date"/>
        <br /><br />

        <button type="Submit">Submit</button>
    </form>

    return <div className="sectionContainer">
            {section}
            {form}
            <br />
        </div>
}