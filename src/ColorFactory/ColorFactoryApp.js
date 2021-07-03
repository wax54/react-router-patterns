import {useState} from 'react';
import { Redirect, Route, useParams, Link } from 'react-router-dom';

import Nav from '../Nav';

const ColorViewer = ({ color }) => (
    <div style = {{backgroundColor: color, height: '100vh', width: '100vw'}}>
        <h1>This is {color} in all it's glory</h1>
        <Link to="/colors">Go Back</Link>
    </div>
);

const ColorRoute = ({ colors }) => {
    const colorName = useParams().color;
    
    const color = colors.find(color => color.name === colorName );
    return color ? <ColorViewer color={color.color} /> : <Redirect to="/colors" />
};

const ColorFactoryApp = ({ initialColors }) => {
    const [colors, setColors] = useState(initialColors);
    const addColor = color => setColors(colors => [color, ...colors])
    return (
        <div> 
            <Route exact path="/colors">
                <Nav title="Your Color Options" 
                    items={colors.map(({ name }) => 
                        ({url:`/colors/${name}`, text: name}))} 
                /> 
            </Route>
            <Route exact path="/colors/:color">
                <ColorRoute colors={colors} />
            </Route>
        </div>
    );
};

ColorFactoryApp.defaultProps = {initialColors:[
    {name: "red", color: "red"},
    {name: "green", color: "green"},
    {name: "blue", color: "blue"}
]}

export default ColorFactoryApp