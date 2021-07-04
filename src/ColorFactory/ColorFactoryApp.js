import {useState} from 'react';
import { Redirect, Route, useParams, Link, Switch } from 'react-router-dom';

import Nav from '../Nav';
import ColorViewer from './ColorViewer';
import NewColorForm from './NewColorForm';

const ColorRoute = ({ colors }) => {
    const colorName = useParams().color;
    
    const color = colors.find(color => color.name === colorName );
    
    return color ? 
        <ColorViewer name={color.name} color={color.value} />
        :   <Redirect to="/colors" />
};


const ColorFactoryApp = ({ initialColors }) => {
    const [colors, setColors] = useState(initialColors);
    const addColor = color => setColors(colors => [color, ...colors])

    return (
        <div>
            <Switch>
                <Route exact path="/colors">
                    <h1>The Color Factory</h1>
                    <Link to="/colors/new" >Add a Color!</Link>
                    <Nav title="Your Color Options" 
                        items={colors.map(({ name }) => 
                            ({url:`/colors/${name}`, text: name}))} 
                    /> 
                </Route>

                <Route exact path="/colors/new">
                    <NewColorForm addColor={addColor} />
                </Route>

                <Route exact path="/colors/:color">
                    <ColorRoute colors={colors} />
                </Route>
            </Switch>
        </div>
    );
};

ColorFactoryApp.defaultProps = {initialColors:[
    {name: "red", value: "red"},
    {name: "green", value: "green"},
    {name: "blue", value: "blue"}
]}

export default ColorFactoryApp