export default function MyPage() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="column">Name</th>
                    <th scope="column">Normal</th>
                    <th scope="column">Anomalous</th>
                    <th scope="column">Divergent</th>
                    <th scope="column">Phantasmal</th>
                </tr>
            </thead>
            <tbody>
                <GemRow />
            </tbody>
        </table>
    )
}

function GemRow() {
    return (
        <tr>
            <td>Determination</td>
            <td>1 Chaos</td>
            <td>10 Chaos</td>
            <td>1.7 Divine</td>
            <td>N/A</td>
        </tr>
    )
}