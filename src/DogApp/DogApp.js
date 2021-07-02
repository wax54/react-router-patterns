import { Route, Switch, Redirect } from 'react-router-dom';

import Nav from '../Nav.js'
import DogFinder from './DogFinder';

import whiskey from "./whiskey.jpg";
import tubby from "./tubby.jpg";
import perry from "./perry.jpg";
import duke from "./duke.jpg";



const DogApp = ({ dogs }) => {

    return (
        <> 
            <h1>Dogs App</h1>
            <Switch>
                <Route exact path="/dogs">
                    <Nav title="Here are my Dogs!" items={dogs} />
                </Route>

                <Route exact path="/dogs/:name">
                    <DogFinder dogs={ dogs }/>
                </Route>

                <Route>
                    <Redirect to="/dogs" />
                </Route>
            
            </Switch>
        </>
    )
};



DogApp.defaultProps = {
    dogs: [
        {
            name: "Whiskey",
            age: 5,
            src: whiskey,
            facts: [
                "Whiskey loves eating popcorn.",
                "Whiskey is a terrible guard dog.",
                "Whiskey wants to cuddle with you!"
            ]
        },
        {
            name: "Duke",
            age: 3,
            src: duke,
            facts: [
                "Duke believes that ball is life.",
                "Duke likes snow.",
                "Duke enjoys pawing other dogs."
            ]
        },
        {
            name: "Perry",
            age: 4,
            src: perry,
            facts: [
                "Perry loves all humans.",
                "Perry demolishes all snacks.",
                "Perry hates the rain."
            ]
        },
        {
            name: "Tubby",
            age: 4,
            src: tubby,
            facts: [
                "Tubby is really stupid.",
                "Tubby does not like walks.",
                "Angelina used to hate Tubby, but claims not to anymore."
            ]
        }
    ]
}

export default DogApp