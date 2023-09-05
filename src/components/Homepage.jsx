import { Link } from 'react-router-dom'

export default function Homepage () {
    return (
        <div>
            <h1>Expedition</h1>
            <div>
                <h2>pick expedition</h2>
                <ul>
                    <li>none</li>
                </ul>
                <Link to='/battle'>Start new</Link>
            </div>
        </div>
    )
}