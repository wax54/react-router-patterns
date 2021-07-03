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

const NewColorForm = ({ addColor }) => {
    const initialForm = {
        name: '',
        value: '#000000'
    }
    const [formData, setFormData] = useState(initialForm);

    const handleChange = evt => {
        console.log("hello!");
        setFormData(data => {
            console.log(evt.target.name);
            console.log(evt.target.value);


           return {...data, [evt.target.name]: evt.target.value}
        });
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        const color = {name: formData.colorName, value: formData.colorValue};
        addColor(color);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Color Name:</label>
            <input type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
            />
            <label htmlFor="colorName">Color Value:</label>
            <input type="color" 
                name="value"
                value={formData.value}
                onChange={handleChange}
            />
        </form>
)};

const ColorFactoryApp = ({ initialColors }) => {
    const [colors, setColors] = useState(initialColors);
    const addColor = color => setColors(colors => [color, ...colors])
    return (
        <div> 
            <Route exact path="/colors">
                <NewColorForm addColor={addColor} />
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