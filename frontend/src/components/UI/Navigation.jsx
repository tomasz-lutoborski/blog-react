import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <ul className="navigation">
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </ul>
    )
}