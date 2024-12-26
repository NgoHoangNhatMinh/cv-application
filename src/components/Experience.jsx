export default function Experience({person}) {
    return <>
        <h2>Experience</h2>
        <ul>
            <li>{person[6].company}</li>
            <li>{person[7].position}</li>
            <li>{person[8].startDate}</li>
            <li>{person[9].endDate}</li>
        </ul>
    </>;
}