import '../styles/Section.css';

export default function GeneralEdit({handleEdit, person, handleDetailChange}) {
    const detailsList = person.map((detail, i) => 0 <= i && i <= 2 ? <li key={detail.id}>
        <input value={Object.values(detail)[0]} onChange={
            (e) => handleDetailChange(detail.id, e)
        } />
    </li> : null);

    return <div className="sectionContainer">
        <h2>General</h2>
        <ul>
            {detailsList}
        </ul>
        <br />
        <button onClick={handleEdit}>Submit</button>
    </div>
}