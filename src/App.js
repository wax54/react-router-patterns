import { Route, Switch, Redirect } from 'react-router-dom';

import DogApp from './DogApp/DogApp';
import ColorFactoryApp from './ColorFactory/ColorFactoryApp';

import './App.css';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dogs">
          < DogApp/>
        </Route>
        <Route path="/colors">
          <ColorFactoryApp />
        </Route>
        <Route><Redirect to="/colors"/></Route>
      </Switch>
    </div>
  );
}

export default App;
