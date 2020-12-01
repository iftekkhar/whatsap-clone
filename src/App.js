import './App.css';
import Chat from './Components/Chat';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
const App = () => {
  return (
      <div className="App">
        {loggedInUser.email ?
          <div className="app-body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/login" >
                  <Login />
                </Route>
                <Route exact path="/">
                  <Chat />
                </Route>
                <Route path="/rooms/:roomID">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
          :
          <Login />
        }

      </div>
  );
}

export default App;
