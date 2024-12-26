export default function General({person}) {
    return <>
        <h2>General</h2>
        <ul>
            <li>{person[0].name}</li>
            <li>{person[1].email}</li>
            <li>{person[2].phone}</li>
        </ul>
    </>;
}