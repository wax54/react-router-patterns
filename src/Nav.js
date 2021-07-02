import { Link } from 'react-router-dom';

const Nav = ({ title, items }) => (
    <nav >
        <h3>{title}</h3>
        <ul>
            {items.map(({ name }) => <li key={name}>
                <Link to={`/dogs/${name}`}>{name}</Link>
            </li>)}
        </ul>
    </nav>
);
export default Nav