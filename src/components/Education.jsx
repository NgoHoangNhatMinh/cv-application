export default function Education({person}) {
    return <>
        <h2>Education</h2>
        <ul>
            <li>{person[3].school}</li>
            <li>{person[4].course}</li>
            <li>{person[5].dateStudy}</li>
        </ul>
    </>;
}