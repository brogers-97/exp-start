import { Link } from 'react-router-dom'

export default function Landingpage() {
    return(
        <div>
            <h1>Welcome to Expedition</h1>
            <Link to='/home'>Begin</Link>
        </div>
    )
}