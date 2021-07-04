import { Link } from 'react-router-dom';

const ColorViewer = ({ color, name }) => (
    <div style={{ backgroundColor: color, height: '100vh', width: '100vw' }}>
        <h1>This is {name} in all it's glory</h1>
        <Link to="/colors">Go Back</Link>
    </div>
);

export default ColorViewer