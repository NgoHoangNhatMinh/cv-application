import '../styles/Section.css';

export default function GeneralEdit() {
    const section = <h2>General Information</h2>

    const form = <form action="">
        <input type="text" id="name" placeholder='Name'/>
        <br />

        <input type="email" id="email" placeholder='Email'/>
        <br />

        <input type="number" id="phone" placeholder='Phone Number'/>
        <br /><br />
    </form>

    return <div className="sectionContainer">
        {section}
        {form}
        <br />
    </div>
}