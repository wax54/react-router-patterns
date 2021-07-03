import { Link } from 'react-router-dom';

const Nav = ({ title, items }) => (
    <nav >
        <h3>{title}</h3>
        <ul>
            {items.map(({ url, text }) => <li key={url}>
                <Link to={url}> {text} </Link>
            </li>)}
        </ul>
    </nav>
);

export default Nav