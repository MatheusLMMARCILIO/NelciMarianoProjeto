import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav>
            <ul>
                
                <li> <Link to="/admin/user/form.js"> User Form </Link> </li>
                <li> <Link to="/books"> Books </Link> </li>
                
            </ul>
        </nav>
    )
}
