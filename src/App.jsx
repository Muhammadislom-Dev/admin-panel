import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar'
import Homes from './Pages/Home/Homes';

import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Sidebar />
        <div className="App__content">
           <Switch>
              <Route path="/person">
                 <Homes />
              </Route>
           </Switch>
        </div>
    </div>
  );
}

export default App;
